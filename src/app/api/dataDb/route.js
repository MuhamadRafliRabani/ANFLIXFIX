import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const user_email = searchParams.get("email");
  console.log(user_email);
  try {
    const dataDb = await prisma.collection.findUnique({
      where: {
        anime_rating: "Not yet aired",
      },
    });
    console.log(dataDb);
    return Response.json({ status: 200, data: dataDb });
  } catch (error) {
    console.error(error);
    return Response.json({ status: 400, message: error.message });
  }
}
