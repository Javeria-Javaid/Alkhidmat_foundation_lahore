// ==============================================================================
// ALKHIDMAT FOUNDATION LAHORE - VOLUNTEER APPLICATION ZOD VALIDATOR
// ==============================================================================

import { z } from 'zod';

export const createVolunteerSchema = z.object({
  fullName: z
    .string({ required_error: 'Full name is required' })
    .trim()
    .min(3, 'Full name must be at least 3 characters')
    .max(100, 'Full name must not exceed 100 characters'),
  email: z
    .string({ required_error: 'Email address is required' })
    .trim()
    .email('Please enter a valid email address')
    .max(150, 'Email must not exceed 150 characters'),
  phone: z
    .string({ required_error: 'Phone number is required' })
    .trim()
    .regex(/^(?:\+92|0)3[0-9]{9}$/, 'Please enter a valid Pakistani mobile number (e.g. 03001234567 or +923001234567)'),
  city: z
    .string({ required_error: 'City is required' })
    .trim()
    .min(2, 'City must be at least 2 characters')
    .max(100, 'City must not exceed 100 characters'),
  serviceArea: z
    .string({ required_error: 'Preferred service area is required' })
    .trim()
    .min(2, 'Service area is required')
    .max(100, 'Service area must not exceed 100 characters'),
  notes: z
    .string()
    .trim()
    .max(2000, 'Notes must not exceed 2000 characters')
    .optional(),
});

export type CreateVolunteerInput = z.infer<typeof createVolunteerSchema>;
