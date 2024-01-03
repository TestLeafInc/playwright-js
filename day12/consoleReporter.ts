import { TestReporter } from "./testReporter";

class ConsoleReporter extends TestReporter{

    start():void{
        console.log("Test reporting started");
        
    }

    reportTest(testName: string, result: string): void {
        console.log(`Test: ${testName}, Result: ${result}`);
    }
    end(): void {

        console.log("Test reporting ended");
        
        }

}
const reporter = new ConsoleReporter();
reporter.start();
reporter.reportTest("LoginTest", "Passed");
reporter.reportTest("SignUpTest", "Failed");
reporter.end();