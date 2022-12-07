import React from "react";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";
const Index = (props) => {
  const { data } = props;

  return (
    <ul>
      {data.map((d) => {
        return (
          <li key={d.id}>
            {`Id:${d.id} Product:${d.title}`}

            <Link href={`/${d.id}`}>Link</Link>
          </li>
        );
      })}
    </ul>
  );
};

export const getStaticProps = async () => {
  const filepath = path.join(process.cwd(), "data", "dummyBackend.json");
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);
 

  return {
    props: {
      data: data.products,
    },
    revalidate: 30,
  };
};
export default Index;
