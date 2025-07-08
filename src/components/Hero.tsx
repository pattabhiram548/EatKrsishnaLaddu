import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      image: 'https://static.vecteezy.com/system/resources/thumbnails/045/595/418/small/healthy-energy-balls-made-of-dried-fruits-and-nuts-healthy-food-photo.jpg',
      title: 'Fuel Your Day the Clean Way',
      description: 'Power-packed protein bars made with real ingredients.'
    },
    {
      image: 'https://static.vecteezy.com/system/resources/previews/049/082/160/non_2x/traditional-indian-sweets-laddu-and-pedha-ready-to-be-gifted-or-enjoyed-during-celebrations-like-diwali-and-raksha-bandhan-free-photo.jpeg',
      title: 'No Junk. Just Results.',
      description: 'Gluten-free. Low sugar. 100% performance.'
    },
    {
      image: 'data:image/jpeg;base64,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',
      title: "More Than a Bar—It's a Lifestyle",
      description: 'Join the movement of mindful snacking.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
                    onClick={() => {
                      if (window.location.pathname === '/') {
                        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        navigate('/#products');
                      }
                    }}
                  >
                    Shop Now
                  </button>
                  <button
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
                    onClick={() => navigate('/about')}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;