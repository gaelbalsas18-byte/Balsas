import { products } from "@/components/data/products";
import { Product } from "@/components/data/products/types";

const allProducts: Product[] = Object.values(products).flat();

export function searchProducts(query: string, limit = 20): Product[] {

  const words = query
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(/\s+/)
    .filter(Boolean);

  return allProducts
    .map((product) => {

      const searchable = `
        ${product.name}
        ${product.category}
        ${product.description}
        ${product.features?.join(" ") ?? ""}
        ${product.presentations?.join(" ") ?? ""}
      `
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      let score = 0;

      words.forEach((word) => {
        if (searchable.includes(word)) {
          score++;
        }
      });

      return {
        product,
        score,
      };

    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.product);

}