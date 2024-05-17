-- CreateTable
CREATE TABLE `collection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `anime_mal_id` INTEGER NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `collection_anime_mal_id_user_email_key`(`anime_mal_id`, `user_email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
