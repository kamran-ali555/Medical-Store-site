import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=1920",
    title: "Your Health Is Our Priority",
    subtitle: "Quality Healthcare Products at Your Fingertips"
  },
  {
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=1920",
    title: "Professional Medical Supplies",
    subtitle: "Trusted by Healthcare Professionals"
  },
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1920",
    title: "24/7 Healthcare Support",
    subtitle: "Expert Guidance When You Need It Most"
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src={slides[currentSlide].image}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            {slides[currentSlide].subtitle}
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>
    </section>
  );
}