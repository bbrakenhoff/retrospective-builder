import {AttendanceOption, RetrospectiveElement, RetrospectivePhase} from '../core/models/retrospective-element';
import {NotionRetrospectiveElement} from '../core/interfaces/notion-retrospective-element';

export interface RetrospectiveElementStub {
  id: string;
  name: string;
  theme: string | null;
  link: string | null;
  attendanceOptions: AttendanceOption[];
  retrospectivePhases: RetrospectivePhase[];
}

export class TestDataFactory {
  public static readonly setTheStageStub: Readonly<RetrospectiveElementStub> = Object.freeze({
    id: "abc123",
    name: "Increment by one",
    theme: null,
    link: "https://www.funretrospectives.com/increment-by-one/",
    attendanceOptions: ["Online", "Offline"],
    retrospectivePhases: ["Set the Stage"]
  });
  public static readonly gatherDataStub: Readonly<RetrospectiveElementStub> = Object.freeze({
    id: "def123",
    name: "Start, Stop, Continue",
    theme: null,
    link: "https://www.betterup.com/blog/start-stop-continue",
    attendanceOptions: ["Online", "Offline"],
    retrospectivePhases: ["Gather Data"]
  });
  public static generateInsightsStub: Readonly<RetrospectiveElementStub> = Object.freeze({
    id: "ghi123",
    name: "The Worst We Could Do",
    theme: "Reputation",
    link: "https://retromat.org/en/?id=69",
    attendanceOptions: ["Online", "Offline"],
    retrospectivePhases: ["Generate Insights"]
  });
  public static readonly decideWhatToDoStub: Readonly<RetrospectiveElementStub> = Object.freeze({
    id: "jkl123",
    name: "Value vs. Effort Matrix",
    theme: null,
    link: "https://www.savio.io/product-roadmap/value-vs-effort-matrix/",
    attendanceOptions: ["Online", "Offline"],
    retrospectivePhases: ["Decide What To Do"]
  });
  public static readonly closingStub: Readonly<RetrospectiveElementStub> = Object.freeze({
    id: "mno123",
    name: "Pleased & Surprised",
    theme: null,
    link: "https://retromat.org/en/?id=45",
    attendanceOptions: ["Online", "Offline"],
    retrospectivePhases: ["Closing"]
  });

  public static readonly allStubs: Readonly<RetrospectiveElementStub[]> = Object.freeze([
    this.setTheStageStub,
    this.gatherDataStub,
    this.generateInsightsStub,
    this.decideWhatToDoStub,
    this.closingStub
  ]);


  public static createRetrospectiveElements(stubs: RetrospectiveElementStub[]): RetrospectiveElement[] {
    return stubs
      .map((values) =>
        new RetrospectiveElement(
          values.name,
          values.theme,
          values.link,
          values.attendanceOptions as AttendanceOption[],
          values.retrospectivePhases as RetrospectivePhase[])
      );
  }

  public static createNotionRetrospectiveElements(stubs: RetrospectiveElementStub[]): {
    results: { properties: NotionRetrospectiveElement }[]
  } {
    return {
      results: stubs.map((values) => ({
        properties: {
          id: values.id,
          Name: {
            id: values.id,
            title: [{
              plain_text: values.name
            }]
          },
          Theme: {select: {name: values.theme}},
          Link: {
            rich_text: [{href: values.link}]
          },
          "Attendance options": {
            multi_select: values.attendanceOptions.map((attendanceOption) => ({name: attendanceOption}))
          },
          Phase: {
            multi_select: values.retrospectivePhases.map((phase) => ({name: phase}))
          }
        }
      }))
    };
  }
}
