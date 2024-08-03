// NOTE : this function is used to handle the status of the response from the server
// it is better to use this function to handle errors so you control when you throw an error
// decrease the redandency of the code

import { PostgrestError } from "@supabase/supabase-js";

import { CustomError } from "./errors";
import { CustomErrorEnums } from "@/enums/errors.enum";

// TODO : use TalentinoError as a main error handler
export const handleStatus = <T>(
  status: number,
  data: T | T[],
  error: PostgrestError | null,
) => {
  if (status === 200 || status === 201 || status === 204) {
    if (!data) {
      return;
    }
    if (Array.isArray(data)) {
      return data as T[];
    }
    return data as T;
  } else if (status === 404) {
    return null;
  } else {
    console.log(error);

    throw new CustomError(
      error!.message,
      CustomErrorEnums.DatabaseError,
      status,
    );
  }
};
