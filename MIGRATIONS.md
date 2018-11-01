1. Create database

$ psql postgres
postgres=# CREATE DATABASE agile_developer_dev
postgres=# \q

2. Run migrations

$ npx knex migrate:latest --env development

3. Rollback

$ npx knex migrate:rollback --env development

4. Seeds

$ npx knex seed:make create_users
$ npx knex seed:run
