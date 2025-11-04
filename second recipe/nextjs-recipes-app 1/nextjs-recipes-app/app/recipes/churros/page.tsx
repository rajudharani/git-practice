"use client";
import React from "react";
import ProtectedRoute from "../../../components/ProtectedRoute";

const RecipeHero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Black header rectangle */}
      <div className="bg-black h-[30vh] w-full"></div>

      {/* Glass effect header card */}
      <div className="absolute left-1/2 -translate-x-1/2 top-6 bg-white/10 backdrop-blur-lg border border-white/30 shadow-xl rounded-xl p-8 text-center w-[90%] max-w-3xl">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">Churros</h1>
        <p className="text-lg text-gray-200 mt-2">
          Crispy fried dough coated in cinnamon sugar, perfect with chocolate sauce!
        </p>
      </div>

      {/* Intro Section */}
      <div className="flex flex-col md:flex-row items-start justify-between mt-20 px-8 max-w-6xl mx-auto gap-6">
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-semibold mb-4">
            The Perfect Homemade Churro Recipe
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Crispy on the outside and soft on the inside, homemade churros are the
            perfect blend of texture and flavor. Made from a simple dough of flour,
            water, butter, and a hint of vanilla, these golden sticks are fried to
            perfection and coated generously in cinnamon sugar. Whether you dip them
            in rich chocolate sauce or enjoy them plain, churros are a warm,
            comforting treat that captures the essence of classic street-style
            desserts. Perfect for parties, festivals, or cozy evenings at home, this
            easy churro recipe will make every bite taste like pure joy.
            <br />
            <br />
            Now that you know what makes these churros so irresistible, it’s time to
            get hands-on. This recipe will guide you step by step, making it easy to
            create golden, crispy churros right in your own kitchen. From mixing the
            dough to frying and coating in cinnamon sugar, you’ll master each part
            and enjoy every delicious bite.
          </p>

          <div className="mt-12 flex justify-center">
            <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl rounded-xl p-4 text-center w-[40%] max-w-sm">
              <h3 className="text-1xl font-bold text-yellow-400 mb-2">
                🎉 Let’s Dive Into the Recipe! 🎉
              </h3>
              <div className="text-2xl animate-bounce text-yellow-300">⬇️⬇️⬇️</div>
            </div>
          </div>
        </div>

        <div className="w-[300px] flex-shrink-0">
          <img
            className="w-full h-auto rounded-lg shadow-lg"
            src="/churros-1.webp"
            alt="Churros"
          />
        </div>
      </div>

      {/* Steps Section */}
      <div className="flex flex-col md:flex-row gap-8 px-8 max-w-6xl mx-auto mt-12">
        <div className="flex-1">
          {[
            {
              step: 1,
              title: "Mix the Dough",
              desc: "Combine flour, water, butter, and sugar in a bowl until smooth.",
              img: "/step1.jpg",
            },
            {
              step: 2,
              title: "Heat Oil",
              desc: "Heat oil in a pan to 180°C and prepare for frying.",
              img: "/step2.jpg",
            },
            {
              step: 3,
              title: "Fry Churros",
              desc: "Pipe dough into hot oil and fry until golden brown.",
              img: "/step3.jpg",
            },
            {
              step: 4,
              title: "Add Vanilla & Egg",
              desc: "Add vanilla and egg to the flour mixture, then blend immediately with an electric mixer.",
              img: "/step4.jpg",
            },
            {
              step: 5,
              title: "Blend the Mixture",
              desc: "Blend until the mixture comes together and is smooth.",
              img: "/step5.jpg",
            },
            {
              step: 6,
              title: "Pipe the Dough",
              desc: "Transfer to a piping bag fitted with a star tip and pipe into preheated oil.",
              img: "/step6.jpg",
            },
            {
              step: 7,
              title: "Fry Until Golden",
              desc: "Fry for about 2 minutes per side until golden brown.",
              img: "/step7.jpg",
            },
            {
              step: 8,
              title: "Drain Excess Oil",
              desc: "Transfer to paper towels to remove excess oil.",
              img: "/step8.jpg",
            },
            {
              step: 9,
              title: "Coat in Cinnamon Sugar",
              desc: "Roll fried churros in cinnamon sugar mixture. Repeat with remaining dough.",
              img: "/step9.jpg",
            },
            {
              step: 10,
              title: "Serve & Enjoy",
              desc: "Churros are ready! Serve warm with chocolate sauce.",
              img: "/step10.jpg",
            },
          ].map(({ step, title, desc, img }) => (
            <div key={step} className="mb-8">
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
              src="https://www.youtube.com/embed/VYqoOiQsV0A?si=NZvcc_E9SuokdmI1"
              title="Churros Recipe Video"
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

export default function ChurrosPage() {
  return (
    <ProtectedRoute>
      <RecipeHero />
    </ProtectedRoute>
  );
}
