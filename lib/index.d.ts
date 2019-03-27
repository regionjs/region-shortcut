/// <reference types="react" />
import { provide, getProvider, Region } from 'region-core';
declare const Provider: ({ children }: any) => any;
declare const region: Region;
export declare const set: (key: string, result: any, option?: import("region-core/lib/types/interfaces").LoadOptions | undefined) => any, load: (key: string, asyncFunction: any, option?: import("region-core/lib/types/interfaces").LoadOptions | undefined) => Promise<any>, connect: (key: any, { Loading, Error }?: import("region-core/lib/types/interfaces").ConnectOptions | undefined) => (Display?: any) => ((ownProps: import("region-core/lib/types/types").Props) => JSX.Element) | null, connectWith: (key: any, Display: any, option: import("region-core/lib/types/interfaces").ConnectOptions) => ((ownProps: import("region-core/lib/types/types").Props) => JSX.Element) | null, useProps: (key: any) => import("region-core/lib/types/types").Props;
export { Region, provide, Provider, getProvider, region };
