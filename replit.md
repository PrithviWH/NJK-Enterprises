# NJK Enterprises - Professional Recruitment & Staffing Solutions

## Overview

NJK Enterprises is a comprehensive recruitment and staffing platform built as a full-stack web application. The system provides professional recruitment services across multiple industries including administration, operations, security, technical roles, and healthcare. The platform features a modern marketing website with contact form functionality and is designed to showcase the company's services, process, and expertise in the recruitment industry.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React SPA**: Built with React 18 using TypeScript for type safety and better development experience
- **Routing**: Uses Wouter for lightweight client-side routing with a single-page application structure
- **UI Framework**: Implements shadcn/ui components built on top of Radix UI primitives for accessible, composable interface elements
- **Styling**: Tailwind CSS with CSS variables for theming, supporting both light and dark modes
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript throughout the entire stack for consistency and type safety
- **Database Integration**: Configured for PostgreSQL using Drizzle ORM with schema-first approach
- **Storage Layer**: Currently implements in-memory storage with interface-based design for easy database migration
- **Session Management**: Uses connect-pg-simple for PostgreSQL-backed session storage
- **Development**: Hot module replacement and development middleware integrated with Vite

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema Definition**: Centralized schema definitions in shared directory for consistency between frontend and backend
- **Validation**: Zod schemas derived from Drizzle table definitions for runtime validation
- **Migrations**: Drizzle-kit for database schema migrations and version control

### API Design
- **Contact Submission**: POST `/api/contact` endpoint for processing contact form submissions
- **Contact Retrieval**: GET `/api/contacts` endpoint for administrative access to submissions
- **Error Handling**: Centralized error handling with proper HTTP status codes and JSON responses
- **Request Logging**: Comprehensive request/response logging for API endpoints

### Development & Deployment
- **Environment**: Supports both development and production environments with appropriate configurations
- **Build Process**: Separate build processes for client (Vite) and server (esbuild) with optimized output
- **Development Server**: Integrated development environment with Vite middleware for seamless full-stack development
- **Type Checking**: Comprehensive TypeScript configuration with strict mode enabled

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity optimized for serverless environments
- **drizzle-orm**: TypeScript ORM for database operations with PostgreSQL support
- **@tanstack/react-query**: Server state management and caching for React applications

### UI Component Libraries
- **@radix-ui/***: Comprehensive set of accessible, unstyled UI primitives including dialogs, dropdowns, forms, and navigation components
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Type-safe variant API for component styling
- **cmdk**: Command palette component for enhanced user interactions

### Development & Build Tools
- **vite**: Next-generation frontend build tool with fast HMR and optimized production builds
- **esbuild**: Fast JavaScript bundler for server-side code compilation
- **tsx**: TypeScript execution environment for development
- **@replit/vite-plugin-runtime-error-modal**: Development error handling for Replit environment

### Form & Validation
- **react-hook-form**: Performant forms library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for integration with schema validation libraries
- **zod**: TypeScript-first schema validation library
- **drizzle-zod**: Integration between Drizzle ORM and Zod for type-safe validation

### Utility Libraries
- **date-fns**: Modern JavaScript date utility library for date manipulation and formatting
- **embla-carousel-react**: Carousel component for image and content galleries
- **lucide-react**: Icon library with React components for consistent iconography

### Fonts & External Assets
- **Google Fonts (Inter)**: Professional typography using Inter font family for clean, readable text
- **Unsplash Images**: High-quality stock photography for visual content and backgrounds