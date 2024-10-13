import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req) {
  const {
    anime_mal_id,
    email,
    anime_images,
    anime_title,
    anime_rating,
    anime_genres,
    anime_type,
    anime_status,
    anime_episodes,
  } = await req.json();

  const data = {
    anime_mal_id,
    user_email: email,
    anime_images,
    anime_title,
    anime_rating,
    anime_type,
    anime_status,
    anime_episodes,
  };
  console.log(data);

  try {
    const createCollection = await prisma.collection.create({ data });
    return Response.json({
      status: 200,
      sucsess: true,
      data: createCollection,
    });
  } catch (error) {
    return Response.json({ status: 400, sucsess: false });
  }
}
