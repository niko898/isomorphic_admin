# Logistics Module

Shipping and logistics management system.

## Routes

```typescript
routes.logistics = {
  dashboard: '/logistics',
  shipmentList: '/logistics/shipments',
  customerProfile: '/logistics/customer-profile',
  createShipment: '/logistics/shipments/create',
  shipmentDetails: (id) => `/logistics/shipments/${id}`,
  tracking: (id) => `/logistics/tracking/${id}`,
};
```

## Features

- Shipment management
- Real-time tracking
- Customer profiles
- Delivery status
- Create/edit shipments

## Data

Mock data: [src/data/shipment-data.ts](../../src/data/shipment-data.ts)
