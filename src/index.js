import { getProvider, Region } from 'region-core';

const Provider = getProvider();
const region = new Region('region');

export const { getLoading, getResults, getFetchTimes, getError, set, load, connect, connectWith } = region;

export { Region, Provider, getProvider, region };
