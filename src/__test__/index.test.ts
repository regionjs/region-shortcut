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
      set, load, connect, connectWith, useProps, Region, provide, Provider, getProvider, region,
      ...rest
    } = api;
    expect(typeof set).toBe('function');
    expect(typeof load).toBe('function');
    expect(typeof connect).toBe('function');
    expect(typeof connectWith).toBe('function');
    expect(typeof useProps).toBe('function');
    expect(typeof Region).toBe('function');
    expect(typeof provide).toBe('function');
    expect(typeof Provider).toBe('function');
    expect(typeof getProvider).toBe('function');
    expect(typeof region).toBe('object');
    expect(rest).toEqual({});
  });

  test('region contains many api', () => {
    const { Provider, region } = api;
    expect(typeof Provider).toBe('function');
    const {
      reset, set, setBy, load, loadBy, connect, unstable_connect, connectWith, useProps, getProps,
      name, enableLog, expiredTime, strictLoading,
      private_actionTypes, private_getState, private_reducer, private_selectorFactory,
      private_getLoading, private_getResults, private_getFetchTimes, private_getError, private_setConfig,
      // @ts-ignore test that they are not exist
      getLoading, getResults, getFetchTimes, getError, setConfig,
      ...rest
    } = region;
    expect(typeof reset).toBe('function');
    expect(typeof set).toBe('function');
    expect(typeof setBy).toBe('function');
    expect(typeof load).toBe('function');
    expect(typeof loadBy).toBe('function');
    expect(typeof connect).toBe('function');
    expect(typeof unstable_connect).toBe('function');
    expect(typeof connectWith).toBe('function');
    expect(typeof useProps).toBe('function');
    expect(typeof getProps).toBe('function');
    expect(typeof name).toBe('string');
    expect(typeof enableLog).toBe('boolean');
    expect(typeof expiredTime).toBe('number');
    expect(typeof strictLoading).toBe('boolean');
    expect(typeof private_actionTypes).toBe('object');
    expect(typeof private_getState).toBe('function');
    expect(typeof private_reducer).toBe('function');
    expect(typeof private_selectorFactory).toBe('function');
    expect(typeof private_getLoading).toBe('function');
    expect(typeof private_getResults).toBe('function');
    expect(typeof private_getFetchTimes).toBe('function');
    expect(typeof private_getError).toBe('function');
    expect(typeof private_setConfig).toBe('function');
    expect(typeof getLoading).toBe('undefined');
    expect(typeof getResults).toBe('undefined');
    expect(typeof getFetchTimes).toBe('undefined');
    expect(typeof getError).toBe('undefined');
    expect(typeof setConfig).toBe('undefined');
    expect(rest).toEqual({});
  });
});
