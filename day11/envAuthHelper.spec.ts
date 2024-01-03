import { chromium } from "@playwright/test";
import dotenv from 'dotenv';
dotenv.config(); 


async function getSalesforceAccessToken(){


     const browser = await chromium.launch();
     const browserContext = await browser.newContext();
     const apiReqContext = browserContext.request;

    
     const clientId = process.env.SF_CLIENT_ID as string ;
     const clientSecret = process.env.SF_CLIENT_SECRET as string;
     const username = process.env.SF_USERNAME as string;
     const password = process.env.SF_PASSWORD as string;
     
     const url = "https://login.salesforce.com/services/oauth2/token";
    
     const tokenResponse = await apiReqContext.post(url, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Connection": "keep-alive",
        },
        form:{
            grant_type: 'password',
            client_id: clientId,
            client_secret: clientSecret,
            username: username,
            password: password
        },
    });
 
    const jsonResponse = await tokenResponse.json();
    console.log(jsonResponse);
    
    return{
        accessToken : jsonResponse.access_token,
        inst_url : jsonResponse.instance_url
    }
    
  
};
export { getSalesforceAccessToken };