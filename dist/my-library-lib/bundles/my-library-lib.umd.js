(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('my-library-lib', ['exports', '@angular/core'], factory) :
    (factory((global['my-library-lib'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MyLibraryLibService = /** @class */ (function () {
        function MyLibraryLibService() {
        }
        MyLibraryLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MyLibraryLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ MyLibraryLibService.ngInjectableDef = i0.defineInjectable({ factory: function MyLibraryLibService_Factory() { return new MyLibraryLibService(); }, token: MyLibraryLibService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
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

    exports.MyLibraryLibService = MyLibraryLibService;
    exports.MyLibraryLibComponent = MyLibraryLibComponent;
    exports.MyLibraryLibModule = MyLibraryLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=my-library-lib.umd.js.map