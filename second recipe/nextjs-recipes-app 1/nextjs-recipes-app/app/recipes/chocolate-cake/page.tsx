"use client";
import React from "react";
import ProtectedRoute from "../../../components/ProtectedRoute";

const RecipeHero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Top Hero Section */}
      <div className="bg-black h-[30vh] w-full"></div>

      {/* Floating Title Card */}
      <div className="absolute left-1/2 -translate-x-1/2 top-6 bg-white/10 backdrop-blur-lg border border-white/30 shadow-xl rounded-xl  p-8 text-center w-[90%] max-w-3xl">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          Chocolate Cake
        </h1>
        <p className="text-lg text-gray-200 mt-2">
          A soft, moist, and rich chocolate cake that melts in your mouth.
        </p>
      </div>

      {/* Description Section */}
      <div className="flex flex-col md:flex-row items-start justify-between mt-20 px-8 max-w-6xl mx-auto gap-6">
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-semibold mb-4">
            The Ultimate Moist Chocolate Cake
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This chocolate cake is every dessert lover’s dream — rich, fluffy,
            and perfectly moist. With a smooth chocolate ganache and deep cocoa
            flavor, it’s the ideal treat for birthdays, celebrations, or any
            time you crave something indulgent. The secret lies in combining
            cocoa, buttermilk, and hot water for an irresistibly soft texture.
            <br />
            <br />
            Follow these simple steps and create a bakery-style chocolate cake
            right in your kitchen. It’s simple, satisfying, and guaranteed to
            wow every sweet tooth!
          </p>

          <div className="mt-12 flex justify-center">
            <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl rounded-xl p-4 text-center w-[50%] max-w-sm">
              <h3 className="text-1xl font-bold text-yellow-400 mb-2">
                🍫 Let’s Bake Some Magic! 🍫
              </h3>
              <div className="text-2xl animate-bounce text-yellow-300">
                ⬇️⬇️⬇️
              </div>
            </div>
          </div>
        </div>

        <div className="w-[430px] flex-shrink-0">
          <img
            className="w-full h-auto rounded-lg shadow-lg"
            src="/cake.jpg"
            alt="Chocolate Cake"
          />
        </div>
      </div>

      {/* Steps + Sticky YouTube */}
      <div className="flex flex-col md:flex-row gap-8 px-8 max-w-6xl mx-auto mt-12">
        {/* Steps Section */}
        <div className="flex-1">
          {[
            {
              step: 1,
              title: "Prepare Dry Ingredients",
              desc: "Mix flour, cocoa powder, baking soda, and sugar in a large bowl.",
              img: "/cake-step1.jpg",
            },
            {
              step: 2,
              title: "Combine Wet Ingredients",
              desc: "In another bowl, whisk together eggs, oil, buttermilk, and vanilla extract.",
              img: "/cake-step2.jpg",
            },
            {
              step: 3,
              title: "Mix Batter",
              desc: "Combine the wet and dry mixtures, then slowly add hot water to create a smooth batter.",
              img: "/cake-step3.jpg",
            },
            {
              step: 4,
              title: "Bake",
              desc: "Pour the batter into a greased pan and bake at 180°C for 30–35 minutes.",
              img: "/cake-step4.jpg",
            },
            {
              step: 5,
              title: "Make Ganache",
              desc: "Heat cream and pour over chopped chocolate. Stir until smooth and glossy.",
              img: "/cake-step5.webp",
            },
            {
              step: 6,
              title: "Frost and Serve",
              desc: "Spread ganache over cooled cake, slice, and enjoy your masterpiece.",
              img: "/cake-step6.jpg",
            },
          ].map(({ step, title, desc, img }) => (
            <div className="mb-8" key={step}>
              <h3 className="text-xl font-semibold mb-2">
                Step {step}: {title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{desc}</p>
              <img
                src={img}
                alt={title}
                className="w-full h-auto rounded-lg shadow-lg mt-2"
              />
            </div>
          ))}
        </div>

        {/* Sticky Video Section */}
        <div className="w-full md:w-[450px] flex-shrink-0">
          <div className="sticky top-20 bg-white p-4 rounded-lg shadow-xl border-2 border-yellow-400">
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">📹 Watch Video Tutorial</h3>
            <iframe
              className="w-full h-[350px] md:h-[400px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/bT1Qnk1B8Oo?si=lDBX_GUNVf2_q4W9"
              title="Chocolate Cake Recipe Video"
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

export default function ChocolateCakePage() {
  return (
    <ProtectedRoute>
      <RecipeHero />
    </ProtectedRoute>
  );
}
