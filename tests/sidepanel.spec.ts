import{expect,test} from '@playwright/test'
test('Verify side panel is visible', async({page})=>{

   await page.goto('https://demoqa.com/upload-download')
   await expect(page.locator('.left-pannel')).toBeVisible()
    
})

