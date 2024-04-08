import {chromium,test}from "@playwright/test"
test("registation page test",async({})=>{
    const browser=await chromium.launch({headless:false});
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://www.irctc.co.in/nget/train-search");
    //await page.click("//a[contains(text(),'REGISTER')]");
    //await page.fill("","");
})