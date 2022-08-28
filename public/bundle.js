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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/container */ \"./src/components/container.ts\");\n/* harmony import */ var _components_equipment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/equipment */ \"./src/components/equipment.ts\");\n\n\nfunction App(ctx) {\n    let box = new _components_container__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, { x: 100, y: 100, angle: 0 }, { length: 2, depth: 2, height: 2 });\n    let basket = new _components_container__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, { x: 300, y: 100, angle: 0 }, { length: 14, depth: 1.1, height: 1.1 });\n    let basket1 = new _components_container__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, { x: 300, y: 200, angle: 0 }, { length: 8, depth: 1.1, height: 1.1 });\n    box.draw();\n    basket.draw();\n    basket1.draw();\n    box.addEquipment(new _components_equipment__WEBPACK_IMPORTED_MODULE_1__[\"default\"](1, 'Kit'));\n    box.setLocation('Pipe deck');\n    console.log(box);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUNBO0FBRS9DLFNBQVMsR0FBRyxDQUFDLEdBQTRCO0lBRXJDLElBQUksR0FBRyxHQUFHLElBQUksNkRBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ3RGLElBQUksTUFBTSxHQUFHLElBQUksNkRBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUMsR0FBRyxFQUFFLE1BQU0sRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO0lBQzlGLElBQUksT0FBTyxHQUFHLElBQUksNkRBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsR0FBRyxFQUFFLE1BQU0sRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO0lBRTlGLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNYLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVmLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSw2REFBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUVyQixDQUFDO0FBRUQsaUVBQWUsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3B0cy8uL3NyYy9hcHAudHM/MDY2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInO1xuaW1wb3J0IEVxdWlwbWVudCBmcm9tICcuL2NvbXBvbmVudHMvZXF1aXBtZW50JztcblxuZnVuY3Rpb24gQXBwKGN0eDpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcblxuICAgIGxldCBib3ggPSBuZXcgQ29udGFpbmVyKGN0eCwge3g6MTAwLCB5OjEwMCwgYW5nbGU6IDB9LCB7bGVuZ3RoOjIsIGRlcHRoOjIsIGhlaWdodDoyfSk7XG4gICAgbGV0IGJhc2tldCA9IG5ldyBDb250YWluZXIoY3R4LCB7eDozMDAsIHk6MTAwLCBhbmdsZTogMH0sIHtsZW5ndGg6MTQsIGRlcHRoOjEuMSwgaGVpZ2h0OjEuMX0pO1xuICAgIGxldCBiYXNrZXQxID0gbmV3IENvbnRhaW5lcihjdHgsIHt4OjMwMCwgeToyMDAsIGFuZ2xlOiAwfSwge2xlbmd0aDo4LCBkZXB0aDoxLjEsIGhlaWdodDoxLjF9KTtcbiAgICBcbiAgICBib3guZHJhdygpO1xuICAgIGJhc2tldC5kcmF3KCk7XG4gICAgYmFza2V0MS5kcmF3KCk7XG4gICAgXG4gICAgYm94LmFkZEVxdWlwbWVudChuZXcgRXF1aXBtZW50KDEsICdLaXQnKSk7XG4gICAgYm94LnNldExvY2F0aW9uKCdQaXBlIGRlY2snKTtcbiAgICBjb25zb2xlLmxvZyhib3gpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ }),

/***/ "./src/components/container.ts":
/*!*************************************!*\
  !*** ./src/components/container.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _drawing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawing */ \"./src/components/drawing.ts\");\n\nclass Container extends _drawing__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(ctx, pos, dimension) {\n        super(ctx, pos, dimension);\n        this.content = [];\n    }\n    addEquipment(equipment) {\n        this.content.push(equipment);\n    }\n    removeEquipment(equipment) {\n        this.content = this.content.filter((e) => e.id != equipment.id);\n    }\n    setLocation(location) {\n        this.location = location;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb250YWluZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFZ0M7QUFHaEMsTUFBTSxTQUFVLFNBQVEsZ0RBQU87SUFHN0IsWUFBWSxHQUE2QixFQUFFLEdBQWEsRUFBRSxTQUFvQjtRQUM1RSxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0QsWUFBWSxDQUFDLFNBQW9CO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCxlQUFlLENBQUMsU0FBb0I7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDRCxXQUFXLENBQUMsUUFBZTtRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUFFRCxpRUFBZSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cHRzLy4vc3JjL2NvbXBvbmVudHMvY29udGFpbmVyLnRzPzExYzgiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBQb3NpdGlvbiwgRGltZW5zaW9uIH0gZnJvbSAnLi4vc3lzdGVtL3R5cGVzJztcbmltcG9ydCBEcmF3aW5nIGZyb20gJy4vZHJhd2luZyc7XG5pbXBvcnQgRXF1aXBtZW50IGZyb20gJy4vZXF1aXBtZW50JztcblxuY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgRHJhd2luZyB7XG4gIGNvbnRlbnQ6IEVxdWlwbWVudFtdO1xuICBsb2NhdGlvbj86IHN0cmluZztcbiAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHBvczogUG9zaXRpb24sIGRpbWVuc2lvbjogRGltZW5zaW9uKXtcbiAgICBzdXBlcihjdHgsIHBvcywgZGltZW5zaW9uKTtcbiAgICB0aGlzLmNvbnRlbnQgPSBbXTtcbiAgfVxuICBhZGRFcXVpcG1lbnQoZXF1aXBtZW50OiBFcXVpcG1lbnQpe1xuICAgIHRoaXMuY29udGVudC5wdXNoKGVxdWlwbWVudCk7XG4gIH1cbiAgcmVtb3ZlRXF1aXBtZW50KGVxdWlwbWVudDogRXF1aXBtZW50KXtcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQuZmlsdGVyKChlKT0+ZS5pZCAhPSBlcXVpcG1lbnQuaWQpO1xuICB9XG4gIHNldExvY2F0aW9uKGxvY2F0aW9uOnN0cmluZyl7XG4gICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/container.ts\n");

