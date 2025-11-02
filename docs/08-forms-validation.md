# Forms & Validation

Form handling and validation patterns using React Hook Form and Zod.

## Tech Stack

- **React Hook Form 7.48.2** - Form state management
- **Zod 3.22.4** - Schema validation
- **@hookform/resolvers** - Integration layer

## Basic Form Pattern

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Define schema
const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  age: z.number().min(18, 'Must be 18+'),
});

type FormData = z.infer<typeof schema>;

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        {...register('name')}
        label="Name"
        error={errors.name?.message}
      />
      <Input
        {...register('email')}
        type="email"
        label="Email"
        error={errors.email?.message}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

## Validation Schemas

### Common Patterns

```typescript
import { z } from 'zod';

// String validations
z.string().min(3, 'Too short')
z.string().max(50, 'Too long')
z.string().email('Invalid email')
z.string().url('Invalid URL')
z.string().regex(/^[a-zA-Z]+$/, 'Letters only')

// Number validations
z.number().min(0)
z.number().max(100)
z.number().positive()
z.number().int()

// Date validations
z.date()
z.date().min(new Date('2020-01-01'))

// Optional fields
z.string().optional()
z.string().nullable()

// Arrays
z.array(z.string())
z.array(z.object({ name: z.string() }))

// Objects
z.object({
  name: z.string(),
  address: z.object({
    street: z.string(),
    city: z.string(),
  }),
})
```

## Multi-Step Forms

Located in [src/app/(hydrogen)/multi-step/](../src/app/(hydrogen)/multi-step/)

## Form Components

See [src/components/ui/](../src/components/ui/):
- Input
- Textarea
- Select
- Checkbox
- Radio
- DatePicker
- FileInput

**See Also**: [Components](03-components.md)
