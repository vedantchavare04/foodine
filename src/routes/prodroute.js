import express from "express";
import {getAllProducts} from "./prodcontrol.js";
const router=express.Router();

router.get("/",getAllProducts);

export default router;