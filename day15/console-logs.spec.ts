import {chromium, devices, test} from '@playwright/test'


test('Print all console message',async ({page}) => {

    page.on('console', message => {
        console.log(`Messages >> ${message.type()} and ${message.text()}`);
    })

    await page.goto("https://www.latlong.net/place/new-york-usa-27719.html");
    await page.waitForTimeout(20000);

});