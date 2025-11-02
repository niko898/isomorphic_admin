# Data Tables

Complete guide to implementing data tables with sorting, filtering, and pagination.

## Table Hook

### useTable Hook

[src/hooks/use-table.ts](../src/hooks/use-table.ts)

```typescript
import { useTable } from '@/hooks/use-table';

const table = useTable(data, pageSize);
```

**Features**:
- Pagination
- Sorting (asc/desc)
- Global search
- Column filters
- Row selection
- Delete rows

## Complete Example

```typescript
import { useTable } from '@/hooks/use-table';
import { ControlledTable } from '@/components/controlled-table';
import { productsData } from '@/data/products-data';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: true,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    sorter: true,
    render: (value) => `$${value}`,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
];

function ProductTable() {
  const table = useTable(productsData, 10);

  return (
    <div>
      {/* Search */}
      <input
        value={table.searchTerm}
        onChange={(e) => table.handleSearch(e.target.value)}
        placeholder="Search..."
      />

      {/* Table */}
      <ControlledTable
        columns={columns}
        data={table.tableData}
        isLoading={table.isLoading}
        pagination={{
          current: table.currentPage,
          total: table.totalItems,
        }}
        onPaginate={table.handlePaginate}
        onSort={table.handleSort}
      />
    </div>
  );
}
```

## Features

### Sorting

```typescript
// Click column header to sort
const handleSort = (columnKey: string) => {
  table.handleSort(columnKey);
};
```

### Filtering

```typescript
// Filter by column
table.updateFilter('status', 'active');

// Date range filter
table.updateFilter('createdAt', [startDate, endDate]);

// Price range filter
table.updateFilter('price', [minPrice, maxPrice]);
```

### Row Selection

```typescript
// Select single row
table.handleRowSelect(rowId);

// Select all rows
table.handleSelectAll();

// Get selected rows
console.log(table.selectedRowKeys);
```

### Delete

```typescript
// Delete single row
table.handleDelete(rowId);

// Delete multiple rows
table.handleDelete([id1, id2, id3]);
```

## Table Components

[src/components/controlled-table/](../src/components/controlled-table/)

- ControlledTable
- TableHeader
- TablePagination
- TableFilter

**See Also**: [Hooks](04-hooks.md#use-table)
