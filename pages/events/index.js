import React from "react";
import { getAllEvents } from "../../dummy-data";
import { getAllEvent } from "../../util/util";
import EventList from "@components/events/event-list";
import EventSearch from "@components/events/events-search";
import { useRouter } from "next/router";
import { promises as fs } from "fs";
import path from "path";
const AllEvents = ({ data }) => {
  const _allevent = data;
  const router = useRouter();
  const onSearchHandler = (year, month) => {
    const fullpath = `/events/${year}/${month}`;
    router.push(fullpath);
  };
  return (
    <div>
      <h1>All Events</h1>
      <EventSearch onSearch={onSearchHandler} />
      <EventList items={_allevent} />
    </div>
  );
};
export const getStaticProps = async (ctx) => {
  //  const alldata = await getAllEvent();
  const jsonDirectory = path.join(process.cwd(), "data/dummyBackend.json");
  //Read the json data file data.json

  const fileContents = await fs.readFile(jsonDirectory, "utf8");

  let { products } = JSON.parse(fileContents);
  const alldata = products;
  return {
    props: {
      data: alldata,
    },
    revalidate: 60,
  };
};

export default AllEvents;
