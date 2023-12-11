import { chromium, expect, test } from "@playwright/test";



test("Learning auto wait",async ({page}) => {

    await page.goto("https://leafground.com/waits.xhtml");
    const cardToSelect = page.locator(".card").filter({hasText:"Wait for Visibility"});
    const buttonToClick = cardToSelect.getByRole("button").filter({hasText:"Click"});
    
    await buttonToClick.click();
    const buttonHidden = cardToSelect.getByRole("button").filter({hasText:"I am here"});
    await expect(buttonHidden).toBeVisible({timeout:10000});
     } )
