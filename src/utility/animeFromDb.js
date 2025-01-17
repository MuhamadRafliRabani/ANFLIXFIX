import { prisma } from "@/libs/prismaClient";

export const getAnimeFromDb = async (email, type) => {
  const dataDb = await prisma.library.findMany({
    where: { email, type },
  });

  if (dataDb) {
    return new Response(
      JSON.stringify({
        status: 200,
        data: dataDb,
      }),
      {
        status: 200,
      },
    );
  } else
    return new Response(
      JSON.stringify({
        status: 404,
        message: "No data found in database",
      }),
      {
        status: 404,
      },
    );
};
