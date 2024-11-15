import {Injectable} from '@angular/core';
import {map} from 'rxjs';
import {NotionService} from './notion.service';
import {NotionRetrospectiveElement} from '../../core/interfaces/notion-retrospective-element';
import {RetrospectiveElementAdapter} from '../../core/adapters/retrospective-element.adapter';
import {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse
} from '@notionhq/client/build/src/api-endpoints';
import {AttendanceOption, RetrospectivePhase} from '../../core/models/retrospective-element';

@Injectable({providedIn: 'root'})
export class RetrospectiveElementsService {
  private static readonly ELEMENTS_DB_ID = "d21c3aa3dc084453bdc0f793708f08e3";

  public constructor(private readonly notionService: NotionService, private readonly retrospectiveElementAdapter: RetrospectiveElementAdapter) {
  }

  public getAllElements() {
    return this.notionService.queryDatabase((RetrospectiveElementsService.ELEMENTS_DB_ID))
      .pipe(map((response) =>
        (response.results).map((result) => {
          return this.mapRetrospectiveElementResult(result);
        })));
  }

  private mapRetrospectiveElementResult(result: PageObjectResponse | PartialPageObjectResponse | PartialDatabaseObjectResponse | DatabaseObjectResponse) {
    const properties = (result as PartialDatabaseObjectResponse).properties as unknown as NotionRetrospectiveElement;

    return this.retrospectiveElementAdapter.createRetrospectiveElement(
      properties.Name.title[0].plain_text,
      properties["Attendance options"].multi_select.map((select) => select.name as AttendanceOption),
      properties.Phase.multi_select.map((select) => select.name as RetrospectivePhase),
      properties.Theme?.select?.name,
      properties.Link?.rich_text[0]?.href
    );
  }
}
