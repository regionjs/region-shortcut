import { Region } from 'region-core';

const region = new Region('region');

export const { set, setBy, reset, load, loadBy, connect, connectWith, useProps, getProps } = region;

export { Region, region };
