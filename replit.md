# MyExamly - Educational Exam Management Platform

## Overview

MyExamly is a comprehensive educational technology platform designed to modernize and streamline exam management for schools, teachers, and students. The platform provides secure, role-based access for creating, administering, and evaluating various types of educational assessments including BSB (Birinchi Sinov Boshqaruvi) and CHSB (Chorak Sinov Boshqaruvi) exam types. Built with a focus on efficiency, fairness, and transparency, MyExamly offers automated exam scheduling, customizable exam creation, task management, advanced analytics, and comprehensive reporting capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with custom educational theme featuring primary blues, secondary greens, and accent oranges
- **UI Components**: Radix UI primitives with shadcn/ui component system for consistent, accessible interface elements
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite with React plugin for fast development and optimized production builds
- **Internationalization**: Custom i18n system supporting English, Russian, and Uzbek languages with localStorage persistence
- **Theme System**: Custom theme provider supporting light/dark modes with CSS variables

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for REST API endpoints
- **Language**: TypeScript for type safety across the full stack
- **API Design**: RESTful architecture with centralized error handling middleware
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development
- **Session Management**: Express sessions configured for user authentication
- **Request Logging**: Custom middleware for API request/response logging and performance monitoring

### Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle migrations system with shared schema definitions
- **Connection**: Neon Database serverless PostgreSQL for production deployment
- **Development Storage**: In-memory storage implementation for rapid development and testing

### Authentication and Authorization
- **Session-based Authentication**: Server-side sessions with secure cookie management
- **Role-based Access Control**: Support for multiple user roles (teachers, admins, superadmins)
- **User Management**: Secure user creation and authentication with password handling
- **Session Persistence**: PostgreSQL session store for production scalability

### External Dependencies
- **Database Hosting**: Neon Database serverless PostgreSQL
- **Image Assets**: Unsplash for carousel and demonstration imagery
- **Font Services**: Google Fonts for typography (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Icon System**: Lucide React for consistent iconography
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Development Tools**: Replit-specific plugins for development environment integration

## External Dependencies

### Third-party Services
- **Neon Database**: Serverless PostgreSQL hosting for production data storage
- **Unsplash**: Stock photography API for educational imagery and carousel content
- **Google Fonts**: Web font delivery service for custom typography

### APIs and Integrations
- **Contact Management**: Internal API endpoints for handling demo requests and contact form submissions
- **User Management**: Authentication and authorization API with role-based access control
- **Exam Management**: Core API for exam creation, administration, and evaluation (planned)

### Databases
- **Production**: PostgreSQL via Neon Database with connection pooling
- **Development**: In-memory storage with interface compatibility for PostgreSQL migration
- **Session Store**: PostgreSQL-backed sessions using connect-pg-simple

### Key Libraries and Frameworks
- **UI Framework**: React 18 with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod for runtime type checking and schema validation
- **Styling**: Tailwind CSS with custom educational theme
- **Component Library**: Radix UI primitives with shadcn/ui implementation
- **State Management**: TanStack Query for server state and caching
- **Form Management**: React Hook Form with Hookform Resolvers
- **Date Handling**: date-fns for internationalized date operations