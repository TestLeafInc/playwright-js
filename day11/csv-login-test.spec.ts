import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { test,chromium } from "@playwright/test";
 
const records = parse(fs.readFileSync(path.join(__dirname, 'loginData.csv')), {
    columns: true,
    skip_empty_lines: true
  });
  for (const record of records){
test(`Login from ${record.test_case}`,async () => {
    const userDataDir = './myUserDataDir';

    // Launch a persistent context
    const context = await chromium.launchPersistentContext(userDataDir, {
        headless: false // Set to false to see the browser UI
    });

    // Create a new page in the context
    const page = await context.newPage();
 
    await page.goto("https://login.salesforce.com/");
    await page.fill("#username", record.username);
    await page.fill("#password", record.password);
    await page.click("#Login");
    await page.close();
    await context.close();
   
});
  }