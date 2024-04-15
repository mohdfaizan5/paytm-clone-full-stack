import { z } from "zod";

const signUpSchemaZod = z.object({
  username: z.string(),
  password: z.string(),
  firstName: z.string(),
  lastName: z.string(),
});

export {signUpSchemaZod}
