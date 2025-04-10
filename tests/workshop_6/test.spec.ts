import {test, expect} from '@playwright/test';

const testData = {
    firstName: 'John',
    lastName: 'Doe',
    adress: '123 Main Str',
    number: '123456789',
}

test.describe('User registration tests', ()=>{
    test.beforeEach(async({page})=>{
        await page.goto('file:///Users/roman/Playwrigth_Vasyl_Shpak/src/workshop_6/index.html');
    })

    test.only('Register user', async({page})=>{
        await page.fill('#firstName', testData.firstName);
        await page.fill('#lastName', testData.lastName);
        await page.fill('#address', testData.adress);
        await page.fill('#number', testData.number);
        await page.click('#register');

        const firstNameText = await page.locator('#displayFirstName').textContent();
        const lastNameText = await page.locator('#displayLastName').textContent();
        const adressText = await page.locator('#displayAddress').textContent();
        const numberText = await page.locator('#displayNumber').textContent();

        await expect(firstNameText).toEqual(testData.firstName);
        await expect(lastNameText).toEqual(testData.lastName);
        await expect(adressText).toEqual(testData.adress);
        await expect(numberText).toEqual(testData.number);
        
    })

    test.only('Register with empty adress and number', async({page})=>{
        await page.fill('#firstName', testData.firstName);
        await page.fill('#lastName', testData.lastName);
        await page.click('#register');

        const error = await page.locator('#error p').textContent();
        await expect(error).toBe('Please fill in all fields.');
    })

    test.only('Register with all empty fields', async({page})=>{

        await page.click('#register');

        const error = await page.locator('#error p').textContent();
        await expect(error).toBe('Please fill in all fields.');
    })
})