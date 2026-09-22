// ==============================================================================
// ALKHIDMAT FOUNDATION LAHORE - 404 NOT FOUND HANDLER FOR API
// ==============================================================================

import { Request, Response } from 'express';
import { sendError } from '../utils/response.util.js';

export const notFoundHandler = (req: Request, res: Response): void => {
  sendError(
    res,
    `Endpoint not found: ${req.method} ${req.originalUrl}`,
    404,
    { code: 'ROUTE_NOT_FOUND' }
  );
};
