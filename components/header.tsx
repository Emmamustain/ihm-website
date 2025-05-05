"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Search,
  MessageCircle,
  User,
  ChevronDown,
  BookOpen,
  GraduationCap,
  Newspaper,
  BrainCircuit,
} from "lucide-react";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <header className="border-b px-6 flex items-center bg-white shadow-md sticky top-0 z-30 h-16">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo/Home Link */}
          <Link href="/" className="flex items-center relative">
            <div className="ml-3 relative h-16 w-16 flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="IHM Expert Logo"
                width={70}
                height={70}
                className="object-contain absolute"
              />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <NavLink href="/apropos" label="À Propos" pathname={pathname} />
            <NavLink href="/concepts" label="Concepts" pathname={pathname} />
            <NavLink
              href="/technologies"
              label="Technologies"
              pathname={pathname}
            />
            <NavLink href="/design" label="Design" pathname={pathname} />

            {/* Resources Dropdown */}
            <div className="relative group">
              <div className="relative py-1">
                <Link
                  href="/ressources"
                  className={`flex items-center gap-1 transition-colors ${
                    pathname.startsWith("/ressources")
                      ? "text-blue-700 font-medium"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <span>Ressources</span>
                  <ChevronDown className="h-4 w-4" />
                </Link>
                {pathname.startsWith("/ressources") && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700"></div>
                )}
              </div>

              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200 hidden group-hover:block">
                <Link
                  href="/ressources/articles"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <Newspaper className="h-4 w-4 text-blue-600" />
                  Articles
                </Link>
                <Link
                  href="/ressources/livres"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <BookOpen className="h-4 w-4 text-green-600" />
                  Livres
                </Link>
                <Link
                  href="/ressources/cours"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <GraduationCap className="h-4 w-4 text-purple-600" />
                  Cours
                </Link>
                <div className="border-t border-gray-100 my-1"></div>
                <Link
                  href="/ressources/quiz"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <BrainCircuit className="h-4 w-4 text-orange-600" />
                  Quiz interactif
                </Link>
              </div>
            </div>

            <NavLink href="/glossaire" label="Glossaire" pathname={pathname} />
            <NavLink
              href="/comunaute"
              label="Communauté"
              pathname={pathname}
              activeColor="text-orange-500"
              activeBarColor="bg-orange-500"
            />

            <button
              onClick={() => setShowSearch(true)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            <Link
              href="/profil"
              className={`text-gray-700 hover:text-gray-900 focus:outline-none ${
                pathname === "/profil" ? "text-blue-700" : ""
              }`}
              aria-label="Profile"
            >
              <User className="h-5 w-5" />
            </Link>
          </nav>
        </div>

        {/* Search Modal - macOS style */}
        {showSearch && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-start justify-center pt-32 z-50"
            onClick={() => setShowSearch(false)}
          >
            <div
              className="bg-white/90 rounded-xl shadow-2xl w-full max-w-2xl p-4 backdrop-blur-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher sur IHM Expert..."
                  className="w-full bg-transparent border-none focus:outline-none text-lg"
                  autoFocus
                />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Floating Contact Button */}
      <Link
        href="/contact"
        className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors z-20"
        aria-label="Contact"
      >
        <MessageCircle className="h-6 w-6" />
      </Link>
    </>
  );
}

function NavLink({
  href,
  label,
  pathname,
  activeColor = "text-blue-700",
  activeBarColor = "bg-blue-700",
}: {
  href: string;
  label: string;
  pathname: string;
  activeColor?: string;
  activeBarColor?: string;
}) {
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`relative py-1 transition-colors ${
        isActive
          ? activeColor + " font-medium"
          : "text-gray-700 hover:text-gray-900"
      }`}
    >
      {label}
      {isActive && (
        <div
          className={`absolute bottom-0 left-0 w-full h-0.5 ${activeBarColor}`}
        ></div>
      )}
    </Link>
  );
}
