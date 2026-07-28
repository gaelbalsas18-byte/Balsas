export interface Product {

  id: string;

  name: string;

  category: string;

  subcategory?: string;

  description: string;

  images: string[];

  features?: string[];

  presentations?: string[];

  brochure?: string;

  featured?: boolean;

}