## Description

Opportunities repository. 

## Requirements
1. Ensure PostgreSQL is Installed
- You must have PostgreSQL installed on your system. If it's not yet installed:
- Go to the official PostgreSQL site: https://www.postgresql.org/download/

2. Ensure that the PostgreSQL is in the System PATH.
- Open the Start Menu → Search for "Environment Variables".
- Click "Edit the system environment variables".
- In the "System Properties" window, click "Environment Variables".
- Under System Variables, find and select Path, then click Edit.
- Click New, and add the path to PostgreSQL’s bin folder. 
- Example (depending on version): C:\Program Files\PostgreSQL\15\bin
- Restart PowerSheel or terminal.


```
# create database
$ createdb -U postgres -W --encoding=UTF8 nestjs_app


# the password is the same as the postgres setup

# connect the local database
$ psql -U postgres -d nestjs_app -f./db_sql.sql
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
