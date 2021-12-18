/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4129:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  res.status(200).json({
    name: 'John Doe'
  });
});

/***/ }),

/***/ 6837:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ next_serverless_loaderpage_2Fapi_2Fhello_absolutePagePath_private_next_pages_2Fapi_2Fhello_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolute404Path_distDir_private_dot_next_buildId_HOFk4_c1EK8cM3JJFTmZk_assetPrefix_generateEtags_true_poweredByHeader_true_canonicalBase_basePath_runtimeConfig_previewProps_7B_22previewModeId_22_3A_2287870e0cc6430b07079273d28bd50bf6_22_2C_22previewModeSigningKey_22_3A_22a752569430250502c41e58d62fa5b106d5faa05770be524f0b36f3d437b79171_22_2C_22previewModeEncryptionKey_22_3A_2280207578dfaf4f3ceec7529206e2cc5c4d74b521bb140b88f081a49b761a6c31_22_7D_loadedEnvFiles_W10_3D_i18n_; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/next-server/server/node-polyfill-fetch.js
var node_polyfill_fetch = __webpack_require__(3660);
;// CONCATENATED MODULE: ./.next/routes-manifest.json
var routes_manifest_namespaceObject = {"Dg":[]};
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/api-handler.js
var api_handler = __webpack_require__(8277);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/index.js?page=%2Fapi%2Fhello&absolutePagePath=private-next-pages%2Fapi%2Fhello.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&absoluteErrorPath=next%2Fdist%2Fpages%2F_error&absolute404Path=&distDir=private-dot-next&buildId=HOFk4-c1EK8cM3JJFTmZk&assetPrefix=&generateEtags=true&poweredByHeader=true&canonicalBase=&basePath=&runtimeConfig=&previewProps=%7B%22previewModeId%22%3A%2287870e0cc6430b07079273d28bd50bf6%22%2C%22previewModeSigningKey%22%3A%22a752569430250502c41e58d62fa5b106d5faa05770be524f0b36f3d437b79171%22%2C%22previewModeEncryptionKey%22%3A%2280207578dfaf4f3ceec7529206e2cc5c4d74b521bb140b88f081a49b761a6c31%22%7D&loadedEnvFiles=W10%3D&i18n=!

        
      const { processEnv } = __webpack_require__(2333)
      processEnv([])
    
        
        const runtimeConfig = {}
        ;
        

        

        const combinedRewrites = Array.isArray(routes_manifest_namespaceObject.Dg)
          ? routes_manifest_namespaceObject.Dg
          : []

        if (!Array.isArray(routes_manifest_namespaceObject.Dg)) {
          combinedRewrites.push(...routes_manifest_namespaceObject.Dg.beforeFiles)
          combinedRewrites.push(...routes_manifest_namespaceObject.Dg.afterFiles)
          combinedRewrites.push(...routes_manifest_namespaceObject.Dg.fallback)
        }

        const apiHandler = (0,api_handler/* getApiHandler */.Y)({
          pageModule: __webpack_require__(4129),
          rewrites: combinedRewrites,
          i18n: undefined,
          page: "/api/hello",
          basePath: "",
          pageIsDynamic: false,
          encodedPreviewProps: {previewModeId:"87870e0cc6430b07079273d28bd50bf6",previewModeSigningKey:"a752569430250502c41e58d62fa5b106d5faa05770be524f0b36f3d437b79171",previewModeEncryptionKey:"80207578dfaf4f3ceec7529206e2cc5c4d74b521bb140b88f081a49b761a6c31"}
        })
        /* harmony default export */ var next_serverless_loaderpage_2Fapi_2Fhello_absolutePagePath_private_next_pages_2Fapi_2Fhello_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolute404Path_distDir_private_dot_next_buildId_HOFk4_c1EK8cM3JJFTmZk_assetPrefix_generateEtags_true_poweredByHeader_true_canonicalBase_basePath_runtimeConfig_previewProps_7B_22previewModeId_22_3A_2287870e0cc6430b07079273d28bd50bf6_22_2C_22previewModeSigningKey_22_3A_22a752569430250502c41e58d62fa5b106d5faa05770be524f0b36f3d437b79171_22_2C_22previewModeEncryptionKey_22_3A_2280207578dfaf4f3ceec7529206e2cc5c4d74b521bb140b88f081a49b761a6c31_22_7D_loadedEnvFiles_W10_3D_i18n_ = (apiHandler);
      

/***/ }),

