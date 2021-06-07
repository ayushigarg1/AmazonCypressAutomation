/// <reference types="cypress" />
import HomePageObjects from "../../support/pageObjects/homePageObjects";
import CustomerPreferencesObjects from "../../support/pageObjects/customerPreferencesObjects";
import ProductDetaislPageObject from "../../support/pageObjects/productDetailsPageObject";

/**
 * Scenario to verify the selected currency displayed for the product's price
 */
describe("Scenario 3: Verify the selected currency displayed for the products' price", function () {
  before(function () {
    // open website Url
    cy.visit(Cypress.env("url"));
    // verify if the correct url site is loaded
    cy.url().should("include", "www.amazon.com");
    // get data from fixture
    cy.fixture("productPrice").then(function (data) {
      this.data = data;
    });
  });

  /**
   * Test case to verify the selected currency displayed for the product's price
   */
  it("Verify the selected currency displayed for the products' price", function () {
    const homePageObjects = new HomePageObjects();
    const customerPreferencesObjects = new CustomerPreferencesObjects();
    const productDetaislPageObject = new ProductDetaislPageObject();
    // click on Currency Settings
    homePageObjects.getCurrencySettings().click();
    // click on currency drop-down
    customerPreferencesObjects.getCurrencyDropdown().click();
    // set currency
    cy.setCurrency(this.data.currencyAED);
    // verify correct currency is slected
    customerPreferencesObjects
      .getCurrencyDropdown()
      .should("include.text", this.data.currencyAED);
    // click on save Changes
    customerPreferencesObjects.getSaveButton().click();
    // verify url contains selected currency
    cy.url().should("include", this.data.currencyAED);
    // enter value is search text box
    homePageObjects
      .getSearchTextBox()
      .type(this.data.searchText)
      .then(() => {
        // click on search
        homePageObjects.getSearchIcon().click();
      });
    // verify product price for selected currency
    productDetaislPageObject
      .getProductListPrice()
      .should("include.text", this.data.currencyAED);
  });
});
