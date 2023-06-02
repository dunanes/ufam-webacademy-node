import { Router } from "express";
import mainController from "../controllers/main";

const router = Router();

// Main controller
router.get("/", mainController.principal);
router.get("/sobre", mainController.sobre);
router.get("/hb1", mainController.hb1);
router.get("/hb2", mainController.hb2);
router.get("/hb3", mainController.hb3);

// Poderiam haver outros controllers aqui no router

export default router;
