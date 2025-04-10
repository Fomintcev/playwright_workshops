import {test, expect} from '@playwright/test';

test('Open new window and navigate back', async ({context, page}) => {
    page.goto('file:///Users/roman/Playwrigth_Vasyl_Shpak/src/workshop_5/index.html');
    const pagePromise = context.waitForEvent('page');
    page.click('#openNewWindow');
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    await expect(newPage.getByRole('heading', {name: 'Welcome to the New Page'})).toBeVisible();
});

test('Cookie test', async({ page })=>{
    page.goto('file:///Users/roman/Playwrigth_Vasyl_Shpak/src/workshop_5/index.html');
    await page.click('#setCookie');
    const cookies = await page.context().cookies('file:///Users/roman/Playwrigth_Vasyl_Shpak/src/workshop_5/index.html');
    const sessionCookies = cookies.find(cookies => cookies.name === 'session');
    console.log('Session cookie: ', sessionCookies);
    await expect(sessionCookies).toBeDefined();
})