# Cocos Backend Challenge


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## Creating a development envrionment

- Create development docker services
  ```bash
  $ docker compose up
  ```

- Copy example configuration file for development
  ```bash
  $ cp .env.dev .env
  ```

- Install node modules
  ```bash
  $ npm install
  ```

- Apply DB migrations
  ```bash
  $ npx prisma migrate dev
  ```
  
- Apply Seed info
  ```bash
  $ npx prisma db seed
  ```

- Run the app in development or watch mode
  ```bash
  # development
  $ npm run start

  # watch mode
  $ npm run start:dev
  ```
  That's it. The app should be listening on http://localhost:3000. Swagger is available on http://localhost:3000/swagger.

- When you are done working you can stop the DB container o tear it down.
  ```bash
  # stop the container
  $ docker compose stop

  # tear it down
  $ docker compose down
  ```

## API Documentation

- Once the app is running, you can access the Swagger UI here: http://localhost:3000/swagger
