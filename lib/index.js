"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getProvider", {
  enumerable: true,
  get: function get() {
    return _regionCore.getProvider;
  }
});
Object.defineProperty(exports, "Region", {
  enumerable: true,
  get: function get() {
    return _regionCore.Region;
  }
});
exports.region = exports.Provider = exports.useProps = exports.connectWith = exports.connect = exports.load = exports.set = void 0;

var _regionCore = require("region-core");

var Provider = (0, _regionCore.getProvider)();
exports.Provider = Provider;
var region = new _regionCore.Region('region');
exports.region = region;
var set = region.set,
    load = region.load,
    connect = region.connect,
    connectWith = region.connectWith,
    useProps = region.useProps;
exports.useProps = useProps;
exports.connectWith = connectWith;
exports.connect = connect;
exports.load = load;
exports.set = set;