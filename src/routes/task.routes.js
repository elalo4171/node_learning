import {Router} from "express";
import Task from "../models/Task";

const router = Router();

router.get("/", (req, res)=> {
    res.json({message:"task"})
});

router.post('/',((req, res) => {
    res.json({"ok": true});
}) )


export default router;