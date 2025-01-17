import { prisma } from "@/libs/prismaClient";

export const addAnimeToDb = async (data) => {
  const addAnime = await prisma.library.create({
    data,
  });

  // Response sukses
  return new Response(
    JSON.stringify({
      status: 200,
      success: true,
      data: addAnime,
    }),
    { status: 200 },
  );
};

export default addAnimeToDb;
