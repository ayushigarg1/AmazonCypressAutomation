/**
 * Page object class for home pages
 */
class HomePageObjects {
  /**
   * get today's deal link
   */
  getTodaysDealLink() {
    return cy.contains("Today's Deals");
  }

  /**
   * get currency setting
   */
  getCurrencySettings() {
    return cy.get(".icp-nav-flag");
  }

  /**
   * get search text box
   */
  getSearchTextBox() {
    return cy.get("#twotabsearchtextbox");
  }

  /**
   * get search icon
   */
  getSearchIcon() {
    return cy.get("#nav-search-submit-button ");
  }

  /**
   * get search DLL
   */
  getSearchDll() {
    return cy.get("#searchDropdownBox");
  }

  /**
   * get product detail page for a product
   */
  getProductDetailsPage() {
    return cy.get('[cel_widget_id^="MAIN-SEARCH_RESULTS-1"] .s-image:first');
  }

  /**
   * get all categories link
   */
  getAllCategoriesLink() {
    return cy.get("#nav-hamburger-menu");
  }

  /**
   * get categories link by given link string
   * @param link
   */
  getCategoriesLink(link) {
    return cy
      .get("#hmenu-content > ul.hmenu.hmenu-visible > li > a")
      .contains(link);
  }
}
export default HomePageObjects;
