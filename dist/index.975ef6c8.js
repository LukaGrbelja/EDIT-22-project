// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"32Gky":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _view = require("./View/View");
var _viewDefault = parcelHelpers.interopDefault(_view);
let body = document.getElementsByTagName("body")[0];
let view = new _viewDefault.default();
body.appendChild(view.HTMLRootElementTag);

},{"./View/View":"jZ3PG","@parcel/transformer-js/src/esmodule-helpers.js":"6NUV3"}],"jZ3PG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _basicComponent = require("./BasicComponent");
var _basicComponentDefault = parcelHelpers.interopDefault(_basicComponent);
var _homePageComponent = require("./Components/HomePage/HomePageComponent");
var _homePageComponentDefault = parcelHelpers.interopDefault(_homePageComponent);
var _informationComponent = require("./Components/Info/InformationComponent");
var _informationComponentDefault = parcelHelpers.interopDefault(_informationComponent);
var _buildPCComponent = require("./Components/BuildPC/BuildPCComponent");
var _buildPCComponentDefault = parcelHelpers.interopDefault(_buildPCComponent);
var _controller = require("../Controller/Controller");
var _controllerDefault = parcelHelpers.interopDefault(_controller);
var _model = require("../Model/Model");
var _modelDefault = parcelHelpers.interopDefault(_model);
class View extends _basicComponentDefault.default {
    constructor(){
        super("div");
        this.newClass([
            "container-fluid",
            "min-vh-100"
        ]);
        this.homePageInit();
        _controllerDefault.default.addEventListener("initHomePage", ()=>{
            this.homePageInit();
        });
        _controllerDefault.default.addEventListener("initInfoPage", ()=>{
            this.informationPageInit();
        });
        _controllerDefault.default.addEventListener("initBuildPage", ()=>{
            this.buildApcInit();
        });
    }
    homePageInit() {
        this.inner("");
        let homePage = new _homePageComponentDefault.default();
        this.appendC(homePage);
        console.log(_modelDefault.default);
    }
    informationPageInit() {
        this.inner("");
        let informationPage = new _informationComponentDefault.default();
        this.appendC(informationPage);
        console.log(_modelDefault.default);
    }
    buildApcInit() {
        this.inner("");
        let buldApc = new _buildPCComponentDefault.default();
        this.appendC(buldApc);
        console.log(_modelDefault.default);
    }
}
module.exports = View;

},{"./BasicComponent":"4M4Zv","./Components/HomePage/HomePageComponent":"8mjX3","./Components/Info/InformationComponent":"gPcOE","./Components/BuildPC/BuildPCComponent":"g3aQg","../Controller/Controller":"iAHp7","../Model/Model":"8jB4N","@parcel/transformer-js/src/esmodule-helpers.js":"6NUV3"}],"4M4Zv":[function(require,module,exports) {
class Component {
    constructor(HTMLRootElementTag){
        this.HTMLRootElementTag = document.createElement(HTMLRootElementTag);
    }
    appendC(newElement) {
        this.HTMLRootElementTag.appendChild(newElement.HTMLRootElementTag);
    }
    inner(string) {
        this.HTMLRootElementTag.innerHTML = string;
    }
    newClass(array) {
        array.forEach((element)=>{
            this.HTMLRootElementTag.classList.add(element);
        });
    }
}
module.exports = Component;

},{}],"8mjX3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _rowComponent = require("../RowComponent");
var _rowComponentDefault = parcelHelpers.interopDefault(_rowComponent);
var _basicComponent = require("../../BasicComponent");
var _basicComponentDefault = parcelHelpers.interopDefault(_basicComponent);
var _logInComponent = require("./LogInComponent");
var _logInComponentDefault = parcelHelpers.interopDefault(_logInComponent);
var _startComponent = require("./StartComponent");
var _startComponentDefault = parcelHelpers.interopDefault(_startComponent);
class HomePage extends _rowComponentDefault.default {
    constructor(){
        super();
        let firstCol = new _basicComponentDefault.default("div");
        firstCol.newClass([
            "col-lg-3",
            "col-md-2",
            "col-xs-0"
        ]);
        this.appendC(firstCol);
        let secondCol = new _basicComponentDefault.default("div");
        secondCol.newClass([
            "col-lg-3",
            "col-md-4",
            "col-sm-6",
            "col-xs-12",
            "p-3"
        ]);
        secondCol.HTMLRootElementTag.style.marginTop = "10rem";
        let logInComponent = new _logInComponentDefault.default();
        secondCol.appendC(logInComponent);
        this.appendC(secondCol);
        let thirdCol = new _basicComponentDefault.default("div");
        thirdCol.newClass([
            "col-lg-3",
            "col-md-4",
            "col-sm-6",
            "col-xs-12",
            "p-3"
        ]);
        thirdCol.HTMLRootElementTag.style.marginTop = "10rem";
        let startComponent = new _startComponentDefault.default();
        thirdCol.appendC(startComponent);
        this.appendC(thirdCol);
    }
}
module.exports = HomePage;

},{"../RowComponent":"c8fVx","../../BasicComponent":"4M4Zv","./LogInComponent":"9wMyZ","./StartComponent":"an4jZ","@parcel/transformer-js/src/esmodule-helpers.js":"6NUV3"}],"c8fVx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _basicComponent = require("../BasicComponent");
var _basicComponentDefault = parcelHelpers.interopDefault(_basicComponent);
class Row extends _basicComponentDefault.default {
    constructor(){
        super("div");
        this.newClass([
            "row"
        ]);
    }
}
module.exports = Row;

},{"../BasicComponent":"4M4Zv","@parcel/transformer-js/src/esmodule-helpers.js":"6NUV3"}],"6NUV3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9wMyZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _basicComponent = require("../../BasicComponent");
var _basicComponentDefault = parcelHelpers.interopDefault(_basicComponent);
class LogInComponent extends _basicComponentDefault.default {
    constructor(){
        super("div");
        this.newClass([
            "card"
        ]);
        setTimeout(()=>{
            document.getElementsByTagName("button")[0].addEventListener("click", ()=>{
                document.getElementsByTagName("h5")[0].innerHTML = "Dobrodošli";
                document.getElementsByTagName("form")[0].innerHTML = document.getElementById("inputUserName").value;
            });
        });
        this.inner(`
            <div class="card-body">
                <h5 class="card-title">Prijavi se ili registriraj</h5>
                    <form>
                        <label for="inputUserName" class="form-label">Korisničko ime</label>
                        <input required type="text" class="form-control" id="inputUserName">
                        <label for="inputPassword" class="form-label">Lozinka</label>
                        <input required type="password" class="form-control" id="inputPassword">
                        <button type="submit" class="btn btn-primary">Prijavi se</button>
                    </form>
                <hr />
                <a href="https://github.com/LukaGrbelja/EDIT-22-project">Github</a>
            </div>
        `);
    }
}
module.exports = LogInComponent;

},{"../../BasicComponent":"4M4Zv","@parcel/transformer-js/src/esmodule-helpers.js":"6NUV3"}],"an4jZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _basicComponent = require("../../BasicComponent");
var _basicComponentDefault = parcelHelpers.interopDefault(_basicComponent);
var _controller = require("../../../Controller/Controller");
var _controllerDefault = parcelHelpers.interopDefault(_controller);
class StartComponent extends _basicComponentDefault.default {
    constructor(){
        super("div");
        this.newClass([
            "card"
        ]);
        setTimeout(()=>{
            document.getElementsByTagName("a")[2].addEventListener("click", ()=>{
                _controllerDefault.default.initInfoComp();
            });
            document.getElementsByTagName("a")[1].addEventListener("click", ()=>{
                _controllerDefault.default.initBuildComp();
            });
        });
        this.inner(`
            <div class="card-body">
                <h5 class="card-title">Zapocnite</h5>
                <p class="card-text">Zelite sloziti PC?</p>
                <a href="#build" class="btn btn-primary">Krenite</a>
                <hr />
                <p class="card-text">Neznate puno o PC-u</p>
                <a href="#informacije" class="btn btn-primary">Informirajte se</a>
            </div>
        `);
    }
}
module.exports = StartComponent;

},{"../../BasicComponent":"4M4Zv","../../../Controller/Controller":"iAHp7","@parcel/transformer-js/src/esmodule-helpers.js":"6NUV3"}],"iAHp7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _model = require("../Model/Model");
var _modelDefault = parcelHelpers.interopDefault(_model);
class Controller extends EventTarget {
    constructor(){
        super();
    }
    initInfoComp() {
        _modelDefault.default.current = "informationPage";
        this.dispatchEvent(new CustomEvent("initInfoPage"));
    }
    initHomeComp() {
        _modelDefault.default.current = "homePage";
        this.dispatchEvent(new CustomEvent("initHomePage"));
    }
    initBuildComp() {
        _modelDefault.default.current = "buildPage";
        this.dispatchEvent(new CustomEvent("initBuildPage"));
    }
}
let controller = new Controller();
module.exports = controller;

},{"../Model/Model":"8jB4N","@parcel/transformer-js/src/esmodule-helpers.js":"6NUV3"}],"8jB4N":[function(require,module,exports) {
let model = {
    current: "homePage"
};
module.exports = model;

},{}],"gPcOE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _rowComponent = require("../RowComponent");
var _rowComponentDefault = parcelHelpers.interopDefault(_rowComponent);
var _basicComponent = require("../../BasicComponent");
var _basicComponentDefault = parcelHelpers.interopDefault(_basicComponent);
var _tabsNavigationComponent = require("./TabsNavigationComponent");
var _tabsNavigationComponentDefault = parcelHelpers.interopDefault(_tabsNavigationComponent);
var _tabsContentComponent = require("./TabsContentComponent");
var _tabsContentComponentDefault = parcelHelpers.interopDefault(_tabsContentComponent);
var _controller = require("../../../Controller/Controller");
var _controllerDefault = parcelHelpers.interopDefault(_controller);
class InformationPage extends _rowComponentDefault.default {
    constructor(){
        super();
        setTimeout(()=>{
            document.getElementsByTagName("button")[0].addEventListener("click", ()=>{
                _controllerDefault.default.initHomeComp();
            });
        }, 100);
        let firstCol = new _basicComponentDefault.default("div");
        firstCol.newClass([
            "col-xl-3",
            "col-md-2",
            "col-sm-12"
        ]);
        firstCol.inner(`
            <button class="carousel-control-prev" type="button">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
        `);
        this.appendC(firstCol);
        let secondCol = new _basicComponentDefault.default("div");
        secondCol.newClass([
            "col-xl-6",
            "col-md-8",
            "col-sm-12"
        ]);
        secondCol.HTMLRootElementTag.style.marginTop = "10rem";
        let tabsNavigation = new _tabsNavigationComponentDefault.default();
        secondCol.appendC(tabsNavigation);
        let tabsContent = new _tabsContentComponentDefault.default();
        secondCol.appendC(tabsContent);
        this.appendC(secondCol);
    }
}
module.exports = InformationPage;

},{"../RowComponent":"c8fVx","../../BasicComponent":"4M4Zv","./TabsNavigationComponent":"ie2cS","./TabsContentComponent":"fFqpG","../../../Controller/Controller":"iAHp7","@parcel/transformer-js/src/esmodule-helpers.js":"6NUV3"}],"ie2cS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _basicComponent = require("../../BasicComponent");
var _basicComponentDefault = parcelHelpers.interopDefault(_basicComponent);
class TabsNavigation extends _basicComponentDefault.default {
    constructor(){
        super("ul");
        this.newClass([
            "nav",
            "nav-tabs"
        ]);
        this.HTMLRootElementTag.role = "tablist";
        this.HTMLRootElementTag.id = "myTab";
        this.inner(`
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="procesor-tab" data-bs-toggle="tab" data-bs-target="#procesor" type="button" role="tab" aria-controls="procesor" aria-selected="true">Procesor</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="gpu-tab" data-bs-toggle="tab" data-bs-target="#gpu" type="button" role="tab" aria-controls="gpu" aria-selected="false">Grafička kartica</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="hdd-tab" data-bs-toggle="tab" data-bs-target="#hdd" type="button" role="tab" aria-controls="hdd" aria-selected="false">Tvrdi disk</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="ram-tab" data-bs-toggle="tab" data-bs-target="#ram" type="button" role="tab" aria-controls="ram" aria-selected="false">RAM</button>
            </li>
        `);
    }
}
module.exports = TabsNavigation;

},{"../../BasicComponent":"4M4Zv","@parcel/transformer-js/src/esmodule-helpers.js":"6NUV3"}],"fFqpG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _basicComponent = require("../../BasicComponent");
var _basicComponentDefault = parcelHelpers.interopDefault(_basicComponent);
class TabsContent extends _basicComponentDefault.default {
    constructor(){
        super("div");
        this.newClass([
            "tab-content"
        ]);
        this.HTMLRootElementTag.id = "myTabContent";
        this.HTMLRootElementTag.style.backgroundColor = "white";
        this.inner(`
            <div class="tab-pane fade show active p-3" id="procesor" role="tabpanel" aria-labelledby="procesor-tab">
                <p>Procesor (engl. central processing unit - CPU, hrv. "središnja jedinica za obradbu", obradnik), glavni je dio računala koji vođen zadanim programskim naredbama izvodi osnovne radnje nad podacima. Središnji procesor nadzire odnosno izvršava glavni program i tipično upravlja i svim ostalim dijelovima računala. Danas (2020.) središnja jedinica za obradbu načinjena je od tranzistora, tipično u CMOS izvedbi, planarnom tehnologijom na siliciju ili drugom poluvodičkom monokristalu. Visoko integrirani krugovi koji sadrže sve funkcije središnje jedinice za obradbu nazivaju se mikroprocesori.</p>
            </div>
            <div class="tab-pane fade p-3" id="gpu" role="tabpanel" aria-labelledby="gpu-tab">
                <p>Grafička kartica je podsustav u računalu koji služi za prikazivanje slike na zaslonu monitora. Ona je zaslužna za ono što vidimo na zaslonu, bio to tekst, program ili igra. No, kako bi grafička kartica funkcionirala potrebno je instalirati odgovarajući upravljački program (eng. driver) koji dolazi na mediju za pripadnu grafičku karticu (obično na CD-u), ali se može naći i na Internetu. Grafička kartica može biti integrirana na matičnoj ploči ili dolazi kao zaseban dio. Povezana je računalom putem sabirnice. Svaka kartica na sebi ima procesor, solidnu količinu memorije važnu za igranje te još neke elemente. Grafička kartica može imati jedan ili više izlaza. Većina novih grafičkih kartica ima 3 izlaza.</p>
            </div>
            <div class="tab-pane fade p-3" id="hdd" role="tabpanel" aria-labelledby="hdd-tab">
                <p>Tvrdi disk (engl. Hard Disk, prevodi se i kao kruti disk ili čvrsti disk) sekundarna je jedinica za pohranu podataka u računalima. Tvrdi diskovi su se pojavili na tehnološkoj sceni 1956. godine, kao izum tvrtke IBM, i nakon svog izlaska na tržište postala dominantna tehnologija za sekundarno pohranjivanje podataka u tipičnim računalnim sistemima tokom 1960-tih. Danas (2019.) tvrdi diskovi rabe se u mnogim računalnim sustavima, a nedavne inovacije u tehnologijama kao tvrdi diskovi bez pokretnih koji rabe tehnologije flash memorija i NAND tehnologije, polako počinju potiskivati magnetske diskove s pojedinih sustava kao što su prijenosnici. Tvrdi diskovi zbog neprekidnog razvoja i usvajanja novih tehnoloških rješenja još su najprivlačniji kao tehnologija za sekundarno pohranjivanje podataka što se tiče odnosa sljedećih svojstava: nosivosti, brzine prijenosa podataka i cijene.</p>
            </div>
            <div class="tab-pane fade p-3" id="ram" role="tabpanel" aria-labelledby="ram-tab">
                <p>RAM (kratica od Random Access Memory - memorija s nasumičnim pristupom) je oblik primarne računalne memorije čijem se sadržaju može izravno pristupiti, za razliku od sekvencijskih memorijskih uređaja kao što su magnetne vrpce, CD i DVD diskovi te tvrdi diskovi, u kojima pristup određenom sadržaju ovisi o položaju čitača. RAM omogućuje upisivanje i čitanje podataka, za razliku od ROM-a, iz kojeg se podatci mogu samo čitati. U RAM se upisuju aktivni programi, te informacije potrebne za trenutačan rad računala. Ima mnogo veću memoriju od ROM-a.</p>
            </div>      
        `);
    }
}
module.exports = TabsContent;

},{"../../BasicComponent":"4M4Zv","@parcel/transformer-js/src/esmodule-helpers.js":"6NUV3"}],"g3aQg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _rowComponent = require("../RowComponent");
var _rowComponentDefault = parcelHelpers.interopDefault(_rowComponent);
var _basicComponent = require("../../BasicComponent");
var _basicComponentDefault = parcelHelpers.interopDefault(_basicComponent);
var _startButtonComponent = require("./StartButtonComponent");
var _startButtonComponentDefault = parcelHelpers.interopDefault(_startButtonComponent);
var _pccomponentForm = require("./PCComponentForm");
var _pccomponentFormDefault = parcelHelpers.interopDefault(_pccomponentForm);
var _pccomponentsList = require("./PCComponentsList");
var _pccomponentsListDefault = parcelHelpers.interopDefault(_pccomponentsList);
var _buildController = require("./BuildController");
var _buildControllerDefault = parcelHelpers.interopDefault(_buildController);
var _controller = require("../../../Controller/Controller");
var _controllerDefault = parcelHelpers.interopDefault(_controller);
class BuildPC extends _rowComponentDefault.default {
    constructor(){
        super();
        this.newClass([
            "p-3"
        ]);
        this.startButtonInit();
        _buildControllerDefault.default.addEventListener("start", ()=>{
            this.startButtonInit();
        });
        _buildControllerDefault.default.addEventListener("search", (event)=>{
            this.componentFormInit(event.detail);
        });
        _buildControllerDefault.default.addEventListener("choose", (event)=>{
            this.componentListInit(event.detail);
        });
    }
    startButtonInit() {
        this.inner("");
        setTimeout(()=>{
            document.getElementsByTagName("button")[0].addEventListener("click", ()=>{
                _controllerDefault.default.initHomeComp();
            });
        }, 100);
        let firstCol = new _basicComponentDefault.default("div");
        firstCol.newClass([
            "col-xl-3",
            "col-md-2",
            "col-sm-12"
        ]);
        firstCol.inner(`
            <button class="carousel-control-prev" type="button">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
        `);
        this.appendC(firstCol);
        let col = new _basicComponentDefault.default("div");
        col.newClass([
            "col-12"
        ]);
        let startButton = new _startButtonComponentDefault.default();
        col.appendC(startButton);
        col.HTMLRootElementTag.style.marginTop = "10rem";
        this.appendC(col);
    }
    componentFormInit(detail) {
        let col = new _basicComponentDefault.default("div");
        col.newClass([
            "col-md-4",
            "col-sm-6",
            "col-xs-12",
            "bg-white",
            "p-3"
        ]);
        let pccomponentForm = new _pccomponentFormDefault.default(detail);
        col.appendC(pccomponentForm);
        col.HTMLRootElementTag.style.marginTop = "10rem";
        this.appendC(col);
    }
    componentListInit(detail) {
        let col = new _basicComponentDefault.default("div");
        col.newClass([
            "col-md-8",
            "col-sm-6",
            "col-xs-12",
            "bg-white",
            "p-3"
        ]);
        let pccomponentList = new _pccomponentsListDefault.default(detail.detail, detail.params);
        col.appendC(pccomponentList);
        col.HTMLRootElementTag.style.marginTop = "10rem";
        this.appendC(col);
    }
}
module.exports = BuildPC;

},{"../RowComponent":"c8fVx","../../BasicComponent":"4M4Zv","./StartButtonComponent":"euqRl","./PCComponentForm":"3h9dl","./PCComponentsList":"6CbXn","./BuildController":"OsQd9","../../../Controller/Controller":"iAHp7","@parcel/transformer-js/src/esmodule-helpers.js":"6NUV3"}],"euqRl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _basicComponent = require("../../BasicComponent");
var _basicComponentDefault = parcelHelpers.interopDefault(_basicComponent);
var _buildController = require("./BuildController");
var _buildControllerDefault = parcelHelpers.interopDefault(_buildController);
class StartButton extends _basicComponentDefault.default {
    constructor(){
        super("button");
        this.newClass([
            "btn",
            "btn-lg",
            "btn-primary",
            "position-absolute",
            "start-50",
            "translate-middle"
        ]);
        this.inner("Započni");
        this.HTMLRootElementTag.addEventListener("click", ()=>{
            _buildControllerDefault.default.start();
        });
    }
}
module.exports = StartButton;

},{"../../BasicComponent":"4M4Zv","./BuildController":"OsQd9","@parcel/transformer-js/src/esmodule-helpers.js":"6NUV3"}],"OsQd9":[function(require,module,exports) {
var _buildModel = require("./BuildModel");
class BuildController extends EventTarget {
    constructor(){
        super();
    }
    start() {
        Object.keys(_buildModel.PCBase).forEach((key)=>{
            _buildModel.PCBase[key] = "";
        });
        this.dispatchEvent(new CustomEvent("start"));
        this.search();
    }
    search() {
        let currentComponent = "";
        const array = Object.keys(_buildModel.PCBase);
        for(let index = 0; index < array.length; index++){
            const emptyCheck = _buildModel.PCBase[array[index]];
            if (emptyCheck == "") {
                currentComponent = array[index];
                break;
            }
        }
        const baseArray = Object.keys(_buildModel.base);
        for(let index1 = 0; index1 < baseArray.length; index1++){
            const matchCheck = baseArray[index1];
            if (matchCheck == currentComponent) this.dispatchEvent(new CustomEvent("search", {
                detail: _buildModel.base[matchCheck]
            }));
        }
    }
    choose(detail, params) {
        this.dispatchEvent(new CustomEvent("choose", {
            detail: {
                detail: detail,
                params: params
            }
        }));
    }
    set(detail) {
        _buildModel.PCBase[detail.componentName] = detail;
        this.search();
    }
}
let buildController = new BuildController();
module.exports = buildController;

},{"./BuildModel":"lXlIf"}],"lXlIf":[function(require,module,exports) {
let PCBase = {
    CPU: "",
    GPU: "",
    HDD: "",
    RAM: ""
};
let base = {
    CPU: {
        componentName: "CPU",
        firstInput: {
            name: "Brend",
            options: [
                "Intel",
                "AMD"
            ]
        },
        secondInput: {
            name: "Generacija",
            options: [
                "3",
                "5",
                "7",
                "9"
            ]
        },
        apiUrl: "https://top-computer-parts.p.rapidapi.com/top/500/cpu",
        filter: function(elementData, params) {
            if (elementData[2] == params.firstParam) {
                if (elementData[3][6] == params.secondParam && elementData[3][6] != "X") return true;
                else if (elementData[3][6] == "T" && elementData[3][7] == "R" && params.secondParam == "9") return true;
                else if (elementData[3][6] == "E" && params.secondParam == "3") return true;
                else if (elementData[3][5] == "W" && params.secondParam == "7") return true;
                else if (elementData[3][5] == "X" && params.secondParam == "3") return true;
                else if (elementData[3][5] == "E" && params.secondParam == "3") return true;
                else if (elementData[3][5] == "L" && params.secondParam == "3") return true;
                else if (elementData[3][5] == "2" && params.secondParam == "3") return true;
                else if (elementData[3][0] == "P" && elementData[3][1] == "L" && params.secondParam == "3") return true;
                else if (elementData[3][0] == "P" && elementData[3][1] == "H" && params.secondParam == "3") return true;
                else if (elementData[3][0] == "A" && params.secondParam == "3") return true;
                else if (elementData[3][0] == "F" && params.secondParam == "3") return true;
                else return false;
            } else return false;
        }
    },
    HDD: {
        componentName: "HDD",
        firstInput: {
            name: "Brend",
            options: [
                "WD",
                "HGST",
                "Seagate",
                "Toshiba",
                "Hitachi",
                "Samsung"
            ]
        },
        secondInput: {
            name: "Kapacitet (TB)",
            options: [
                "12",
                "10",
                "8",
                "6",
                "5",
                "4",
                "3",
                "2.5",
                "2",
                "1.5",
                "1"
            ]
        },
        apiUrl: "https://top-computer-parts.p.rapidapi.com/hdd",
        filter: function(elementData, params) {
            if (elementData[2] == params.firstParam) {
                if (elementData[3].indexOf("TB") != -1) {
                    let element = elementData[3].split("TB");
                    element = element[0].split(" ");
                    element = element[element.length - 1];
                    if (element == params.secondParam) return true;
                    else return false;
                } else return false;
            } else return false;
        }
    },
    RAM: {
        componentName: "RAM",
        firstInput: {
            name: "Brend",
            options: [
                "G.SKILL",
                "Crucial",
                "Corsair",
                "HyperX"
            ]
        },
        secondInput: {
            name: "Nema parametara",
            options: []
        },
        apiUrl: "https://top-computer-parts.p.rapidapi.com/ram",
        filter: function(elementData, params) {
            if (elementData[2] == params.firstParam) return true;
            else return false;
        }
    },
    GPU: {
        componentName: "GPU",
        firstInput: {
            name: "Brend",
            options: [
                "Nvidia",
                "Zotac",
                "Asus",
                "MSI",
                "Gigabyte",
                "EVGA",
                "AMD"
            ]
        },
        secondInput: {
            name: "Nema parametara",
            options: []
        },
        apiUrl: "https://top-computer-parts.p.rapidapi.com/gpu",
        filter: function(elementData, params) {
            if (elementData[2] == params.firstParam) return true;
            else return false;
        }
    }
};
module.exports = {
    PCBase,
    base
};

},{}],"3h9dl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _basicComponent = require("../../BasicComponent");
var _basicComponentDefault = parcelHelpers.interopDefault(_basicComponent);
var _buildController = require("./BuildController");
var _buildControllerDefault = parcelHelpers.interopDefault(_buildController);
class PCComponentForm extends _basicComponentDefault.default {
    constructor(detail){
        super("form");
        this.HTMLRootElementTag.addEventListener("submit", (e)=>{
            e.preventDefault();
        });
        let header = new _basicComponentDefault.default("h2");
        header.inner(detail.componentName);
        this.appendC(header);
        let labelOne = new _basicComponentDefault.default("label");
        labelOne.newClass([
            "form-label"
        ]);
        labelOne.inner(detail.firstInput.name);
        this.appendC(labelOne);
        let selectOne = new _basicComponentDefault.default("select");
        selectOne.newClass([
            "form-select"
        ]);
        detail.firstInput.options.forEach((element)=>{
            let option = new _basicComponentDefault.default("option");
            option.inner(element);
            selectOne.appendC(option);
        });
        this.appendC(selectOne);
        let labelTwo = new _basicComponentDefault.default("label");
        labelTwo.newClass([
            "form-label"
        ]);
        labelTwo.inner(detail.secondInput.name);
        this.appendC(labelTwo);
        let selectTwo = new _basicComponentDefault.default("select");
        selectTwo.newClass([
            "form-select"
        ]);
        detail.secondInput.options.forEach((element)=>{
            let option = new _basicComponentDefault.default("option");
            option.inner(element);
            selectTwo.appendC(option);
        });
        this.appendC(selectTwo);
        this.appendC(new _basicComponentDefault.default("hr"));
        let submit = new _basicComponentDefault.default("button");
        submit.newClass([
            "btn",
            "btn-primary",
            "float-end"
        ]);
        submit.inner("Submit");
        submit.HTMLRootElementTag.type = "submit";
        submit.HTMLRootElementTag.addEventListener("click", ()=>{
            submit.newClass([
                "disabled"
            ]);
            let params = {
                firstParam: selectOne.HTMLRootElementTag.value,
                secondParam: selectTwo.HTMLRootElementTag.value
            };
            _buildControllerDefault.default.choose(detail, params);
        });
        this.appendC(submit);
    }
}
module.exports = PCComponentForm;

},{"../../BasicComponent":"4M4Zv","./BuildController":"OsQd9","@parcel/transformer-js/src/esmodule-helpers.js":"6NUV3"}],"6CbXn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _basicComponent = require("../../BasicComponent");
var _basicComponentDefault = parcelHelpers.interopDefault(_basicComponent);
var _buildController = require("./BuildController");
var _buildControllerDefault = parcelHelpers.interopDefault(_buildController);
class PCComponentList extends _basicComponentDefault.default {
    constructor(detail, params){
        super("div");
        this.HTMLRootElementTag.style.whiteSpace = "nowrap";
        this.HTMLRootElementTag.style.overflow = "auto";
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'top-computer-parts.p.rapidapi.com',
                'X-RapidAPI-Key': '7a8d5a0befmshbb2a2a67720020ep177018jsn7a06eeb87e91'
            }
        };
        fetch(detail.apiUrl, options).then((response)=>response.json()
        ).then((data)=>{
            data.forEach((element)=>{
                element = element.split(",");
                if (detail.filter(element, params)) {
                    let newComp = new _basicComponentDefault.default("div");
                    newComp.HTMLRootElementTag.style.display = "inline-block";
                    newComp.HTMLRootElementTag.style.float = "none";
                    newComp.HTMLRootElementTag.style.height = "300px";
                    newComp.inner(`
                        <div class="card" style="width: 18rem;">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Brand: ${element[2]}</li>
                                <li class="list-group-item">Model: ${element[3]}</li>
                            </ul>
                            <div class="card-footer">
                                <a href="${element[7]}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">More info</a>
                            </div>
                        </div>
                    `);
                    newComp.HTMLRootElementTag.addEventListener("click", ()=>{
                        _buildControllerDefault.default.set(detail);
                    });
                    this.appendC(newComp);
                }
            });
        }).catch((err)=>console.error(err)
        );
    }
}
module.exports = PCComponentList;

},{"../../BasicComponent":"4M4Zv","./BuildController":"OsQd9","@parcel/transformer-js/src/esmodule-helpers.js":"6NUV3"}]},["32Gky","8lqZg"], "8lqZg", "parcelRequire94c2")

//# sourceMappingURL=index.975ef6c8.js.map
