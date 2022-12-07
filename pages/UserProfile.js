import React from "react";

const UserProfile = ({ username }) => {
  return <div>{username}</div>;
};

export default UserProfile;

export const getServerSideProps = async (ctx) => {
  const { params, req, res } = ctx;

  return {
    props: {
      username: "Jerry",
    },
  };
};
