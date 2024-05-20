export async function handleColection(anime_mal_id, user_email, anime_images, anime_title) {
  const data = { anime_mal_id, user_email, anime_images, anime_title };
  try {
    const HitApi = await fetch("/api/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const Result = await HitApi.json();
    return Result;
  } catch (error) {
    return console.log("message", error);
  }
}
