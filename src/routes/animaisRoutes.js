import express from "express";
import { getAllAnimais } from "../controllers/animaisControllers.js";

const router = express.Router();
router.get("/", getAllAnimais);

export default router;
