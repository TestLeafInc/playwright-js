Day 12 [Sunday]
*Agenda*

>> Recap
>> OOPs Principles
>> [Practice]
>> Test functions
>> Break
>> Introduction to Page Object Model
>> Refactor existing script with POM
>> Implement Page actions
>> [Practice]

Test functions

test() - creating a test

1. test('Title', async({page}))=>{
	
	//Your test 

}

2. test.describe.only('Smoke Tests' async())=>{ 	//grouping different sets of tests
	
	test.only('Smoke 1'async({page})=>{
	
	//Your test 

}
test('Smoke 2'async({page})=>{
	
	//Your test 

})
test('Smoke 3'async({page})=>{
	
	//Your test 

})
} 

test.describe.only('Regression' async())=>{
	
	test('TC001'async({page})=>{
	
	//Your test 

}
test('TC002'async({page})=>{
	
	//Your test 

})
test('TC003'async({page})=>{
	
	//Your test 

})
} 

} 

npx playwright test -g "smoke:"
npx playwright test --grep "regression:"

3. test.skip() //skip the execution of a particular test

test.skip('Skipped Test', async())=>{
	
	//Your test code
}

4. test.only() //to run only the specified test in a 
test.describe.only()

5. test.use() // specific configurations to the tests
test.use({headless: true})

6. test.fixme('test_name'async())=>{ // marks the test as "fix me" and it denotes that the code needs  attention and has to be fixed

	//Test code --> skipped
 }

Hooks
//consistent testing environment - setup preconditions and cleaning up of your resources

beforeAll, afterAll
beforeEach, afterEach

test.beforeAll(){ //runs once before all the tests in the block >> setup that has to be done before all the tests
	
}

test.afterAll(){ //runs once after all the tests in the block >> teardown
	
}

test.beforeEach(Leads url){  //runs before each test in the block
	
/**

 test 1 (Creating the lead), test 2 (Editing the lead) -> salesforce

test.beforeEach(Leads url){  //runs before each test in the block{

test3 (Creating an incident), test 4(Updating the incident) -> servicenow
*/
}

}

test.afterEach(page.close()){ 	//runs after each testin the block
	

}



OOPS

Abstraction

Abstract class
 - cannot be instantiated
 - need a sub class to implement
 - includes abstract methods (without implementation)

Abstract Test Reporter Class


Polymorphism

Method overloading 

Inheritance 
	child/derived class inherits the properties of the parent class

Types of inheritance
>> Simple
	a class inherits from one parent class

>> Multiple 
 a class inherits from more than one parent class
 Using interface
 one class can implement multiple interfaces

 interface Browser
 interface Locator

 class Chrome implemets Browser, Locator

>> Multilevel inheritance
a class inherits from another class which in turn inherits from another class

class Grandparent

class Parent extends GrandParent

class Child extends Parent

>> Hierarchial inheritance

multiple classes inherit from a single parent class

class Parent{
	

}

class childOne extends Parent{
	

}

class childTwo extends Parent{
	

}
>> Hybrid 

//mix of two or more types of 

Page Object Model

		test scripts
		page objects
			page --> class
			web elements - buttons, text fields, links
			methods - click, fill, clear
