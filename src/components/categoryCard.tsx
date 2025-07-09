'use client';

import React from 'react';
import { Category } from '../types/category';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
          {/* Gunakan regular img tag bukan Next.js Image */}
          <img
            src={category.image || 'https://via.placeholder.com/64x64/cccccc/666666?text=IMG'}
            alt={category.name}
            className="w-full h-full object-cover rounded-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/64x64/cccccc/666666?text=ERR';
            }}
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
          <p className="text-gray-600">{category.social_media.length} contacts</p>
        </div>
      </div>

      {category.social_media.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium text-gray-700">Social Media Contacts:</h4>
          {category.social_media.map((contact) => (
            <div key={contact.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <div>
                <p className="font-medium text-sm">{contact.name}</p>
                <p className="text-xs text-gray-600">{contact.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                {contact.label && (
                  <span className={`px-2 py-1 text-xs rounded ${
                    contact.label === 'FAST' ? 'bg-green-100 text-green-800' :
                    contact.label === 'SLOW' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {contact.label}
                  </span>
                )}
                <a
                  href={`tel:${contact.value}`}
                  className="text-blue-600 hover:text-blue-800 text-sm hover:underline"
                >
                  {contact.value}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryCard;