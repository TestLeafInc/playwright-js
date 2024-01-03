import { BaseTest } from "./baseTest";

class LaunchApp extends BaseTest{

    async visitAndCheckTitle(url:string, expectedTitle:string){
        if(!this.page) throw new Error("Page is not initialized");
        await this.page.goto(url);
        const title = await this.page.title();
        console.assert(title===expectedTitle,`Expected Title to be '${expectedTitle}',but found
                        '${title}'`)

    }
}
(async()=>{

    const test = new LaunchApp();
    try{
     await test.setup();
     await test.visitAndCheckTitle('http://leaftaps.com/opentaps/control/main','Leaftaps - TestLeaf Automation Platform')
     console.log("Test passed");  

    } catch(error){
        console.error("Test failed", error);
    }
    finally{
        await test.teardown();
    }
})();






