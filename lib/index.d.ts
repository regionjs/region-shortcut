/// <reference types="react" />
import { createCombinedRegion, createRegion, createLocalStorageRegion, CombinedRegion } from 'region-core';
declare class Region extends CombinedRegion {
    constructor(option: any);
}
declare const region: CombinedRegion;
export declare const set: (key: string, result: any, option?: import("region-core/lib/types").LoadOption | undefined) => any, setBy: (key: string, option?: import("region-core/lib/types").LoadOption | undefined) => (result: any) => any, reset: () => void, load: (key: string, asyncFunction: any, optionOrReducer?: import("region-core/lib/types").LoadOption | ((state: any, action: any, params: any) => any) | undefined, exOption?: import("region-core/lib/types").LoadOption | undefined) => Promise<any>, loadBy: (key: string, asyncFunction: any, optionOrReducer?: import("region-core/lib/types").LoadOption | ((state: any, action: any, params: any) => any) | undefined, exOption?: import("region-core/lib/types").LoadOption | undefined) => (params: any) => Promise<any>, connect: (key: import("region-core/lib/types").Key, { Loading, Error }?: import("region-core/lib/types").ConnectOption | undefined) => (Display?: any) => ((ownProps: import("region-core/lib/types").Props) => JSX.Element) | null, connectWith: (key: import("region-core/lib/types").Key, Display: any, option?: import("region-core/lib/types").ConnectOption | undefined) => ((ownProps: import("region-core/lib/types").Props) => JSX.Element) | null, useProps: (key: import("region-core/lib/types").Key) => import("region-core/lib/types").Props, getProps: (key: import("region-core/lib/types").Key) => {
    loading: boolean | undefined;
    fetchTime: number | undefined;
    error: Error | undefined;
} & import("region-core/lib/types").Props;
export { region, createCombinedRegion, createRegion, createLocalStorageRegion, Region, CombinedRegion, };
