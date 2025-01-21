import SettingForm from "@/app/components/SettingForm/settingform";
import { auth } from "@/auth";
import { prisma } from "@/utils/db";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";

export default async function Setting() {
  // session
  const session = await auth();
  //get user profile data
  const profile = await prisma.profile.findFirstOrThrow({
    where: {
      email: (session?.user?.email as string) || "",
    },
  });
  // เช็คSession
  // if (!session) {
  //   return (
  //     <p className="ml-5 mt-5 text-red-500 font-bold">not found session.</p>
  //   );
  // }
  return (
    <>
      <div className="mx-auto max-w-5xl mt-5 md:max-w-3xl">
        <button className="mb-10 ">
          <Link href={"/profile"} className="flex space-x-2 lg:hidden">
            <FaChevronLeft className="w-5 h-5" />
            <p className="font-bold hover:underline sm:hidden">back</p>
          </Link>
        </button>
        {/*  */}
        <SettingForm
          profile={profile} //ดึงค่า default จากprofile
          session={(session?.user?.email as string) || ""}
        />  
      </div>
    </>
  );
}
