import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import { getFilteredEvents } from "../../dummy-data";
import EventList from "@components/events/event-list";
import Button from "@components/ui/button";
import { getFilteredEvents } from "../../util/util";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((r) => r.json());
const FilterEventsPage = () => {
  const router = useRouter();

  const { data, error } = useSWR("http://localhost:8888/", fetcher);

  const query = router.query.slug;
  if (!data) {
    return <p className="center">Loading...</p>;
  }

  const year = +query[0];
  const month = +query[1];
  const alldata = data;

  let filteredEvents = alldata.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  // const year = +query[0];
  // const month = +query[1];

  // if (isNaN(year) || isNaN(month)) {
  //   return <p className="center">You will not key words from url</p>;
  // }
  //getFilteredEvents({ year, month });
  const eventItems = filteredEvents;
  if (!eventItems || eventItems.length === 0) {
    return (
      <>
        <p className="center">No records in data</p>
        <div className="center">
          <Button link="/events/">Show events</Button>
        </div>
      </>
    );
  }
  return (
    <div>
      <EventList items={eventItems} />
    </div>
  );
};
// export const getServerSideProps = async (ctx) => {
//   const filters = ctx.params.slug;

//   const filterData = await getFilteredEvents({
//     year: +filters[0],
//     month: +filters[1],
//   });
//   console.log(filterData);
//   return {
//     props: {
//       data: filterData,
//     },
//   };
// };
export default FilterEventsPage;
