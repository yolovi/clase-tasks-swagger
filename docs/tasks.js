module.exports = {
  paths: {
    "/tasks": {
      get: {
        tags: {
          Tasks: "Get Tasks",
        },
        description: "Get tasks",
        operationId: "getTasks",
        parameters: [],
        responses: {
          200: {
            description: "Tarea creada con éxito",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/task",
                },
              },
            },
          },
          500: {
            description: "Ha habido un problema al obtener las tareas",
          },
        },
      },
    },
    "/tasks/create": {
      post: {
        tags: {
          Tasks: "Create a task",
        },
        description: "Create Task",
        operationId: "createTask",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TaskInput",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Task creada con éxito",
          },
          500: {
            description: "Error al crear la tarea",
          },
        },
      },
    },
    "/tasks/id/{_id}": {
      put: {
        tags: {
          Tasks: "Update a task",
        },
        description: "Update Task",
        operationId: "updateTask",
        parameters: [
          {
            name: "_id",
            in: "path",
            schema: {
              $ref: "#/components/schemas/_id",
            },
            description: "Id para actualizar tarea",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/TaskInput" },
            },
          },
        },
        responses: {
          200: { description: "Tarea actualizada con éxito" },
          404: { description: "Tarea no encontrada" },
          500: { description: "Error al actualizar la tarea" },
        },
      },
      delete: {
        tags: {
          Tasks: "Delete a task",
        },
        description: "Deleting a Task",
        operationId: "deleteTask",
        parameters: [
          {
            name: "_id",
            in: "path",
            schema: {
              $ref: "#/components/schemas/_id",
            },
            description: "Borrar una tarea",
          },
        ],
        responses: {
          200: { description: "Tarea eliminada con éxito" },
          404: { description: "Tarea no encontrada" },
          500: { description: "Error al eliminar la tarea" },
        },
      },
    },
  },
};
