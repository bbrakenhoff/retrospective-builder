import {Component, OnInit} from '@angular/core';
import {RetrospectiveElementsService} from './retrospective-elements.service';
import {Observable} from 'rxjs';
import {AsyncPipe, JsonPipe} from '@angular/common';

@Component({
  selector: 'app-elements-overview',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './elements-overview.component.html',
  styleUrl: './elements-overview.component.scss'
})
export class ElementsOverviewComponent implements OnInit {
  // @ts-ignore
  public _elements$: Observable<any>;

  public get elements$(): Observable<any> {
    return this._elements$;
  }

  public constructor(private readonly notionService: RetrospectiveElementsService) {
  }

  public ngOnInit() {
    this._elements$ = this.notionService.getAllElements();
  }
}
