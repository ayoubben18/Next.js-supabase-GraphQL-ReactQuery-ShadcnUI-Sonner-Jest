"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { z } from "zod";
import { signUpSchema } from "@/types/zod-schemas/auth-schemas";

export async function signup({
  email,
  password,
  name,
}: z.infer<typeof signUpSchema>) {
  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `/auth/callback`,
    },
  });

  // map the user to another table to add name and other stuff that you need

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/", "layout");
  redirect("/");
}
