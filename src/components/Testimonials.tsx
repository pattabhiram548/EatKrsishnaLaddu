import React from 'react';
import { Facebook, Twitter, Instagram, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    city: 'Hyderabad',
    date: '2024-05-01',
    product: 'Dry Fruits Laddu',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    review:
      'The laddus from EatKrishna are absolutely delicious and taste just like home! The quality and freshness are unmatched. Highly recommended for anyone who loves traditional sweets.',
    rating: 5,
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'Rahul Verma',
    city: 'Bangalore',
    date: '2024-04-18',
    product: 'Millet Protein Bar',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    review:
      'I ordered for my family and everyone loved the millet snacks. The delivery was quick and the packaging was beautiful. Will definitely order again!',
    rating: 5,
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'Anjali Patel',
    city: 'Mumbai',
    date: '2024-03-27',
    product: 'Assorted Laddus',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    review:
      'EatKrishna brings back childhood memories with their authentic taste. The variety of laddus and bars is amazing. Great for gifting too!',
    rating: 5,
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'Suresh Kumar',
    city: 'Chennai',
    date: '2024-02-15',
    product: 'Dry Fruits Laddu',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
    review:
      'Healthy, tasty, and made with love! I appreciate the use of millets and dry fruits. Perfect for health-conscious people.',
    rating: 5,
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },
  },
];

// Duplicate testimonials for seamless looping
const repeated = [...testimonials, ...testimonials];

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-700 mb-10">
          What Our Customers Say
        </h2>
        <div className="overflow-hidden w-full">
          <div
            className="flex w-max animate-testimonials-carousel"
            style={{
              animation: 'testimonials-carousel 32s linear infinite',
            }}
          >
            {repeated.map((t, idx) => (
              <div
                key={idx}
                className="w-80 md:w-96 flex-shrink-0 bg-white rounded-3xl shadow-xl border border-orange-100 mx-4 my-2 p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-orange-300 shadow-lg mb-3"
                />
                <div className="mb-1">
                  <span className="font-semibold text-orange-700 text-lg">{t.name}</span>
                  <span className="text-gray-500 text-sm ml-2">({t.city})</span>
                </div>
                <div className="text-xs text-gray-400 mb-1">{t.date} &middot; {t.product}</div>
                <p className="text-gray-700 mb-3 px-2 text-base italic">"{t.review}"</p>
                <div className="flex items-center justify-center mb-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <div className="flex space-x-4 mt-2 justify-center">
                  <a href={t.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href={t.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={t.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes testimonials-carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-testimonials-carousel {
          animation: testimonials-carousel 32s linear infinite;
        }
        /* Hide scrollbars */
        .overflow-hidden::-webkit-scrollbar { display: none; }
        .overflow-hidden { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Testimonials; 