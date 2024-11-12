import {RetrospectiveElementAdapter} from './retrospective-element.adapter';
import {AttendanceOption, RetrospectivePhase} from '../models/retrospective-element';

describe('RetrospectiveElementAdapter', () => {
  const testData = {
    name: "The Worst We Could Do",
    theme: "Reputation",
    link: "https://retromat.org/en/?id=69",
    attendanceOptions: ["Online", "Offline"],
    retrospectivePhases: ["Generate Insights"]
  };

  let adapter: RetrospectiveElementAdapter;

  beforeEach(() => {
    adapter = new RetrospectiveElementAdapter();
  });

  it('should be defined', () => {
    expect(adapter).toBeDefined();
  });

  describe('createRetrospectiveElement()', () => {
    it('should create a new RetrospectiveElement when input valid', () => {
      const result = adapter.createRetrospectiveElement(testData.name,
        testData.attendanceOptions,
        testData.retrospectivePhases,
        testData.theme,
        testData.link);

      expect(result).toBeDefined();
      expect(result.name).toEqual(testData.name);
      expect(result.theme).toEqual(testData.theme);
      expect(result.link).toEqual(testData.link);
      expect(result.attendanceOptions).toEqual(testData.attendanceOptions as AttendanceOption[]);
      expect(result.phases).toEqual(testData.retrospectivePhases as RetrospectivePhase[]);
    });

    it('should throw an error when name is undefined', () => {
      expect(() => adapter.createRetrospectiveElement(undefined!,
        testData.attendanceOptions,
        testData.retrospectivePhases,
        testData.theme,
        testData.link)).toThrowError('Name cannot be null or undefined');
    });


    it('should throw an error when name is null', () => {
      expect(() => adapter.createRetrospectiveElement(null!,
        testData.attendanceOptions,
        testData.retrospectivePhases,
        testData.theme,
        testData.link)).toThrowError('Name cannot be null or undefined');
    });

    it('should throw an error when attendanceOptions are empty', () => {
      expect(() => adapter.createRetrospectiveElement(testData.name,
        [],
        testData.retrospectivePhases,
        testData.theme,
        testData.link)).toThrowError('attendanceOptions cannot be empty');
    });

    it('should throw an error when attendanceOptions contains invalid value', () => {
      expect(() => adapter.createRetrospectiveElement(testData.name,
        ["In Person"],
        testData.retrospectivePhases,
        testData.theme,
        testData.link)).toThrowError('Invalid AttendanceOption at index 0: In Person');
    });

    it('should throw an error when phases is empty', () => {
      expect(() => adapter.createRetrospectiveElement(testData.name,
        testData.attendanceOptions,
        [],
        testData.theme,
        testData.link)).toThrowError('retrospectivePhases cannot be empty');
    });

    it('should throw an error when phases contains invalid value', () => {
      expect(() => adapter.createRetrospectiveElement(testData.name,
        testData.attendanceOptions,
        ["Energizer"],
        testData.theme,
        testData.link)).toThrowError('Invalid RetrospectivePhase at index 0: Energizer');
    });
  });
});
