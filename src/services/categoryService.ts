import { CategoryResponse, Category } from '../types/category';

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
      if (error instanceof Error) {
        throw error;
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  static async getCategories(): Promise<CategoryResponse> {
    return await this.fetchWithErrorHandling('/api/categories');
  }

  // Remove single category method untuk sementara
  // static async getCategoryById(id: number): Promise<Category> {
  //   return await this.fetchWithErrorHandling(`/api/categories/${id}`);
  // }
}