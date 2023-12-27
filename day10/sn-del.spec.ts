import { test, chromium } from "@playwright/test";

test('Get the record',async ({request}) => {

    const response = await request.delete("https://dev205797.service-now.com/api/now/table/incident/",
    
        {
            headers:{
                "Content-Type": 'application/json',
                "Authorization": "Basic YWRtaW46VGVzdGxlYWZAMTIz"
            }
        });
    
     
    console.log(`The status code is ${response.status()}`);
   
    

    


})