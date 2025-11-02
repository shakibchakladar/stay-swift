"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
import Link from "next/link";

const SocialLogins = ({mode}) => {
  const handleGoogle = (event) => {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  };

  const handleFacebook = (event) => {
    signIn("facebook", { callbackUrl: "http://localhost:3000" });
  };
  return (
    <>
      <div className="text-center text-xs text-gray-500"><Link href={mode}><span className="font-bold">{mode}</span></Link> or Signup with</div>
      <div className="flex gap-4">
        <button
          onClick={handleFacebook}
          className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
        >
          <Image src="/fb.png" alt="" width={40} height={40} />
          <span>Facebook</span>
        </button>
        <button
          onClick={handleGoogle}
          className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
        >
          <Image src="/google.png" alt="" width={40} height={40} />
          <span>Google</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogins;
