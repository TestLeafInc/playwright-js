/**
 * Class - blueprint / template
 *
 *  properties
 *  methods
 *
 *
 *
 *
 */
//Define a class named Bicycle
var Bicycle = /** @class */ (function () {
    function Bicycle() {
        //Properties
        this.brand = 'Hero';
        this.weight = 20.5;
        this.isElectric = true;
        this.isGearless = false;
    }
    //Methods
    //Syntax: accessModifier methodName: returnType
    Bicycle.prototype.brake = function () {
        //local variables
        var model = 2020;
        console.log("Hello, My cycle brand is ".concat(this.brand));
        console.log("The weight of the cycle is ".concat(this.weight));
        console.log("Is my cycle electric?  ".concat(this.isElectric));
        console.log("Is mycycle gearless?  ".concat(this.isGearless));
        console.log("The model of my cycle is ".concat(model));
    };
    return Bicycle;
}());
//Calling the method
//Syntax to create an object --> const objectName = new Bicycle();
var myInstance = new Bicycle();
myInstance.brake();
