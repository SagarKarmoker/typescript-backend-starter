# TypeScript Backend Starter

A modern TypeScript backend starter with Express.js, Prisma ORM, and PostgreSQL.

## Features

- 🚀 **Express.js** - Fast, unopinionated web framework
- 🔷 **TypeScript** - Type-safe JavaScript
- 🗄️ **Prisma ORM** - Modern database toolkit
- 🐘 **PostgreSQL** - Powerful, open source database
- 🐳 **Docker** - Containerized development environment
- 📝 **Morgan** - HTTP request logger middleware
- 🌱 **Database Seeding** - Easy database population with sample data

## Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose
- npm or yarn

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/SagarKarmoker/typescript-backend-starter
   cd typescript-backend-starter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the database**
   ```bash
   docker-compose up -d
   ```

5. **Generate Prisma client**
   ```bash
   npm run prisma:generate
   ```

6. **Run database migrations**
   ```bash
   npm run prisma:migrate
   ```

7. **Seed the database (optional)**
   ```bash
   npm run seed
   ```

## Development

- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Start production server**: `npm start`
- **Run TypeScript directly**: `npm run start:dev`

## Database

- **Generate Prisma client**: `npm run prisma:generate`
- **Run migrations**: `npm run prisma:migrate`
- **Open Prisma Studio**: `npm run prisma:studio`
- **Seed database**: `npm run seed`

## Project Structure

```
├── src/
│   ├── index.ts          # Main application entry point
│   ├── lib/              # Utility libraries
│   │   ├── prisma.ts     # Prisma client instance
│   │   └── seed.ts       # Database seeding script
│   └── generated/        # Generated Prisma client
├── prisma/
│   └── schema.prisma     # Database schema
├── docker-compose.yml    # Docker services configuration
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## Environment Variables

Create a `.env` file with the following variables:

```env
# Server Configuration
PORT=3000

# Database Configuration
DATABASE_URL="postgresql://postgres:password@localhost:5432/typescript_backend?schema=public"

# Docker PostgreSQL Configuration
POSTGRES_USER=postgres
POSTGRES_PASSWORD=password
POSTGRES_DB=typescript_backend
```

## License

ISC 