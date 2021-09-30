## ABOUT
Aplicación para gestionar tareas.



## API REST
Uso de la libreria @nest/crud https://github.com/nestjsx/crud para la API REST, en la carpeta tasks-api. Borrar, crear y leer funcionales, para usarlos usar la siguiente ruta: http://localhost:5000/tasks

## graphQL 
Create, read, softDelte y restore implementados, update not working
```bash
Create example 
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

read example 
{
  tasks
}

softDelete example 
mutation {
  deleteTask( id: 5 ) {
    id,
  }
}

restore example
mutation {
  restoreTask( id: 5 ) {
    id,
  }
}

```
## FRONTEND
El frontend no está terminado, ha falta de hacer las llamadas al backend para recibir data

## Before anything
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