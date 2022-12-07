import React from "react";
import fs from "fs/promises";
import path from "path";
const Pid = ({ data }) => {
  if (!data) return <p>loading...</p>;
  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </>
  );
};
export const getStaticPaths = async () => {
  const data = await getdata();
  const ids = data.products.map((d) => d.id);

  const params = ids.map((id) => {
    return { params: { pid: id } };
  });

  return {
    paths: [],
    fallback: "blocking",
  };
};

const getdata = async () => {
  const filepath = path.join(process.cwd(), "data", "dummyBackend.json");
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);
  return data;
};

export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const productionId = params.pid;
  const data = await getdata();
  const filterdata = data.products.find((p) => p.id === productionId);

  if (!filterdata) {
    return { notFound: true };
  }

  return {
    props: {
      data: filterdata,
    },
  };
};
export default Pid;
