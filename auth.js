import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
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
