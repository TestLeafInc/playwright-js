export abstract class TestReporter{

    //Abstract method
    abstract start():void;

    //To report a test result
    abstract reportTest(testName:string, result: string):void;

    //End reporting
    abstract end(): void;

    

}