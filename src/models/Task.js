import {Model, DataTypes } from "sequelize";
import sequelize from "../database";

const Task = sequelize.define("task", {
    name: DataTypes.TEXT,
    description:DataTypes.TEXT,
    bool: DataTypes.BOOLEAN,
});

(async () => {
    await Task.sync({ force: true });
    await sequelize.sync({ force: true });
})();

export default Task;