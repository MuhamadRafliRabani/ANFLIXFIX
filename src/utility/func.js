import { useSucsses } from "@/utility/global_state/Collection_State";

export async function handleColection(data) {
  console.log(data);
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
