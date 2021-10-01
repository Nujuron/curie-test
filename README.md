# ABOUT
Aplicación para gestionar tareas.

## Importante
Cortar folder "client" fuera de "project" antes de ejecutar nest

## API REST
Uso de la libreria @nest/crud https://github.com/nestjsx/crud para la API REST, en la carpeta tasks-api. Borrar, crear y leer funcionales, para usarlos usar la siguiente ruta: http://localhost:5000/tasks

## graphQL 
Crear, leer, borrado blando y recuperación implementados, actualizar aún no es funcional

* Crear ejemplo: 
```bash
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
```

* Leer ejemplo:
```bash
{
  tasks
}
```

* Borrado blando ejemplo:
```bash
mutation {
  deleteTask( id: 5 ) {
    id,
  }
}
```

* Recuperación ejemplo:
```bash
mutation {
  restoreTask( id: 5 ) {
    id,
  }
}
```

## FRONTEND
El frontend no está terminado, ha falta de hacer las llamadas al backend para recibir datos

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