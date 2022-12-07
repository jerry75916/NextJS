import { globalCss } from "@stitches/react";
import Link from "next/link";
import { useRouter } from "next/router";
import ProductCard from "../components/ProductCard";
import React, { useState, useEffect, ChangeEvent } from "react";
import Head from "next/head";
import styled from "styled-components";
import { getAllProduct, sortByPrice } from "../Products/product";
import { PageTitle, ProductGallery, PriceFilter } from "./index.style";

const Container = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  width: 800px;
`;

const Home = (props) => {
  // const [direction, setdirection] = useState("ASC");
  //
  const [direction, setDirection] = useState("ASC");
  const router = useRouter();
  // const data = sortByPrice(direction);
   const { data } = props;
  const handleSortingDirectionChange = (e) => {
    router.push(`${router.pathname}?direction=${e.target.value}`, undefined, {
      shallow: true,
    });
  };

  useEffect(() => {
    if (router.query.direction) {
      setDirection(router.query.direction);
    }
  }, [router.query.direction]);

  return (
    <Container>
      <PageTitle>商品列表</PageTitle>
      <PriceFilter>
        Price:
        <select value={direction} onChange={handleSortingDirectionChange}>
          <option value="ASC">價格由低到高</option>
          <option value="DES">價格由高到低</option>
        </select>
      </PriceFilter>
      <ProductGallery>
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGallery>
    </Container>
  );
};

// export async function getServerSideProps(context) {
//   const res = await fetch("http://fakestoreapi.com/products");
//   const _data = await res.json();
//   console.log(_data);
//   return {
//     props: { data: _data },
//   };
// }

export default Home;
