import express from "express";
import { getAllPocoes } from "../controllers/pocoesControllers.js";

const router = express.Router();
router.get("/", getAllPocoes);

export default router;
