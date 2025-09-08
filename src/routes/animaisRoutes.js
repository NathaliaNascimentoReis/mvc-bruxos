import express from "express";
import { getAllAnimais, getById} from "../controllers/animaisControllers.js";

const router = express.Router();
router.get("/", getAllAnimais);
router.get("/:id", getById);

export default router;
