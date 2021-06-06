/**
 * Page Object class for customer preferences
 */
class CustomerPreferencesObjects {
  /**
   * get currency drop down
   */
  getCurrencyDropdown() {
    return cy.get("#a-autoid-0");
  }

  /**
   * get save button
   */
  getSaveButton() {
    return cy.get(".a-button-input");
  }

  /**
   * get all currencies
   */
  getAllCurrencies() {
    return cy.get(".a-popover-inner.a-lgtbox-vertical-scroll .a-dropdown-item");
  }
}
export default CustomerPreferencesObjects;
