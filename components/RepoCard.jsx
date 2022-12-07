import React from "react";
import Head from "next/head";
const RepoCard = ({ data }) => {
  // 當 Github API 回傳 Not Found 錯誤
  if ("message" in data && data.message === "Not Found") {
    // 應該要用 Next.js 的 404 page，可是我先坐在這裡Ｑ
    return (
      <Center column>
        <h3>404 Not Found</h3>
        <p>Try other repo or user</p>
      </Center>
    );
  }

  return (
    <>
      <Head>
        <title>
          {data.name || "A repo"} by {data.owner.login || "someone"} | 2021
          iTHome Day 07
        </title>
        <meta name="description" content="2021 iTHome Day 07 by Jade" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RepoCard data={data} />
    </>
  );
};

export default RepoCard;
