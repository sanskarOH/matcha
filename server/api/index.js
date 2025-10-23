import { Router } from 'express';
import gmailRouter from './gmail/router.gmail.js';

const router = Router();

router.use(gmailRouter); // or router.use('/api', gmailRouter);

export default router;