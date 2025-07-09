import { NextResponse } from 'next/server';

// Mock data (sama seperti di route.ts)
const mockCategories = [
  {
    id: 1,
    name: "Joki Free Fire",
    image: "https://via.placeholder.com/150x150/ff6b6b/ffffff?text=FF",
    social_media: [
      {
        id: 1,
        name: "YERERAPSPOINT",
        value: "6282234018230",
        image: "https://via.placeholder.com/50x50/4ecdc4/ffffff?text=WA",
        description: "Angkut Akun 1",
        label: "FAST",
        backup_value: null
      }
    ]
  },
  {
    id: 2,
    name: "BELI AKUN ML - RAPSPOINT",
    image: "https://via.placeholder.com/150x150/96ceb4/ffffff?text=ML",
    social_media: []
  }
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    const category = mockCategories.find(cat => cat.id === id);
    
    if (!category) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(category);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch category' },
      { status: 500 }
    );
  }
}