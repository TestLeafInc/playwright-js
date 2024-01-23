import {chromium, devices, expect, test} from '@playwright/test'


test('Visual testing with PW',async ({page}) => {

    await page.goto("https://www.testleaf.com");
    const ss = await page.screenshot();
    expect(ss).toMatchSnapshot('testleaf.png');

});