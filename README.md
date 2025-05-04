# Assignment-8: Bike Servicing Shop

This is my eights assignment in the Programming Hero Next Level Web Development course platform. I am very excited to share and describe my project with you.

This is a bike servicing management application that consists of three collections: One is customer collection, another is bike collection, and the other is service collection. The customer collection involves creating, fetching, updating and deleting customer operations. The bike collection handles bike management and last, service collection manages services concerning customers' bikes.

Here is the description of how I have set up my project environment, the technologies I have used, how to run and inspect the project.

## PROJECT SETUP

## Local Environment Setup

- [Git](https://git-scm.com/)
- [Node.js v22.3.0](https://nodejs.org/en/)
- [NPM v10.8.1](https://www.npmjs.com/)
- [Prisma ORM v6.7.0](https://www.prisma.io/)
- [PostgreSQL v16](https://www.postgresql.org/)
- [SUPABASE](https://supabase.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Environment Variables for Local Development

> Create a .env file and adjust the following environment variables.

```bash
NODE_ENV="development"
PORT=5000
DATABASE_URL="postgresql://postgres.isibgtqruvvtzvvmvggb:12345678@aws-0-eu-central-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.isibgtqruvvtzvvmvggb:12345678@aws-0-eu-central-1.pooler.supabase.com:5432/postgres"
```

> Create a database in MongoDB named nextmart

## NPM SCRIPTS

```bash
$ npm install           # install dependencies
$ npm run dev           # start in development mode
$ npm run prod          # production build
$ npm run build         # compile typescript code into javascript
```
