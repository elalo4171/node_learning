import {Model, DataTypes } from "sequelize";
import sequelize from "../database";

const Task = sequelize.define("task", {
    title: DataTypes.TEXT,
    description:DataTypes.TEXT,
    done: DataTypes.BOOLEAN,
});
const StatusTask = sequelize.define('status_task',{
    status : DataTypes.TEXT,
});
// Task.hasOne(StatusTask);


(async () => {
    // await Task.sync({ force: true });
    const association= Task.belongsTo(StatusTask, );
    await sequelize.sync({ force: true });
    await StatusTask.create({
        status: "To do"
    }).save;
    await StatusTask.create({
        status: "Doing"
    }).save;
    await StatusTask.create({
        status: "Done"
    }).save;
    let task= Task.create(
        {
            title:"Esto es un titulo",
            description: "Esto es una descripcion",
            done:false,
            statusTaskId: 1
        },
        );
    let task2= Task.create(
        {
            title:"Esto es un titulo",
            description: "Esto es una descripcion",
            done:false,
            statusTaskId: 1
        },
    );
    await task.save;
    await task2.save;

})();

export default Task;