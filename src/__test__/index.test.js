import { set, load, connectWith } from '../index';

describe('exports', () => {
  test('exports', () => {
    expect(typeof set).toBe('function');
    expect(typeof load).toBe('function');
    expect(typeof connectWith).toBe('function');
  });
});
