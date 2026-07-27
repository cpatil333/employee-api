-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "password" TEXT,
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'Employee';
