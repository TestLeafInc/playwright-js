import { expect, test } from "@playwright/test";

let accessToken: any;
let inst_url: any;

test('Get Access token from Salesforce app',async ({request}) => {
    
    const clientId = '3MVG9pRzvMkjMb6lZlt3YjDQwe0RTUtnLqc8rWNFedqHy35_PyLwx2JWcEq_OCq600Lt3N2IqytfKIDOlBw3v'
    const clientSecret = '8250E443E447BAA66A9ABBDD3E45E061EF5A9F804D285D9E6DEEB577C2B76C06';
    const username = 'ranjini.r@testleaf.com';
    const password = 'Testleaf$1234';
    const url = 'https://login.salesforce.com/services/oauth2/token';

    const generatingToken = await request.post(url,{
        headers:{

            "Content-Type": "application/x-www-form-urlencoded",
            "Connection": "keep-alive"
        },

        //Body is form type
        form:{
            "grant_type": "password",
            "client_id": clientId,
            "client_secret": clientSecret,
            "username": username,
            "password": password

        }
    
    });

    const generatingTokenJSON = await generatingToken.json();
    //console.log(generatingTokenJSON);
    
    accessToken = generatingTokenJSON.access_token;
    inst_url = generatingTokenJSON.instance_url;
    console.log("Bearer " +accessToken);
    console.log(inst_url);
    
});
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