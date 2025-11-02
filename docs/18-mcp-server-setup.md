# MCP Server Setup Guide

Complete guide to setting up and using this Isomorphic repository with Model Context Protocol (MCP) servers for AI-assisted development with Claude Code.

## Overview

This documentation is optimized for use with MCP servers, allowing Claude Code and other AI assistants to effectively understand and work with the Isomorphic codebase.

## What is MCP?

**Model Context Protocol (MCP)** enables AI assistants to access external resources like file systems, databases, and APIs through a standardized interface.

For this repository, MCP allows Claude Code to:
- Query documentation
- Understand project structure
- Assist with code generation
- Help debug issues
- Suggest best practices

## Repository Structure for MCP

This repository is organized for optimal MCP usage:

```
isomorphic_admin/
├── docs/                    # Comprehensive documentation (THIS FOLDER)
│   ├── README.md           # Main documentation index
│   ├── 01-getting-started.md
│   ├── 02-architecture.md
│   ├── ... (18 documentation files)
│   └── 06-features/        # Feature-specific docs
│
├── src/                    # Source code
│   ├── app/               # Next.js pages
│   ├── components/        # UI components
│   ├── hooks/             # Custom hooks
│   └── ...
│
└── README.md              # Main project README
```

## Setting Up MCP for This Repository

### Prerequisites

1. **Claude Code** - Desktop application
2. **Git** - For repository access
3. **MCP Server** - Filesystem or GitHub MCP server

### Configuration Steps

#### Option 1: Local Filesystem Access

If you have the repository cloned locally:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd isomorphic_admin
   ```

2. **Configure MCP Server**:

   Add to your Claude Code MCP configuration (`~/.claude/mcp.json`):

   ```json
   {
     "mcpServers": {
       "isomorphic-docs": {
         "command": "npx",
         "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/isomorphic_admin/docs"],
         "description": "Isomorphic Admin Dashboard Documentation"
       },
       "isomorphic-src": {
         "command": "npx",
         "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/isomorphic_admin/src"],
         "description": "Isomorphic Source Code"
       }
     }
   }
   ```

   Replace `/path/to/isomorphic_admin` with the actual path to your repository.

#### Option 2: GitHub Repository Access

If using GitHub MCP server:

```json
{
  "mcpServers": {
    "isomorphic-github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "your-github-token"
      }
    }
  }
}
```

### Verifying MCP Setup

1. Restart Claude Code
2. Check MCP servers are loaded:
   - Look for server status in Claude Code settings
   - Verify connection to repository

3. Test with a query:
   ```
   "What components are available in Isomorphic?"
   ```

   Claude should be able to reference `docs/03-components.md`

## Using Claude Code with Isomorphic

### Effective Queries

#### Understanding the Codebase

```
"Explain the architecture of Isomorphic admin dashboard"
→ Claude references docs/02-architecture.md

"How do I use the useTable hook?"
→ Claude references docs/04-hooks.md

"What authentication methods are supported?"
→ Claude references docs/07-authentication.md
```

#### Component Development

```
"Show me how to create a new data table with sorting"
→ Claude provides examples from docs/12-data-tables.md

"How do I integrate a new form with validation?"
→ Claude references docs/08-forms-validation.md

"What's the proper way to add a new page?"
→ Claude guides using docs/15-development-guide.md
```

#### Feature Implementation

```
"How does the e-commerce module work?"
→ Claude explains using docs/06-features/ecommerce.md