/***/ }),

/***/ "./src/components/drawing.ts":
/*!***********************************!*\
  !*** ./src/components/drawing.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Drawing)\n/* harmony export */ });\n/* harmony import */ var _system_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../system/colors */ \"./src/system/colors.ts\");\n\nclass Drawing {\n    constructor(ctx, pos, dimension) {\n        this.ctx = ctx;\n        this.pos = pos;\n        this.dimension = dimension;\n    }\n    draw() {\n        let w = this.m2Pix(this.dimension.length);\n        let h = this.m2Pix(this.dimension.depth);\n        this.ctx.fillStyle = _system_colors__WEBPACK_IMPORTED_MODULE_0__.ColorScheme.primary;\n        this.ctx.strokeStyle = _system_colors__WEBPACK_IMPORTED_MODULE_0__.ColorScheme.lines;\n        this.ctx.rotate(this.pos.angle || 0);\n        this.ctx.beginPath();\n        this.ctx.rect(this.pos.x, this.pos.y, w, h);\n        this.ctx.closePath();\n        this.ctx.stroke();\n        this.ctx.fill();\n    }\n    m2Pix(n) {\n        let scale = this.dimension.scale || 1;\n        return n * 10 * scale;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kcmF3aW5nLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQytDO0FBRWhDLE1BQU0sT0FBTztJQUkxQixZQUFZLEdBQTZCLEVBQUUsR0FBYSxFQUFFLFNBQW9CO1FBQzVFLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSTtRQUNGLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsK0RBQW1CLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsNkRBQWlCLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDTyxLQUFLLENBQUMsQ0FBUTtRQUNwQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUMsRUFBRSxHQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cHRzLy4vc3JjL2NvbXBvbmVudHMvZHJhd2luZy50cz80NjlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvc2l0aW9uLCBEaW1lbnNpb24gfSBmcm9tICcuLi9zeXN0ZW0vdHlwZXMnO1xuaW1wb3J0IHsgQ29sb3JTY2hlbWUgfSBmcm9tICcuLi9zeXN0ZW0vY29sb3JzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd2luZyB7XG4gIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBwb3M6IFBvc2l0aW9uO1xuICBkaW1lbnNpb246IERpbWVuc2lvbjtcbiAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHBvczogUG9zaXRpb24sIGRpbWVuc2lvbjogRGltZW5zaW9uKXtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnBvcyA9IHBvcztcbiAgICB0aGlzLmRpbWVuc2lvbiA9IGRpbWVuc2lvbjtcbiAgfVxuICBkcmF3KCl7XG4gICAgbGV0IHcgPSB0aGlzLm0yUGl4KHRoaXMuZGltZW5zaW9uLmxlbmd0aCk7XG4gICAgbGV0IGggPSB0aGlzLm0yUGl4KHRoaXMuZGltZW5zaW9uLmRlcHRoKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBDb2xvclNjaGVtZS5wcmltYXJ5O1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gQ29sb3JTY2hlbWUubGluZXM7XG4gICAgdGhpcy5jdHgucm90YXRlKHRoaXMucG9zLmFuZ2xlIHx8IDApXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHgucmVjdCh0aGlzLnBvcy54LCB0aGlzLnBvcy55LCB3LCBoKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICB0aGlzLmN0eC5maWxsKCk7XG4gIH1cbiAgcHJpdmF0ZSBtMlBpeChuOm51bWJlcil7XG4gICAgbGV0IHNjYWxlID0gdGhpcy5kaW1lbnNpb24uc2NhbGUgfHwgMTtcbiAgICByZXR1cm4gbioxMCpzY2FsZTtcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/drawing.ts\n");

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

/***/ }),

/***/ "./src/system/colors.ts":
/*!******************************!*\
  !*** ./src/system/colors.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ColorScheme\": () => (/* binding */ ColorScheme)\n/* harmony export */ });\nconst ColorScheme = {\n    primary: \"#ccc\",\n    secondary: \"#a00\",\n    lines: \"#111\",\n    new: \"#0a0\",\n    used: \"#fa0\",\n    failed: \"#d00\",\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3lzdGVtL2NvbG9ycy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTSxXQUFXLEdBQUc7SUFDekIsT0FBTyxFQUFFLE1BQU07SUFDZixTQUFTLEVBQUUsTUFBTTtJQUNqQixLQUFLLEVBQUUsTUFBTTtJQUNiLEdBQUcsRUFBRSxNQUFNO0lBQ1gsSUFBSSxFQUFFLE1BQU07SUFDWixNQUFNLEVBQUUsTUFBTTtDQUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3B0cy8uL3NyYy9zeXN0ZW0vY29sb3JzLnRzP2U4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IENvbG9yU2NoZW1lID0ge1xuICBwcmltYXJ5OiBcIiNjY2NcIixcbiAgc2Vjb25kYXJ5OiBcIiNhMDBcIixcbiAgbGluZXM6IFwiIzExMVwiLFxuICBuZXc6IFwiIzBhMFwiLFxuICB1c2VkOiBcIiNmYTBcIixcbiAgZmFpbGVkOiBcIiNkMDBcIixcbn0gIFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/system/colors.ts\n");

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