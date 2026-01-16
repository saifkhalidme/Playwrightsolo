import {expect,test} from '@playwright/test'
test('verify form is visible',async({page})=>{
   await page.goto('https://demoqa.com/text-box')
    await expect(page.locator('.text-field-container')).toBeVisible()
    await expect(page.getByPlaceholder('Full Name')).toBeVisible()
    await page.getByPlaceholder('Full Name').click()
    await page.getByPlaceholder('Full Name').fill('saif')
    await page.getByPlaceholder('name@example.com').fill('testing@gmail.com')
    await page.getByRole('button',{name:"Submit"}).click()

})

