/**
 * Page object class for product list page
 */
class ProductListPageObjects {
  /**
   * get search result count elements
   */
  getSearchResultCountTextElement() {
    return cy.get('[data-cel-widget="UPPER-RESULT_INFO_BAR-0"] h1');
  }

  /**
   * get pagination next button
   */
  getPaginationNextButton() {
    return cy.get('[data-cel-widget^="MAIN-PAGINATION"] li:last');
  }

  /**
   * get products
   */
  getProducts() {
    return cy.get('[cel_widget_id^="MAIN-SEARCH_RESULTS"]');
  }
}

export default ProductListPageObjects;
