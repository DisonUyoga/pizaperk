"use client";
import { Tables } from "@/database.types";
import {
  Card,
  CardBody,
  Stack,
  Image,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  CardFooter,
  Button,
  Box,
  HStack,
  Flex,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import ProductImage from "../ProductImage";
import { pizzas } from "@/data";
import { priceTag } from "@/lib/priceTage";
import { discountCalculator } from "@/lib/discountCalculator";
import _ from "lodash";
import { isNewProduct } from "@/lib/isNewProduct";
interface ProductCardProps {
  product: Tables<"products">;
}
const ProductCard = ({ product }: ProductCardProps) => {
  const description = _.truncate(product?.description as string, {
    separator: " ",
    length: 30,
  });
  const isNew = isNewProduct(product.created_at);
  return (
    <Stack
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="1500"
    >
      <Card minW="sm" bg={"#050152"} borderRadius={5}>
        <CardBody>
          {pizzas[0].img && (
            <Box position={"relative"} w={"100%"} h={"150px"}>
              <ProductImage
                fallback={pizzas[0].img}
                path={product.image as string}
              />
              {isNew && (
                <Badge
                  position={"absolute"}
                  top={2}
                  left={2}
                  ml="1"
                  colorScheme="green"
                  fontSize={"xs"}
                >
                  New
                </Badge>
              )}
            </Box>
          )}
          <Flex alignItems={"center"} justifyContent={"space-between"} mt={5}>
            {product.discount && (
              <Text
                fontSize={"xs"}
                bg={"#ff0101"}
                p={"4px"}
                borderRadius={5}
                textDecoration={"line-through"}
                color={"#fff"}
              >
                {priceTag(product.discount)}
              </Text>
            )}
            <Text
              borderRadius={5}
              fontWeight={700}
              fontSize={"xs"}
              bg={"#FF9C01"}
              p={"4px"}
            >
              {priceTag(product.price)}
            </Text>
            {product.discount && product.discount > product.price && (
              <Text color={"#FF9C01"}>
                -{discountCalculator(product.price, product.discount)}
              </Text>
            )}
          </Flex>
          {description && (
            <Box>
              <Text pt="2" fontSize="xs" fontWeight={200} color={"#fff"}>
                {description}
              </Text>
            </Box>
          )}
        </CardBody>
        <Divider />
        <CardFooter alignContent={"center"} justifyContent={"center"}>
          <ButtonGroup spacing="2">
            <Button
              size="xs"
              fontSize={"12px"}
              variant="solid"
              colorScheme="white"
              bg={"#097733"}
            >
              Add to Cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Stack>
  );
};

export default ProductCard;
