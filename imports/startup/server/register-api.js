import '../../api/products/server/publications.js';
import '../../api/products/products.js';

import Products from '../../api/products/products.js';

Products.insert({
  name: "Product 2",
  description: "desc 2",
  unitPrice: 19,
  available: false
});
