class GreetingClass{
    //Overload signatures
    greet(name: string):string;
    greet(age: number):string;

    //Actual implementation
    greet(input: any):string{
        if(typeof input === "string"){
            return `Hello, ${input}!`
        }else if (typeof input === "number"){
            return `Your age is ${input}`;
        }
        return "Invalid input";
    }

}
let object = new GreetingClass();
console.log(object.greet("Roopa"));
console.log(object.greet(25));
