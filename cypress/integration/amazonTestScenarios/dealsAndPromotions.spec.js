/// <reference types="cypress" />
import HomePageObjects from "../../support/pageObjects/homePageObjects";
import DealsAndPromotionsObjects from "../../support/pageObjects/dealsAndPromotionsObjects";

/**
 * Scenario to check filter by department is Deals and Promotions page
 */
describe("Scenario 2: Check filter by department in Deals and Promotions Page", function () {
  before(function () {
    // open website Url
    cy.visit(Cypress.env("url"));
    // verify if the correct url site is loaded
    cy.url().should("include", "www.amazon.com");
    // get data from fixture
    cy.fixture("dealsAndPromotions").then(function (data) {
      this.data = data;
    });
  });

  /**
   * Test case to verify if the correct department is selected
   */
  it("Verify the correct selected department", function () {
    const homePageObjects = new HomePageObjects();
    const dealsAndPromotionsObjects = new DealsAndPromotionsObjects();
    // click on Today's Deal
    homePageObjects.getTodaysDealLink().click({ force: true });
    // verify current url
    cy.url().should("include", this.data.dealsURL);
    // click on Show more Department
    dealsAndPromotionsObjects.getSeeMoreDepartment().click();
    // click on software department
    cy.getDepartment(this.data.softWareDepartment);
    // verify correct department is slected
    dealsAndPromotionsObjects
      .getCorrectDepartment()
      .should("include.text", this.data.softWareDepartment);
  });
});
