-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "AdminRole" AS ENUM ('SUPER_ADMIN', 'CONTENT_EDITOR', 'HR', 'VOLUNTEER_MANAGER', 'FINANCE');

-- CreateEnum
CREATE TYPE "InquiryStatus" AS ENUM ('NEW', 'IN_PROGRESS', 'RESOLVED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "VolunteerStatus" AS ENUM ('PENDING', 'CONTACTED', 'APPROVED', 'REJECTED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "EmploymentType" AS ENUM ('FULL_TIME', 'PART_TIME', 'CONTRACT', 'INTERNSHIP');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('SUBMITTED', 'REVIEWED', 'SHORTLISTED', 'REJECTED');

-- CreateEnum
CREATE TYPE "CollectionStatus" AS ENUM ('PENDING', 'ASSIGNED', 'COLLECTED', 'CANCELLED');

-- CreateTable
CREATE TABLE "admin_users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" "AdminRole" NOT NULL DEFAULT 'CONTENT_EDITOR',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastLoginAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "admin_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_inquiries" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT,
    "phone" TEXT,
    "email" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" "InquiryStatus" NOT NULL DEFAULT 'NEW',
    "adminNotes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contact_inquiries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "volunteer_applications" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "serviceArea" TEXT NOT NULL,
    "notes" TEXT,
    "status" "VolunteerStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "volunteer_applications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_openings" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "location" TEXT NOT NULL DEFAULT 'Lahore',
    "employmentType" "EmploymentType" NOT NULL DEFAULT 'FULL_TIME',
    "description" TEXT NOT NULL,
    "requirements" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "deadline" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "job_openings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "career_applications" (
    "id" TEXT NOT NULL,
    "candidateName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "positionInterest" TEXT,
    "jobOpeningId" TEXT,
    "cvFileName" TEXT NOT NULL,
    "cvFileUrl" TEXT NOT NULL,
    "cvFileSize" INTEGER NOT NULL,
    "cvMimeType" TEXT NOT NULL,
    "status" "ApplicationStatus" NOT NULL DEFAULT 'SUBMITTED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "career_applications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doorstep_collections" (
    "id" TEXT NOT NULL,
    "requestCode" TEXT NOT NULL,
    "donorName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "city" TEXT NOT NULL DEFAULT 'Lahore',
    "pickupAddress" TEXT NOT NULL,
    "estimatedAmountPkr" DECIMAL(12,2) NOT NULL,
    "status" "CollectionStatus" NOT NULL DEFAULT 'PENDING',
    "assignedOfficer" TEXT,
    "scheduledDate" TIMESTAMP(3),
    "collectedDate" TIMESTAMP(3),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "doorstep_collections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bank_accounts" (
    "id" TEXT NOT NULL,
    "bankName" TEXT NOT NULL,
    "accountTitle" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "iban" TEXT NOT NULL,
    "swiftCode" TEXT,
    "branch" TEXT,
    "country" TEXT NOT NULL DEFAULT 'Pakistan',
    "currency" TEXT NOT NULL DEFAULT 'PKR',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bank_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_users_email_key" ON "admin_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "admin_users_username_key" ON "admin_users"("username");

-- CreateIndex
CREATE INDEX "contact_inquiries_status_idx" ON "contact_inquiries"("status");

-- CreateIndex
CREATE INDEX "contact_inquiries_createdAt_idx" ON "contact_inquiries"("createdAt");

-- CreateIndex
CREATE INDEX "volunteer_applications_city_idx" ON "volunteer_applications"("city");

-- CreateIndex
CREATE INDEX "volunteer_applications_serviceArea_idx" ON "volunteer_applications"("serviceArea");

-- CreateIndex
CREATE INDEX "volunteer_applications_status_idx" ON "volunteer_applications"("status");

-- CreateIndex
CREATE INDEX "job_openings_isActive_idx" ON "job_openings"("isActive");

-- CreateIndex
CREATE INDEX "career_applications_status_idx" ON "career_applications"("status");

-- CreateIndex
CREATE INDEX "career_applications_jobOpeningId_idx" ON "career_applications"("jobOpeningId");

-- CreateIndex
CREATE UNIQUE INDEX "doorstep_collections_requestCode_key" ON "doorstep_collections"("requestCode");

-- CreateIndex
CREATE INDEX "doorstep_collections_requestCode_idx" ON "doorstep_collections"("requestCode");

-- CreateIndex
CREATE INDEX "doorstep_collections_status_idx" ON "doorstep_collections"("status");

-- CreateIndex
CREATE INDEX "doorstep_collections_city_idx" ON "doorstep_collections"("city");

-- CreateIndex
CREATE UNIQUE INDEX "bank_accounts_iban_key" ON "bank_accounts"("iban");

-- CreateIndex
CREATE INDEX "bank_accounts_isActive_idx" ON "bank_accounts"("isActive");

-- AddForeignKey
ALTER TABLE "career_applications" ADD CONSTRAINT "career_applications_jobOpeningId_fkey" FOREIGN KEY ("jobOpeningId") REFERENCES "job_openings"("id") ON DELETE SET NULL ON UPDATE CASCADE;
