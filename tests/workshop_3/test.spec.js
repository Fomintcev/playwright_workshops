import { test, expect } from 'playwright/test';

test.skip('Drag and Drop', async ({ page }) => {
  await page.goto(
    'file:///Users/roman/Playwrigth_Vasyl_Shpak/src/workshop_3/index.html',
  );
  const dragElement = await page.locator('.drag-source');
  const dropElement = await page.locator('.drop-target');

  await page.dragAndDrop('.drag-source', '.drop-target');
  await expect(dropElement).toHaveText('Success');
});

test('iframe', async ({ page }) => {
  await page.goto(
    'file:///Users/roman/Playwrigth_Vasyl_Shpak/src/workshop_3/index.html',
  );

  const inputElement = await page.frame({ name: 'iframeName' });
  const inputField = '#iframe-input';
  console.log(await page.locator(inputField));
  await inputElement.locator(inputField).fill('Hello Playwright');
  // await expect(inputElement.locator(inputField)).toHaveText(
  //   'Hello Playwright',
  // );
  await expect(inputElement.locator(inputField)).toHaveValue(
    'Hello Playwright',
  );
});
