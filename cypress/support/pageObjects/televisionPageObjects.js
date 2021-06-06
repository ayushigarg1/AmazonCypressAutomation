/**
 * Page object for television page
 */
class TelevisionPageObjects {
  /**
   * get television page heading element
   */
  getTelevisionPageHeading() {
    return cy.get(".fst-h1-st.pageBanner > h1");
  }

  /**
   * get see all result element
   */
  getSeeAllResultsElement() {
    return cy.get(".apb-browse-searchresults-footer a");
  }
}

export default TelevisionPageObjects;
