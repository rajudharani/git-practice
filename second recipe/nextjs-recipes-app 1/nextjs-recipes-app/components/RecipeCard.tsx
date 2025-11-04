"use client";
import Link from "next/link";
import { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform flex flex-col h-full"
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
        <p className="text-gray-600 text-sm flex-1">{recipe.description}</p>
      </div>
    </Link>
  );
}
