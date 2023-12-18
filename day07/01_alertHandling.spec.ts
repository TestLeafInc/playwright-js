import { test, chromium } from "@playwright/test";

test("Handle alert",async ({page}) => {

    await page.goto("https://leafground.com/alert.xhtml");
    await page.waitForTimeout(5000);

    // page.on('dialog', async dialog =>{

    //     const text = dialog.message();
    //     console.log(`Message: ${text}`);
    //     const type = dialog.type();
    //     console.log(`I am from ${type}`);
    //     await dialog.accept();
    //    // await dialog.dismiss();

    // })

    page.once('dialog', async dialog =>{

        const text = dialog.message();
        console.log(`Message: ${text}`);
        const type = dialog.type();
        console.log(`I am from ${type}`);
        await dialog.accept();
       // await dialog.dismiss();

    })
    // Click Show buuton present in Simple Alert
    await page.locator("text=Show").first().click();

    page.once('dialog', async dialog =>{

        const text = dialog.message();
        console.log(`Message: ${text}`);
        const type = dialog.type();
        console.log(`I am from ${type}`);
        await dialog.dismiss();
       

    })
    //Click Show button present in Alert Confirm Dialog
    const cardLocator = page.locator(".card").filter({hasText:"Alert (Confirm Dialog)"});
    const alertButton = cardLocator.locator("button").filter({hasText:"Show"});
    await alertButton.click();
    await page.waitForTimeout(2000);

    page.once('dialog', async dialog =>{

        const text = dialog.message();
        console.log(`Message: ${text}`);
        const type = dialog.type();
        console.log(`I am from ${type}`);
        await dialog.accept("Ranjini");
       

    })
    //Prompt Dialog
    const cardLocator1 = page.locator(".card").filter({hasText:"Alert (Prompt Dialog)"});
    const alertButton1 = cardLocator1.locator("button").filter({hasText:"Show"});
    await alertButton1.click();
    await page.waitForTimeout(5000);

    //Minimize & Maximize
    await page.locator("text=Show").last().click();
    await page.waitForTimeout(5000);
})