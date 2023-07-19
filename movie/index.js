import { Router } from 'express';
import { listAction } from './controller.js';

const router = Router();

router.get('/',listAction); 

export { router };
