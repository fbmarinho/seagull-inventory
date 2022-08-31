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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/container */ \"./src/components/container.ts\");\n/* harmony import */ var _components_equipment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/equipment */ \"./src/components/equipment.ts\");\n\n\nfunction App() {\n    let box = new _components_container__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ x: 100, y: 100, angle: 0 }, { length: 2, depth: 2, height: 2 });\n    let basket = new _components_container__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ x: 300, y: 100, angle: 0 }, { length: 14, depth: 1.1, height: 1.1 });\n    let basket1 = new _components_container__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ x: 300, y: 200, angle: 0 }, { length: 8, depth: 1.1, height: 1.1 });\n    box.addEquipment(new _components_equipment__WEBPACK_IMPORTED_MODULE_1__[\"default\"](1, 'Kit'));\n    box.setLocation('Pipe deck');\n    console.log(box);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUNBO0FBRS9DLFNBQVMsR0FBRztJQUdSLElBQUksR0FBRyxHQUFHLElBQUksNkRBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUUsTUFBTSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDakYsSUFBSSxNQUFNLEdBQUcsSUFBSSw2REFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQyxFQUFFLEVBQUUsS0FBSyxFQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztJQUN6RixJQUFJLE9BQU8sR0FBRyxJQUFJLDZEQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsR0FBRyxFQUFFLE1BQU0sRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO0lBR3pGLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSw2REFBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUVyQixDQUFDO0FBRUQsaUVBQWUsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3B0cy8uL3NyYy9hcHAudHM/MDY2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInO1xuaW1wb3J0IEVxdWlwbWVudCBmcm9tICcuL2NvbXBvbmVudHMvZXF1aXBtZW50JztcblxuZnVuY3Rpb24gQXBwKCkge1xuICAgIFxuICAgIFxuICAgIGxldCBib3ggPSBuZXcgQ29udGFpbmVyKHt4OjEwMCwgeToxMDAsIGFuZ2xlOiAwfSwge2xlbmd0aDoyLCBkZXB0aDoyLCBoZWlnaHQ6Mn0pO1xuICAgIGxldCBiYXNrZXQgPSBuZXcgQ29udGFpbmVyKHt4OjMwMCwgeToxMDAsIGFuZ2xlOiAwfSwge2xlbmd0aDoxNCwgZGVwdGg6MS4xLCBoZWlnaHQ6MS4xfSk7XG4gICAgbGV0IGJhc2tldDEgPSBuZXcgQ29udGFpbmVyKHt4OjMwMCwgeToyMDAsIGFuZ2xlOiAwfSwge2xlbmd0aDo4LCBkZXB0aDoxLjEsIGhlaWdodDoxLjF9KTtcbiAgICBcbiAgICBcbiAgICBib3guYWRkRXF1aXBtZW50KG5ldyBFcXVpcG1lbnQoMSwgJ0tpdCcpKTtcbiAgICBib3guc2V0TG9jYXRpb24oJ1BpcGUgZGVjaycpO1xuICAgIGNvbnNvbGUubG9nKGJveCk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ }),

/***/ "./src/components/container.ts":
/*!*************************************!*\
  !*** ./src/components/container.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _drawing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawing */ \"./src/components/drawing.ts\");\n\nclass Container extends _drawing__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(pos, dimension) {\n        super(pos, dimension);\n        this.content = [];\n    }\n    addEquipment(equipment) {\n        this.content.push(equipment);\n    }\n    removeEquipment(equipment) {\n        this.content = this.content.filter((e) => e.id != equipment.id);\n    }\n    setLocation(location) {\n        this.location = location;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb250YWluZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0M7QUFHaEMsTUFBTSxTQUFVLFNBQVEsZ0RBQU87SUFHN0IsWUFBWSxHQUFhLEVBQUUsU0FBb0I7UUFDN0MsS0FBSyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0QsWUFBWSxDQUFDLFNBQW9CO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCxlQUFlLENBQUMsU0FBb0I7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDRCxXQUFXLENBQUMsUUFBZTtRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUFFRCxpRUFBZSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cHRzLy4vc3JjL2NvbXBvbmVudHMvY29udGFpbmVyLnRzPzExYzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERyYXdpbmcgZnJvbSAnLi9kcmF3aW5nJztcbmltcG9ydCBFcXVpcG1lbnQgZnJvbSAnLi9lcXVpcG1lbnQnO1xuXG5jbGFzcyBDb250YWluZXIgZXh0ZW5kcyBEcmF3aW5nIHtcbiAgY29udGVudDogRXF1aXBtZW50W107XG4gIGxvY2F0aW9uPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwb3M6IFBvc2l0aW9uLCBkaW1lbnNpb246IERpbWVuc2lvbil7XG4gICAgc3VwZXIocG9zLCBkaW1lbnNpb24pO1xuICAgIHRoaXMuY29udGVudCA9IFtdO1xuICB9XG4gIGFkZEVxdWlwbWVudChlcXVpcG1lbnQ6IEVxdWlwbWVudCl7XG4gICAgdGhpcy5jb250ZW50LnB1c2goZXF1aXBtZW50KTtcbiAgfVxuICByZW1vdmVFcXVpcG1lbnQoZXF1aXBtZW50OiBFcXVpcG1lbnQpe1xuICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudC5maWx0ZXIoKGUpPT5lLmlkICE9IGVxdWlwbWVudC5pZCk7XG4gIH1cbiAgc2V0TG9jYXRpb24obG9jYXRpb246c3RyaW5nKXtcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/container.ts\n");

