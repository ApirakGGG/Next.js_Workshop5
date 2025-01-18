import React from 'react'
import { CiUser, CiSearch, CiGrid41, CiSquarePlus } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import Link from "next/link"

const MobileToolBar = () => {
    const toolbar = [
        { id: "1", name: "Home", link: "/", icon: GoHome },
        { id: "2", name: "Search", link: "/search", icon: CiSearch },
        { id: "3", name: "Post", link: "/create", icon: CiSquarePlus },
        { id: "4", name: "Photo", link: "/browse", icon: CiGrid41 },
        { id: "5", name: "Profile", link: "/profile", icon: CiUser },
      ];
  return (
    <div className="fixed bottom-0 bg-white left-0 right-0 px-5 py-3 rounded-lg lg:hidden">
    <div className="flex justify-between max-w-xl lg:max-w-5xl mx-auto">
      {toolbar.map((tool) => (
        <Link
          href={tool.link}
          key={tool.id}
          className="ease-in-out duration-700 delay-150 transition hover:-translate-y-5 hover:scale-110 text-center"
        >
          <tool.icon className="w-10 h-10" />
          <p className="font-bold text-xs lg:hidden md:hidden">{tool.name}</p>
        </Link>
      ))}
    </div>
  </div>
  )
}

export default MobileToolBar