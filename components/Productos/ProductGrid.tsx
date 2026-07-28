"use client";

import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  featured: boolean;
}

interface Props{

    products:any[];

    onSelect:(product:any)=>void;

}

export default function ProductGrid({

    products,

    onSelect,

}:Props) {
  return (
    <div className="mt-16 grid gap-8   md:grid-cols-2 xl:grid-cols-3">

      {products.map((product) => (

        <ProductCard

        key={product.id}

        product={product}

        onClick={() => onSelect(product)}

        />

      ))}

    </div>
  );
}