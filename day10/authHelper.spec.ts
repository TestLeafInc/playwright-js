import { chromium } from "@playwright/test";

async function getAccessToken() {

    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const apiRequestContext = browserContext.request;


    const clientId = '3MVG9pRzvMkjMb6lZlt3YjDQwe0RTUtnLqc8rWNFedqHy35_PyLwx2JWcEq_OCq600Lt3N2IqytfKIDOlBw3v'
    const clientSecret = '8250E443E447BAA66A9ABBDD3E45E061EF5A9F804D285D9E6DEEB577C2B76C06';
    const username = 'ranjini.r@testleaf.com';
    const password = 'Testleaf$1234';
    const url = 'https://login.salesforce.com/services/oauth2/token';

    const generatingToken = await apiRequestContext.post(url,{
        headers:{

            "Content-Type": "application/x-www-form-urlencoded",
            "Connection": "keep-alive"
        },
        form:{
            "grant_type": "password",
            "client_id": clientId,
            "client_secret": clientSecret,
            "username": username,
            "password": password

        }
    
    });
    const generatingTokenJSON = await generatingToken.json();
    console.log(generatingTokenJSON);
    
    return{
        accessToken :generatingTokenJSON.access_token,
        inst_url : generatingTokenJSON.instance_url

    }

    
};
export {getAccessToken};