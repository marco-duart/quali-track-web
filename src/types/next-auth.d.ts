import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    name?: string | null;
    email?: string | null;
    role: string;
  }

  interface Session {
    user: {
      role: string;
    } & DefaultSession["user"];
  }
}