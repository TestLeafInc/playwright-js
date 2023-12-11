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
class Bicycle{

    //Properties
    brand: string = 'Hero';     //instance variables
    weight: number = 20.5;
    isElectric: boolean = true;
    isGearless: boolean = false;

    //Methods
    //Syntax: accessModifier methodName: returnType
    brake(): void{
        //local variables
        let model:number = 2020;
        console.log(`Hello, My cycle brand is ${this.brand}`);
        console.log(`The weight of the cycle is ${this.weight}`);
        console.log(`Is my cycle electric?  ${this.isElectric}`);
        console.log(`Is mycycle gearless?  ${this.isGearless}`);
        console.log(`The model of my cycle is ${model}`);
}
       private ride():void{
            console.log(`The weight of the cycle is ${this.weight}`);
          //  console.log(`Model number is ${model}`);
        }

}
//Calling the method
//Syntax to create an object --> const objectName = new Bicycle();
const myInstance = new Bicycle();
myInstance.brake();
//myInstance.ride();