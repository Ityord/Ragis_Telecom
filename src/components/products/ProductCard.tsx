import React from 'react';
import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // FIX: We can directly use product.image as the src.
  // No need for a separate image map or lookup logic.
  return (
    <div className="group overflow-hidden rounded-lg bg-white/50 shadow-md border border-transparent transition-all duration-300 ease-in-out hover:shadow-xl hover:border-[#DCC5B2] hover:-translate-y-2">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-105" />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;