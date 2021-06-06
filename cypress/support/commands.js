// ***********************************************
// Custom commands for amazon test scenarios
// ***********************************************

// -- Command to get department by department name --
Cypress.Commands.add("getDepartment", (departmentName) => {
  cy.get(".a-expander-container .a-label.a-checkbox-label").each(
    ($el, index, $List) => {
      if ($el.text().includes(departmentName)) {
        cy.wrap($el).click();
      }
    }
  );
});

// -- Command to set currency --
Cypress.Commands.add("setCurrency", (currency) => {
  cy.get(".a-popover-inner.a-lgtbox-vertical-scroll .a-dropdown-item").each(
    ($el, index, $List) => {
      if ($el.text().includes(currency)) {
        cy.wrap($el).click();
      }
    }
  );
});

// -- Command to select home entertainment subcategory by category name
Cypress.Commands.add("selectHomeEntertainmentSubCategory", (categoryName) => {
  cy.get(
    '[data-cel-widget^="acsux-widgets_content-grid_merchandised-search-3_row2"] > div > a > img'
  ).each(($el, index, $list) => {
    if ($el.attr("alt") === categoryName) {
      cy.wrap($el).click();
    }
  });
});
