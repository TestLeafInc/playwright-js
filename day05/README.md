Week 3 Day 1 Agenda (Introduction to TypeScript)
 
2.30 PM: Recap & Best Practices
2.45 PM: Playwright Configurations
3.15 PM: Practice  [Config]
3.30 PM: Deep dive Assertions
4.00 PM: Practice & Break 
4.30 PM: Introduction to TypeScript
5.00 PM: Data types, Variables in TS
5.25 PM: Practice 
5.45 PM: Class, Methods & Interface
6.30 PM: Wrap

### Introduction to TypeScript

- TypeScript is a superset of JavaScript that adds static typing and other features to the language. 
- It was created by Microsoft and is open-source, making it widely adopted for building large-scale
  applications. 
- TypeScript code is transpiled to JavaScript, which means it can run on any JavaScript runtime, and it
  integrates seamlessly with existing JavaScript code.

## Key features and concepts of TypeScript:

1. Static Typing:
   - To specify the data types of variables, function parameters, and return types. 

   function add(x: number, y: number): number {
     return x + y;
   }
   
2. Interfaces:
   TypeScript supports interfaces for defining contracts for object shapes. This aids in enforcing a consistent structure across different parts of your code.

   interface Person {
     name: string;
     age: number;
   }

3. Classes and Inheritance:
   Support for object-oriented programming with classes, inheritance, and access modifiers (public, private, protected).

   class Animal {
     protected sound: string;

     constructor(sound: string) {
       this.sound = sound;
     }

     makeSound(): void {
       console.log(this.sound);
     }
   }

   class Dog extends Animal {
     constructor() {
       super("Woof");
     }
   }
  
4. Enums:
   Includes support for enums, making it easier to work with sets of named constants.

   enum Color {
     Red,
     Green,
     Blue,
   }

5. Generics:
  Allows you to write flexible and reusable functions and classes.

   function identity<T>(arg: T): T {
     return arg;
   }
 
6. Union and Intersection Types:
  TypeScript introduces union types (`A | B`) and intersection types (`A & B`), providing flexibility when working with different data structures.

   type Pet = Dog | Cat;
 

7. Null and Undefined Handling:
   TypeScript has built-in support for handling `null` and `undefined` more safely through strict null checks.

   let name: string | null = "John";

8. Type Inference:
   TypeScript's type inference allows the compiler to automatically determine types in many cases, reducing the need for explicit type annotations.

   let age = 25; // TypeScript infers the type as number
  
9. Tooling and IDE Support:
   TypeScript is supported by a variety of development tools, and popular Integrated Development Environments (IDEs) such as Visual Studio Code provide excellent support for TypeScript development.

10. Compatibility with JavaScript:
   TypeScript is a superset of JavaScript, meaning that existing JavaScript code is also valid TypeScript code. Developers can gradually introduce TypeScript into their projects.

### Setup to run the TypeScript code

To use TypeScript, you need to install the TypeScript compiler (`tsc`) and then compile your TypeScript code into JavaScript. 
- Command to install:
    npm install -g typescript
- Command to check tsc version:
    tsc --version
- Command to run the TypeScript file
    tsc filename
- Command to run the compiled JavaScript file
    node filename
- Command to generate ts config file
    tsc --init

### Variables inTypeScript

  Variables are used to store and manipulate data. 

# Variable Declaration:
    You can declare variables using the let, const, or var keyword. 
    The recommended way is to use let or const.

    Syntax:  let varName: datatype = value;
    Example: let myNumber: number = 42;

### Data Types
  Built-in data types
    - number
    - boolean
    - string
    - void
    - null
    - undefined
    - any






