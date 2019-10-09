# nodejs postgres sequelize docker

```
docker-compose up
```

# dont try to custom posgres user and db.

it not work it coz me a few hours of research.

Easiest way is just use the default user/db which is postgres/postgres 
just put your password

```
    environment:
      POSTGRES_PASSWORD: pass
```

# Connect directly to Postgres

```
psql postgres://postgres:pass@localhost:35432/postgres
```

# To run migration inside docker-compose. Which will run a bash instance inside the node-app container.

```
docker-compose run node-app bash
```
Follow by

```
npm run migrate up
```