import { test, chromium } from "@playwright/test";

test('Get the record',async ({request}) => {

    const response = await request.get("https://dev205797.service-now.com/api/now/table/incident/27c610b193dfb1102015b4697bba103a",
    
        {
            headers:{
                "Content-Type": 'application/json',
                "Authorization": "Basic YWRtaW46VGVzdGxlYWZAMTIz"
            }
        });
    
   //const responseBody = await response.json();

   //Parsing
   const responseBody = await response.json();
    // console.log(responseBody);
    // let parsedJson = JSON.parse(responseBody);
    // console.log(parsedJson);
    
    
    console.log(`----------Response body-------`);
    console.log(responseBody);
      
    console.log(`The status code is ${response.status()}`);
    // console.log(`----------respHeaders-------`);
    console.log(response.headers());
    
    console.log(`Incident id is ${responseBody.result.task_effective_number}`);
    
    

    


})