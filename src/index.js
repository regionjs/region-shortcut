import { getProvider, Region } from 'region-core';

const Provider = getProvider();
const region = new Region({ reducerPath: 'region' });

export const { setConfig, getLoading, getResults, getFetchTimes, mapResultToProps, set, load, connectWith, reducer } = region;

export { Region, Provider, getProvider };
