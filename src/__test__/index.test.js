import {
  set, load, connect, connectWith, Region, Provider, getProvider, region,
} from '../index';

describe('exports', () => {
  test('exports', () => {
    expect(typeof set).toBe('function');
    expect(typeof load).toBe('function');
    expect(typeof connect).toBe('function');
    expect(typeof connectWith).toBe('function');
    expect(typeof Region).toBe('function');
    expect(typeof Provider).toBe('function');
    expect(typeof getProvider).toBe('function');
    expect(typeof region).toBe('object');
  });
});
