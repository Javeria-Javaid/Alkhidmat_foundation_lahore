// ==============================================================================
// ALKHIDMAT FOUNDATION LAHORE - DOORSTEP COLLECTION ZOD VALIDATOR
// ==============================================================================

import { z } from 'zod';

export const createCollectionSchema = z.object({
  donorName: z
    .string({ required_error: 'Full name is required' })
    .trim()
    .min(3, 'Name must be at least 3 characters')
    .max(100, 'Name must not exceed 100 characters'),
  phone: z
    .string({ required_error: 'Phone / WhatsApp number is required' })
    .trim()
    .regex(/^(?:\+92|0)3[0-9]{9}$/, 'Please enter a valid Pakistani mobile number (e.g. 03001234567 or +923001234567)'),
  city: z
    .string({ required_error: 'City is required' })
    .trim()
    .min(2, 'City is required')
    .max(100, 'City must not exceed 100 characters')
    .default('Lahore'),
  estimatedAmountPkr: z
    .coerce
    .number({ required_error: 'Estimated amount is required' })
    .positive('Estimated amount must be greater than 0')
    .min(500, 'Minimum doorstep collection amount is PKR 500')
    .max(10000000, 'Amount exceeds maximum doorstep collection limit'),
  pickupAddress: z
    .string({ required_error: 'Pickup address is required' })
    .trim()
    .min(10, 'Complete pickup address must be at least 10 characters')
    .max(1000, 'Address must not exceed 1000 characters'),
  preferredDate: z
    .string()
    .datetime()
    .optional(),
  notes: z
    .string()
    .trim()
    .max(1000, 'Notes must not exceed 1000 characters')
    .optional(),
});

export type CreateCollectionInput = z.infer<typeof createCollectionSchema>;
