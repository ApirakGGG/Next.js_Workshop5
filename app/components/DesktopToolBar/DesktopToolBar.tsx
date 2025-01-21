import Image from "next/image";
import Link from "next/link";
import { CiUser, CiSearch, CiGrid41, CiSquarePlus } from "react-icons/ci";
import { GoHome } from "react-icons/go";
export default function DesktopToolBar() {
  const toolbar = [
    { id: "1", name: "Home", link: "/", icon: GoHome },
    { id: "2", name: "Search", link: "/search", icon: CiSearch },
    { id: "3", name: "Post", link: "/create", icon: CiSquarePlus },
    { id: "4", name: "Photo", link: "/browse", icon: CiGrid41 },
    { id: "5", name: "Profile", link: "/profile", icon: CiUser },
  ];
  return (
    <div className=" bg-white py-5 p-5  w-1/5 lg:block hidden">
      <div className="fixed top-2">
        <div className="items-center">
          <Image
            src={"/asset/ig.png"}
            alt="ig-logo"
            width={200}
            height={200}
            className="object-cover drop-shadow-lg items-center"
          />
        </div>
        {toolbar.map((tool) => (
          <div key={tool.id} className="mt-2 px-3">
           <Link href={tool.link}>
           <div className="flex items-center py-3 rounded-md gap-4 space-y-2 cursor-pointer hover:bg-gray-100">
              <tool.icon className="w-9 h-9 items-center" />
              <p className="text-sm items-center text-center">{tool.name}</p>
            </div>
           </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
