/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/getTodos.ts":
/*!***********************************!*\
  !*** ./src/functions/getTodos.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var src_utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/dynamodbClient */ \"./src/utils/dynamodbClient.ts\");\n\r\nconst handle = async (event) => {\r\n    const { user_id } = event.pathParameters;\r\n    const response = await src_utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_0__.document.query({\r\n        TableName: \"users_todos\",\r\n        KeyConditionExpression: \"user_id = :user_id\",\r\n        ExpressionAttributeValues: {\r\n            \":user_id\": user_id\r\n        }\r\n    }).promise();\r\n    return {\r\n        statusCode: 200,\r\n        body: JSON.stringify(response)\r\n    };\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2dldFRvZG9zLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvZnVuY3Rpb25zL2dldFRvZG9zLnRzP2Y2YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZG9jdW1lbnQgfSBmcm9tIFwic3JjL3V0aWxzL2R5bmFtb2RiQ2xpZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXJfaWQgfSA9IGV2ZW50LnBhdGhQYXJhbWV0ZXJzO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkb2N1bWVudC5xdWVyeSh7XHJcbiAgICAgICAgVGFibGVOYW1lOiBcInVzZXJzX3RvZG9zXCIsXHJcbiAgICAgICAgS2V5Q29uZGl0aW9uRXhwcmVzc2lvbjogXCJ1c2VyX2lkID0gOnVzZXJfaWRcIixcclxuICAgICAgICBFeHByZXNzaW9uQXR0cmlidXRlVmFsdWVzOiB7XHJcbiAgICAgICAgICAgIFwiOnVzZXJfaWRcIjogdXNlcl9pZFxyXG4gICAgICAgIH1cclxuICAgIH0pLnByb21pc2UoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXNwb25zZSlcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/getTodos.ts\n");

/***/ }),

/***/ "./src/utils/dynamodbClient.ts":
/*!*************************************!*\
  !*** ./src/utils/dynamodbClient.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"document\": () => (/* binding */ document)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst options = {\r\n    region: \"localhost\",\r\n    endpoint: \"http://localhost:8000\"\r\n};\r\nconst isOffline = () => {\r\n    return process.env.IS_OFFLINE;\r\n};\r\nconst document = isOffline()\r\n    ? new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient(options)\r\n    : new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZHluYW1vZGJDbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9zLy4vc3JjL3V0aWxzL2R5bmFtb2RiQ2xpZW50LnRzPzQ1MTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHluYW1vREJ9IGZyb20gXCJhd3Mtc2RrXCI7XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gICAgcmVnaW9uOiBcImxvY2FsaG9zdFwiLFxyXG4gICAgZW5kcG9pbnQ6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCJcclxufVxyXG5cclxuY29uc3QgaXNPZmZsaW5lID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52LklTX09GRkxJTkU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkb2N1bWVudCA9IGlzT2ZmbGluZSgpIFxyXG4gICAgPyBuZXcgRHluYW1vREIuRG9jdW1lbnRDbGllbnQob3B0aW9ucykgXHJcbiAgICA6IG5ldyBEeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/dynamodbClient.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/getTodos.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;