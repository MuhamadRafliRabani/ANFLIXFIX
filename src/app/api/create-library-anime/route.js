import addAnimeToDb from "@/utility/addAnimeToDb";
import { checkExistingLibrary } from "@/utility/existingLibrary";

export async function POST(req) {
  try {
    const body = await req.json();

    const { mal_id, email, images, title, score, year, status, type } = body;

    const data = {
      mal_id,
      email,
      images,
      title,
      score,
      year,
      status,
      type,
    };

    if (!mal_id || !email || !title) {
      return new Response(
        JSON.stringify({
          status: 400,
          success: false,
          message: "Missing required fields: mal_id, email, or title",
          body,
        }),
        { status: 400 },
      );
    }

    // check if anime is already exist in database
    const animeExist = await checkExistingLibrary(mal_id, email);

    if (animeExist) {
      return animeExist;
    }

    const addAnime = await addAnimeToDb(data);

    return addAnime;
  } catch (error) {
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
