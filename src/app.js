import express from 'express'
import TaskRoutes from './routes/task.routes'
import Task from './models/Task';
import sequelize from "./database";
import BodyParser from 'body-parser';
const app = express()

//Se define el puerto que se usara
app.set('port',process.env.PORT || 3000);
app.use(BodyParser.urlencoded({ extended: false }))
app.get("/", ((req, res) => res.json({message:"Welcome to my api rest"})))

app.use('/api/task',TaskRoutes)


export default app;


