import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-800 text-gray-200 py-12 mt-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">RecipeLearn</h3>
            <p className="text-sm text-gray-300">
              Your ultimate destination for discovering and learning delicious recipes 
              from around the world. Step-by-step guides with video tutorials.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/recipes/churros" className="hover:text-yellow-400 transition">
                  Recipes
                </Link>
              </li>
            </ul>
          </div>

          {/* Recipes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Recipes</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/recipes/churros" className="hover:text-yellow-400 transition">
                  Churros
                </Link>
              </li>
              <li>
                <Link href="/recipes/pasta" className="hover:text-yellow-400 transition">
                  Creamy Garlic Pasta
                </Link>
              </li>
              <li>
                <Link href="/recipes/chocolate-cake" className="hover:text-yellow-400 transition">
                  Chocolate Cake
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Email: info@recipelearn.com</li>
              <li className="text-gray-300">Phone: +919876543210
              </li>
              <li className="text-gray-300">Follow us on social media</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} RecipeLearn. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ for cooking enthusiasts</p>
        </div>
      </div>
    </footer>
  );
}
