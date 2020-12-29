import express from 'express'
import TaskRoutes from './routes/task.routes'

const app = express()

//Se define el puerto que se usara
app.set('port',process.env.PORT || 3000);

app.get("/", ((req, res) => res.json({message:"Welcome to my api rest"})))

app.use('/api/task',TaskRoutes)


export default app;