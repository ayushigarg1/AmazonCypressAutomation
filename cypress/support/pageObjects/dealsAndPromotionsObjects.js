/**
 * Page object class for deals and promotions
 */
class DealsAndPromotionsObjects {
  /**
   * get see more department element
   */
  getSeeMoreDepartment() {
    return cy.contains("See more Department");
  }

  /**
   * get all department
   */
  getAllDepartments() {
    return cy.get(".a-expander-container .a-label.a-checkbox-label");
  }

  /**
   * get correct department
   */
  getCorrectDepartment() {
    return cy.get(".a-link-normal > .a-text-bold");
  }
}
export default DealsAndPromotionsObjects;
