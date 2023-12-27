import { expect, test } from "@playwright/test";
import { getAccessToken } from "./authHelper.spec";

let accessToken:string;
let inst_url:string;

test('Use access toke in test from the function',async () => {

    const authData = await getAccessToken();
    accessToken = authData.accessToken;
    inst_url = authData.inst_url;
    
})

test("Test to create a new opportunity",async ({request}) => {
    let date ="25/12/2023";
    let parts = date.split('/'); //[25 , 12, 2023]
    let formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
    let opportunity_url = `${inst_url}//services/data/v59.0/sobjects/Opportunity/`;
    const opportunity = await request.post(opportunity_url,
        {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Connection": "keep-alive"
            },
            data:{
                "Name": "Playwright_JS",
                "Type": "Existing Customer - Upgrade",
                "CloseDate": formattedDate,
                "StageName": "Prospecting"
            }
        })
    const opp_response = await opportunity.json();
    console.log(opp_response);
    console.log(`Status code is ${opportunity.status()}`);
    expect(opportunity.status()).toBe(201);
    
})
test("Update the created opportunity",async ({request}) => {
    let date ="25/12/2023";
    let parts = date.split('/'); //[25 , 12, 2023]
    let formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
    let opportunity_url = `${inst_url}//services/data/v59.0/sobjects/Opportunity/0065j00001Rx0tbAAB`;
    const update = await request.patch(opportunity_url,
        {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Connection": "keep-alive"
            },
            data:{
                "Name": "Playwright_JS",
                "Type": "Existing Customer - Upgrade",
                "CloseDate": formattedDate,
                "StageName": "Qualification"
            }
        })
    // const opp_response = await update.json();
    // console.log(opp_response);
    const statusCode = update.status();
    console.log(`Status code is ${update.status()}`);
    expect(statusCode).toBe(204);
    
})