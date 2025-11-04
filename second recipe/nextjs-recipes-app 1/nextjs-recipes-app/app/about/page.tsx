import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Background Food Images */}
      <div className="absolute inset-0 overflow-hidden opacity-40 z-0">
        <div className="absolute top-0 left-0 w-96 h-96">
          <img src="/pasta.jpg" alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="absolute top-20 right-10 w-80 h-80">
          <img src="/cake.jpg" alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72">
          <img src="/churros-1.webp" alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="absolute bottom-10 right-1/3 w-64 h-64">
          <img src="/salad.jpg" alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="absolute top-1/3 left-1/2 w-56 h-56">
          <img src="/step1.jpg" alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="absolute top-1/2 right-1/4 w-60 h-60">
          <img src="/step2.jpg" alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="absolute bottom-1/3 left-10 w-52 h-52">
          <img src="/step3.jpg" alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="absolute top-2/3 right-20 w-48 h-48">
          <img src="/pasta-step1.webp" alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="absolute top-40 left-1/3 w-44 h-44">
          <img src="/cake-step1.jpg" alt="" className="w-full h-full object-cover rounded-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">About RecipeLearn</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted companion in the culinary journey, making cooking accessible and enjoyable for everyone.
          </p>
        </div>

      {/* Mission Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-8 text-center text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto">
            To empower home cooks of all skill levels with easy-to-follow recipes, 
            step-by-step video guides, and expert cooking tips. We believe that 
            everyone can create delicious, restaurant-quality meals in their own kitchen.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mb-16 relative">
        {/* Background images for features section */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-36 h-36">
            <img src="/step6.jpg" alt="" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="absolute bottom-10 right-1/4 w-40 h-40">
            <img src="/step7.jpg" alt="" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">What Makes Us Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4 text-center">📚</div>
            <h3 className="text-xl font-bold mb-2 text-yellow-600">Comprehensive Guides</h3>
            <p className="text-gray-600">
              Detailed step-by-step instructions with high-quality images for each stage of cooking.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4 text-center">🎥</div>
            <h3 className="text-xl font-bold mb-2 text-yellow-600">Video Tutorials</h3>
            <p className="text-gray-600">
              Watch professional chefs prepare each recipe from start to finish with embedded YouTube videos.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4 text-center">👨‍🍳</div>
            <h3 className="text-xl font-bold mb-2 text-yellow-600">Expert Tips</h3>
            <p className="text-gray-600">
              Learn cooking techniques, ingredient substitutions, and kitchen secrets from experienced chefs.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="mb-16 bg-gray-50 rounded-lg p-8 relative overflow-hidden">
        {/* Additional background images for this section */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-4 right-4 w-32 h-32">
            <img src="/step4.jpg" alt="" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="absolute bottom-4 left-4 w-28 h-28">
            <img src="/step5.jpg" alt="" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24">
            <img src="/pasta-step2.webp" alt="" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              RecipeLearn was born from a simple idea: cooking shouldn't be intimidating. 
              We noticed that many people wanted to cook at home but felt overwhelmed by 
              complex recipes or lack of guidance.
            </p>
            <p>
              Our platform bridges that gap by providing clear, visual instructions that 
              make even the most elaborate dishes approachable. Whether you're a complete 
              beginner or an experienced cook looking to try something new, RecipeLearn 
              has something for you.
            </p>
            <p>
              From classic comfort foods to exotic international dishes, we curate recipes 
              that are both delicious and achievable. Each recipe is tested, refined, 
              and presented with the home cook in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16 relative">
        {/* Background images for values section */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32">
            <img src="/step8.jpg" alt="" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="absolute bottom-20 right-10 w-36 h-36">
            <img src="/step9.jpg" alt="" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28">
            <img src="/pasta-step3.webp" alt="" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-yellow-400 pl-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Accessibility</h3>
            <p className="text-gray-600">
              We believe everyone should have access to great recipes, regardless of skill level or background.
            </p>
          </div>
          
          <div className="border-l-4 border-yellow-400 pl-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Quality</h3>
            <p className="text-gray-600">
              Every recipe is carefully tested and reviewed to ensure the best possible results.
            </p>
          </div>
          
          <div className="border-l-4 border-yellow-400 pl-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Community</h3>
            <p className="text-gray-600">
              We're building a community of passionate home cooks who love to share and learn together.
            </p>
          </div>
          
          <div className="border-l-4 border-yellow-400 pl-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Innovation</h3>
            <p className="text-gray-600">
              We continuously improve our platform to provide the best cooking experience possible.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gray-800 text-white rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Cooking?</h2>
        <p className="text-lg mb-6 text-gray-300">
          Explore our collection of amazing recipes and begin your culinary adventure today!
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition"
          >
            Browse Recipes
          </Link>
          <Link
            href="/recipes/churros"
            className="px-6 py-3 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400 hover:text-black transition"
          >
            Try a Recipe
          </Link>
        </div>
      </section>
      </div>
    </div>
  );
}

