import { Product } from "@/components/data/products/types";

export function buildCatalogPrompt(products: Product[]) {

  return products
    .map((product) => `
==============================
ID: ${product.id}

Nombre: ${product.name}

Categoría: ${product.category}

Descripción:
${product.description}

Características:
${product.features?.join(", ") ?? "No especificadas"}

Presentaciones:
${product.presentations?.join(", ") ?? "No especificadas"}

==============================
`)
    .join("\n");

}


