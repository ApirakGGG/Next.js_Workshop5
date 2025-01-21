import { FaChevronLeft } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";
import PostGrid from "@/app/components/PostGrid";
import Link from "next/link";
import Image from "next/image";
import Highlight from "@/app/components/Highlights_Profile/Highlight";
import { auth } from "@/auth";
import { prisma } from "@/utils/db";

export default async function Profile() {
  //session
  const session = await auth();
  //get user profile data
  const profile = await prisma.profile.findFirstOrThrow({
    where: {
      id: session?.user?.id as string,
      email: (session?.user?.email as string) || "",
    },
  });
  // log profile data
  console.log("data", profile);

  return (
    <main>
      {/* nav section */}
      <section className="sticky top-0 bg-white z-10">
        <div className="flex justify-between px-8 py-5 items-center">
          <button>
            <Link href={"/"} className="flex hover:underline space-x-2 lg:hidden ">
              <FaChevronLeft className="w-5 h-5" />
              <p className="font-bold sm:block">back</p>
            </Link>
          </button>
          <div className="items-center"></div>
          <button>
            <Link href={"/setting"}>
              <CiSettings className="w-8 h-8" />
            </Link>
          </button>
        </div>
      </section>

      {/* Profiles section */}
      <section>
        <div className="flex justify-center ">
          <div className="items-center bg-gradient-to-t from-orange-500 to-sky-500 p-1.5 rounded-full">
            {/* border cover profile */}
            <div className="items-center bg-white p-1 rounded-full">
              {/* profile image */}
              <Image
                src={profile.avarta as string}
                alt="profile"
                width={100}
                height={100}
                className="size-40 object-cover overflow-hidden rounded-full items-center  "
              />
            </div>
          </div>
        </div>
        {/* username */}
        <div className="flex justify-center items-center">
          <div className="mt-3 gap-2 flex items-center">
            <p className=" font-bold"> {profile.username}</p>
            <IoMdCheckmark className="w-5 h-5 p-1 items-center bg-blue-500 rounded-full " />
          </div>
        </div>
      </section>

      {/* About section  */}
      <section>
        <div className="mt-5 flex justify-center gap-8">
          <p>{"0"} post</p>
          <p>{"0"} following</p>
          <p>{"0"} follower</p>
        </div>
      </section>

      {/* Details section */}
      <section>
        <div className="mt-5 flex justify-center">
          <div className="gap-1">
            <h2 className="font-bold text-sm">{profile.name}</h2>
            <p className="text-gray-500">{profile.subtitle}</p>
            <p className="text-slate-500 text-sm">{profile.bio}</p>
          </div>
        </div>
      </section>

      {/* highlight section */}
      <section className="mt-2 px-8 py-1">
        <Highlight />
      </section>

      <hr className="mt-5" />

      {/* PostGrid detials section */}
      <section className="px-8 py-5">
        <PostGrid />
      </section>
    </main>
  );
}
