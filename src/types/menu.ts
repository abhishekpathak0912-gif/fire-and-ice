export type DishCategory = 
  | 'all'
  | 'pizza'
  | 'pasta'
  | 'desserts'
  | 'breakfast'
  | 'insalate'
  | 'beverages';

export type DietaryTag = 'Vegetarian' | 'Vegan' | 'Spicy' | 'Gluten-Free' | 'Chef Choice' | 'House Specialty';

export interface MenuItem {
  id: string;
  name: string;
  italianName?: string;
  category: Exclude<DishCategory, 'all'>;
  price: number; // in Nepalese Rupee (NPR)
  description: string;
  ingredients: string[];
  tags: DietaryTag[];
  badge?: string;
  imageUrl?: string;
  crustType?: string;
  available: boolean;
  calories?: number;
  preparationNote?: string;
}

export interface CategoryInfo {
  id: DishCategory;
  name: string;
  italianSubtitle?: string;
  description: string;
}
