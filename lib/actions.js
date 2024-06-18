"use server";

import { redirect } from "next/navigation";
import { setMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
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

  if (
    isInvalidText(meal.text) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }

  await setMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
