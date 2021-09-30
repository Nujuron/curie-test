## API REST
Uso de la libreria @nest/crud https://github.com/nestjsx/crud para la API REST, en la carpeta tasks-api. Borrar, crear y leer funcionales, para usarlos usar la siguiente ruta: http://localhost:5000/tasks

## graphQL 
En la carpeta tasks:
-- Create example 
mutation {
  createTask(createTaskInput: {
    id: 20,
    title: "work",
    state: "pending",
    priority: "low",
    endDate: "2019-12-03T09:54:33Z"
  }){
    id,
    title,
    state,
    priority,
    endDate
  }
}


## Before testing
Cortar folder "client" fuera de "project" antes de ejecutar nest

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

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```