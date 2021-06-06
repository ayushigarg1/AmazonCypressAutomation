/// <reference types = "Cypress"/>

import HomePageObjects from "../../support/pageObjects/homePageObjects";
import ProductListPageObjects from "../../support/pageObjects/productListPageObjects";
import TelevisionPageObjects from "../../support/pageObjects/televisionPageObjects";

/**
 * Scenario to validate the total displayed number of results for category Smart Home | Televisions
 */
describe("Scenario 1: Check the total displayed number of results for category Smart Home | Televisions", function () {
  before(function () {
    // open website Url
    cy.visit(Cypress.env("url"));
    // verify if the correct url site is loaded
    cy.url().should("include", "www.amazon.com");
    // get data from fixture
    cy.fixture("smartHomeTelevisions").then(function (data) {
      this.data = data;
    });
  });

  /**
   * Test case to verify the total number of results match with the 
   * total number of products displayed in each page
   */
  it("Verify the total number of results match the total displayed products", function () {
    const homePageObjects = new HomePageObjects();
    const televisionPageObjects = new TelevisionPageObjects();
    const productListPageObjects = new ProductListPageObjects();

    // click on all categories link on Home page
    homePageObjects.getAllCategoriesLink().click();
    // click on smart home link in menu
    homePageObjects.getCategoriesLink(this.data.smartHomeCategory).as("smartHomeCategory");
    // waiting for smart home category to be found
    cy.wait(1000);
    // scrolling so that category does not hide under menu
    cy.get("#hmenu-content > ul.hmenu.hmenu-visible").scrollTo("0%", "25%");
    // waiting for scrolling to be completed
    cy.wait(1000);
    cy.get("@smartHomeCategory").click();
    // cy.selectCategory("Smart Home");
    // click on home entertainment in menu
    homePageObjects.getCategoriesLink(this.data.homeEntertainmentCategory).click();
    // verify if the url contains home-entertainment
    cy.url().should("include", this.data.homeEntertainmentURL);
    // click on home entertainment sub category Televisions
    cy.selectHomeEntertainmentSubCategory(this.data.smartTelevisionsCategory);
    // verify if the page is of smart televisions
    televisionPageObjects
      .getTelevisionPageHeading()
      .should("include.text", this.data.televisionHeading);
    // navigate to all results
    televisionPageObjects.getSeeAllResultsElement().click();
    // defining recursive funtion to click on next button is visible
    var productsCount = 0;
    const clickNext = () => {
      // getting products page count
      productListPageObjects
        .getProducts()
        .then((products) => {
          productsCount = productsCount + products.length;
        })
        .then(() => {
          cy.log("Product Count on current page: " + productsCount);
          // checking if page has sponsered products
          // if sponsered products are present, reducing the count of Product counts
          cy.get("body")
            .then(($body) => {
              var sponsoredProductsCount = $body.find(
                '[data-component-type="sp-sponsored-result"]'
              ).length;
              if (sponsoredProductsCount > 0) {
                productsCount = productsCount - sponsoredProductsCount;
                cy.log(
                  "Product Count on page after removing sponsered products: " +
                    productsCount
                );
              }
            })
            .then(() => {
              // getting pagination next button
              productListPageObjects.getPaginationNextButton().then((element) => {
                // if pagination button is not disabled click on the button
                if (!element.hasClass("a-disabled")) {
                  const nextPageLink = element.children(1).attr("href");
                  // Using visit instead of clicking link, so that cypress waits for full page load
                  cy.visit(Cypress.env("url") + nextPageLink);
                  // recursively call clickNext button
                  clickNext();
                }
              });
            });
        });
    };

    // clicking next page button of pagination
    clickNext();

    // get search result count text
    var totalCount = 0;
    productListPageObjects.getSearchResultCountTextElement().then((element) => {
      const countText = element.text();
      totalCount = countText.split(" ")[2];
      cy.log(totalCount);
      expect(Number(totalCount)).to.equal(productsCount);
    });
  });
});
