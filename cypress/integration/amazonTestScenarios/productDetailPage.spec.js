/// <reference types="cypress" />
import HomePageObjects from "../../support/pageObjects/homePageObjects";
import ProductDetaislPageObject from "../../support/pageObjects/productDetailsPageObject";

/**
 * Scenario to check product details page
 */
describe("Scenario 4 : Check Product Details Page", function () {
  before(function () {
    // open website Url
    cy.visit(Cypress.env("url"));
    // verify if the correct url site is loaded
    cy.url().should("include", "www.amazon.com");
    // get data from fixture
    cy.fixture("productDetailPage").then(function (data) {
      this.data = data;
    });
  });

  /**
   * Test case to verify product details page
   */
  it("Verify Product Details Page", function () {
    const homePageObjects = new HomePageObjects();
    const productDetaislPageObject = new ProductDetaislPageObject();
    // get search dll element and set electronics in search DLL
    homePageObjects
      .getSearchDll()
      .select(this.data.electronicsSelectValue, { force: true });
    // enter value is search text box
    homePageObjects
      .getSearchTextBox()
      .type(this.data.searchAppleText)
      .then(() => {
        // click on search
        homePageObjects.getSearchIcon().click();
      });

    // verify page
    cy.url().should("include", this.data.searchAppleText);
    // click on any product in product search page
    homePageObjects.getProductDetailsPage().click();

    cy.get("body").then(($body) => {
      // check if ratings are present in the body
      if ($body.find("#averageCustomerReviews_feature_div").length > 0) {
        // verify if ratings are present
        productDetaislPageObject
          .getUserRatings()
          .should("include.text", this.data.ratings);
      }

      // check if add to cart button is present
      if ($body.find("#add-to-cart-button").length > 0) {
        // if add to cart button is present then
        // validate if shipping details are present
        // and the price is present
        // and the product is instock
        productDetaislPageObject.getAddToCartButton().then((element) => {
          // validating shipping details
          productDetaislPageObject
            .getProductShipping()
            .should("include.text", this.data.shipping);
          // validate price is present
          productDetaislPageObject.getPriceInsideBuyBox().should("exist");
          // validating product in stock
          productDetaislPageObject
            .getProductInStockTag()
            .should("include.text", this.data.inStock);
          // click on add to cart button
          productDetaislPageObject.getAddToCartButton().click();
          // validate checkout button consist of the checkout text
          productDetaislPageObject
            .getCheckoutButton()
            .should("include.text", this.data.proceedToCheckout);
        });
      }
      // if add to cart button is not present then find if
      // product stock is not present by verifying
      // if wishlist main button is present
      else if ($body.find("#wishListMainButton").length > 0) {
        // if wishlist main button is present then validate
        // shipping details should not be present
        // and price block should not be present
        // and stock is currently unavailable
        productDetaislPageObject.getAddToWishlistButton().then((element) => {
          // validate product shipping does not exist
          productDetaislPageObject.getProductShipping().should("not.exist");
          // validate price does not exist
          productDetaislPageObject.getPriceInsideBuyBox().should("not.exist");
          // validate product stock is not available
          productDetaislPageObject
            .getProductInStockTag()
            .should("include.text", this.data.outOfStock);
        });
      }
      // if add to cart button is not present and product stock is not present
      // then verify that the product cannot be shipped by validating ship from
      // does not exist
      else if (
        $body.find("#add-to-cart-button").length === 0 ||
        cy
          .get(
            "#mir-layout-DELIVERY_BLOCK-slot-DELIVERY_MESSAGE > .a-color-error"
          )
          .contains("cannot be shipped ")
      ) {
        // if add to cart is not present or delivery message is not present
        // then validate if ship from details are not present
        cy.get(
          "#mir-layout-DELIVERY_BLOCK-slot-DELIVERY_MESSAGE > .a-color-error"
        ).then((element) => {
          // validate shipping text does not exist
          productDetaislPageObject
            .getShippingDetails()
            .should("not.include.text", this.data.shipping);
          // validate price exist
          productDetaislPageObject.getPriceInsideBuyBox().should("exist");
        });
      }
    });
  });
});
