import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {NotionService} from './notion.service';
import {NotionRetrospectiveElement} from '../../core/interfaces/notion-retrospective-element';

@Injectable({
  providedIn: 'root'
})
export class RetrospectiveElementsService {
  private static readonly ELEMENTS_DB_ID = "d21c3aa3dc084453bdc0f793708f08e3";

  public constructor(private readonly notionService: NotionService) {
  }

  public getAllElements(): Observable<{ results: NotionRetrospectiveElement[] }> {
    return this.notionService.queryDatabase((RetrospectiveElementsService.ELEMENTS_DB_ID));
  }
}
