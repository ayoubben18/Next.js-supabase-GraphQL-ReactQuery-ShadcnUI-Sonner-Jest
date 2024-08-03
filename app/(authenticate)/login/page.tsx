import LoginForm from "@/components/LoginForm";
import PageWrapper from "@/components/PageWrapper";
import { getUser } from "@/db/data/users-data";
import { createClient } from "@/utils/supabase/server";
import { unstable_noStore } from "next/cache";

const page = async () => {
  unstable_noStore();
  const supabase = createClient();
  const user = await getUser(supabase);

  return (
    <PageWrapper className="justify-center">
      <LoginForm logged={user ? true : false} />
    </PageWrapper>
  );
};

export default page;
