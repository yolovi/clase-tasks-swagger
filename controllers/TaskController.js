const Task = require("../models/Task");

const TaskController = {
  async create(req, res) {
    try {
      const task = await Task.create({ ...req.body, completed: false });
      res.status(201).send({ message: "Tarea creada con éxito", task });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al crear la tarea" });
    }
  },
  async getAll(req, res) {
    try {
      const tasks = await Task.find();
      res.send(tasks);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al obtener las tareas" });
    }
  },
  async getById(req, res) {
    try {
      const task = await Task.findById(req.params._id);
      res.send(task);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message:
          "Ha habido un problema al obtener la tarea con el _id: " +
          req.params._id,
      });
    }
  },
  async markAsCompleted(req, res) {
    try {
      const task = await Task.findByIdAndUpdate(
        req.params._id,
        {
          completed: true,
        },
        { new: true }
      );
      res.send({ message: "Tarea actualizada con éxito", task });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message:
          "Ha habido un problema al actualizar la tarea con el _id: " +
          req.params._id,
      });
    }
  },
  async update(req, res) {
    try {
      const task = await Task.findByIdAndUpdate(
        req.params._id,
        { ...req.body },
        { new: true }
      );
      res.send({ message: "Tarea actualizada con éxito", task });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message:
          "Ha habido un problema al actualizar la tarea con el _id: " +
          req.params._id,
      });
    }
  },
  async delete(req, res) {
    try {
      const task = await Task.findByIdAndDelete(req.params._id)
      res.send({ message: "Tarea eliminada con éxito", task });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message:
          "Ha habido un problema al borrar la tarea con el _id: " +
          req.params._id,
      });
    }
  },
};

module.exports = TaskController;
