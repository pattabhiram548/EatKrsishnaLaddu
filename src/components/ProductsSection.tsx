import React, { useState } from 'react';
import { Card } from '@mui/material';
import { Search, Filter, ShoppingCart, Eye } from 'lucide-react';
import ProductModal from './ProductModal';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  description: string;
  variants: { name: string; price: number }[];
}

const ProductsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [stockFilter, setStockFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const allProducts: Product[] = [
    {
      id: 1,
      name: "Mamra Badam + Pista + Walnut +Cashew + 8 Seeds Laddu/Bar",
      price: 1800,
      image: "/images/MamraBadamLaddu.png",
      category: "Laddu",
      inStock: true,
      description: "Premium almond laddus made with finest almonds and traditional recipes",
      variants: [
       { name: "(1kg Laddu)", price: 1800 },
       { name: "(500g Laddu)", price: 900 },
       { name: "(25g Laddu)", price: 450 },
        { name: "(1kg Bar)", price: 1900 },
        { name: "(500g Bar)", price: 950 },
        { name: "(250g Bar)", price: 470 }
      ]
    },
    {
      id: 2,
      name: "Mamra Badam + Pista + Walnut +Cashew Laddu/Bar",
      price: 1700,
      image: "/images/MamraBadamwithoutseeds.png",
      category: "Laddu",
      inStock: true,
      description: "Rich and creamy cashew laddus with authentic taste",
      variants: [
       { name: "(1kg Laddu)", price: 1700 },
       { name: "(500g Laddu)", price: 850 },
       { name: "(25g Laddu)", price: 425 },
        { name: "(1kg Bar)", price: 1800 },
        { name: "(500g Bar)", price: 900 },
        { name: "(250g Bar)", price: 450 }
      ]
    },
    {
      id: 3,
      name: "Mamra Badam + Pista + Walnut Laddu/Bar",
      price: 1700,
      image: "/images/maramabadampista.jpg",
      category: "Laddu",
      inStock: true,
      description: "Mixed dry fruits laddu packed with nutrition and flavor",
      variants: [
        { name: "(1kg Laddu)", price: 1700 },
       { name: "(500g Laddu)", price: 850 },
       { name: "(25g Laddu)", price: 425 },
        { name: "(1kg Bar)", price: 1800 },
        { name: "(500g Bar)", price: 900 },
        { name: "(250g Bar)", price: 450 }
      ]
    },
    {
      id: 4,
      name: "Mamra Badam + Pista + Cashew Laddu/Bar",
      price: 1700,
      image: "/images/MamraBadamPistaCashewLaddu.webp",
      category: "Laddu",
      inStock: true,
      description: "Healthy flax seeds laddu rich in omega-3 fatty acids",
      variants: [
         { name: "(1kg Laddu)", price: 1700 },
       { name: "(500g Laddu)", price: 850 },
       { name: "(25g Laddu)", price: 425 },
        { name: "(1kg Bar)", price: 1800 },
        { name: "(500g Bar)", price: 900 },
        { name: "(250g Bar)", price: 450 }
      ]
    },
    {
      id: 5,
      name: "Mamra Badam + Walnut + Cashew Laddu/Bar",
      price: 1700,
      image: "images/MamraBadamWalnutCashewLaddu.jpg",
      category: "Laddu",
      inStock: true,
      description: "Traditional gondh laddu perfect for winter season",
      variants: [
        { name: "(1kg Laddu)", price: 1700 },
       { name: "(500g Laddu)", price: 850 },
       { name: "(25g Laddu)", price: 425 },
        { name: "(1kg Bar)", price: 1800 },
        { name: "(500g Bar)", price: 900 },
        { name: "(250g Bar)", price: 450 }
      ]
    },
    {
      id: 6,
      name: "Pista + Walnut + Cashew Laddu/Bar",
      price: 1700,
      image: "/images/pistawalnutsladdu.jpg",
      category: "Snacks",
      inStock: true,
      description: "Crispy jowar-based traditional snack",
      variants: [
 { name: "(1kg Laddu)", price: 1700 },
       { name: "(500g Laddu)", price: 850 },
       { name: "(25g Laddu)", price: 425 },
        { name: "(1kg Bar)", price: 1800 },
        { name: "(500g Bar)", price: 900 },
        { name: "(250g Bar)", price: 450 }
      ]
    },
    {
      id: 7,
      name: "8 Seeds Bar/Laddu",
      price: 1700,
      image: "/images/8 Seedsladdu.jpg",
      category: "Snacks",
      inStock: true,
      description: "Spiral-shaped jowar snacks with authentic taste",
      variants: [
        { name: "(1kg Laddu)", price: 1700 },
       { name: "(500g Laddu)", price: 850 },
       { name: "(25g Laddu)", price: 425 },
        { name: "(1kg Bar)", price: 1800 },
        { name: "(500g Bar)", price: 900 },
        { name: "(250g Bar)", price: 450 }
      ]
    },
    {
      id: 8,
      name: "7 Seeds Bar/ Laddu",
      price: 1700,
      image: "//www.laddupallem.com/cdn/shop/files/IMG_20250426_214911.jpg?v=1746107903&width=3840",
      category: "Laddu",
      inStock: true,
      description: "Nutritious jowar laddu with natural sweetness",
      variants: [
 { name: "(1kg Laddu)", price: 1700 },
       { name: "(500g Laddu)", price: 850 },
       { name: "(25g Laddu)", price: 425 },
        { name: "(1kg Bar)", price: 1800 },
        { name: "(500g Bar)", price: 900 },
        { name: "(250g Bar)", price: 450 }
      ]
    },
    {
      id: 9,
      name: "6 Seeds Bar/ Laddu",
      price: 1700,
      image: "/images/6seedsladdu.jpg",
      category: "Snacks",
      inStock: true,
      description: "Foxtail millet based crunchy snacks",
      variants: [
         { name: "(1kg Laddu)", price: 1700 },
       { name: "(500g Laddu)", price: 850 },
       { name: "(25g Laddu)", price: 425 },
        { name: "(1kg Bar)", price: 1800 },
        { name: "(500g Bar)", price: 900 },
        { name: "(250g Bar)", price: 450 }
      ]
    },
    {
      id: 10,
      name: "5 Seeds Bar/ Laddu",
      price: 1700,
      image: "/images/5seedsladdu.webp",
      category: "Laddu",
      inStock: true,
      description: "Finger millet laddu rich in calcium and iron",
      variants: [
         { name: "(1kg Laddu)", price: 1700 },
       { name: "(500g Laddu)", price: 850 },
       { name: "(25g Laddu)", price: 425 },
        { name: "(1kg Bar)", price: 1800 },
        { name: "(500g Bar)", price: 900 },
        { name: "(250g Bar)", price: 450 }
      ]
    },
    {
      id: 11,
      name: "4 Seeds Bar/Laddu",
      price: 1700,
      image: "/images/4seedsladdu.webp",
      category: "Laddu",
      inStock: true,
      description: "Blend of multiple grains for complete nutrition",
      variants: [
 { name: "(1kg Laddu)", price: 1700 },
       { name: "(500g Laddu)", price: 850 },
       { name: "(25g Laddu)", price: 425 },
        { name: "(1kg Bar)", price: 1800 },
        { name: "(500g Bar)", price: 900 },
        { name: "(250g Bar)", price: 450 }
      ]
    },
    {
      id: 12,
      name: "3 Seeds Bar/Laddu",
      price: 1700,
      image: "/images/3seedsladdu.jpg",
      category: "Laddu",
      inStock: true,
      description: "Healthy oats laddu for fitness enthusiasts",
      variants: [
         { name: "(1kg Laddu)", price: 1700 },
       { name: "(500g Laddu)", price: 850 },
       { name: "(25g Laddu)", price: 425 },
        { name: "(1kg Bar)", price: 1800 },
        { name: "(500g Bar)", price: 900 },
        { name: "(250g Bar)", price: 450 }
      ]
    },
    {
      id: 13,
      name: "2 Seeds Bar/Laddu",
      price: 1700,
      image: "https://biteskart.com/wp-content/uploads/2022/02/Bajra-Dry-Fruits-LAdoo.jpg",
      category: "Laddu",
      inStock: true,
      description: "Healthy oats laddu for fitness enthusiasts",
      variants: [
                 { name: "(1kg Laddu)", price: 1700 },
       { name: "(500g Laddu)", price: 850 },
       { name: "(25g Laddu)", price: 425 },
        { name: "(1kg Bar)", price: 1800 },
        { name: "(500g Bar)", price: 900 },
        { name: "(250g Bar)", price: 450 }
      ]
    },
    {
      id: 14,
      name: "Mamra Badam + Pista + Walnut +Cashew  + 3 Seeds Laddu/Bar",
      price: 1700,
      image: "/images/badam and cashewladdu.jpg",
      category: "Laddu",
      inStock: true,
      description: "Healthy oats laddu for fitness enthusiasts",
      variants: [
                 { name: "(1kg Laddu)", price: 1700 },
       { name: "(500g Laddu)", price: 850 },
       { name: "(25g Laddu)", price: 425 },
        { name: "(1kg Bar)", price: 1800 },
        { name: "(500g Bar)", price: 900 },
        { name: "(250g Bar)", price: 450 }
      ]
    },
       {
      id: 15,
      name: "Mamra Badam + Pista + Walnut + 3 Seeds Laddu/Bar",
      price: 1700,
      image: "/images/badam and seedsladdu.jpg",
      category: "Laddu",
      inStock: true,
      description: "Healthy oats laddu for fitness enthusiasts",
      variants: [
                 { name: "(1kg Laddu)", price: 1700 },
       { name: "(500g Laddu)", price: 850 },
       { name: "(25g Laddu)", price: 425 },
        { name: "(1kg Bar)", price: 1800 },
        { name: "(500g Bar)", price: 900 },
        { name: "(250g Bar)", price: 450 }
      ]
    },
       {
      id: 16,
      name: "Mamra Badam + Pista + Cashew + 3 Seeds Laddu/Bar",
      price: 1700,
      image: "images/badam and cashew pista laddu.png",
      category: "Laddu",
      inStock: true,
      description: "Healthy oats laddu for fitness enthusiasts",
      variants: [
                { name: "(1kg Laddu)", price: 1700 },
       { name: "(500g Laddu)", price: 850 },
       { name: "(25g Laddu)", price: 425 },
        { name: "(1kg Bar)", price: 1800 },
        { name: "(500g Bar)", price: 900 },
        { name: "(250g Bar)", price: 450 }
      ]
    },
       {
      id: 17,
      name: "Mamra Badam + Walnut + Cashew + 3 Seeds Laddu/Bar",
      price: 1700,
      image: "/images/cashew and walnuts laddu.jpg",
      category: "Laddu",
      inStock: true,
      description: "Healthy oats laddu for fitness enthusiasts",
      variants: [
                { name: "(1kg Laddu)", price: 1700 },
       { name: "(500g Laddu)", price: 850 },
       { name: "(25g Laddu)", price: 425 },
        { name: "(1kg Bar)", price: 1800 },
        { name: "(500g Bar)", price: 900 },
        { name: "(250g Bar)", price: 450 }
      ]
    },
       {
      id: 18,
      name: "Pista + Walnut + Cashew + 3 Seeds Laddu/Bar",
      price: 1700,
      image: "/images/pitsa and walnuts laddu.webp",
      category: "Laddu",
      inStock: true,
      description: "Healthy oats laddu for fitness enthusiasts",
      variants: [
                 { name: "(1kg Laddu)", price: 1700 },
       { name: "(500g Laddu)", price: 850 },
       { name: "(25g Laddu)", price: 425 },
        { name: "(1kg Bar)", price: 1800 },
        { name: "(500g Bar)", price: 900 },
        { name: "(250g Bar)", price: 450 }
      ]
    }
  ];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStock = stockFilter === 'all' || 
      (stockFilter === 'inStock' && product.inStock) || 
      (stockFilter === 'outOfStock' && !product.inStock);
    const matchesPrice = (!priceRange.min || product.price >= parseInt(priceRange.min)) &&
      (!priceRange.max || product.price <= parseInt(priceRange.max));
    
    return matchesSearch && matchesStock && matchesPrice;
  });

  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 8);

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Protein or Nutritious Bars/Laddus
Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our authentic range of millet-based laddus and traditional snacks, 
            crafted with premium ingredients and time-honored recipes.
          </p>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-1700 h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={stockFilter}
              onChange={(e) => setStockFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="all">All Products</option>
              <option value="inStock">In Stock</option>
              <option value="outOfStock">Out of Stock</option>
            </select>

            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Min Price"
                value={priceRange.min}
                onChange={(e) => setPriceRange({...priceRange, min: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <input
                type="number"
                placeholder="Max Price"
                value={priceRange.max}
                onChange={(e) => setPriceRange({...priceRange, max: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div className="text-sm text-gray-600 flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              {filteredProducts.length} products found
            </div>
          </div>
        </Card>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {displayedProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Out of Stock
                    </span>
                  </div>
                )}
                <div className="absolute top-2 right-2">
                  <span className="bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-sm text-gray-500">Regular price</span>
                    <div className="text-xl font-bold text-orange-600">
                      From Rs. {product.price}.00
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                      product.inStock
                        ? 'bg-orange-600 text-white hover:bg-orange-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!product.inStock}
                  >
                    Start Order
                  </button>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        {!showAll && filteredProducts.length > 8 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
            >
              View All Products ({filteredProducts.length - 8} more)
            </button>
          </div>
        )}

        {showAll && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(false)}
              className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors duration-200"
            >
              Show Less
            </button>
          </div>
        )}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default ProductsSection;