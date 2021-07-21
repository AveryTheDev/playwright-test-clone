import { test } from './baseFixtures';


test.use({
  headless: false,
    viewport: { width: 1440, height: 800 },
    screenshot: 'only-on-failure', //Only creates empty folder
})

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000")
})

test('use Turquoise as a default background color', async ({ page }) => {
  await page.waitForSelector("text=#ffffff") //changed so it will fail, triggers folder creation
});

test('use Red as a background color', async ({ page }) => {
  await page.click("text=Red")
  await page.waitForSelector("text=#e74c3c")
  //await page.screenshot({ path: 'screenshot.png', fullPage: true }); THIS DOES WORK
});
