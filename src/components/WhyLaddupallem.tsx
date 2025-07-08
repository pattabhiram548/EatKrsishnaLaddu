import React from 'react';
import { Card } from '@mui/material';
import { Shield, Truck, Clock, Star } from 'lucide-react';

const WhyLaddupallem: React.FC = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every product undergoes strict quality checks to ensure you receive only the best. We maintain the highest standards of hygiene and food safety.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Truck,
      title: "Fresh Delivery",
      description: "We prepare your orders fresh and deliver them quickly to maintain the authentic taste and nutritional value of our products.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Clock,
      title: "Traditional Methods",
      description: "Our time-tested recipes and traditional cooking methods ensure that every bite takes you back to the authentic flavors of yesteryears.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description: "With thousands of happy customers, we take pride in our commitment to excellence and customer satisfaction in every order.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const benefits = [
    "Rich in fiber and essential nutrients",
    "Gluten-free and easily digestible",
    "Made with organic jaggery and ghee",
    "No artificial colors or preservatives",
    "Suitable for all age groups",
    "Perfect for gifting occasions"
  ];

  return (
    <section id="why-laddupallem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose EatKrishna?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover what makes our millet foods special and why thousands of 
            customers trust us for their healthy snacking needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className="p-12 rounded-2xl shadow-2xl hover:shadow-2xl transition-shadow duration-300 min-h-[220px] flex items-start">
              <div className={`flex-shrink-0 p-6 rounded-lg ${reason.bgColor} ${reason.color} mr-8`}>
                <reason.icon className="h-12 w-12" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {reason.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="p-12 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Health Benefits of Our Millet Products
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div>
            <Card className="p-12 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">
                Join Our Happy Customers
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Experience the authentic taste of traditional millet foods and 
                join thousands of satisfied customers who have made EatKrishna
                their trusted choice for healthy snacking.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold">4.8★</div>
                  <div className="text-lg opacity-90">Customer Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">98%</div>
                  <div className="text-lg opacity-90">Repeat Customers</div>
                </div>
              </div>
              <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 w-full text-lg">
                Shop Now
              </button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLaddupallem;