"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
__export(require("./validator/custom-validator"));
var NgxCustomValidatorModule = (function () {
    function NgxCustomValidatorModule() {
    }
    NgxCustomValidatorModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ]
                },] },
    ];
    NgxCustomValidatorModule.ctorParameters = function () { return []; };
    return NgxCustomValidatorModule;
}());
exports.NgxCustomValidatorModule = NgxCustomValidatorModule;
//# sourceMappingURL=app.module.js.map