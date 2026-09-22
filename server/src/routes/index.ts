// ==============================================================================
// ALKHIDMAT FOUNDATION LAHORE - ROOT API ROUTER
// ==============================================================================

import { Router } from 'express';
import healthRoutes from './health.routes.js';

const router = Router();

// /api/health
router.use('/health', healthRoutes);

export default router;
