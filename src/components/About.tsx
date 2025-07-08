import React from 'react';
import { Card } from '@mui/material';
import { Award, Heart, Leaf, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "We use only the finest ingredients and traditional methods to ensure exceptional quality in every product.",
      color: "text-yellow-600"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Each product is crafted with care and passion, following recipes passed down through generations.",
      color: "text-red-600"
    },
    {
      icon: Leaf,
      title: "Natural & Healthy",
      description: "Our millet-based products are naturally nutritious, free from artificial preservatives and additives.",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "Family Tradition",
      description: "A family business rooted in tradition, bringing authentic flavors from our kitchen to yours.",
      color: "text-blue-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About EatKrishna
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the story behind our authentic millet foods and the passion
            that drives us to bring you the finest traditional sweets and snacks.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="flex-1 w-full">
            <Card className="p-12 h-full shadow-2xl rounded-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h3>
              <div className="space-y-6 text-gray-700 text-lg">
                <p>
                  Eat Krishna – Home Made Protein Bars/Laddus began as a small family home Kitchen with a
                  simple mission: to provide Protein food to every Individual along with their regular daily
                  meal. the authentic taste of traditional Seeds and Nuts -based food is very much helpful to
                  add value to your diet.
                </p>
                <p>
                  Our journey started when we realized that our Indian's daily consumption of protein is very
                  less, our daily 3 meal consists of Idly, Dosa, Rice, Curries &amp; Chapatis. We rarely eat Nuts 7
                  Seeds.
                </p>
                <p>
                  Today, we continue this legacy by combining traditional cooking methods with modern food
                  safety standards. Every Bar or Laddu or every Nutritional Bar is made with the same love
                  and attention to detail that has been our hallmark for generations.
                </p>
                <p>We believe in the power of Nuts &amp; Seeds - these ancient Combinations that are not only
                  delicious but also incredibly nutritious. Our products are a testament to the rich culinary
                  heritage of our region.
                </p>
                <p>We are committed to provide highly Nutritious School Snack to Your Children, you can add
                  this bar/laddu to your children's daily Lunch box.
                </p>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-2xl transition-shadow duration-300 rounded-2xl min-h-[220px] flex flex-col items-center justify-center">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 bg-gray-50 ${feature.color}`}>
                  <feature.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Optionally, you can add more info or testimonials here */}
        </div>
      </div>
    </section>
  );
};

export default About;