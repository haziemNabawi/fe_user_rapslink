import { CategoryResponse, Category } from '../types/category';

// Gunakan Next.js API route
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export class CategoryService {
  private static async fetchWithErrorHandling(url: string, options?: RequestInit) {
    try {
      console.log('Fetching from:', url);
      
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data);
      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  static async getCategories(): Promise<CategoryResponse> {
    // Gunakan relative path untuk Next.js API route
    return await this.fetchWithErrorHandling('/api/categories');
  }

  static async getCategoryById(id: number): Promise<Category> {
    return await this.fetchWithErrorHandling(`/api/categories/${id}`);
  }
}