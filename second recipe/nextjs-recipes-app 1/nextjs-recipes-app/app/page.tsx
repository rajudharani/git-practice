import Carousel from "../components/Carousel";
import RecipeCard from "../components/RecipeCard";
import recipes from "../data/recipes";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full bg-gray-50">
      {/* Carousel Section */}
      <div className="w-full h-[calc(100vh-80px)]">
        <Carousel />
      </div>
      
      {/* Content Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* About Section */}
          <section className="mb-12 text-center animate-slide-in-left">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 animate-pulse-slow">Welcome to RecipeLearn</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Discover delicious recipes from around the world. Learn to cook amazing dishes 
              step-by-step with our easy-to-follow guides, video tutorials, and detailed instructions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-slide-in-left">
                <h3 className="text-xl font-bold mb-2 text-yellow-600 ">🍳 Easy Recipes</h3>
                <p className="text-gray-600">Step-by-step instructions for beginners and experts alike</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-slide-in-left animate-delay-200">
                <h3 className="text-xl font-bold mb-2 text-yellow-600">📹 Video Guides</h3>
                <p className="text-gray-600">Watch professional chefs prepare each recipe</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-slide-in-left animate-delay-400">
                <h3 className="text-xl font-bold mb-2 text-yellow-600">👨‍🍳 Expert Tips</h3>
                <p className="text-gray-600">Learn cooking techniques and secrets from the pros</p>
              </div>
            </div>
            <Link 
              href="/about" 
              className="inline-block px-6 py-3 bg-yellow-100 text-black font-bold rounded-lg hover:bg-yellow-100 transition"
            >
              Learn More About Us
            </Link>
          </section>

          {/* Ready to Cook Section */}
          <section className="mt-12 mb-12 animate-slide-in-left">
            <div className="rounded-2xl p-8 md:p-12 text-center shadow-2xl animate-pulse-slow relative overflow-hidden">
              {/* Background Images - Left and Right */}
              <div className="absolute inset-0 z-0 flex">
                {/* Left Side Image */}
                <div className="absolute left-0 top-0 bottom-0 w-1/3 md:w-2/5">
                  <img 
                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80" 
                    alt="Delicious pasta" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"></div>
                </div>
                
                {/* Right Side Image */}
                <div className="absolute right-0 top-0 bottom-0 w-1/3 md:w-2/5">
                  <img 
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80" 
                    alt="Beautiful cake" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-white/30 to-transparent"></div>
                </div>
                
                {/* Center Yellow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/65 via-yellow-300/70 to-yellow-200/65 z-0"></div>
              </div>
              
              {/* Shimmer Overlay */}
              <div className="absolute inset-0 animate-shimmer opacity-15 z-0"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 ">
                  🍳 Ready to Cook?
                </h2>
                <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                  Start your culinary journey today with our amazing recipes!
                </p>
                <Link 
                  href="/recipes/churros"
                  className="inline-block px-8 py-4 bg-gray-900 text-yellow-200 font-bold rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg animate-glow"
                >
                  Try Our Recipes →
                </Link>
              </div>
            </div>
          </section>

          {/* Featured Recipes Section */}
          <section className="mt-8 mb-12 animate-slide-in-right">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Featured Recipes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {recipes.slice(0, 3).map((r) => (
                <RecipeCard key={r.id} recipe={r} />
              ))}
            </div>
            {/* More Recipes Link */}
            <div className="text-center mt-8">
              <Link 
                href="/recipes"
                className="inline-block px-8 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg text-lg"
              >
                More Recipes →
              </Link>
            </div>
          </section>

          {/* Try Our Recipes Banner */}
          <section className="mt-12 mb-12 animate-slide-in-left">
            <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent animate-shimmer"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4 animate-bounce-slow">
                  ✨ Try Our Recipes ✨
                </h2>
                <p className="text-xl md:text-2xl font-semibold text-white mb-6">
                  Discover delicious dishes with step-by-step guides and video tutorials
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link 
                    href="/recipes/churros"
                    className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
                  >
                    View Churros Recipe
                  </Link>
                  <Link 
                    href="/recipes/pasta"
                    className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
                  >
                    View Pasta Recipe
                  </Link>
                  <Link 
                    href="/recipes/chocolate-cake"
                    className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
                  >
                    View Cake Recipe
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      {/* Additional Content to Fill Space */}
      <div className="bg-gray-50 py-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="text-center py-12 bg-white rounded-lg shadow-lg mb-0">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose RecipeLearn?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Join thousands of home cooks who are discovering the joy of cooking with our 
              comprehensive recipe collection. From beginner-friendly dishes to gourmet meals, 
              we have something for everyone.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold mb-2 text-yellow-600">Premium Quality</h3>
                <p className="text-gray-600">Carefully tested and curated recipes</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold mb-2 text-yellow-600">Easy to Follow</h3>
                <p className="text-gray-600">Step-by-step instructions for success</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2 text-yellow-600">Perfect Results</h3>
                <p className="text-gray-600">Achieve restaurant-quality dishes at home</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
