import { Router } from 'express';
import { listAction, removeAction } from './controller.js';

const router = Router();

router.get('/',listAction);
router.get('/delete/:id', removeAction);

export { router };
