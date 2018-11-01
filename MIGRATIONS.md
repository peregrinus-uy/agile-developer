1. Create database

$ psql postgres
postgres=# CREATE DATABASE agile_developer_dev
postgres=# \q

2. Run migrations

$ ./node_modules/.bin/knex migrate:latest --env development

3. Rollback

$ ./node_modules/.bin/knex migrate:rollback --env development

4. Seeds

$ ./node_modules/.bin/knex seed:make create_users
$ ./node_modules/.bin/knex seed:run
