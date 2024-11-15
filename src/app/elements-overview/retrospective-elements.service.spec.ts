import {TestBed} from '@angular/core/testing';

import {RetrospectiveElementsService} from './retrospective-elements.service';
import {NotionService} from './notion.service';
import {of} from 'rxjs';
import {TestDataFactory} from '../../testing/test-data-factory';

describe('RetrospectiveElementsService', () => {

  let spies: {
    notionService: any
  };
  const testData = {
    retrospectiveElements: TestDataFactory.createRetrospectiveElements([...TestDataFactory.allStubs]),
    notionRetrospectiveElements: TestDataFactory.createNotionRetrospectiveElements([...TestDataFactory.allStubs])
  };

  let service: RetrospectiveElementsService;

  beforeEach(() => {
    spies = {notionService: jasmine.createSpyObj('NotionService', ['queryDatabase'])};

    TestBed.configureTestingModule({providers: [{provide: NotionService, useValue: spies.notionService}]});
    service = TestBed.inject(RetrospectiveElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllElements()', () => {
    it('should request all retrospective elements through the notion sdk', (done: DoneFn) => {
      spies.notionService.queryDatabase.and.returnValue(of(testData.notionRetrospectiveElements));

      service.getAllElements().subscribe(({
        next: (results) => {
          expect(spies.notionService.queryDatabase).toHaveBeenCalledWith(RetrospectiveElementsService['ELEMENTS_DB_ID']);
          expect(results.length).toEqual(testData.notionRetrospectiveElements.results.length);
          expect(results).toEqual(testData.retrospectiveElements)
        },
        complete: () => {
          done();
        },
        error: done.fail
      }));
    });
  });
});
