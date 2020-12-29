const product = require('./product.json')

function transformProductVariantsToCustomProductsMap() {
  // transform product here
  // available:
  // - true: inventory not managed OR is managed and allow ordering when variant is out of stock (quantity <= 0)
  // - false: other cases
  return {}
}

module.exports = {
  transformProductVariantsToCustomProductsMap,
}
