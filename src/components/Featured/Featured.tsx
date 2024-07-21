import { Tables } from "@/database.types";

import s from "./Featured.module.css";
import ProductCard from "../ui/ProductCard";
import { HStack, Stack } from "@chakra-ui/react";

interface FeaturedProps {
  products: Tables<"products">[];
}
const Featured = ({ products }: FeaturedProps) => {
  return (
    <div className={s.container}>
      {/* WRAPPER */}
      <HStack className={s.child_container}>
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </HStack>
    </div>
  );
};

export default Featured;