"Help me customize the theme colors"
→ Claude references docs/10-styling-theming.md
```

### Best Practices for AI-Assisted Development

1. **Be Specific**: Reference specific features or components
   ```
   Good: "How do I use the MetricCard component?"
   Better: "Show me how to create a MetricCard with growth indicator"
   ```

2. **Ask for File Paths**: Get exact locations
   ```
   "Where is the product table component located?"
   ```

3. **Request Examples**: Ask for practical code
   ```
   "Show me a complete example of a filterable product table"
   ```

4. **Understand Patterns**: Learn the project conventions
   ```
   "What naming conventions are used for components?"
   ```

## Documentation Structure for MCP

### Hierarchical Organization

Documentation is numbered for logical progression:

1. **01-getting-started.md** - Setup and basics
2. **02-architecture.md** - System design
3. **03-components.md** - UI components
4. **04-hooks.md** - Custom hooks
5. **05-layouts.md** - Layout system
6. **06-features/** - Feature modules
7. **07-authentication.md** - Auth patterns
8. **08-forms-validation.md** - Form handling
9. **09-state-management.md** - State patterns
10. **10-styling-theming.md** - Styling
11. **11-integrations.md** - Third-party services
12. **12-data-tables.md** - Tables
13. **13-routing-navigation.md** - Routing
14. **14-utilities.md** - Helper functions
15. **15-development-guide.md** - Development workflows
16. **16-api-reference.md** - API documentation
17. **17-deployment.md** - Deployment
18. **18-mcp-server-setup.md** - This file

### Cross-References

All documentation files include cross-references to related topics:

```markdown
**See Also**: [Components](03-components.md), [Hooks](04-hooks.md)
```

### Code Examples with File Paths

Examples include file locations:

```typescript
// src/components/ui/button.tsx
import { Button } from '@/components/ui/button';
```

## Common MCP Use Cases

### 1. Understanding Project Structure

**Query**: "What's the project structure?"

**Claude Response** (uses docs/02-architecture.md):
- Explains folder organization
- Shows key directories
- References configuration files

### 2. Finding Components

**Query**: "What UI components are available?"

**Claude Response** (uses docs/03-components.md):
- Lists all 57+ components
- Provides usage examples
- Shows import paths

### 3. Learning Patterns

**Query**: "How do I create a new feature module?"

**Claude Response** (uses docs/15-development-guide.md):
- Step-by-step guide
- Code examples
- Best practices

### 4. Debugging

**Query**: "Why isn't my table sorting working?"

**Claude Response** (uses docs/12-data-tables.md + docs/04-hooks.md):
- Explains useTable hook
- Shows sorting implementation
- Provides debugging tips

### 5. Integration Help

**Query**: "How do I set up email sending?"

**Claude Response** (uses docs/11-integrations.md):
- Nodemailer setup
- Configuration steps
- Example code

## Advanced MCP Usage

### Combining Documentation Sources

Claude can reference multiple documentation files:

```
"How do I create a themed product card with sorting?"
```

Claude references:
- `docs/03-components.md` (Card components)
- `docs/10-styling-theming.md` (Theming)
- `docs/12-data-tables.md` (Sorting)

### Project-Specific Context

The documentation includes Isomorphic-specific context:

- RizzUI component library integration
- Next.js 14 App Router patterns
- Jotai state management
- Tailwind CSS customization
- TypeScript conventions

### Official Docs Integration

Documentation references official sources:

- **Isomorphic Docs**: https://isomorphic-doc.vercel.app/
- **RizzUI**: https://rizzui.com/
- **Next.js**: https://nextjs.org/
- **Tailwind**: https://tailwindcss.com/

## Troubleshooting MCP Setup

### MCP Server Not Loading

1. Check MCP configuration file syntax
2. Verify file paths are correct
3. Ensure permissions for directory access
4. Restart Claude Code

### Documentation Not Found

1. Verify docs folder exists
2. Check file paths in MCP config
3. Ensure all documentation files are present
4. Re-clone repository if needed

### Slow Response Times

1. Limit MCP server scope to specific folders
2. Use separate servers for docs vs source
3. Check network connection (for GitHub MCP)

## Tips for Optimal MCP Usage

### 1. Start with Documentation

Always begin by asking about the docs:
```
"What documentation is available?"
→ References docs/README.md
```

### 2. Be Incremental

Build understanding progressively:
```
1. "What is Isomorphic?" (Overview)
2. "How is it structured?" (Architecture)
3. "How do I add a page?" (Development)
```

### 3. Request File Paths

Always ask for exact locations:
```
"Where is the login page?"
→ src/app/auth/(sign-in)/sign-in-1/page.tsx
```

### 4. Verify with Examples

Ask Claude to show code examples:
```
"Show me a working example of [feature]"
```

### 5. Cross-Reference

Ask Claude to reference multiple docs:
```
"How do I use the table hook with components?"
→ Combines docs/04-hooks.md + docs/12-data-tables.md
```

## Security Considerations

### What to Share

✅ **Safe to expose to MCP**:
- Documentation files
- Source code structure
- Component examples
- Public configuration

### What to Protect

❌ **Keep private**:
- `.env` files
- API keys
- Secrets
- Private credentials
- Customer data

### MCP Configuration

When configuring MCP, limit access:

```json
{
  "mcpServers": {
    "isomorphic": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/path/to/isomorphic_admin/docs",
        "/path/to/isomorphic_admin/src"
      ],
      // Explicitly exclude sensitive files
      "exclude": [".env*", "*.key", "secrets/*"]
    }
  }
}
```

## Resources

### Documentation

- **Main Docs**: [docs/README.md](README.md)
- **Official Site**: https://isomorphic-doc.vercel.app/

### MCP Resources

- **MCP Specification**: https://modelcontextprotocol.io/
- **MCP Servers**: https://github.com/modelcontextprotocol/servers

### Support

- **GitHub Issues**: For repository-specific issues
- **Claude Code**: For AI assistant questions

---

## Quick Start Checklist

- [ ] Clone repository
- [ ] Install dependencies (`npm install`)
- [ ] Configure MCP server in Claude Code
- [ ] Verify MCP connection
- [ ] Test with documentation query
- [ ] Start development with AI assistance

---

**Ready to start!** Ask Claude: "How do I get started with Isomorphic?"
