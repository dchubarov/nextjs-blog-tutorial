This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Database Setup

This project uses [Prisma](https://prisma.io) with SQLite for data persistence. The database is stored locally in the `prisma/dev.db` file.

### Initial Setup

```bash
# Install dependencies
pnpm install

# Generate Prisma client
pnpm prisma:generate

# Create database and apply migrations
pnpm prisma:migrate
```

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Database Schema

The project uses a simple schema for blog posts:

```prisma
model BlogPost {
  id             String    @id @default(uuid())
  slug           String    @unique
  title          String
  author         String
  content        String
  tags           String?   // Stored as comma-separated values
  createdAt      DateTime  @default(now())
  lastModifiedAt DateTime?
}
```

## Prisma Commands

Here are some useful Prisma commands:

```bash
# Generate Prisma client after schema changes
pnpm prisma:generate
# or: pnpm prisma generate

# Create a new migration
pnpm prisma:migrate
# or: pnpm prisma migrate dev --name <migration-name>
# Note: When using the script, you'll be prompted to enter a migration name

# Reset the database (caution: deletes all data)
pnpm prisma:reset
# or: pnpm prisma migrate reset

# Open Prisma Studio (database GUI)
pnpm prisma:studio
# or: pnpm prisma studio
```

## Learn More

To learn more about Next.js and Prisma, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Prisma Documentation](https://www.prisma.io/docs) - learn about Prisma ORM.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) and [the Prisma GitHub repository](https://github.com/prisma/prisma) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
