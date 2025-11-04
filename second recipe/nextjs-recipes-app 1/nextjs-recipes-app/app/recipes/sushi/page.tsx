"use client";
import React from "react";
import ProtectedRoute from "../../../components/ProtectedRoute";

const SushiRecipe: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="bg-black h-[30vh] w-full"></div>
      <div className="absolute left-1/2 -translate-x-1/2 top-6 bg-white/10 backdrop-blur-lg border border-white/30 shadow-xl rounded-xl p-8 text-center w-[90%] max-w-3xl">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">California Roll</h1>
        <p className="text-lg text-gray-200 mt-2">Delicious sushi roll with crab, avocado, and cucumber.</p>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between mt-20 px-8 max-w-6xl mx-auto gap-6">
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-semibold mb-4">Perfect Homemade Sushi</h2>
          <p className="text-gray-700 leading-relaxed">
            California rolls are a great introduction to sushi. With crab meat, creamy avocado, 
            and crisp cucumber, these rolls are fresh, delicious, and surprisingly easy to make at home.
          </p>
        </div>

        <div className="w-[400px] h-[300px] flex-shrink-0">
          <img
            className="w-full h-full rounded-lg shadow-lg object-cover"
            src="/california.jpg"
            alt="California Roll"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 px-8 max-w-6xl mx-auto mt-12 pb-12">
        <div className="flex-1">
          {[
            { step: 1, title: "Cook Rice", desc: "Prepare sushi rice and season with rice vinegar, sugar, and salt.", img: "/step1-california roll.jpg" },
            { step: 2, title: "Prepare Fillings", desc: "Slice avocado and cucumber into thin strips. Prepare crab meat.", img: "/step2-california roll.jpg" },
            { step: 3, title: "Roll Sushi", desc: "Place nori on bamboo mat, spread rice, add fillings in the center.", img: "/step4-califonia roll.jpg" },
            { step: 4, title: "Roll Tightly", desc: "Roll the sushi tightly using the bamboo mat, applying gentle pressure.", img: "/step5-california roll.jpg" },
            { step: 5, title: "Slice", desc: "Cut the roll into bite-sized pieces using a sharp, wet knife.", img: "/step6-california roll.jpg" },
            { step: 6, title: "Serve", desc: "Arrange on plate, sprinkle with sesame seeds and serve with soy sauce and wasabi.", img: "/step7-california roll.jpg" },
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
              src="https://www.youtube.com/embed/_DaVD-kiFt4"
              title="California Roll Recipe Video"
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

export default function SushiPage() {
  return (
    <ProtectedRoute>
      <SushiRecipe />
    </ProtectedRoute>
  );
}

