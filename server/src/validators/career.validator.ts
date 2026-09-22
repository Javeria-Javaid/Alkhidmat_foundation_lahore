// ==============================================================================
// ALKHIDMAT FOUNDATION LAHORE - CAREER APPLICATION ZOD VALIDATOR
// ==============================================================================

import { z } from 'zod';

export const createCareerApplicationSchema = z.object({
  candidateName: z
    .string({ required_error: 'Candidate name is required' })
    .trim()
    .min(3, 'Name must be at least 3 characters')
    .max(100, 'Name must not exceed 100 characters'),
  email: z
    .string({ required_error: 'Email address is required' })
    .trim()
    .email('Please enter a valid email address')
    .max(150, 'Email must not exceed 150 characters'),
  phone: z
    .string({ required_error: 'Phone number is required' })
    .trim()
    .regex(/^(?:\+92|0)3[0-9]{9}$/, 'Please enter a valid Pakistani mobile number'),
  positionInterest: z
    .string()
    .trim()
    .max(100, 'Position interest must not exceed 100 characters')
    .optional(),
  jobOpeningId: z
    .string()
    .uuid('Invalid job opening ID format')
    .optional(),
});

export type CreateCareerApplicationInput = z.infer<typeof createCareerApplicationSchema>;
