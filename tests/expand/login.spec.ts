import {test,expect}from' @playwright/login';

test('Verify login is working',({async})=>{
    await page.goto('https://practice.expandtesting.com/login')
}