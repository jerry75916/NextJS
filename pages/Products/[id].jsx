import styled from "styled-components";
import { getProductById, sortByPrice } from "../../Products/product";
import { useRouter } from "next/router";
import Link from "next/link";
import { ProductGallery } from "../index.style";
import ProductCard from "../../components/ProductCard";
export const PageTitle = styled.h1`
  color: #333;
  margin-top: 30px;
  text-align: center;
`;

export const BackLink = styled.div`
  text-align: center;
  text-decoration: underline;
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const Index = ({ product }) => {
  const router = useRouter();
  const { id } = router.query;
  //const product = getProductById(id);
  return (
    <ProductGallery>
      <BackLink>
        <Link href="/">回產品列表</Link>
      </BackLink>
      <ProductCard key={product.id} product={product} all />
    </ProductGallery>
  );
};

export const getStaticProps = async ({ params }) => {
  const product = getProductById(params?.id);

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: false,
  };
};

export default Index;
