export interface SocialMedia {
    id: number;
    name: string;
    value: string;
    image: string;
    description: string;
    label: string | null;
    backup_value: string | null;
  }
  
  export interface Category {
    id: number;
    name: string;
    image: string;
    social_media: SocialMedia[];
  }
  
  export interface PageInfo {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
  }
  
  export interface CategoryResponse {
    data: Category[];
    page: PageInfo;
  }