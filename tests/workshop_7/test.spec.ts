import {test, expect} from '@playwright/test';

const selectors = {
    firstName: '#firstName',
    age: '#age',
    student: '#isStudent',
    applyButton: '#applyData',
    displayFirstName: '#displayFirstName',
    displayAge: '#displayAge',
    displayIsStudent: '#displayIsStudent',

};

test.describe.skip('Variable declarations and types', ()=>{    
     
    test('Declaration and types', async({page})=>{
        let firstName: string = 'Roma';
        let age: number = 30;
        let isStudent: boolean = false;

        await page.goto('file:///Users/roman/Playwrigth_Vasyl_Shpak/src/workshop_7/index.html');

        await page.fill(selectors.firstName, firstName);
        await page.fill(selectors.age, age.toString());
        await page.check(selectors.student);
        await page.click(selectors.applyButton);


        await expect(page.locator(selectors.displayFirstName)).toHaveText(firstName);
        await expect(page.locator(selectors.displayAge)).toHaveText(age.toString());
        await expect(page.locator(selectors.displayIsStudent)).toHaveText('Yes');

    })
})

test.describe.skip('Type Definition and Interfaces', ()=>{
    
    type User = {
        firstName: string,
        age: number,
        isStudent: boolean,
    };

    let user: User = {
        firstName: 'Roma',
        age: 30,
        isStudent: true,
    };

    test('Type Definition and Interfaces', async({page})=>{
        await page.goto('file:///Users/roman/Playwrigth_Vasyl_Shpak/src/workshop_7/index.html');

        await page.fill(selectors.firstName, user.firstName);
        await page.fill(selectors.age, user.age.toString());
        await page.check(selectors.student);
        await page.click(selectors.applyButton);

        await expect(page.locator(selectors.displayFirstName)).toHaveText(user.firstName);
        await expect(page.locator(selectors.displayAge)).toHaveText(user.age.toString());
        await expect(page.locator(selectors.displayIsStudent)).toHaveText('Yes');
    });
});