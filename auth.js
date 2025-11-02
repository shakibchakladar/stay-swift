import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";
import { userModel } from "./models/user-model";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (credentials === null) return null;
        try {
          const user = await userModel.findOne({ email: credentials.email });
          if (user) {
            const isMatch = user.email === credentials.email;
            if (isMatch) {
              return user;
            } else {
              throw new Error("user not found");
            }
          } else {
            throw new Error("email or pass not match");
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),

    Google({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
    }),
    Facebook({
      clientId: process.env.AUTH_FB_CLIENT_ID,
      clientSecret: process.env.AUTH_FB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "public_profile",
        },
      },
    }),
  ],
});
