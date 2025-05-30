/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/accordion.js":
/*!**********************************!*\
  !*** ./src/scripts/accordion.js ***!
  \**********************************/
/***/ (() => {

// accordion
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".accordion__trigger").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var _trigger$querySelecto;
      var content = trigger.nextElementSibling;
      var isExpanded = trigger.getAttribute("aria-expanded") === "true";
      document.querySelectorAll(".accordion__trigger").forEach(function (t) {
        if (t !== trigger) {
          var _t$querySelector;
          t.setAttribute("aria-expanded", "false");
          t.nextElementSibling.hidden = true;
          (_t$querySelector = t.querySelector(".accordion__icon")) === null || _t$querySelector === void 0 || _t$querySelector.classList.remove("accordion__icon--rotated");
        }
      });
      trigger.setAttribute("aria-expanded", !isExpanded);
      content.hidden = isExpanded;
      (_trigger$querySelecto = trigger.querySelector(".accordion__icon")) === null || _trigger$querySelecto === void 0 || _trigger$querySelecto.classList.toggle("accordion__icon--rotated");
    });
  });
});

/***/ }),

/***/ "./src/scripts/alert.js":
/*!******************************!*\
  !*** ./src/scripts/alert.js ***!
  \******************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var alert = document.querySelector('.alert');
  var closeBtn = document.querySelector('.alert__close');
  setTimeout(function () {
    alert === null || alert === void 0 || alert.removeAttribute('hidden');
    requestAnimationFrame(function () {
      alert === null || alert === void 0 || alert.classList.add('show');
    });
  }, 1000);
  closeBtn === null || closeBtn === void 0 || closeBtn.addEventListener('click', function () {
    alert === null || alert === void 0 || alert.classList.remove('show');
    setTimeout(function () {
      alert === null || alert === void 0 || alert.setAttribute('hidden', '');
    }, 300);
  });
});

/***/ }),

/***/ "./src/scripts/background.js":
/*!***********************************!*\
  !*** ./src/scripts/background.js ***!
  \***********************************/
/***/ (() => {

var container = document.createElement("div");
container.classList.add("background-container");
for (var i = 0; i < 50; i++) {
  var line = document.createElement("div");
  line.classList.add("line");
  line.style.left = "".concat(Math.random() * 100, "vw");
  line.style.animationDuration = "".concat(Math.random() * 3 + 2, "s");
  line.style.animationDelay = "".concat(Math.random() * 2, "s");
  container.appendChild(line);
}
document.body.appendChild(container);
document.body.appendChild(container);

/***/ }),

/***/ "./src/scripts/hamburger.js":
/*!**********************************!*\
  !*** ./src/scripts/hamburger.js ***!
  \**********************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.querySelector(".nav__list");
  toggle === null || toggle === void 0 || toggle.addEventListener("click", function () {
    var isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", !isExpanded);
    menu === null || menu === void 0 || menu.setAttribute("data-visible", !isExpanded);
  });
});

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion.js */ "./src/scripts/accordion.js");
/* harmony import */ var _accordion_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_accordion_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _background_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background.js */ "./src/scripts/background.js");
/* harmony import */ var _background_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_background_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hamburger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hamburger.js */ "./src/scripts/hamburger.js");
/* harmony import */ var _hamburger_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hamburger_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _popoveranddialog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popoveranddialog.js */ "./src/scripts/popoveranddialog.js");
/* harmony import */ var _popoveranddialog_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_popoveranddialog_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _alert_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.js */ "./src/scripts/alert.js");
/* harmony import */ var _alert_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_alert_js__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./src/scripts/popoveranddialog.js":
/*!*****************************************!*\
  !*** ./src/scripts/popoveranddialog.js ***!
  \*****************************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var markers = document.querySelectorAll(".timeline__marker");
  markers.forEach(function (marker) {
    var popover = marker.querySelector(".timeline__popover");
    marker.addEventListener("mouseover", function () {
      popover.style.display = "block";
      popover.style.left = "20px";
      popover.style.top = "0";
    });
    marker.addEventListener("mouseout", function () {
      popover.style.display = "none";
    });
    marker.addEventListener("click", function () {
      var dialogId = marker.getAttribute("data-dialog-id");
      var dialog = document.getElementById(dialogId);
      if (dialog) {
        dialog.style.display = "flex";
      }
    });
  });
  var closeButtons = document.querySelectorAll(".dialog__close");
  closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var dialog = button.closest(".dialog");
      dialog.style.display = "none";
    });
  });
  var dialogs = document.querySelectorAll(".dialog");
  dialogs.forEach(function (dialog) {
    dialog.addEventListener("click", function (e) {
      if (e.target === dialog) {
        dialog.style.display = "none";
      }
    });
  });
});

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/main": 0,
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio_front_end_pieterluypaert"] = self["webpackChunkportfolio_front_end_pieterluypaert"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["main"], () => (__webpack_require__("./src/scripts/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["main"], () => (__webpack_require__("./src/styles/main.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;