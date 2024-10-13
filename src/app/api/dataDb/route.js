import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const user_email = searchParams.get("email");
  console.log(user_email);

  if (!user_email) {
    throw new Error("Missing email query parameter");
  }

  try {
    const dataDb = await prisma.collection.findMany({
      where: {
        user_email: user_email,
      },
    });
    return new Response(JSON.stringify({ status: 200, data: dataDb }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ status: 400, message: error.message }),
      { status: 400 },
    );
  }
}
