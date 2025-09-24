-- CreateEnum
CREATE TYPE "public"."VoteOptions" AS ENUM ('OptionA', 'OptionB', 'OptionC');

-- CreateTable
CREATE TABLE "public"."Vote" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "vote" "public"."VoteOptions" NOT NULL,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vote_id_key" ON "public"."Vote"("id");

-- AddForeignKey
ALTER TABLE "public"."Vote" ADD CONSTRAINT "Vote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
