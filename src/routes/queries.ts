import { Router } from 'express'

import { returnDriver } from '../controllers/queries';

const router = Router();

router.get('/', returnDriver);

export default router;