/***/ 2308:
/***/ (function(module) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 2308;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 4293:
/***/ (function(module) {

"use strict";
module.exports = require("buffer");;

/***/ }),

/***/ 6417:
/***/ (function(module) {

"use strict";
module.exports = require("crypto");;

/***/ }),

/***/ 8614:
/***/ (function(module) {

"use strict";
module.exports = require("events");;

/***/ }),

/***/ 5747:
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 8605:
/***/ (function(module) {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ 7211:
/***/ (function(module) {

"use strict";
module.exports = require("https");;

/***/ }),

/***/ 5622:
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 1191:
/***/ (function(module) {

"use strict";
module.exports = require("querystring");;

/***/ }),

/***/ 2413:
/***/ (function(module) {

"use strict";
module.exports = require("stream");;

/***/ }),

/***/ 4304:
/***/ (function(module) {

"use strict";
module.exports = require("string_decoder");;

/***/ }),

/***/ 8835:
/***/ (function(module) {

"use strict";
module.exports = require("url");;

/***/ }),

/***/ 1669:
/***/ (function(module) {

"use strict";
module.exports = require("util");;

/***/ }),

/***/ 8761:
/***/ (function(module) {

"use strict";
module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = function() {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [956,652], function() { return __webpack_require__(6837); })
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [{"url":"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap","content":"@font-face{font-family:'Space Grotesk';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/spacegrotesk/v6/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj62UUsg.woff) format('woff')}@font-face{font-family:'Space Grotesk';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/spacegrotesk/v6/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7oUUsg.woff) format('woff')}@font-face{font-family:'Space Grotesk';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/spacegrotesk/v6/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7aUUsg.woff) format('woff')}@font-face{font-family:'Space Grotesk';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/spacegrotesk/v6/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj42Vksg.woff) format('woff')}@font-face{font-family:'Space Grotesk';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/spacegrotesk/v6/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj4PVksg.woff) format('woff')}@font-face{font-family:'Space Grotesk';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/spacegrotesk/v6/V8mDoQDjQSkFtoMM3T6r8E7mPb54C_k3HqUtEw.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Space Grotesk';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/spacegrotesk/v6/V8mDoQDjQSkFtoMM3T6r8E7mPb94C_k3HqUtEw.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Space Grotesk';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/spacegrotesk/v6/V8mDoQDjQSkFtoMM3T6r8E7mPbF4C_k3HqU.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Space Grotesk';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/spacegrotesk/v6/V8mDoQDjQSkFtoMM3T6r8E7mPb54C_k3HqUtEw.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Space Grotesk';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/spacegrotesk/v6/V8mDoQDjQSkFtoMM3T6r8E7mPb94C_k3HqUtEw.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Space Grotesk';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/spacegrotesk/v6/V8mDoQDjQSkFtoMM3T6r8E7mPbF4C_k3HqU.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Space Grotesk';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/spacegrotesk/v6/V8mDoQDjQSkFtoMM3T6r8E7mPb54C_k3HqUtEw.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Space Grotesk';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/spacegrotesk/v6/V8mDoQDjQSkFtoMM3T6r8E7mPb94C_k3HqUtEw.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Space Grotesk';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/spacegrotesk/v6/V8mDoQDjQSkFtoMM3T6r8E7mPbF4C_k3HqU.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Space Grotesk';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/spacegrotesk/v6/V8mDoQDjQSkFtoMM3T6r8E7mPb54C_k3HqUtEw.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Space Grotesk';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/spacegrotesk/v6/V8mDoQDjQSkFtoMM3T6r8E7mPb94C_k3HqUtEw.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Space Grotesk';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/spacegrotesk/v6/V8mDoQDjQSkFtoMM3T6r8E7mPbF4C_k3HqU.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Space Grotesk';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/spacegrotesk/v6/V8mDoQDjQSkFtoMM3T6r8E7mPb54C_k3HqUtEw.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Space Grotesk';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/spacegrotesk/v6/V8mDoQDjQSkFtoMM3T6r8E7mPb94C_k3HqUtEw.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Space Grotesk';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/spacegrotesk/v6/V8mDoQDjQSkFtoMM3T6r8E7mPbF4C_k3HqU.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}"}];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);/* webpack/runtime/require chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			453: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = function(chunkId) { return installedChunks[chunkId]; };
/******/ 		
/******/ 		var installChunk = function(chunk) {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	!function() {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			__webpack_require__.e(956);
/******/ 			__webpack_require__.e(652);
/******/ 			return next();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;