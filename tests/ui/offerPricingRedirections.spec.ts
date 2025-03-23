import test from "@playwright/test";
import { OfferPricingPage } from "../../src/pages/offerPricing.page";
import { CheckoutPage } from "../../src/pages/checkout.page";

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

const twoYearUltraSubscriptionSummary = '2-year plan + 3 EXTRA months';
const twoYearCompleteSubscriptionSummary = '2-year plan + 3 EXTRA months';
const twoYearPlusSubscriptionSummary = '2-year plan + 3 EXTRA months';
const twoYearBasicSubscriptionSummary = '2-year plan + 3 EXTRA months';

// Each subscription plan would be tested for 1m, 1y, and 2y subscription lengths AND for all 4 buttons
// I would also add additional assertions e.g. for Dedicated IP price, total price, tax etc.

test("should redirect to checkout after clicking the description of 2 year Ultra subscription in comparison section", async () => {
  await offerPricingPage.clickSubscriptionDescriptionInComparisonSection('Ultra');
  await checkoutPage.verifyOrderSummary(twoYearUltraSubscriptionSummary);
});

test("should redirect to checkout after selecting the button of 2 year Complete subscription in comparison section", async () => {
  await offerPricingPage.clickSubscriptionButtonInComparisonSection('Complete');
  await checkoutPage.verifyOrderSummary(twoYearCompleteSubscriptionSummary);
});

test("should redirect to checkout after selecting the button of 2 year Plus subscription in main section", async () => {
  await offerPricingPage.clickSubscriptionButtonInMainSection('Plus');
  await checkoutPage.verifyOrderSummary(twoYearPlusSubscriptionSummary);
});

test("should redirect to checkout after clicking the description of 2 year Basic subscription in main section", async () => {
  await offerPricingPage.clickSubscriptionDescriptionInMainSection('Basic');
  await checkoutPage.verifyOrderSummary(twoYearBasicSubscriptionSummary);
});
