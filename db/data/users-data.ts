"use server";

import { supabase } from "@/clients/supabaseCLient";
import { TypedSupabaseClient } from "@/types/TypedSupabaseClient";
import { Session, User } from "@supabase/supabase-js";

const getUser = async (supabase: TypedSupabaseClient): Promise<User | null> => {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    return null;
  }
  return data.user;
};

const getUserSession = async (
  supabase: TypedSupabaseClient,
): Promise<Session | null> => {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw new Error(error.message);
  return data.session;
};

export { getUser, getUserSession };
