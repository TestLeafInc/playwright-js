import {chromium, devices, test} from '@playwright/test'

// config (suite) --> override (test)

test.use({actionTimeout: 10000})

test('Check Device Emulation',async ({}) => {
    
    const myDevices = devices['iPhone 15'];
    const browser = await chromium.launch();
    const context = await browser.newContext({
        ...myDevices,
        viewport: { width: 479, height: 980 },
    });

    const page = await context.newPage();
    await page.goto("https://testleaf.com");
    //await page.waitForTimeout(10000);

})