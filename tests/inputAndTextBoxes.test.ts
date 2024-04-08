import {chromium, test}from "@playwright/test"
test("input and textbox", async()=>{
    const browser=await chromium.launch({headless:false})
    const context= await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_register_form");
    await page.fill("#email","kashiviswanadh324@gmail.com");
    await page.fill("#psw","11kk1a0324@");
    await page.fill("#psw-repeat","11kk1a0324");
    await page.click("//button[text()='Register']");
    test.slow();


})