import {Router} from "express";
import Task from "../models/Task";

const router = Router();

router.get("/", (req, res)=> {
    res.json({message:"task"})
});

router.post('/',(async (req, res) => {
    let title=req.body.title;
    console.log(req)
    console.log(req.body)

    await Task.create({
        title:title,
        description: "Esto es una descripcion",
        done:false,
        statusTaskId: 1
    }).save;
    res.json({"ok": true,});
}) )


export default router;