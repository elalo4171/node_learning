import {Router} from "express";


const router = Router();

router.get("/", (req, res)=> {
    res.json({message:"task"})
});


export default router;