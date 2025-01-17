import { getAnimeFromDb } from "@/utility/animeFromDb";

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const params = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  try {
    return getAnimeFromDb(params.q, params.type);
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ status: 400, message: error.message }),
      { status: 400 },
    );
  }
}
