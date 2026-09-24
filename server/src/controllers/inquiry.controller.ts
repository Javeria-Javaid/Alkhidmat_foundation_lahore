// ==============================================================================
// ALKHIDMAT FOUNDATION LAHORE - INQUIRY CONTROLLER
// ==============================================================================

import { Request, Response, NextFunction } from 'express';
import { createInquirySchema } from '../validators/inquiry.validator.js';
import { emailService } from '../services/email.service.js';
import { sendSuccess } from '../utils/response.util.js';

export const handleContactInquiry = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const validatedData = createInquirySchema.parse(req.body);
    const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress;

    const result = await emailService.sendContactInquiry(validatedData, clientIp);

    sendSuccess(
      res,
      { dispatched: result.success, mode: result.mode },
      'Thank you! Your inquiry has been successfully submitted. Our team will get back to you shortly.',
      201
    );
  } catch (error) {
    next(error);
  }
};
