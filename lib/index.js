"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var region_core_1 = require("region-core");
exports.getProvider = region_core_1.getProvider;
exports.Region = region_core_1.Region;
region_core_1.provide();
var Provider = function (_a) {
    var children = _a.children;
    console.warn('Provider is deprecated, remove it directly');
    return children;
};
exports.Provider = Provider;
var region = new region_core_1.Region('region');
exports.region = region;
exports.set = region.set, exports.load = region.load, exports.connect = region.connect, exports.connectWith = region.connectWith, exports.useProps = region.useProps;
