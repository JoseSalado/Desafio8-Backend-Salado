import { Router } from "express";
import { chatPrivateAccess } from "../middlewares/index.js";

const router = Router()

router.get('/chat', chatPrivateAccess, (req, res) => {
    try {
        res.render('chat')    
    } catch (error) {
        res.render('chat', error)
    }
    
})

export default router;      