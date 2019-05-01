"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var region_core_1 = require("region-core");
exports.Region = region_core_1.Region;
var region = new region_core_1.Region('region');
exports.region = region;
exports.set = region.set, exports.setBy = region.setBy, exports.reset = region.reset, exports.load = region.load, exports.loadBy = region.loadBy, exports.connect = region.connect, exports.connectWith = region.connectWith, exports.useProps = region.useProps, exports.getProps = region.getProps;
