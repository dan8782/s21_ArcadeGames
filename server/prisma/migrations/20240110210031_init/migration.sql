-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tagGames" INTEGER NOT NULL DEFAULT 0,
    "tagRecord" INTEGER NOT NULL DEFAULT 0,
    "tagsMoves" INTEGER NOT NULL DEFAULT 0,
    "threesGames" INTEGER NOT NULL DEFAULT 0,
    "threesGamesRecord" INTEGER NOT NULL DEFAULT 0,
    "threesMoves" INTEGER NOT NULL DEFAULT 0,
    "easy" INTEGER NOT NULL DEFAULT 0,
    "megium" INTEGER NOT NULL DEFAULT 0,
    "hard" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
