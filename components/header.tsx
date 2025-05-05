"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <header className="border-b px-6 py-4 flex items-center bg-white shadow-md sticky top-0 z-30">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo/Home Link */}
          <Link href="/" className="text-xl font-bold text-gray-800">
            IHM Expert
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
            <NavLink
              href="/ressources"
              label="Ressources"
              pathname={pathname}
            />
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
