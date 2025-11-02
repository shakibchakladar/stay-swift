"use client"
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

function LogInOutBtn({user}) {
  const handleLogOut=()=>{
    signOut({callbackUrl:"http://localhost:3000/login"})
  }
  return (
    <li>
      {user ? (
        <button onClick={handleLogOut} className="login"> logout</button>
      ) : (
        <Link href="/login" className="login">
          Login
        </Link>
      )}
    </li>
  );
}

export default LogInOutBtn;
