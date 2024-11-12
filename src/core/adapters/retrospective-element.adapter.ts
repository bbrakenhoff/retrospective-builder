import {
  AttendanceOption, ATTENDANCE_OPTIONS,
  RetrospectiveElement,
  RetrospectivePhase,
  RETROSPECTIVE_PHASES
} from '../models/retrospective-element';

export class RetrospectiveElementAdapter {
  public createRetrospectiveElement(name: string, attendanceOptions: string[], phases: string[], theme: string | null = null, link: string | null = null): RetrospectiveElement {
    return new RetrospectiveElement(this.validateName(name), theme, link, this.validateAttendanceOptions(attendanceOptions), this.validatePhases(phases));
  }

  private validateName(name: string): string {
    if (name === undefined || name === null) {
      throw new Error('Name cannot be null or undefined');
    }

    return name;
  }

  private validateAttendanceOptions(values: string[]): AttendanceOption[] {
    if (values.length === 0) {
      throw new Error('attendanceOptions cannot be empty');
    }

    const errors: string[] = [];
    values.forEach((value, index) => {
      if (!this.isAttendanceOption(value)) {
        errors.push(`Invalid AttendanceOption at index ${index}: ${value}`);
      }
    });

    if (errors.length > 0) {
      throw new Error(errors.join("; "));
    }

    return values as AttendanceOption[];
  }

  private isAttendanceOption(value: string): value is AttendanceOption {
    return ATTENDANCE_OPTIONS.includes(value);
  }

  private validatePhases(values: string[]): RetrospectivePhase[] {
    if (values.length === 0) {
      throw new Error('retrospectivePhases cannot be empty');
    }

    const errors: string[] = [];
    values.forEach((value, index) => {
      if (!this.isRetrospectivePhase(value)) {
        errors.push(`Invalid RetrospectivePhase at index ${index}: ${value}`);
      }
    });

    if (errors.length > 0) {
      throw new Error(errors.join("; "));
    }

    return values as RetrospectivePhase[];
  }

  private isRetrospectivePhase(value: any):value is RetrospectivePhase {
    return RETROSPECTIVE_PHASES.includes(value)
  }
}
