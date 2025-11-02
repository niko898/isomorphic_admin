# Isomorphic Admin Dashboard - Complete Documentation

> Comprehensive documentation for the Isomorphic React TypeScript Admin Dashboard template, optimized for MCP server integration and AI-assisted development.

## Overview

**Isomorphic** (v5.7.0) is a feature-rich, production-ready React TypeScript admin dashboard template built with Next.js 14, featuring multiple pre-built dashboards, 65+ pages, 57+ UI components, and comprehensive business modules.

## Official Resources

- **Official Documentation**: https://isomorphic-doc.vercel.app/
- **Repository**: This codebase
- **Version**: 5.7.0
- **Tech Stack**: Next.js 14 + React 18 + TypeScript 5.2 + Tailwind CSS 3.3

---

## Documentation Index

### Getting Started
- **[01. Getting Started](01-getting-started.md)** - Installation, setup, project structure, and first steps
  - Prerequisites and requirements
  - Installation guide
  - Development workflow
  - Project structure overview
  - Environment setup

### Architecture & Structure
- **[02. Architecture](02-architecture.md)** - System design, patterns, and conventions
  - Tech stack details
  - Folder structure
  - Design patterns
  - Code organization
  - Best practices

### Components & UI
- **[03. Components](03-components.md)** - Complete UI component library (57+ components)
  - RizzUI component system
  - Custom components
  - Component APIs and props
  - Usage examples
  - Styling patterns

### Hooks & Utilities
- **[04. Hooks](04-hooks.md)** - Custom React hooks reference (23+ hooks)
  - Hook APIs
  - Parameters and return values
  - Usage patterns
  - Common scenarios

### Layout System
- **[05. Layouts](05-layouts.md)** - Multi-layout architecture
  - Hydrogen (default sidebar layout)
  - Helium layout
  - Lithium layout
  - Beryllium layout
  - Layout switching mechanism

### Feature Modules

Detailed guides for each major feature:

- **[E-Commerce Module](06-features/ecommerce.md)** - Complete e-commerce system
  - Products, categories, orders
  - Shopping cart and checkout
  - Product filtering and search
  - Order tracking

- **[Logistics Module](06-features/logistics.md)** - Shipping and logistics
  - Shipment management
  - Tracking system
  - Customer profiles

- **[Support Module](06-features/support.md)** - Helpdesk system
  - Inbox and messaging
  - Templates and snippets
  - Ticket management

- **[Invoice Module](06-features/invoicing.md)** - Invoice management
  - Create and edit invoices
  - Payment tracking
  - Invoice details

- **[File Manager](06-features/file-manager.md)** - File management system
  - File upload/download
  - Folder organization
  - Storage analytics

- **[Point of Sale](06-features/pos.md)** - POS system
  - Product catalog
  - Transaction processing

- **[Event Calendar](06-features/calendar.md)** - Calendar application
  - Event management
  - Scheduling

### Forms & Data
- **[07. Authentication](07-authentication.md)** - Auth system and patterns
  - NextAuth integration
  - Authentication flows
  - 5 auth page variations
  - Session management

- **[08. Forms & Validation](08-forms-validation.md)** - Form handling
  - React Hook Form patterns
  - Zod validation schemas
  - Form components
  - Multi-step forms

- **[09. State Management](09-state-management.md)** - State patterns with Jotai
  - Atomic state management
  - Store setup
  - Common patterns

- **[12. Data Tables](12-data-tables.md)** - Advanced table functionality
  - Controlled tables
  - Sorting, filtering, pagination
  - Table components
  - Custom columns

### Styling & Theming
- **[10. Styling & Theming](10-styling-theming.md)** - Visual customization
  - Tailwind CSS configuration
  - Color presets (12+ themes)
  - Dark/light mode
  - Custom animations
  - Theme switching

### Integrations
- **[11. Integrations](11-integrations.md)** - Third-party services
  - NextAuth
  - Uploadthing (file uploads)
  - Nodemailer (email)
  - Google Maps
  - Email templates

