"use server";

import { supabase } from "@/clients/supabaseCLient";
import { handleStatus } from "@/lib/handleStatus";
import { Tables } from "@/types/database.types";

const getPaginatedProducts = async (page: number, itemsPerPage: number) => {
  const { data, error, status } = await supabase
    .from("products")
    .select("*")
    .range((page - 1) * itemsPerPage, page * itemsPerPage - 1);

  return handleStatus(status, data, error) as Tables<"products">[];
};

export { getPaginatedProducts };
