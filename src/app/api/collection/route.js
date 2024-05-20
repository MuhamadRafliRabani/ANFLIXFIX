import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req) {
  const { anime_mal_id, user_email, anime_images, anime_title } = await req.json();

  const data = { anime_mal_id, user_email, anime_images, anime_title };
  console.log(data);

  const createCollection = await prisma.collection.create({ data });

  return Response.json({ status: 200, isCreated: true, id: anime_mal_id });
}
