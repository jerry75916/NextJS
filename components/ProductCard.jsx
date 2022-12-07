import React from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import {
  Product,
  ProductDetail,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  ImageWrapper,
} from "../pages/Products/Card";

const ProductCard = ({ product }, all) => {
  const { id, image, title, description, price } = product;
  return (
    <Product key={id}>
      <ImageWrapper>
        <Image src={image} alt="product" layout="fill" objectFit="cover" />
      </ImageWrapper>
      <ProductDetail>
        <Link href={`/Products/${id}`} passHref>
          <ProductTitle>{title}</ProductTitle>
        </Link>
        <ProductDescription $all={all}>{description}</ProductDescription>
        <ProductPrice>${price}</ProductPrice>
      </ProductDetail>
    </Product>
  );
};

export default ProductCard;
