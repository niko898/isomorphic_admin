# E-Commerce Module

Complete e-commerce management system with products, orders, categories, and checkout.

## Routes

```typescript
routes.eCommerce = {
  dashboard: '/ecommerce',
  products: '/ecommerce/products',
  createProduct: '/ecommerce/products/create',
  productDetails: (slug) => `/ecommerce/products/${slug}`,
  categories: '/ecommerce/categories',
  orders: '/ecommerce/orders',
  reviews: '/ecommerce/reviews',
  shop: '/ecommerce/shop',
  cart: '/ecommerce/cart',
  checkout: '/ecommerce/checkout',
};
```

## Features

### Products
- Product listing with filters
- Create/edit products
- Product details page
- Category management
- Product search

### Orders
- Order management
- Order details
- Order tracking
- Create/edit orders

### Shopping
- Product catalog
- Shopping cart
- Checkout flow
- Payment integration

### Reviews
- Customer reviews
- Review management
- Rating system

## Data

Mock data: [src/data/products-data.ts](../../src/data/products-data.ts)

**See Also**: [Development Guide](../15-development-guide.md)
