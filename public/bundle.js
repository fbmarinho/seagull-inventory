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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/container */ \"./src/components/container.ts\");\n/* harmony import */ var _components_equipment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/equipment */ \"./src/components/equipment.ts\");\n\n\nfunction App(ctx) {\n    let box = new _components_container__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, { x: 100, y: 100, angle: 0 }, { length: 2, depth: 2, height: 2 });\n    box.draw();\n    box.addEquipment(new _components_equipment__WEBPACK_IMPORTED_MODULE_1__[\"default\"](1, 'Kit'));\n    console.log(box);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUNBO0FBRS9DLFNBQVMsR0FBRyxDQUFDLEdBQTRCO0lBRXJDLElBQUksR0FBRyxHQUFHLElBQUksNkRBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ3RGLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNYLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSw2REFBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFckIsQ0FBQztBQUVELGlFQUFlLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dwdHMvLi9zcmMvYXBwLnRzPzA2NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJztcbmltcG9ydCBFcXVpcG1lbnQgZnJvbSAnLi9jb21wb25lbnRzL2VxdWlwbWVudCc7XG5cbmZ1bmN0aW9uIEFwcChjdHg6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG5cbiAgICBsZXQgYm94ID0gbmV3IENvbnRhaW5lcihjdHgsIHt4OjEwMCwgeToxMDAsIGFuZ2xlOiAwfSwge2xlbmd0aDoyLCBkZXB0aDoyLCBoZWlnaHQ6Mn0pO1xuICAgIGJveC5kcmF3KCk7XG4gICAgYm94LmFkZEVxdWlwbWVudChuZXcgRXF1aXBtZW50KDEsICdLaXQnKSk7XG4gICAgY29uc29sZS5sb2coYm94KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ }),

/***/ "./src/components/container.ts":
/*!*************************************!*\
  !*** ./src/components/container.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _drawing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawing */ \"./src/components/drawing.ts\");\n\nclass Container extends _drawing__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(ctx, pos, dimension) {\n        super(ctx, pos, dimension);\n        this.content = [];\n    }\n    addEquipment(equipment) {\n        this.content.push(equipment);\n    }\n    removeEquipment(equipment) {\n        this.content = this.content.filter((e) => e.id != equipment.id);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb250YWluZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFZ0M7QUFHaEMsTUFBTSxTQUFVLFNBQVEsZ0RBQU87SUFFN0IsWUFBWSxHQUE2QixFQUFFLEdBQWEsRUFBRSxTQUFvQjtRQUM1RSxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0QsWUFBWSxDQUFDLFNBQW9CO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCxlQUFlLENBQUMsU0FBb0I7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Q0FDRjtBQUVELGlFQUFlLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dwdHMvLi9zcmMvY29tcG9uZW50cy9jb250YWluZXIudHM/MTFjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFBvc2l0aW9uLCBEaW1lbnNpb24gfSBmcm9tICcuLi9zeXN0ZW0vdHlwZXMnO1xuaW1wb3J0IERyYXdpbmcgZnJvbSAnLi9kcmF3aW5nJztcbmltcG9ydCBFcXVpcG1lbnQgZnJvbSAnLi9lcXVpcG1lbnQnO1xuXG5jbGFzcyBDb250YWluZXIgZXh0ZW5kcyBEcmF3aW5nIHtcbiAgY29udGVudDogRXF1aXBtZW50W107XG4gIGNvbnN0cnVjdG9yKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBwb3M6IFBvc2l0aW9uLCBkaW1lbnNpb246IERpbWVuc2lvbil7XG4gICAgc3VwZXIoY3R4LCBwb3MsIGRpbWVuc2lvbik7XG4gICAgdGhpcy5jb250ZW50ID0gW107XG4gIH1cbiAgYWRkRXF1aXBtZW50KGVxdWlwbWVudDogRXF1aXBtZW50KXtcbiAgICB0aGlzLmNvbnRlbnQucHVzaChlcXVpcG1lbnQpO1xuICB9XG4gIHJlbW92ZUVxdWlwbWVudChlcXVpcG1lbnQ6IEVxdWlwbWVudCl7XG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LmZpbHRlcigoZSk9PmUuaWQgIT0gZXF1aXBtZW50LmlkKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/container.ts\n");

/***/ }),

