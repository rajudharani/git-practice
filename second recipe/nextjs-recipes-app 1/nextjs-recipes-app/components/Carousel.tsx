"use client";
import { useState, useEffect } from "react";

export default function Carousel() {
  const slides = [
    {
      id: "1",
      title: "Salad",
      description: "Fresh, crisp garden salad tossed with a zesty lemon dressing.",
      image: "/salad.jpg",
    },
    {
      id: "2",
      title: "Creamy Garlic Pasta",
      description: "Rich and comforting pasta tossed in creamy garlic sauce with herbs and cheese.",
      image: "/pasta.jpg",
    },
    {
      id: "3",
      title: "Chocolate Cake",
      description: "Soft, moist, and rich chocolate cake that melts in your mouth.",
      image: "/cake.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      4000
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-gray-50">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-10 left-10 bg-black/60 text-white p-4 rounded-md max-w-md">
            <h3 className="text-3xl font-bold">{slide.title}</h3>
            <p className="text-base mt-2">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute flex justify-center bottom-6 left-0 right-0 gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
