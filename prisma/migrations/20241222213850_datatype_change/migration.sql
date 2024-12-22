-- CreateTable
CREATE TABLE `ChainQuest` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `contractAddress` VARCHAR(191) NOT NULL,
    `theme` VARCHAR(191) NOT NULL,
    `entryCost` VARCHAR(191) NOT NULL,
    `scoreToWin` INTEGER NOT NULL,

    UNIQUE INDEX `ChainQuest_contractAddress_key`(`contractAddress`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
