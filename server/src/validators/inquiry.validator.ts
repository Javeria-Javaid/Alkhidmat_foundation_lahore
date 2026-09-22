// ==============================================================================
// ALKHIDMAT FOUNDATION LAHORE - CONTACT INQUIRY ZOD VALIDATOR
// ==============================================================================

import { z } from 'zod';

export const createInquirySchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters'),
  company: z
    .string()
    .trim()
    .max(150, 'Company must not exceed 150 characters')
    .optional(),
  phone: z
    .string()
    .trim()
    .regex(/^(?:\+92|0)?[0-9]{10,11}$/, 'Please enter a valid Pakistani phone number (e.g. 03001234567 or +923001234567)')
    .optional()
    .or(z.literal('')),
  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .email('Please enter a valid email address')
    .max(150, 'Email must not exceed 150 characters'),
  subject: z
    .string({ required_error: 'Subject is required' })
    .trim()
    .min(3, 'Subject must be at least 3 characters')
    .max(200, 'Subject must not exceed 200 characters'),
  message: z
    .string({ required_error: 'Message is required' })
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(3000, 'Message must not exceed 3000 characters'),
});

export type CreateInquiryInput = z.infer<typeof createInquirySchema>;
