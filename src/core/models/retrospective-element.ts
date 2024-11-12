export const ATTENDANCE_OPTIONS = ["Online", "Offline"];
export type AttendanceOption = typeof ATTENDANCE_OPTIONS[number];

export const RETROSPECTIVE_PHASES = ["Set the Stage"
  , "Gather Data"
  , "Generate Insights"
  , "Decide What To Do"
  , "Closing"
  , "Deprecated"];
export type RetrospectivePhase = typeof RETROSPECTIVE_PHASES[number];

export class RetrospectiveElement {
  public constructor(public name: string,
                     public theme: string | null,
                     public link: string | null,
                     public attendanceOptions: AttendanceOption[],
                     public phases: RetrospectivePhase[]) {
  }
}
