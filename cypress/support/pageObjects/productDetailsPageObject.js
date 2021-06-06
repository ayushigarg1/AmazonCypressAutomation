/**
 * Page object class for product details
 */
class ProductDetaislPageObject {
  /**
   * get user rating
   */
  getUserRatings() {
    return cy.get("#averageCustomerReviews_feature_div");
  }

  /**
   * get product in stock tag element
   */
  getProductInStockTag() {
    return cy.get("#availability > span");
  }

  /**
   * get product shipping from element
   */
  getProductShipping() {
    return cy.get("#tabular-buybox-container");
  }

  /**
   * get add to cart button
   */
  getAddToCartButton() {
    return cy.get("#add-to-cart-button");
  }

  /**
   * get price element
   */
  getPriceElement() {
    return cy.get("#priceblock_ourprice_row > .a-span12");
  }

  /**
   * get checkout button
   */
  getCheckoutButton() {
    return cy.get("#hlb-ptc-btn-native");
  }

  /**
   * get add to wish list buttons
   */
  getAddToWishlistButton() {
    return cy.get("#wishListMainButton");
  }

  /**
   * get price block
   */
  getPriceBlock() {
    return cy.get("#priceblock_ourprice_row");
  }

  /**
   * get shipping details
   */
  getShippingDetails() {
    return cy.get(
      "#exports_desktop_undeliverable_buybox > .a-box-group > .a-box > .a-box-inner"
    );
  }

  /**
   * get price inside buy box
   */
  getPriceInsideBuyBox() {
    return cy.get("#price_inside_buybox");
  }

  /**
   * get product list price
   */
  getProductListPrice() {
    return cy.get('[data-cel-widget^="MAIN-SEARCH_RESULTS"] .a-price:first');
  }
}
export default ProductDetaislPageObject;
