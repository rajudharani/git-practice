"use client";
import React from "react";
import ProtectedRoute from "../../../components/ProtectedRoute";

const PizzaRecipe: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Top Hero Section */}
      <div className="bg-black h-[30vh] w-full"></div>

      {/* Floating Title Card */}
      <div className="absolute left-1/2 -translate-x-1/2 top-6 bg-white/10 backdrop-blur-lg border border-white/30 shadow-xl rounded-xl p-8 text-center w-[90%] max-w-3xl">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">Margherita Pizza</h1>
        <p className="text-lg text-gray-200 mt-2">Classic Italian pizza with fresh mozzarella, basil, and tomato sauce.</p>
      </div>

      {/* Description Section */}
      <div className="flex flex-col md:flex-row items-start justify-between mt-20 px-8 max-w-6xl mx-auto gap-6">
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-semibold mb-4">The Perfect Homemade Pizza</h2>
          <p className="text-gray-700 leading-relaxed">
            Margherita pizza is a classic Italian dish that celebrates simplicity and fresh ingredients. 
            With a crispy crust, tangy tomato sauce, creamy mozzarella, and fresh basil, this pizza 
            is a timeless favorite that never goes out of style.
          </p>
        </div>

        <div className="w-[400px] h-[300px] flex-shrink-0">
          <img
            className="w-full h-full rounded-lg shadow-lg object-cover"
            src="/pizza.jpg"
            alt="Margherita Pizza"
          />
        </div>
      </div>

      {/* Steps Section */}
      <div className="flex flex-col md:flex-row gap-8 px-8 max-w-6xl mx-auto mt-12 pb-12">
        <div className="flex-1">
          {[
            { step: 1, title: "Prepare Dough", desc: "Roll out pizza dough into a circle on a floured surface.", img: "/step1-pizza.jpg" },
            { step: 2, title: "Add Sauce", desc: "Spread tomato sauce evenly over the dough, leaving a border for the crust.", img: "/step2-pizza.jpg" },
            { step: 3, title: "Add Cheese", desc: "Place fresh mozzarella slices evenly on top of the sauce.", img: "/step3-pizza.jpg" },
            { step: 4, title: "Bake", desc: "Bake in a preheated oven at 250°C for 10-12 minutes until crust is golden.", img: "/step4-pizza.jpg" },
            { step: 5, title: "Add Basil", desc: "Top with fresh basil leaves immediately after baking.", img: "/step6-pizza.jpg" },
          ].map(({ step, title, desc, img }) => (
            <div className="mb-8" key={step}>
              <h3 className="text-xl font-semibold mb-2">Step {step}: {title}</h3>
              <p className="text-gray-700 leading-relaxed">{desc}</p>
              <img src={img} alt={title} className="w-full h-[400px] object-cover rounded-lg shadow-lg mt-2" />
            </div>
          ))}
        </div>

        {/* Sticky Video Section */}
        <div className="w-full md:w-[450px] flex-shrink-0">
          <div className="sticky top-20 bg-white p-4 rounded-lg shadow-xl border-2 border-yellow-400">
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">📹 Watch Video Tutorial</h3>
            <iframe
              className="w-full h-[350px] md:h-[400px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/sv3TXMSv6Lw"
              title="Margherita Pizza Recipe Video"
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

export default function PizzaPage() {
  return (
    <ProtectedRoute>
      <PizzaRecipe />
    </ProtectedRoute>
  );
}

