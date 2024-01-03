"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var testReporter_1 = require("./testReporter");
var ConsoleReporter = /** @class */ (function (_super) {
    __extends(ConsoleReporter, _super);
    function ConsoleReporter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConsoleReporter.prototype.start = function () {
        console.log("Test reporting started");
    };
    ConsoleReporter.prototype.reportTest = function (testName, result) {
        console.log("Test: ".concat(testName, ", Result: ").concat(result));
    };
    ConsoleReporter.prototype.end = function () {
        console.log("Test reporting ended");
    };
    return ConsoleReporter;
}(testReporter_1.TestReporter));
var reporter = new ConsoleReporter();
reporter.start();
reporter.reportTest("LoginTest", "Passed");
reporter.reportTest("SignUpTest", "Failed");
reporter.end();
