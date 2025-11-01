"use server";

import { signIn, signOut } from "@/auth";
export async function googleSignIn() {
  await signIn("google", { redirectTo: "/" });
}

export async function logOut() {
  await signOut();
}

export async function facebookSignIn() {
  await signIn("facebook", { redirectTo: "/" });
}
