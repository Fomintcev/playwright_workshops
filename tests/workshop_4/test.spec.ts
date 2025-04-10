import {test, expect} from '@playwright/test';

test('Handling Alerts', async ({page}) => {
    page.goto('file:///Users/roman/Playwrigth_Vasyl_Shpak/src/workshop_4/index.html');

    let alertMessage = '';

    page.on('dialog', async(dialog) => {
        expect(dialog.type()).toBe('alert');
        alertMessage = await dialog.message();
        await page.waitForTimeout(3000);
        await dialog.accept();
    });

    await page.click('#show-alert');
    
    expect(alertMessage).toBe('This is a simple alert.');
});

test('Alert Dismiss', async({page})=>{
    page.goto('file:///Users/roman/Playwrigth_Vasyl_Shpak/src/workshop_4/index.html');

    let alertMessage = '';

    page.on('dialog', async(dialog)=>{
        // expect(dialog.type()).toBe('alert');
        alertMessage = await dialog.message();
        await page.waitForTimeout(1500);
        await dialog.dismiss();
        //await page.waitForTimeout(1500);
    });

    await page.click('#show-confirm');
    expect(alertMessage).toBe('You clicked Cancel.');
    
});