import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MyLibraryLibService {
    constructor() { }
}
MyLibraryLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MyLibraryLibService.ctorParameters = () => [];
/** @nocollapse */ MyLibraryLibService.ngInjectableDef = defineInjectable({ factory: function MyLibraryLibService_Factory() { return new MyLibraryLibService(); }, token: MyLibraryLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MyLibraryLibComponent {
    constructor() {
        this.nombre = "guillermo de mendoza";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MyLibraryLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'en1-myLibrary-lib',
                template: "<p class=\"setColor\">yea is working</p>\n",
                styles: [".setColor{color:red;text-align:center}"]
            }] }
];
/** @nocollapse */
MyLibraryLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MyLibraryLibModule {
}
MyLibraryLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MyLibraryLibComponent],
                imports: [],
                exports: [MyLibraryLibComponent]
            },] }
];

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