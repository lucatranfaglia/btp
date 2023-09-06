
import btp from "./btp.routes.js";
import ranking from "./ranking.routes.js";
import express from 'express'
const router = express.Router();

router.get('/healthcheck', (req, res)=> res.sendStatus(200));
router.use(btp);
router.use(ranking);

export default router;
