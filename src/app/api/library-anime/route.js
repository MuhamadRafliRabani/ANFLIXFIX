import { prisma } from "@/libs/prismaClient";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");

  try {
    const dataDb = await prisma.library.findMany({
      where: { email: q },
    });
    return new Response(
      JSON.stringify({
        status: 200,
        data: dataDb,
      }),
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ status: 400, message: error.message }),
      { status: 400 },
    );
  }
}
