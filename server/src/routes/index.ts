// ==============================================================================
// ALKHIDMAT FOUNDATION LAHORE - ROOT API ROUTER
// ==============================================================================

import { Router } from 'express';
import healthRoutes from './health.routes.js';
import inquiryRoutes from './inquiry.routes.js';

const router = Router();

// /api/health
router.use('/health', healthRoutes);

// /api/contact & /api/inquiries
router.use('/contact', inquiryRoutes);
router.use('/inquiries', inquiryRoutes);

export default router;
