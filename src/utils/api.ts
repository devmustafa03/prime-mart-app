import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

const categoryIcons: { [key: string]: string } = {
  'Grocery': '🛒',
  'Fruits': '🍎',
  'Vegetables': '🥕',
  'Drinks': '🥤',
  'Dairy & Eggs': '🥛',
  'Beauty': '💄',
  'Bakery': '🍞',
  'Meat': '🥩',
};

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await api.get('/posts');
  return response.data.slice(0, 8).map((post: any, index: number) => ({
    id: post.id.toString(),
    name: Object.keys(categoryIcons)[index],
    icon: Object.values(categoryIcons)[index],
  }));
};

export const fetchProductsInCategory = async (categoryId: string): Promise<Product[]> => {
  const response = await api.get('/photos', { params: { albumId: categoryId } });
  return response.data.map((photo: any) => ({
    id: photo.id.toString(),
    name: photo.title,
    image: photo.url,
  }));
};
