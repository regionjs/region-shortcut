import { provide, getProvider, Region } from 'region-core';

const Provider = ({ children }: any) => {
  console.warn('Provider is deprecated, remove it directly');
  return children;
};

const region = new Region('region');

export const { set, load, connect, connectWith, useProps } = region;

export { Region, provide, Provider, getProvider, region };
