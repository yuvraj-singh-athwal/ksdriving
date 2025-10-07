import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'react-feather';
function Testimonial({ quote, author }) {
  return (
    <div className="h-auto w-full bg-white p-6 rounded-lg shadow">
      <div className="text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <i key={i}>
            <Star className="inline-block w-5 h-5 mr-1" fill='#FFEE58'></Star>
          </i>
        ))}
      </div>
      <div className="container h-auto">
        <p className="text-gray-700 italic h-mb-6">"{quote}"</p>
        <p className="font-bold text-blue-900">- {author}</p>
      </div>
    </div>
  );
}
function Testimonials() {
  const testimonials = [
    {
      quote: "Best driving school I have ever seen. The instructors are very professional and friendly. Special thanks to my instructor for his guidance.",
      author: "Muhammad Ammar"
    },
    {
      quote: "I passed my Class 1 license on first attempt thanks to KS Driving School. The instructors are very experienced and professional.",
      author: "Khurram Shehzad"
    },
    {
      quote: "Excellent driving school with professional instructors. Highly recommend for anyone looking to get their truck license.",
      author: "kamal Uddin"
    },
    {
      quote: "Great experience learning from KS Driving School. The instructors are very patient and knowledgeable.",
      author: "Naveed Ahmed"
    },
    {
      quote: "I got my Class 1 license thanks to the excellent training at KS Driving School. The instructors are very professional and helpful.",
      author: "Mohammed Shoaib"
    },
    {
      quote: "KS Driving School provided me with all the skills and confidence needed to pass my Class 1 test on the first try. Highly recommended!",
      author: "Ali Khan"
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextTestimonial = () => {
    setCurrentIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Témoignages d'étudiants</h2>
        </div>
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex w-full transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Testimonial 
                    quote={testimonial.quote}
                    author={testimonial.author}
                  />
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-1 rounded-full shadow-md hover:bg-blue-800 transition"
          >
            <ChevronLeft></ChevronLeft>
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-1 rounded-full shadow-md hover:bg-blue-800 transition"
          >
           <ChevronRight></ChevronRight>
          </button>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-900' : 'bg-gray-300'}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;