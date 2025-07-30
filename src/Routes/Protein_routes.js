import express from 'express';
import { addProteinItem } from '../controllers/ProteinList_controller.js';

const router = express.Router();


router.post("/protein-list",addProteinItem);

export default router;