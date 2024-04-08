import {chromium, test}from "@playwright/test"

test("Home Page Test", async()=>{
const browser=await chromium.launch({headless:false})
const context=await browser.newContext();
const page=await context.newPage();
await page.goto("https://www.amazon.in");
await page.fill("//input[@id='twotabsearchtextbox']","oneplus tv");
await page.press("//input[@id='twotabsearchtextbox']","Enter");


})