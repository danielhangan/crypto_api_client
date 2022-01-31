import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CoinbaseProvider from "next-auth/providers/coinbase";
import { signIn } from "next-auth/react";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CoinbaseProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
  ],
})