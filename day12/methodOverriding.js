var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseClass = /** @class */ (function () {
    function BaseClass() {
    }
    BaseClass.prototype.show = function () {
        console.log("Show method is from base class");
    };
    return BaseClass;
}());
var DerivedClass = /** @class */ (function (_super) {
    __extends(DerivedClass, _super);
    function DerivedClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DerivedClass.prototype.show = function () {
        console.log("Show method is from Derived Class");
    };
    return DerivedClass;
}(BaseClass));
var obj = new DerivedClass();
obj.show();
