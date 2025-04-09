## Description

NestJS + Sequelize API for managing "Opportunities". This project includes a PostgreSQL database and supports filters, toggle-follow, and frontend integration.

## Requirements
1. Ensure PostgreSQL is Installed
- You must have PostgreSQL installed on your system. If it's not yet installed:
- Go to the official PostgreSQL site: https://www.postgresql.org/download/

2. **Create the Database**

The project expects a local PostgreSQL database named `opportunities`.  
Make sure your `.env` file includes:

```env
DB_NAME=opportunities
```

### Create the database (name: opportunities)
```
$ createdb -U postgres -W --encoding=UTF8 opportunities
```

The password will be the one you set up for the 'postgres' user

### Run the SQL script to create and populate the Opportunities table
```bash
$ psql -U postgres -d opportunities -f./db_sql.sql
```

## Project setup
```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```
