"use client";
import { signIn, signOut } from "next-auth/react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";

//signinWithGoogle
export function SignInWithGoogle() {
  return (
     <button onClick={() => signIn("google")}
     className="px-3 py-1 bg-white border rounded-lg hover:bg-sky-100"
     >
        <FaGoogle className="w-5 h-5" />
        Sign In with Google
    </button>
    )
}

//SignInWithGitHub
export function SignInWithGitHub() {
    return (
        <button onClick={() => signIn("github")}
        className="px-3 py-1 bg-white border rounded-lg hover:bg-sky-100"
        >
            <FaGithub className="w-5 h-5" />
            Sign In with GitHub
        </button>
    )
}

//signOut
export function SignOutButton() {
    return (
        <button onClick={() => signOut()}
        className="px-3 py-1 bg-red-300 border rounded-lg hover:bg-red-400"
        >
            <AiOutlineLogout className="h-5 w-5" />
            SignOut
        </button>
    )
}