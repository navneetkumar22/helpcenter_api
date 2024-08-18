import express from 'express';
const router = express.Router();
import { createCard, getAllCards, getCard } from '../controllers/cardController.js';


//routes
router.post('/', createCard)
router.get('/', getAllCards)
router.get('/:id', getCard)

export default router;