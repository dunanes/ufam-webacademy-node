import { Router } from "express";
import mainController from "../controllers/main";

const router = Router();

router.get("/", mainController.principal);
router.get("/sobre", mainController.sobre);
router.get("/bemvindo/:nome", mainController.bemvindoNome);

export default router;
