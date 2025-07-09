'use client';

import React from 'react';
import { useCategories } from '../hooks/useCategories';
import CategoryCard from '../components/categoryCard';

export default function HomePage() {
  const { categories, loading, error, refetch } = useCategories();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading categories...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 mb-4 text-4xl">❌</div>
          <p className="text-red-600 mb-4">Error: {error}</p>
          <button
            onClick={refetch}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Category List
          </h1>
          <p className="text-gray-600">
            Total categories: {categories.length}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {categories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No categories found</p>
          </div>
        )}
      </div>
    </div>
  );
}