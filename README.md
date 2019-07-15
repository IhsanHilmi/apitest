# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations & Seeding

Run the following command to run startup migrations.

```js
adonis migration:run
adonis seed
```
#### Routes

The following API test use these route :
 
 1. Adding user with 127.0.0.1:3000/user/new
 2. Fetch existing user with 127.0.0.1:3000/user/list
 3. Fetch particular user with 127.0.0.1:3000/user/{id}
 4. Edit particular user with 127.0.0.1:3000/user/{id}/edit
 5. Delete particular user with 127.0.0.1:3000/user/{id}/delete
 6. Fetch existing Stuff with 127.0.0.1:3000/stuff/list
 7. Fetch particular Stuff with 127.0.0.1:3000/stuff/{stuff_id}
 8. Adding stuff with 127.0.0.1:3000/user/{id}/stuff/new
 9. Edit particular stuff with 127.0.0.1:3000/user/{id}/stuff/{stuff_id}/edit
 10. Delete particular stuff with 127.0.0.1:3000/user/{id}/stuff/{stuff_id}/delete
 11. Fetch existing stuff in a particular user with 127.0.0.1:3000/user/{id}/stuff/list
 12. Fetch particular stuff in a particular user with 127.0.0.1:3000/user/{id}/stuff/{stuff_id}
