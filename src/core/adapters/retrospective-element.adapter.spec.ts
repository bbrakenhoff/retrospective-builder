import {RetrospectiveElementAdapter} from './retrospective-element.adapter';
import {AttendanceOption, RetrospectivePhase} from '../models/retrospective-element';
import {TestDataFactory} from '../../testing/test-data-factory';

describe('RetrospectiveElementAdapter', () => {
  const testData = {};

  let adapter: RetrospectiveElementAdapter;

  beforeEach(() => {
    adapter = new RetrospectiveElementAdapter();
  });

  it('should be defined', () => {
    expect(adapter).toBeDefined();
  });

  describe('createRetrospectiveElement()', () => {
    it('should create a new RetrospectiveElement when input valid', () => {
      const result = adapter.createRetrospectiveElement(
        TestDataFactory.setTheStageStub.name,
        TestDataFactory.setTheStageStub.attendanceOptions,
        TestDataFactory.setTheStageStub.retrospectivePhases,
        TestDataFactory.setTheStageStub.theme,
        TestDataFactory.setTheStageStub.link);

      expect(result).toBeDefined();
      expect(result.name).toEqual(TestDataFactory.setTheStageStub.name);
      expect(result.theme).toEqual(TestDataFactory.setTheStageStub.theme);
      expect(result.link).toEqual(TestDataFactory.setTheStageStub.link);
      expect(result.attendanceOptions).toEqual(TestDataFactory.setTheStageStub.attendanceOptions as AttendanceOption[]);
      expect(result.phases).toEqual(TestDataFactory.setTheStageStub.retrospectivePhases as RetrospectivePhase[]);
    });

    it('should throw an error when name is undefined', () => {
      expect(() => adapter.createRetrospectiveElement(undefined!,
        TestDataFactory.setTheStageStub.attendanceOptions,
        TestDataFactory.setTheStageStub.retrospectivePhases,
        TestDataFactory.setTheStageStub.theme,
        TestDataFactory.setTheStageStub.link)).toThrowError('Name cannot be null or undefined');
    });


    it('should throw an error when name is null', () => {
      expect(() => adapter.createRetrospectiveElement(null!,
        TestDataFactory.setTheStageStub.attendanceOptions,
        TestDataFactory.setTheStageStub.retrospectivePhases,
        TestDataFactory.setTheStageStub.theme,
        TestDataFactory.setTheStageStub.link)).toThrowError('Name cannot be null or undefined');
    });

    it('should throw an error when attendanceOptions are empty', () => {
      expect(() => adapter.createRetrospectiveElement(
        TestDataFactory.setTheStageStub.name,
        [],
        TestDataFactory.setTheStageStub.retrospectivePhases,
        TestDataFactory.setTheStageStub.theme,
        TestDataFactory.setTheStageStub.link)).toThrowError('attendanceOptions cannot be empty');
    });

    it('should throw an error when attendanceOptions contains invalid value', () => {
      expect(() => adapter.createRetrospectiveElement(
        TestDataFactory.setTheStageStub.name,
        ["In Person"],
        TestDataFactory.setTheStageStub.retrospectivePhases,
        TestDataFactory.setTheStageStub.theme,
        TestDataFactory.setTheStageStub.link)).toThrowError('Invalid AttendanceOption at index 0: In Person');
    });

    it('should throw an error when phases is empty', () => {
      expect(() => adapter.createRetrospectiveElement(
        TestDataFactory.setTheStageStub.name,
        TestDataFactory.setTheStageStub.attendanceOptions,
        [],
        TestDataFactory.setTheStageStub.theme,
        TestDataFactory.setTheStageStub.link)).toThrowError('retrospectivePhases cannot be empty');
    });

    it('should throw an error when phases contains invalid value', () => {
      expect(() => adapter.createRetrospectiveElement(
        TestDataFactory.setTheStageStub.name,
        TestDataFactory.setTheStageStub.attendanceOptions,
        ["Energizer"],
        TestDataFactory.setTheStageStub.theme,
        TestDataFactory.setTheStageStub.link)).toThrowError('Invalid RetrospectivePhase at index 0: Energizer');
    });
  });
});
