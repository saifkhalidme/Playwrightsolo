import {test,expect} from '@playwright/test'

test('verify login modal fields' , async ({page}) =>{
    await page.goto('https://practice.expandtesting.com/login')
    await expect(page.locator('#login')).toBeVisible()
    await expect(page.getByLabel('Username')).toBeVisible()
     await expect(page.getByLabel('Password')).toBeVisible()
    await page.locator('#username').fill('practice')
    await page.locator('#password').fill('SuperSecretPassword!')
    await page.getByRole('button', { name: 'Login' }).click()

})
