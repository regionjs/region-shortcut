import { getProvider, Region } from 'region-core';

const Provider = getProvider();
const region = new Region('region');

export const { set, load, connect, connectWith, useProps } = region;

export { Region, Provider, getProvider, region };
