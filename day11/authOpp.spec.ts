import { test, expect } from "@playwright/test";
import { getSalesforceAccessToken } from "../day11_cw/envAuthHelper.spec"
import { log } from "console";
let accessToken: string;
let inst_url: string;
let id:any

test('Use Access Token in Test', async () => {
    const authData = await getSalesforceAccessToken();
    accessToken = authData.accessToken;
    inst_url = authData.inst_url;
    
});
test(`POST - Create new Opportunity`, async ({ request }) => {
 
    let date = '31/12/2023';
    let parts = date.split('/');
    let formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`; // Correct date format
    let opportunity_url = `${inst_url}/services/data/v59.0/sobjects/Opportunity`

    // const oppData ={
    //     "Name": "Playwright",
    //     "Type":"Existing Customer - Upgrade",
    //     "CloseDate": "25/12/2023",
    //     "StageName": "Prospecting"

    // }
    const opportunity = await request.post(opportunity_url, {
        headers: {
            "Connection": "keep-alive",
            "Authorization": `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
      data:{
        "Name": "Playwright",
        "Type":"Existing Customer - Upgrade",
        "CloseDate": formattedDate,
        "StageName": "Prospecting"

      }

    
    });
    const opp_response = await opportunity.json()
    console.log(opp_response)
    id = opp_response.id
    console.log(id)
   
 
})
test('Get id', async ({request}) => {
    let opportunity_url = `${inst_url}/services/data/v59.0/sobjects/Opportunity/${id}`
    const idResponse = await request.get(opportunity_url, {
        headers: {
            "Connection": "keep-alive",
            "Authorization": `Bearer ${accessToken}`
        },
        
    })
    console.log(idResponse);
    
});
