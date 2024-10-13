import express from "express"
import { create } from "../Controller/userController.js"
import { get } from "../Controller/userController.js";


const router =express.Router()

router.post("/create", create )
router.get("/get", get )

export default router