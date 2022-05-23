import express from 'express';
import { postAnswer, getAnswers } from '../controllers/answer.js';

const router = express.Router();

router.get('/', getAnswers);
router.post('/', postAnswer);

export default router;