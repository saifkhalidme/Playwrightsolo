import {test,expect} from "@playwright/test" 

test('verify check box is visible', async({page}) =>{

   await page.goto('https://demoqa.com/checkbox')
   await expect (page.locator('.check-box-tree-wrapper')).toBeVisible()
})

test('verify check box is clickable', async({page})=>{
    await page.goto('https://demoqa.com/checkbox') 
    await expect(page.locator('.rct-checkbox')).toBeVisible()
    await page.locator('.rct-checkbox').click()

})

test('verify dropdown is visible and clickable', async({page})=>{
     await page.goto('https://demoqa.com/checkbox')
     await expect(page.locator('.rct-icon.rct-icon-expand-close')).toBeVisible()
     await page.locator('.rct-icon.rct-icon-expand-close').click()

})