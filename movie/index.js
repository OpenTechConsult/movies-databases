import { Router } from 'express';
import { listAction, removeAction, formAction } from './controller.js';

const router = Router();

router.get('/',listAction);
router.get('/delete/:id', removeAction);
router.get('/form/:id?', formAction);

export { router };
