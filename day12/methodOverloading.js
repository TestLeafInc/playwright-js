var GreetingClass = /** @class */ (function () {
    function GreetingClass() {
    }
    //Actual implementation
    GreetingClass.prototype.greet = function (input) {
        if (typeof input === "string") {
            return "Hello, ".concat(input, "!");
        }
        else if (typeof input === "number") {
            return "Your age is ".concat(input);
        }
        return "Invalid input";
    };
    return GreetingClass;
}());
var object = new GreetingClass();
console.log(object.greet("Roopa"));
console.log(object.greet(25));
