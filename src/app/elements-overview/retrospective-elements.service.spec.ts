import {TestBed} from '@angular/core/testing';

import {RetrospectiveElementsService} from './retrospective-elements.service';
import {NotionService} from './notion.service';
import {of} from 'rxjs';
import {NotionRetrospectiveElement} from '../../core/interfaces/notion-retrospective-element';

describe('RetrospectiveElementsService', () => {

  let spies: {
    notionService: any
  }
  const testData = {
    notionRetrospectiveElements: {
      results: [{
        id: "abc123",
        Name: {
          id: "abc123",
          title: {
            context: {text: "Wave"}
          }
        },
        Theme: {select: {name: null}},
        Link: {
          href: "https://www.edsheeran.com/"
        },
        "Attendance opties": {
          multi_select: [
            {name: "Offline"}
          ]
        },
        Phase: {
          multi_select: [{
            name: "Set the Stage"
          }]
        }
      }, {
        id: "123abc",
        Name: {
          id: "123abc",
          title: {
            context: {text: "1-2-4-all"}
          }
        },
        Theme: {select: {name: null}},
        Link: {
          href: "https://thecreatorscompany.com/liberating-structures/1-2-4-all/"
        },
        "Attendance opties": {
          multi_select: [
            {name: "Online"},
            {name: "Offline"}
          ]
        },
        Phase: {
          multi_select: [{
            name: "Gather Data"
          }]
        }
      }, {
        id: "1abc23",
        Name: {
          id: "1abc23",
          title: {
            context: {text: "Het ergste dat we kunnen doen"}
          }
        },
        Theme: {select: {name: null}},
        Link: {
          href: "https://retromat.org/nl/?id=69"
        },
        "Attendance opties": {
          multi_select: [
            {name: "Online"},
            {name: "Offline"}
          ]
        },
        Phase: {
          multi_select: [{
            name: "Generate Insights"
          }]
        }
      }, {
        id: "12abc3",
        Name: {
          id: "1abc23",
          title: {
            context: {text: "Waarde <> Effort Matrix"}
          }
        },
        Theme: {select: {name: null}},
        Link: {
          href: null
        },
        "Attendance opties": {
          multi_select: [
            {name: "Online"},
            {name: "Offline"}
          ]
        },
        Phase: {
          multi_select: [{
            name: "Decide What To Do"
          }]
        }
      }, {
        id: "1abc23",
        Name: {
          id: "1abc23",
          title: {
            context: {text: "Het ergste dat we kunnen doen"}
          }
        },
        Theme: {select: {name: null}},
        Link: {
          href: "https://retromat.org/nl/?id=69"
        },
        "Attendance opties": {
          multi_select: [
            {name: "Online"},
            {name: "Offline"}
          ]
        },
        Phase: {
          multi_select: [{
            name: "Generate Insights"
          }]
        }
      }, {
        id: "a123bc",
        Name: {
          id: "a123bc",
          title: {
            context: {text: "Hoe vol is je atterij?"}
          }
        },
        Theme: {select: {name: null}},
        Link: {
          href: null
        },
        "Attendance opties": {
          multi_select: [
            {name: "Online"},
            {name: "Offline"}
          ]
        },
        Phase: {
          multi_select: [{
            name: "Closing"
          }]
        }
      }] as NotionRetrospectiveElement[]
    }
  }

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
        next: (result) => {
          expect(spies.notionService.queryDatabase).toHaveBeenCalledWith(RetrospectiveElementsService['ELEMENTS_DB_ID']);
          expect(result).toEqual(testData.notionRetrospectiveElements);
        },
        complete: () => {
          done();
        },
        error: done.fail
      }));
    });
  })
});
