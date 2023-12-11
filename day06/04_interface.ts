interface Browser{

    browserName:string;
    startApp(): void;   //unimplemented method -- cannot have a method body
    loginCredentials(username:string, password:string): void;
    getStatus(): boolean;
}
// const myInterface = new Browser(); you can create an object for the interface

// interface Element{
//     findElement():string;
// }

// interface button{
//     click():void;
// }
export{Browser}