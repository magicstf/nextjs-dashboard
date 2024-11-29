/*
 * @Author: sutengfei
 * @Date: 2024-11-29 16:29:39
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-29 16:29:52
 */
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
