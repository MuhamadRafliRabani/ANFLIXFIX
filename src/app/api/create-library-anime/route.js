import { prisma } from "@/libs/prismaClient";

export async function POST(req) {
  try {
    const body = await req.json();

    const { mal_id, email, images, title, score, year, status } = body;

    if (!mal_id || !email || !title) {
      return new Response(
        JSON.stringify({
          status: 400,
          success: false,
          message: "Missing required fields: mal_id, email, or title",
        }),
        { status: 400 },
      );
    }

    const existingLibrary = await prisma.library.findFirst({
      where: { mal_id, email },
    });

    if (existingLibrary) {
      return new Response(
        JSON.stringify({
          status: 409,
          success: false,
          message: "Anime already exists in your library",
        }),
        { status: 409 },
      );
    }

    const createCollection = await prisma.library.create({
      data: {
        mal_id,
        email,
        images,
        title,
        score,
        year,
        status,
      },
    });

    // Response sukses
    return new Response(
      JSON.stringify({
        status: 200,
        success: true,
        data: createCollection,
      }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Error add collection:", error);

    return new Response(
      JSON.stringify({
        status: 500,
        success: false,
        message: "Internal server error",
        error: error.message,
      }),
      { status: 500 },
    );
  }
}
