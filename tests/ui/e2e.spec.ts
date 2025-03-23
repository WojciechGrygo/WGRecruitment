import test from '@playwright/test';
import { OfferPricingPage } from '../../src/pages/offerPricing.page';
import { CheckoutPage } from '../../src/pages/checkout.page';

let offerPricingPage: OfferPricingPage;
let checkoutPage: CheckoutPage;

// test.use({
//   proxy: { server: "polish_server" },
// });

test.beforeEach(async ({ page }) => {
  offerPricingPage = new OfferPricingPage(page);
  checkoutPage = new CheckoutPage(page);
  await offerPricingPage.goto();
});

test('should navigate to checkout with one year plan, return to pricing, select monthly plan and proceed to checkout', async ({ page }) => {
  const expectedOrderSummaryText = 'Monthly plan';

  // commented out because of lack of polish server
  // const expectedOrderSummaryText = "Monthly plan (PLN 44.09/mo)";
  // const totalPrice = "PLN 44.09";

  await offerPricingPage.selectSubscriptionLength('1y');
  await offerPricingPage.clickSubscriptionButtonInMainSection('Ultra');
  await page.goBack();
  await offerPricingPage.selectSubscriptionLength('1m');
  await offerPricingPage.clickSubscriptionDescriptionInMainSection('Basic');
  await checkoutPage.verifyOrderSummary(expectedOrderSummaryText);
  // await checkoutPage.verifyTotalPrice(totalPrice);
});
