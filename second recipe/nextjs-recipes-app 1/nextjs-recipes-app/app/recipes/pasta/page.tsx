"use client";
import React from "react";
import ProtectedRoute from "../../../components/ProtectedRoute";

const PastaRecipe: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Top Hero Section */}
      <div className="bg-black h-[30vh] w-full"></div>

      {/* Floating Title Card */}
      <div className="absolute left-1/2 -translate-x-1/2 top-6 bg-white/10 backdrop-blur-lg border border-white/30 shadow-xl rounded-xl p-8 text-center w-[93%] max-w-4xl">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          Creamy Garlic Pasta
        </h1>
        <p className="text-lg text-gray-200 mt-2">
          A rich and comforting pasta tossed in creamy garlic sauce with herbs and cheese.
        </p>
      </div>

      {/* Description Section */}
      <div className="flex flex-col md:flex-row items-start justify-between mt-20 px-8 max-w-6xl mx-auto gap-6">
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-semibold mb-4">
            Delicious Homemade Pasta in Minutes
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This creamy garlic pasta is the ultimate comfort dish — smooth, cheesy, and full of flavor.
            Made with simple pantry ingredients like pasta, garlic, butter, and cream, this recipe
            delivers restaurant-quality taste in under 30 minutes. Perfect for busy weeknights or
            cozy weekends, this pasta pairs beautifully with garlic bread or roasted vegetables.
            <br />
            <br />
            Follow these easy steps to create your own bowl of creamy perfection — it’s rich, satisfying,
            and guaranteed to impress everyone at the table!
          </p>

          <div className="mt-12 flex justify-center">
            <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl rounded-xl p-4 text-center w-[40%] max-w-sm">
              <h3 className="text-1xl font-bold text-yellow-400 mb-2">
                🍝 Let’s Start Cooking! 🍝
              </h3>
              <div className="text-2xl animate-bounce text-yellow-300">
                ⬇️⬇️⬇️
              </div>
            </div>
          </div>
        </div>

        <div className="w-[400px] h-[300px] flex-shrink-0">
          <img
            className="w-full h-full rounded-lg shadow-lg"
            src="/pasta.jpg"
            alt="Creamy Garlic Pasta"
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
              title: "Boil the Pasta",
              desc: "Cook pasta in salted boiling water until al dente. Drain and set aside.",
              img: "/pasta-step1.webp",
            },
            {
              step: 2,
              title: "Sauté Garlic",
              desc: "Melt butter in a pan, add minced garlic, and sauté until fragrant.",
              img: "/pasta-step2.webp",
            },
            {
              step: 3,
              title: "Add Cream and Seasoning",
              desc: "Pour in fresh cream, salt, pepper, and Italian herbs. Mix well.",
              img: "/pasta-step3.webp",
            },
            {
              step: 4,
              title: "Combine Pasta",
              desc: "Add the boiled pasta to the sauce and toss until evenly coated.",
              img: "/pasta-step4.webp",
            },
            {
              step: 5,
              title: "Add Cheese",
              desc: "Sprinkle grated Parmesan and stir until melted and creamy.",
              img: "/pasta-step5.webp",
            },
            {
              step: 6,
              title: "Serve Hot",
              desc: "Garnish with parsley and serve hot with garlic bread.",
              img: "/pasta-step6.webp",
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
              src="https://www.youtube.com/embed/zSCTYKUeLQg?si=JRtglCL67yPqIsFJ"
              title="Creamy Garlic Pasta Recipe Video"
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

export default function PastaPage() {
  return (
    <ProtectedRoute>
      <PastaRecipe />
    </ProtectedRoute>
  );
}