/***/ "./src/components/drawing.ts":
/*!***********************************!*\
  !*** ./src/components/drawing.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Drawing)\n/* harmony export */ });\nclass Drawing {\n    constructor(ctx, pos, dimension) {\n        this.ctx = ctx;\n        this.pos = pos;\n        this.dimension = dimension;\n    }\n    draw() {\n        let w = this.m2Pix(this.dimension.length);\n        let h = this.m2Pix(this.dimension.depth);\n        this.ctx.rotate(this.pos.angle || 0);\n        this.ctx.beginPath();\n        this.ctx.rect(this.pos.x, this.pos.y, w, h);\n        this.ctx.closePath();\n        this.ctx.fill();\n    }\n    m2Pix(n) {\n        let scale = this.dimension.scale || 1;\n        return n * 100 * scale;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kcmF3aW5nLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFZSxNQUFNLE9BQU87SUFJMUIsWUFBWSxHQUE2QixFQUFFLEdBQWEsRUFBRSxTQUFvQjtRQUM1RSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQUk7UUFDRixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNPLEtBQUssQ0FBQyxDQUFRO1FBQ3BCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBQyxHQUFHLEdBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dwdHMvLi9zcmMvY29tcG9uZW50cy9kcmF3aW5nLnRzPzQ2OWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9zaXRpb24sIERpbWVuc2lvbiB9IGZyb20gJy4uL3N5c3RlbS90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdpbmcge1xuICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgcG9zOiBQb3NpdGlvbjtcbiAgZGltZW5zaW9uOiBEaW1lbnNpb247XG4gIGNvbnN0cnVjdG9yKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBwb3M6IFBvc2l0aW9uLCBkaW1lbnNpb246IERpbWVuc2lvbil7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgdGhpcy5kaW1lbnNpb24gPSBkaW1lbnNpb247XG4gIH1cbiAgZHJhdygpe1xuICAgIGxldCB3ID0gdGhpcy5tMlBpeCh0aGlzLmRpbWVuc2lvbi5sZW5ndGgpO1xuICAgIGxldCBoID0gdGhpcy5tMlBpeCh0aGlzLmRpbWVuc2lvbi5kZXB0aCk7XG4gICAgdGhpcy5jdHgucm90YXRlKHRoaXMucG9zLmFuZ2xlIHx8IDApXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHgucmVjdCh0aGlzLnBvcy54LCB0aGlzLnBvcy55LCB3LCBoKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLmN0eC5maWxsKCk7XG4gIH1cbiAgcHJpdmF0ZSBtMlBpeChuOm51bWJlcil7XG4gICAgbGV0IHNjYWxlID0gdGhpcy5kaW1lbnNpb24uc2NhbGUgfHwgMTtcbiAgICByZXR1cm4gbioxMDAqc2NhbGU7XG4gIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/drawing.ts\n");

/***/ }),

/***/ "./src/components/equipment.ts":
/*!*************************************!*\
  !*** ./src/components/equipment.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Equipment {\n    constructor(id, description) {\n        this.id = id;\n        this.description = description;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Equipment);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9lcXVpcG1lbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sU0FBUztJQUdiLFlBQVksRUFBUyxFQUFFLFdBQW9CO1FBQ3pDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRTtRQUNaLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVztJQUNoQyxDQUFDO0NBQ0Y7QUFFRCxpRUFBZSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3B0cy8uL3NyYy9jb21wb25lbnRzL2VxdWlwbWVudC50cz9kOTg4Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEVxdWlwbWVudCB7XG4gIGlkXG4gIGRlc2NyaXB0aW9uXG4gIGNvbnN0cnVjdG9yKGlkOm51bWJlciwgZGVzY3JpcHRpb24/OiBzdHJpbmcpe1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVxdWlwbWVudCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/equipment.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.ts\");\n\nlet CANVAS = null;\nlet CTX = null;\nlet WIDTH = window.innerWidth;\nlet HEIGHT = window.innerHeight;\ndocument.addEventListener('DOMContentLoaded', () => {\n    CANVAS = document.createElement('canvas');\n    CANVAS.width = WIDTH;\n    CANVAS.height = HEIGHT;\n    CTX = CANVAS.getContext('2d') || new CanvasRenderingContext2D();\n    document.body.appendChild(CANVAS);\n    (0,_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(CTX);\n    console.log('App loaded...');\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBd0I7QUFFeEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQztBQUNmLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7QUFDOUIsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztBQUVoQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRSxFQUFFO0lBQ2hELE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksd0JBQXdCLEVBQUUsQ0FBQztJQUNoRSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxnREFBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cHRzLy4vc3JjL2luZGV4LnRzP2ZmYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5cbmxldCBDQU5WQVMgPSBudWxsO1xubGV0IENUWCA9IG51bGw7XG5sZXQgV0lEVEggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbmxldCBIRUlHSFQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKT0+e1xuICBDQU5WQVMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgQ0FOVkFTLndpZHRoID0gV0lEVEg7XG4gIENBTlZBUy5oZWlnaHQgPSBIRUlHSFQ7XG4gIENUWCA9IENBTlZBUy5nZXRDb250ZXh0KCcyZCcpIHx8IG5ldyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQoKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChDQU5WQVMpO1xuICBBcHAoQ1RYKTtcbiAgY29uc29sZS5sb2coJ0FwcCBsb2FkZWQuLi4nKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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