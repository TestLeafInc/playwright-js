import {chromium, devices, test} from '@playwright/test'


test('Verify Geo Location',async ({}) => {
    
    const browser = await chromium.launch();
    const context = await browser.newContext({
        geolocation: {
            latitude: 43.000000,
            longitude: -75.00000
        },
        permissions: ['geolocation']
    });

    const page = await context.newPage();
    await page.goto("https://www.openstreetmap.org/");
    await page.waitForTimeout(10000);

})