-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('NEQUI', 'BANCOLOMBIA');

-- CreateTable
CREATE TABLE "cuenta" (
    "id" TEXT NOT NULL,
    "numeroCuenta" TEXT NOT NULL,
    "tipoCuenta" "AccountType" NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cuenta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cuenta_numeroCuenta_key" ON "cuenta"("numeroCuenta");
