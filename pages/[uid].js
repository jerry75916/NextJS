import React from "react";

const Uid = ({ id }) => {
  return <div>{id}</div>;
};

export default Uid;

export const getServerSideProps = async (ctx) => {
  const { params } = ctx;
  console.log("haha");
  const Userid = params.uid;
  return {
    props: {
      id: "userId:" + Userid,
    },
  };
};