/***/ }),

/***/ "./src/components/drawing.ts":
/*!***********************************!*\
  !*** ./src/components/drawing.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Drawing)\n/* harmony export */ });\nclass Drawing {\n    constructor(pos, dimension) {\n        this.ctx = STAGE.context;\n        this.pos = pos;\n        this.dimension = dimension;\n        STAGE.attach(this);\n    }\n    draw() {\n        let w = this.m2Pix(this.dimension.length);\n        let h = this.m2Pix(this.dimension.depth);\n        this.ctx.fillStyle = \"#ccc\";\n        this.ctx.strokeStyle = \"#000\";\n        this.ctx.rotate(this.pos.angle || 0);\n        this.ctx.beginPath();\n        this.ctx.rect(this.pos.x, this.pos.y, w, h);\n        this.ctx.closePath();\n        this.ctx.stroke();\n        this.ctx.fill();\n    }\n    m2Pix(n) {\n        let scale = this.dimension.scale || 1;\n        return n * 10 * scale;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kcmF3aW5nLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxNQUFNLE9BQU87SUFJMUIsWUFBWSxHQUFhLEVBQUUsU0FBb0I7UUFDN0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSTtRQUNGLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNPLEtBQUssQ0FBQyxDQUFRO1FBQ3BCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBQyxFQUFFLEdBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dwdHMvLi9zcmMvY29tcG9uZW50cy9kcmF3aW5nLnRzPzQ2OWQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd2luZyB7XG4gIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBwb3M6IFBvc2l0aW9uO1xuICBkaW1lbnNpb246IERpbWVuc2lvbjtcbiAgY29uc3RydWN0b3IocG9zOiBQb3NpdGlvbiwgZGltZW5zaW9uOiBEaW1lbnNpb24pe1xuICAgIHRoaXMuY3R4ID0gU1RBR0UuY29udGV4dDtcbiAgICB0aGlzLnBvcyA9IHBvcztcbiAgICB0aGlzLmRpbWVuc2lvbiA9IGRpbWVuc2lvbjtcbiAgICBTVEFHRS5hdHRhY2godGhpcyk7XG4gIH1cbiAgZHJhdygpe1xuICAgIGxldCB3ID0gdGhpcy5tMlBpeCh0aGlzLmRpbWVuc2lvbi5sZW5ndGgpO1xuICAgIGxldCBoID0gdGhpcy5tMlBpeCh0aGlzLmRpbWVuc2lvbi5kZXB0aCk7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjY2NjXCI7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIiMwMDBcIjtcbiAgICB0aGlzLmN0eC5yb3RhdGUodGhpcy5wb3MuYW5nbGUgfHwgMClcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5yZWN0KHRoaXMucG9zLngsIHRoaXMucG9zLnksIHcsIGgpO1xuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgfVxuICBwcml2YXRlIG0yUGl4KG46bnVtYmVyKXtcbiAgICBsZXQgc2NhbGUgPSB0aGlzLmRpbWVuc2lvbi5zY2FsZSB8fCAxO1xuICAgIHJldHVybiBuKjEwKnNjYWxlO1xuICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/drawing.ts\n");

/***/ }),

/***/ "./src/components/equipment.ts":
/*!*************************************!*\
  !*** ./src/components/equipment.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Equipment {\n    constructor(id, description) {\n        this.id = id;\n        this.description = description;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Equipment);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9lcXVpcG1lbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sU0FBUztJQUdiLFlBQVksRUFBUyxFQUFFLFdBQW9CO1FBQ3pDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRTtRQUNaLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVztJQUNoQyxDQUFDO0NBQ0Y7QUFFRCxpRUFBZSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3B0cy8uL3NyYy9jb21wb25lbnRzL2VxdWlwbWVudC50cz9kOTg4Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEVxdWlwbWVudCB7XG4gIGlkXG4gIGRlc2NyaXB0aW9uXG4gIGNvbnN0cnVjdG9yKGlkOm51bWJlciwgZGVzY3JpcHRpb24/OiBzdHJpbmcpe1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVxdWlwbWVudCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/equipment.ts\n");

/***/ }),

/***/ "./src/components/stage.ts":
/*!*********************************!*\
  !*** ./src/components/stage.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Stage {\n    constructor(id, width, height) {\n        this.canvas = id ? this.getCanvasElement(id) : this.createCanvasElement();\n        this.context = this.canvas.getContext('2d');\n        this.render = [];\n        this.canvas.width = width || window.innerWidth;\n        this.canvas.height = height || window.innerHeight;\n        this.start();\n    }\n    start() {\n        this.animate();\n        console.log('Started');\n    }\n    attach(object) {\n        this.render.push(object);\n    }\n    draw() {\n        var _a;\n        (_a = this.render) === null || _a === void 0 ? void 0 : _a.forEach(e => e.draw());\n    }\n    animate() {\n        this.draw();\n        requestAnimationFrame(() => this.animate());\n    }\n    createCanvasElement() {\n        let canvas = document.createElement('canvas');\n        canvas.id = \"main\";\n        document.body.appendChild(canvas);\n        return canvas;\n    }\n    getCanvasElement(id) {\n        return document.getElementById(id);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zdGFnZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBR0EsTUFBTSxLQUFLO0lBSVQsWUFBWSxFQUFVLEVBQUUsS0FBYyxFQUFFLE1BQWU7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDMUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQTZCLENBQUM7UUFDeEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDbEQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNPLEtBQUs7UUFDWCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxNQUFNLENBQUMsTUFBYztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ08sSUFBSTs7UUFDVixVQUFJLENBQUMsTUFBTSwwQ0FBRSxPQUFPLENBQUMsQ0FBQyxHQUFFLEVBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTyxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1oscUJBQXFCLENBQUMsR0FBRSxFQUFFLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDTyxtQkFBbUI7UUFDekIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQXNCLENBQUM7UUFDbkUsTUFBTSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFDbkIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUNPLGdCQUFnQixDQUFDLEVBQVM7UUFDaEMsT0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBc0IsQ0FBQztJQUMxRCxDQUFDO0NBQ0Y7QUFFRCxpRUFBZSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cHRzLy4vc3JjL2NvbXBvbmVudHMvc3RhZ2UudHM/ZWZjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSVN0YWdlIGZyb20gJy4uL2ludGVyZmFjZXMvc3RhZ2UnO1xuaW1wb3J0IERyYXdpbmcgZnJvbSAnLi9kcmF3aW5nJztcblxuY2xhc3MgU3RhZ2UgaW1wbGVtZW50cyBJU3RhZ2Uge1xuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIHJlbmRlcjogRHJhd2luZ1tdO1xuICBjb25zdHJ1Y3RvcihpZD86c3RyaW5nLCB3aWR0aD86IG51bWJlciwgaGVpZ2h0PzogbnVtYmVyKXtcbiAgICB0aGlzLmNhbnZhcyA9IGlkID8gdGhpcy5nZXRDYW52YXNFbGVtZW50KGlkKSA6IHRoaXMuY3JlYXRlQ2FudmFzRWxlbWVudCgpO1xuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHRoaXMucmVuZGVyID0gW107XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aCB8fCB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQgfHwgd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMuc3RhcnQoKTtcbiAgfVxuICBwcml2YXRlIHN0YXJ0KCl7XG4gICAgdGhpcy5hbmltYXRlKCk7XG4gICAgY29uc29sZS5sb2coJ1N0YXJ0ZWQnKTtcbiAgfVxuICBhdHRhY2gob2JqZWN0OkRyYXdpbmcpe1xuICAgIHRoaXMucmVuZGVyLnB1c2gob2JqZWN0KTtcbiAgfVxuICBwcml2YXRlIGRyYXcoKXtcbiAgICB0aGlzLnJlbmRlcj8uZm9yRWFjaChlPT5lLmRyYXcoKSk7XG4gIH1cbiAgcHJpdmF0ZSBhbmltYXRlKCl7XG4gICAgdGhpcy5kcmF3KCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpPT50aGlzLmFuaW1hdGUoKSk7XG4gIH1cbiAgcHJpdmF0ZSBjcmVhdGVDYW52YXNFbGVtZW50KCk6SFRNTENhbnZhc0VsZW1lbnR7XG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgIGNhbnZhcy5pZCA9IFwibWFpblwiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICByZXR1cm4gY2FudmFzO1xuICB9XG4gIHByaXZhdGUgZ2V0Q2FudmFzRWxlbWVudChpZDpzdHJpbmcpOkhUTUxDYW52YXNFbGVtZW50e1xuICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhZ2U7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/stage.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.ts\");\n/* harmony import */ var _components_stage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/stage */ \"./src/components/stage.ts\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    globalThis.STAGE = new _components_stage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('main', 800, 600);\n    (0,_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    console.log('App loaded...');\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXdCO0FBQ2U7QUFFdkMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUUsRUFBRTtJQUNoRCxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUkseURBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLGdEQUFHLEVBQUUsQ0FBQztJQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3B0cy8uL3NyYy9pbmRleC50cz9mZmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuaW1wb3J0IFN0YWdlIGZyb20gJy4vY29tcG9uZW50cy9zdGFnZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKT0+e1xuICBnbG9iYWxUaGlzLlNUQUdFID0gbmV3IFN0YWdlKCdtYWluJywgODAwLCA2MDApO1xuICBBcHAoKTtcbiAgY29uc29sZS5sb2coJ0FwcCBsb2FkZWQuLi4nKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;