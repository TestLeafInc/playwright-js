import { test, chromium } from "@playwright/test";

test('Learn APIRequest',async ({request}) => {
    //Without using fixture
    // const browser = await chromium.launch();
    // const browserContext = await browser.newContext();
    // const apiRequestContext = browserContext.request;
    // const page = await browserContext.newPage();
    // const pageReqContext = page.request;

    //Post - to create an incident
    const response = await request.post("https://dev205797.service-now.com/api/now/table/incident",
    
        {
            headers:{
                "Content-Type": 'application/json',
                "Authorization": "Basic YWRtaW46VGVzdGxlYWZAMTIz"
            },
            data:{

                "short_description": "Created using Playwright"
            }
        });
    
    //To get the response body
    const responseBody = await response.json();
    console.log(`----------Response body-------`);
    console.log(responseBody);
     
    //To get the status code
    console.log(`The status code is ${response.status()}`);

    // console.log(`----------respHeaders-------`);
    // const respHeaders = response.headers();
    //console.log(respHeaders["content-type"]);
    
    //To get the incident number
    console.log(`Incident id is ${responseBody.result.task_effective_number}`);
    
    

    


})