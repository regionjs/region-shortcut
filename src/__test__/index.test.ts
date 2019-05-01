import * as core from 'region-core';
import * as api from '..';

describe('exports', () => {
  test('no ignored', () => {
    Object.keys(core).forEach((key: string) => {
      const apiMap: {[key: string]: any} = api;
      expect(apiMap[key]).not.toBe(undefined);
    });

  });

  test('exports', () => {
    const {
      set, setBy, reset, load, loadBy, connect, connectWith, useProps, getProps, Region, region,
      ...rest
    } = api;
    expect(typeof set).toBe('function');
    expect(typeof setBy).toBe('function');
    expect(typeof reset).toBe('function');
    expect(typeof load).toBe('function');
    expect(typeof loadBy).toBe('function');
    expect(typeof connect).toBe('function');
    expect(typeof connectWith).toBe('function');
    expect(typeof useProps).toBe('function');
    expect(typeof getProps).toBe('function');
    expect(typeof Region).toBe('function');
    expect(typeof region).toBe('object');
    expect(rest).toEqual({});
  });

  test('region contains many api', () => {
    const { region } = api;
    const {
      reset, set, setBy, load, loadBy, connect, connectWith, useProps, getProps,
      name, enableLog, expiredTime, strictLoading,
      private_store, private_actionTypes, private_getState, private_reducer,
      private_getLoadings, private_getResults, private_getFetchTimes, private_getErrors, private_setConfig,
      ...rest
    } = region;
    expect(typeof reset).toBe('function');
    expect(typeof set).toBe('function');
    expect(typeof setBy).toBe('function');
    expect(typeof load).toBe('function');
    expect(typeof loadBy).toBe('function');
    expect(typeof connect).toBe('function');
    expect(typeof connectWith).toBe('function');
    expect(typeof useProps).toBe('function');
    expect(typeof getProps).toBe('function');
    expect(typeof name).toBe('string');
    expect(typeof enableLog).toBe('boolean');
    expect(typeof expiredTime).toBe('number');
    expect(typeof strictLoading).toBe('boolean');
    expect(typeof private_store).toBe('object');
    expect(typeof private_actionTypes).toBe('object');
    expect(typeof private_getState).toBe('function');
    expect(typeof private_reducer).toBe('function');
    expect(typeof private_getLoadings).toBe('function');
    expect(typeof private_getResults).toBe('function');
    expect(typeof private_getFetchTimes).toBe('function');
    expect(typeof private_getErrors).toBe('function');
    expect(typeof private_setConfig).toBe('function');
    expect(rest).toEqual({});
  });
});
