"use strict";
(self["webpackChunkscouting_portal"] = self["webpackChunkscouting_portal"] || []).push([["common"],{

/***/ 2481:
/*!******************************************************************!*\
  !*** ./projects/scouting-portal/src/app/public/public.routes.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PUBLIC_MODULE_ROUTES": () => (/* binding */ PUBLIC_MODULE_ROUTES),
/* harmony export */   "generatePublicModuleRoute": () => (/* binding */ generatePublicModuleRoute),
/* harmony export */   "generateFullPublicModuleRoute": () => (/* binding */ generateFullPublicModuleRoute)
/* harmony export */ });
/* harmony import */ var _aft_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aft-core */ 91);
// eslint-disable-next-line @typescript-eslint/naming-convention

// eslint-disable-next-line @typescript-eslint/naming-convention
const PUBLIC_MODULE_ROUTES = {
    LOGIN: '',
    FORGOT_PASSWORD: 'forgot',
    RESET_PASSWORD: 'reset/:token',
    REGISTER: 'register',
    REGISTER_SECOND_STEP: 'second',
    REGISTER_THIRD_STEP: 'third',
    REGISTER_VALIDATE_TOKEN: 'validate/:token/:lang',
    REGISTER_PAYMENT: 'payment',
    REGISTER_VALIDATE_INVITE: 'invite/:token/:lang',
};
const generatePublicModuleRoute = (route) => {
    if (route === null || route === void 0 ? void 0 : route.length) {
        return [route];
    }
    return [];
};
const generateFullPublicModuleRoute = (route) => {
    return [..._aft_core__WEBPACK_IMPORTED_MODULE_0__.APP_ROUTES.LANDING, ...generatePublicModuleRoute(route)];
};


/***/ })

}]);
//# sourceMappingURL=common.js.map