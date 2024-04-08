import {chromium, test}from "@playwright/test"
test("github login page test",async()=>{

    const browser=await chromium.launch({
        headless:false
    });
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://github.com/login");
    await page.fill("#login_field","kalyanchakravarthi53@gmail.com");
    await page.fill("#password","viswanadh24");
    await page.click("//input[@value='Sign in']");
    await page.isVisible("//h2[text()='Home']");


})