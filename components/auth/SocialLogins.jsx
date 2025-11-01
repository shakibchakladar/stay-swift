import { facebookSignIn, googleSignIn } from "@/actions";
import Image from "next/image";

const SocialLogins = () => {
  return (
    <>
      <div className="text-center text-xs text-gray-500">or Signup with</div>
      <div className="flex gap-4">
        <form action={facebookSignIn} className=" w-full mt-4 py-2 ">
         <button className="border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
          <Image src="/fb.png" alt="facebook" width={40} height={40} />
          <span>Facebook</span>
          </button>
        </form>
        <form action={googleSignIn}  className=" w-full  border-gray-600/30 border rounded-md  ">
          <button type="submit" className="flex  py-2 items-center gap-2 justify-center mt-2">
          <Image src="/google.png" alt="google" width={40} height={40} />
          <span>Google</span>
        </button>
        </form>
      </div>
    </>
  );
};

export default SocialLogins;
