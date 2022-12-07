import React, { useEffect, useState } from "react";
import useSWR from "swr";
const fetcher = (url) =>
  fetch(url)
    .then((r) => r.json())
    .then((data) => {
      const jsonData = data.map((d, index) => ({
        key: index,
        category: d,
      }));
      return jsonData;
    });
const Fake = ({ data }) => {
  //   const [loading, Setloading] = useState(false);
  //   const [data, setData] = useState([]);
  //   const { data, error } = useSWR(
  //     "https://fakestoreapi.com/products/categories",
  //     fetcher
  //   );

  //   useEffect(() => {
  //     Setloading(true);
  //     fetch("https://fakestoreapi.com/products/categories")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         const jsonData = data.map((d, index) => ({
  //           key: index,
  //           category: d,
  //         }));
  //         setData(jsonData);
  //         Setloading(false);
  //       });
  //   }, []);
  //   if (error) {
  //     return <p>Fail to load</p>;
  //   }
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {data.map((d) => {
        return (
          <li>
            id:{d.key},Cate:{d.category}
          </li>
        );
      })}
    </ul>
  );
};

export const getStaticProps = async (ctx) => {
  const jsonData = await fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => {
      return data.map((d, index) => ({
        key: index,
        category: d,
      }));
    });
  console.log(jsonData);
  return {
    props: {
      data: jsonData,
    },
    revalidate: 10,
  };
};

export default Fake;