### Navigation & Routing
- **[13. Routing & Navigation](13-routing-navigation.md)** - App routing system
  - Next.js App Router
  - Route configuration
  - Navigation menu
  - Dynamic routes

### Development
- **[14. Utilities](14-utilities.md)** - Helper functions and validators
  - Utility functions
  - Validators
  - Constants
  - Enums

- **[15. Development Guide](15-development-guide.md)** - Building with Isomorphic
  - Adding new pages
  - Creating components
  - Customizing themes
  - Extending features
  - Best practices

- **[16. API Reference](16-api-reference.md)** - API routes and server actions
  - API routes
  - Server actions
  - Data fetching patterns

### Deployment & MCP
- **[17. Deployment](17-deployment.md)** - Production deployment
  - Build configuration
  - Environment variables
  - Deployment platforms
  - Performance optimization

- **[18. MCP Server Setup](18-mcp-server-setup.md)** - MCP integration guide
  - Setting up MCP server with this repository
  - Configuration for Claude Code
  - Usage patterns
  - Best practices for AI-assisted development

---

## Quick Reference

### Key Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14.0.1 | React framework with App Router |
| React | 18.2.0 | UI library |
| TypeScript | 5.2.2 | Type safety |
| Tailwind CSS | 3.3.5 | Styling |
| RizzUI | 0.7.0 | Component library |
| React Hook Form | 7.48.2 | Form handling |
| Zod | 3.22.4 | Validation |
| Jotai | 2.3.0 | State management |
| Recharts | 2.9.3 | Charts |
| Framer Motion | 10.16.4 | Animations |

### Project Statistics

- **65+ Pages** - Pre-built pages and templates
- **57+ Components** - Reusable UI components
- **23+ Hooks** - Custom React hooks
- **6 Dashboards** - Different dashboard types
- **4 Layouts** - Layout variations
- **173+ Icons** - Custom SVG icons
- **40+ Data Files** - Mock datasets

### Common File Locations

```
src/
├── app/                    # Next.js pages (App Router)
├── components/             # Reusable components
│   ├── ui/                # UI components (RizzUI wrappers)
│   ├── charts/            # Chart components
│   └── icons/             # Icon components
├── config/                 # Configuration files
│   ├── routes.ts          # Route definitions
│   ├── site.config.tsx    # Site settings
│   └── enums.ts           # Enumerations
├── data/                   # Mock data
├── hooks/                  # Custom hooks
├── layouts/                # Layout components
├── store/                  # State management (Jotai)
├── types/                  # TypeScript types
└── utils/                  # Utility functions
```

---

## For MCP Server Usage

This documentation is structured to be easily queried by MCP servers and AI assistants:

1. **Hierarchical Organization** - Documentation follows a logical structure from basics to advanced topics
2. **Clear File Names** - Numbered files for easy ordering and discovery
3. **Cross-References** - Links between related topics
4. **Code Examples** - Practical examples with file paths
5. **Search-Friendly** - Clear headings and comprehensive indexing

### Recommended Query Patterns

- **Finding components**: See [03-components.md](03-components.md)
- **Understanding hooks**: See [04-hooks.md](04-hooks.md)
- **Feature implementation**: See relevant file in [06-features/](06-features/)
- **Form patterns**: See [08-forms-validation.md](08-forms-validation.md)
- **Styling/theming**: See [10-styling-theming.md](10-styling-theming.md)

---

## Contributing to Documentation

When updating this documentation:

1. Keep examples up-to-date with the codebase
2. Include file paths for code references
3. Maintain consistent formatting
4. Cross-reference related topics
5. Update this index when adding new files

---

## Support

- **Issues**: GitHub Issues
- **Official Docs**: https://isomorphic-doc.vercel.app/
- **This Documentation**: Navigate using the index above

---

Last Updated: 2025-11-02
Version: 5.7.0
