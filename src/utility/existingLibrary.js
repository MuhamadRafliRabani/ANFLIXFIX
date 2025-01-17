import { prisma } from "@/libs/prismaClient";

export const checkExistingLibrary = async (mal_id, email) => {
  const animeExist = await prisma.library.findFirst({
    where: { mal_id, email },
  });

  if (animeExist) {
    return new Response(
      JSON.stringify({
        status: 409,
        success: false,
        message: "Anime already exists in your library",
      }),
      { status: 409 },
    );
  }
};
