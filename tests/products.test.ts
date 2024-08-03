import { supabase } from "@/clients/supabaseCLient";
import { config } from "dotenv";

// add path to your env
// config({ path: ".env.local" });

describe("should get products", () => {
  it("should get products", async () => {
    const { data } = await supabase.from("products").select("*");
    expect(data).toBeDefined();
  });
});
