import { createCombinedRegion, createRegion, createLocalStorageRegion, CombinedRegion } from 'region-core';

const deprecate = (value: string) => {
  console.warn(`${value} See migrate guide on https://github.com/regionjs/region-core/blob/master/docs/Migrate.md`);
};

class Region extends CombinedRegion {
  constructor(option: any) {
    super(option);
    deprecate('Region is renamed as createCombinedRegion');
  }
}

const region = createCombinedRegion();

export const { set, setBy, reset, load, loadBy, connect, connectWith, useProps, getProps } = region;

export {
  region,
  createCombinedRegion,
  createRegion,
  createLocalStorageRegion,
  Region,
  CombinedRegion,
};

console.warn('region-shortcut can be easily moved to region-core, see source code for more: https://github.com/regionjs/region-shortcut/blob/master/src/index.ts');
