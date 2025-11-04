"use client";
import React from "react";
import ProtectedRoute from "../../../components/ProtectedRoute";

const BurgerRecipe: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="bg-black h-[30vh] w-full"></div>
      <div className="absolute left-1/2 -translate-x-1/2 top-6 bg-white/10 backdrop-blur-lg border border-white/30 shadow-xl rounded-xl p-8 text-center w-[90%] max-w-3xl">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">Classic Burger</h1>
        <p className="text-lg text-gray-200 mt-2">Juicy beef burger with all the classic toppings.</p>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between mt-20 px-8 max-w-6xl mx-auto gap-6">
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-semibold mb-4">The Ultimate Burger</h2>
          <p className="text-gray-700 leading-relaxed">
            Nothing beats a classic burger. Juicy beef patty, melted cheese, fresh veggies, 
            and a soft bun come together to create the perfect comfort food that everyone loves.
          </p>
        </div>

        <div className="w-[400px] h-[300px] flex-shrink-0">
          <img
            className="w-full h-full rounded-lg shadow-lg object-cover"
            src="/burger.jpg"
            alt="Classic Burger"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 px-8 max-w-6xl mx-auto mt-12 pb-12">
        <div className="flex-1">
          {[
            { step: 1, title: "Shape Patties", desc: "Form ground beef into patties, season with salt and pepper.", img: "/step1-burger.jpg" },
            { step: 2, title: "Cook Patties", desc: "Grill or pan-fry patties for 4-5 minutes per side until cooked through.", img: "/step2-burger.jpg" },
            { step: 3, title: "Toast Buns", desc: "Lightly toast the burger buns in the pan or on the grill.", img: "/step3-burger.jpg" },
            { step: 4, title: "Build Burger", desc: "Layer lettuce, tomato, onion, and pickles on the bottom bun. Place cooked patty with melted cheese on top.", img: "/step4-burger.jpg" },
          ].map(({ step, title, desc, img }) => (
            <div className="mb-8" key={step}>
              <h3 className="text-xl font-semibold mb-2">Step {step}: {title}</h3>
              <p className="text-gray-700 leading-relaxed">{desc}</p>
              <img src={img} alt={title} className="w-full h-[400px] object-cover rounded-lg shadow-lg mt-2" />
            </div>
          ))}
        </div>

        <div className="w-full md:w-[450px] flex-shrink-0">
          <div className="sticky top-20 bg-white p-4 rounded-lg shadow-xl border-2 border-yellow-400">
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">📹 Watch Video Tutorial</h3>
            <iframe
              className="w-full h-[350px] md:h-[400px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/oFSgLH8AN7w"
              title="Classic Burger Recipe Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BurgerPage() {
  return (
    <ProtectedRoute>
      <BurgerRecipe />
    </ProtectedRoute>
  );
}

