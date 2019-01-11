import { getProvider, Region } from 'region-core';

const Provider = getProvider();
const region = new Region('region');

export const { setConfig, getLoading, getResults, getFetchTimes, mapResultToProps, set, load, connect, connectWith, reducer } = region;

export { Region, Provider, getProvider };
