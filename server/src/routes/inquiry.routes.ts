// ==============================================================================
// ALKHIDMAT FOUNDATION LAHORE - INQUIRY & CONTACT ROUTES
// ==============================================================================

import { Router } from 'express';
import { handleContactInquiry } from '../controllers/inquiry.controller.js';
import { strictRateLimiter } from '../middleware/rateLimiter.js';

const router = Router();

// POST /api/contact - Strict rate limited to protect against spam bots
router.post('/', strictRateLimiter, handleContactInquiry);

export default router;
