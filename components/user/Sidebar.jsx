"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { USER_NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";


export default function Sidebar() {
    const pathname = usePathname();
    const topNavs = USER_NAV_ITEMS.slice(0, -3)
    const bottomNavs = USER_NAV_ITEMS.slice(-3)


  return (
    <nav className="flex flex-col p-4 w-64 border-r h-screen sticky top-0 bg-[#000000]">
        <div
            className='flex items-center font-bold mb-8'>
            <Image src='/glimmer.png' alt="glimmer_logo" width={120} height={60}/>
            <p className="border border-yellow-700 rounded px-2 text-sm text-gray-300">beta</p>
        </div>
        <div className='flex flex-col gap-2'>
            {topNavs.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg transition-all",
                    isActive 
                        ? "bg-purple-800 text-white shadow-md" 
                        : "text-gray-300 hover:border-purple-800 hover:border"
                    )}   
                >
                    <Icon className="w-5 h-5 text-yellow-600" />
                    <span className="font-medium">{item.label}</span>
                </Link>
                );
            })}
        </div>
        <div className="flex flex-col gap-2 mt-auto">
            {bottomNavs.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg transition-all",
                    isActive 
                        ? "bg-purple-800 text-white shadow-md" 
                        : "text-gray-300 hover:border-purple-800 hover:border"
                    )}   
                >
                    <Icon className="w-5 h-5 text-yellow-600" />
                    <span className="font-medium">{item.label}</span>
                </Link>
                );
            })}
        </div>
    </nav>
  );
}
