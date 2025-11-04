"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [recipesDropdownOpen, setRecipesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { data: session } = useSession();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setRecipesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Redirect any invalid route back to home
  useEffect(() => {
    const validPaths = ["/", "/recipes", "/about", "/login", "/register", "/admin"];
    if (pathname && !validPaths.some((p) => pathname.startsWith(p))) {
      router.push("/");
    }
  }, [pathname, router]);

  // ✅ Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 text-white backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-yellow-400">
          🍳 RecipeLearn
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg items-center">
          <Link
            href="/"
            className={`hover:text-yellow-400 transition ${
              pathname === "/" ? "text-yellow-400" : ""
            }`}
          >
            Home
          </Link>

          {/* Recipes Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setRecipesDropdownOpen(!recipesDropdownOpen)}
              className={`hover:text-yellow-400 transition flex items-center gap-1 ${
                pathname.startsWith("/recipes") ? "text-yellow-400" : ""
              }`}
            >
              Recipes
              <ChevronDown 
                size={16} 
                className={`transition-transform ${recipesDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>
            {recipesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-black/90 backdrop-blur-lg rounded-lg shadow-xl py-2 min-w-[200px]">
                <Link
                  href="/recipes/churros"
                  onClick={() => setRecipesDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-400 transition"
                >
                  Churros
                </Link>
                <Link
                  href="/recipes/pasta"
                  onClick={() => setRecipesDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-400 transition"
                >
                  Creamy Garlic Pasta
                </Link>
                <Link
                  href="/recipes/chocolate-cake"
                  onClick={() => setRecipesDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-400 transition"
                >
                  Chocolate Cake
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className={`hover:text-yellow-400 transition ${
              pathname === "/about" ? "text-yellow-400" : ""
            }`}
          >
            About Us
          </Link>

          <a
            href="#footer"
            className="hover:text-yellow-400 transition"
          >
            Footer
          </a>

          {session?.user?.role === "admin" && (
            <Link
              href="/admin"
              className={`hover:text-yellow-400 transition ${pathname.startsWith("/admin") ? "text-yellow-400" : ""}`}
            >
              Admin
            </Link>
          )}

          {session?.user ? (
            <div className="flex items-center gap-3">
              {session.user.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img 
                  src={session.user.image} 
                  alt="avatar" 
                  className="w-8 h-8 rounded-full border-2 border-yellow-400 object-cover"
                  onError={(e) => {
                    // Fallback to a default avatar if image fails to load
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(session.user?.name || session.user?.email || 'User')}&background=fbbf24&color=000&size=128`;
                  }}
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-xs">
                  {(session.user.name || session.user.email || 'U').charAt(0).toUpperCase()}
                </div>
              )}
              <span className="text-sm opacity-80">{session.user.name || session.user.email}</span>
              <button
                onClick={() => signOut()}
                className="px-3 py-1 rounded-md bg-yellow-400 text-black hover:bg-yellow-300"
              >
                Sign out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/login" className="opacity-90 hover:opacity-100">Login</Link>
              <Link href="/register" className="opacity-90 hover:opacity-100">Register</Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg text-white text-center py-4 space-y-4">
          <Link
            href="/"
            className="block hover:text-yellow-400 text-lg"
          >
            Home
          </Link>
          
          {/* Mobile Recipes Dropdown */}
          <div>
            <button
              onClick={() => setRecipesDropdownOpen(!recipesDropdownOpen)}
              className="block hover:text-yellow-400 text-lg w-full flex items-center justify-center gap-1"
            >
              Recipes
              <ChevronDown 
                size={16} 
                className={`transition-transform ${recipesDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>
            {recipesDropdownOpen && (
              <div className="mt-2 space-y-2">
                <Link
                  href="/recipes/churros"
                  onClick={() => {
                    setRecipesDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                  className="block hover:text-yellow-400 text-base pl-8"
                >
                  Churros
                </Link>
                <Link
                  href="/recipes/pasta"
                  onClick={() => {
                    setRecipesDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                  className="block hover:text-yellow-400 text-base pl-8"
                >
                  Creamy Garlic Pasta
                </Link>
                <Link
                  href="/recipes/chocolate-cake"
                  onClick={() => {
                    setRecipesDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                  className="block hover:text-yellow-400 text-base pl-8"
                >
                  Chocolate Cake
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="block hover:text-yellow-400 text-lg"
          >
            About Us
          </Link>

          <a
            href="#footer"
            className="block hover:text-yellow-400 text-lg"
          >
            Footer
          </a>
          {session?.user?.role === "admin" && (
            <Link href="/admin" className="block hover:text-yellow-400 text-lg">Admin</Link>
          )}
          {session?.user ? (
            <button
              onClick={() => signOut()}
              className="px-4 py-2 rounded-md bg-yellow-400 text-black hover:bg-yellow-300"
            >
              Sign out
            </button>
          ) : (
            <div className="space-y-2">
              <Link href="/login" className="block hover:text-yellow-400 text-lg">Login</Link>
              <Link href="/register" className="block hover:text-yellow-400 text-lg">Register</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
