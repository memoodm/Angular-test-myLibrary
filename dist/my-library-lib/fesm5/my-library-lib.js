import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MyLibraryLibService = /** @class */ (function () {
    function MyLibraryLibService() {
    }
    MyLibraryLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MyLibraryLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ MyLibraryLibService.ngInjectableDef = defineInjectable({ factory: function MyLibraryLibService_Factory() { return new MyLibraryLibService(); }, token: MyLibraryLibService, providedIn: "root" });
    return MyLibraryLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MyLibraryLibComponent = /** @class */ (function () {
    function MyLibraryLibComponent() {
        this.nombre = "guillermo de mendoza";
    }
    /**
     * @return {?}
     */
    MyLibraryLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    MyLibraryLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'en1-myLibrary-lib',
                    template: "<p class=\"setColor\">yea is working</p>\n",
                    styles: [".setColor{color:red;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    MyLibraryLibComponent.ctorParameters = function () { return []; };
    return MyLibraryLibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MyLibraryLibModule = /** @class */ (function () {
    function MyLibraryLibModule() {
    }
    MyLibraryLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [MyLibraryLibComponent],
                    imports: [],
                    exports: [MyLibraryLibComponent]
                },] }
    ];
    return MyLibraryLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MyLibraryLibService, MyLibraryLibComponent, MyLibraryLibModule };

//# sourceMappingURL=my-library-lib.js.map