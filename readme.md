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