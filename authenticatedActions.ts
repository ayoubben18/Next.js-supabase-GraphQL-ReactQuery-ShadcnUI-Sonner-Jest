import { createClient } from "@/utils/supabase/server";
import { createSafeActionClient } from "next-safe-action";
import { getUser } from "./db/data/users-data";
import { CustomError } from "./lib/errors";
import { CustomErrorEnums } from "./enums/errors.enum";

const serverActionClient = createSafeActionClient({
  handleReturnedServerError: (e) => {
    if (e instanceof CustomError) {
      return {
        status: e.status,
        message: e.message,
      };
    }

    return {
      status: 500,
      message: CustomErrorEnums.InternalServerError,
    };
  },
  // throwValidationErrors: true,
});

const authenticatedAction = serverActionClient.use(async ({ next }) => {
  const supabase = createClient();
  const user = await getUser(supabase);
  if (!user) {
    throw new CustomError("User not found", CustomErrorEnums.UserNotFound, 404);
  }

  return next({ ctx: { userId: user.id } });
});

export { authenticatedAction, serverActionClient };
