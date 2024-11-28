import {  test, expect, type Page } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
});

test("has title", async ({page}) =>{
    await expect(page).toHaveTitle(/List/);
})

const tasks = [{
    id:1,
    task:"math",
    description:"math task 1",
    status : "Active"
}] as const

    test("change the status to completed and verify it appears in the completed tasks list",async ({page})=>{
        await page.getByPlaceholder("Task Title").fill(tasks[0].task);
        await page.getByPlaceholder("Description").fill(tasks[0].description);
        await page.getByRole("status").selectOption(tasks[0].status);
        await page.getByRole("button").click();
        
        await page.getByTestId("change-status").selectOption("Completed")

        
        await page.getByTestId('filter').selectOption("Completed");

        await page.waitForSelector('[data-testid="Completed-tasksList-tasks"]');
        await page.waitForSelector('[data-testid="Completed-tasksList-desc"]');
        await page.waitForSelector('[data-testid="Completed-tasksList-status"]');

        await expect(page.getByTestId("Completed-tasksList-tasks")).toHaveText([
            tasks[0].task
        ])
        await expect(page.getByTestId("Completed-tasksList-desc")).toHaveText([
            tasks[0].description
        ])
        await expect(page.getByTestId("Completed-tasksList-status")).toHaveText([
            "Completed"
        ])
    })
  