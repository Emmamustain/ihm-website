"use client";
import type React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  BookOpen,
  LayoutGrid,
  Box,
  Globe,
  FileText,
  BookMarked,
  Phone,
  BookCopy,
  HelpCircle,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="w-80 border-r bg-white h-screen sticky top-0 overflow-y-auto">
      <div className="p-6">
        <Link
          href="/"
          className={`flex items-center gap-3 ${
            isHome
              ? "text-blue-700 font-semibold text-xl"
              : "text-gray-700 text-lg"
          } transition-all duration-200`}
        >
          <Home className="h-6 w-6" />
          <span>Acceuil</span>
        </Link>
      </div>

      <nav className="px-3">
        <ul className="space-y-1">
          <SidebarItem
            icon={<BookOpen className="h-5 w-5" />}
            label="À propos"
            href="/a-propos"
          />
          <SidebarItem
            icon={<LayoutGrid className="h-5 w-5" />}
            label="Concepts de base"
            href="/concepts"
          />
          <SidebarItem
            icon={<Box className="h-5 w-5" />}
            label="Design et ergonomie"
            href="/design"
          />
          <SidebarItem
            icon={<Globe className="h-5 w-5" />}
            label="Technologies utilisées"
          />
          <SidebarItem
            icon={<FileText className="h-5 w-5" />}
            label="Exemples et études de cas"
          />
          <SidebarItem
            icon={<BookMarked className="h-5 w-5" />}
            label="Ressources et apprentissage"
          />
          <SidebarItem icon={<Phone className="h-5 w-5" />} label="Contact" />
          <SidebarItem
            icon={<BookCopy className="h-5 w-5" />}
            label="Glossaire"
          />
        </ul>
      </nav>

      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-gray-600">
        <HelpCircle className="h-5 w-5" />
        <span>FAQ</span>
      </div>
    </div>
  );
}

function SidebarItem({
  icon,
  label,
  href = "#",
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={`flex items-center gap-3 px-3 py-3 rounded-md transition-all ${
          isActive
            ? "text-blue-700 bg-blue-50 font-semibold text-[1.05rem]"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
}
