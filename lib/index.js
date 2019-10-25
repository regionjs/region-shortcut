"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var region_core_1 = require("region-core");
exports.createCombinedRegion = region_core_1.createCombinedRegion;
exports.createRegion = region_core_1.createRegion;
exports.createLocalStorageRegion = region_core_1.createLocalStorageRegion;
exports.CombinedRegion = region_core_1.CombinedRegion;
var deprecate = function (value) {
    console.warn(value + " See migrate guide on https://github.com/regionjs/region-core/blob/master/docs/Migrate.md");
};
var Region = /** @class */ (function (_super) {
    __extends(Region, _super);
    function Region(option) {
        var _this = _super.call(this, option) || this;
        deprecate('Region is renamed as createCombinedRegion');
        return _this;
    }
    return Region;
}(region_core_1.CombinedRegion));
exports.Region = Region;
var region = region_core_1.createCombinedRegion();
exports.region = region;
exports.set = region.set, exports.setBy = region.setBy, exports.reset = region.reset, exports.load = region.load, exports.loadBy = region.loadBy, exports.connect = region.connect, exports.connectWith = region.connectWith, exports.useProps = region.useProps, exports.getProps = region.getProps;
console.warn('region-shortcut can be easily moved to region-core, see source code for more: https://github.com/regionjs/region-shortcut/blob/master/src/index.ts');
