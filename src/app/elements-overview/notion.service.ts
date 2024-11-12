import {Injectable} from '@angular/core';
import {Client, LogLevel} from '@notionhq/client';
import {from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotionService {

  private static readonly SECRET = "secret_4SLTQ9HdG3dH0GR9j75FYwLSM6x26PCTCbf1yNjOfTQ";
  private notionClient = new Client({auth: NotionService.SECRET, logLevel: LogLevel.DEBUG})

  public constructor() {
  }

  public queryDatabase(databaseId: string): Observable<any> {
    return from(this.notionClient.databases.query({database_id: databaseId}))
  }
}