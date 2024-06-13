"use server";

import { redirect } from "next/navigation";
import { setMeal } from "./meals";

export async function shareMeal(formData) {
  "use server";

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  //   console.log(meal);

  await setMeal(meal);

  redirect("/meals");
}
