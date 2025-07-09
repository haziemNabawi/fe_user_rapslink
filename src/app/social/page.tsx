'use client';

import React from 'react';
import { useCategories } from '../../hooks/useCategories';
import { SocialMedia } from '../../types/category';

// Create a proper interface that extends SocialMedia
interface ExtendedSocialMedia extends SocialMedia {
  categoryName: string;
}

export default function SocialPage() {
  const { categories, loading, error } = useCategories();

  // Flatten all social media contacts from all categories with proper typing
  const allSocialMedia: ExtendedSocialMedia[] = categories.flatMap(category => 
    category.social_media.map(social => ({
      ...social,
      categoryName: category.name
    } as ExtendedSocialMedia))
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading social media contacts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 mb-4 text-4xl">❌</div>
          <p className="text-red-600">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Social Media Contacts
          </h1>
          <p className="text-gray-600">
            Total contacts: {allSocialMedia.length}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allSocialMedia.map((contact) => (
            <div key={`${contact.id}-${contact.categoryName}`} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{contact.name}</h3>
                {contact.label && (
                  <span className={`px-2 py-1 text-xs rounded ${
                    contact.label === 'FAST' ? 'bg-green-100 text-green-800' :
                    contact.label === 'SLOW' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {contact.label}
                  </span>
                )}
              </div>
              
              <p className="text-sm text-gray-600 mb-2">{contact.description}</p>
              <p className="text-xs text-gray-500 mb-3">Category: {contact.categoryName}</p>
              
              <div className="flex items-center justify-between">
                <a
                  href={`tel:${contact.value}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {contact.value}
                </a>
                <a
                  href={`https://wa.me/${contact.value}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {allSocialMedia.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No social media contacts found</p>
          </div>
        )}
      </div>
    </div>
  );
}