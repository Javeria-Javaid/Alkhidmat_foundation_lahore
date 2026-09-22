// ==============================================================================
// ALKHIDMAT FOUNDATION LAHORE - AUTHENTICATION & RBAC TYPES
// ==============================================================================

export enum AdminRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  CONTENT_EDITOR = 'CONTENT_EDITOR',
  HR = 'HR',
  VOLUNTEER_MANAGER = 'VOLUNTEER_MANAGER',
  FINANCE = 'FINANCE',
}

export interface AdminAuthPayload {
  userId: string;
  email: string;
  username: string;
  role: AdminRole;
}

export interface SafeAdminUser {
  id: string;
  email: string;
  username: string;
  role: AdminRole;
  isActive: boolean;
  lastLoginAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
