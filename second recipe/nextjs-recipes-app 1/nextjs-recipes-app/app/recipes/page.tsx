"use client";
import RecipeCard from "../../components/RecipeCard";
import recipes from "../../data/recipes";
import Link from "next/link";
import ProtectedRoute from "../../components/ProtectedRoute";

function RecipesPageContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4">
            🍳 All Recipes
          </h1>
          <p className="text-xl md:text-2xl text-gray-900 max-w-3xl mx-auto">
            Discover our complete collection of delicious recipes. From quick meals to gourmet dishes, 
            find your next favorite recipe!
          </p>
        </div>
      </div>

      {/* Recipes Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="transform transition-all duration-300 hover:scale-105">
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-800 py-12 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Cooking?
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Browse our recipes and start your culinary journey today!
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function RecipesPage() {
  return (
    <ProtectedRoute>
      <RecipesPageContent />
    </ProtectedRoute>
  );
}

