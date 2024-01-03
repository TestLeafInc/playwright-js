class BaseClass{
    show(){
        console.log("Show method is from base class");
        
    }

}

class DerivedClass extends BaseClass{

    show(){
        console.log("Show method is from Derived Class");
        
    }
}
let obj = new DerivedClass();
obj.show();