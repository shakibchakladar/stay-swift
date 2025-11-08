import { auth } from "@/auth";
import Image from "next/image";

const ProfileInfo = async () => {
  const session = await auth();
  const user = session?.user;
  console.log(" user who?", user);
  return (
    <div className="flex flex-col items-center py-8 text-center">
      <div className="relative max-h-[180px] max-w-[180px] rounded-full lg:mb-8 h-[100px] w-[100px] grid place-items-center ">
        {user?.image ? (
          <Image className="  text-4xl text-white rounded-full" src={user?.image} height={90} width={90} alt="image" />
        ) : (
          user.name.charAt(0).toUpperCase()
        )}
      </div>

      <div>
        <h3 className="text-2xl font-semibold lg:text-[28px]">{user?.name}</h3>
        <p className="leading-[231%] lg:text-lg">{user?.email}</p>
      </div>

      <div className="w-3/4 border-b border-[#a4a4a4] py-6 lg:py-4"></div>
    </div>
  );
};

export default ProfileInfo;
