"use client";
import { Bell, LogOut, Search, UserRoundCog } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Navbar() {
  const [navbarData, setNavbarData] = useState([
    {
      href: "/",
      label: "Home",
      key: "home",
      isActive: false,
    },
    {
      href: "/",
      label: "Portfolio",
      isActive: true,
      key: "portfolio",
    },
    {
      href: "/",
      label: "Mutual Funds",
      isActive: false,
      key: "mutual_funds",
    },
    {
      href: "/",
      label: "Tools",
      isActive: false,
      key: "tools",
    },
    {
      href: "/",
      label: "Transaction",
      isActive: false,
      key: "transaction",
    },
  ]);
  return (
    <div className="bg-[#1B1A1A] text-sm text-white flex flex-row items-center">
      <div className="w-[200px] ps-10 py-4">
        <Image width={26} height={38} src={"/logo.svg"} alt="Company logo" />
      </div>
      <div className="flex flex-row h-full gap-10">
        {navbarData.map((val, key) => (
          <div
            key={key}
            className={`${
              val.isActive ? "font-normal" : "bg-transparent font-light"
            } flex flex-col justify-between h-full`}
          >
            <p className="justify-self-center my-auto">{val.label}</p>
            {val.isActive ? (
              <div className="rounded-[10px] self-end place-self-end justify-self-end bg-[#0070DF] h-[2px] w-full" />
            ) : null}
          </div>
        ))}
      </div>
      <div className="flex flex-row ms-auto me-10 gap-9">
        <div className="relative">
          <Search size={21} />
          <div className="w-[6px] h-[6px] right-[-2px] top-0 bg-[#EB5757] rounded-full absolute" />
        </div>
        <Bell size={21} />
        <UserRoundCog size={21} />
        <LogOut size={21} />
      </div>
    </div>
  );
}
