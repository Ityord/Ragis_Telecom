import React, { useState } from 'react';
import ProductCard from '../components/products/ProductCard';
import { ProductCategory } from '../types';
import { PRODUCTS_DATA } from '../constants';

const ProductsPage: React.FC = () => {
  const categories = Object.values(ProductCategory);
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(categories[0]);

  return (
    // The background color class has been removed from this div
    <div className="py-20 md:py-28">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of high-quality fiber optic equipment and components.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-4 rounded-md text-sm font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-[#D9A299] text-white shadow-md'
                  : 'bg-[#F0E4D3]/80 text-gray-700 hover:bg-[#DCC5B2]/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS_DATA[activeCategory].map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;