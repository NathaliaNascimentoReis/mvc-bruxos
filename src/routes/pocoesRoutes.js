import express from "express";
import { getAllPocoes, getById } from "../controllers/pocoesControllers.js";

const router = express.Router();
router.get("/", getAllPocoes);
router.get("/:id", getById);

export default router;
