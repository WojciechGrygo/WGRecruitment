import { expect, Page } from "@playwright/test";

export class CheckoutPage {
  constructor(private page: Page) {}

  async verifyOrderSummary(expectedText: string) {
    await expect(this.page.getByTestId("CartSummarySelectedBundle").getByRole("paragraph")).toContainText(expectedText);
  }

  async verifyTotalPrice(expectedPrice: string) {
    await expect(this.page.getByTestId("SelectedCartSummaryCard-total-price")).toContainText(expectedPrice);
  }
}
