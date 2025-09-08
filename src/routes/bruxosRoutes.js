import express from "express";
import { getAllBruxos, getById } from "../controllers/bruxosControllers.js";

const router = express.Router();
router.get("/", getAllBruxos);
router.get("/:id", getById);

export default router;
