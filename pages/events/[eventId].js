import React from "react";
import { promises as fs } from "fs";
import path from "path";
import { useRouter } from "next/router";
import Head from "next/head";
import EventItem from "@components/events/event-item";

import EventSummary from "@components/events/event-summary";
import EventLogistics from "@components/events/event-logistics";
import EventContent from "@components/events/event-content";
import { getEventById, getAllEvent } from "../../util/util";
import Comments from "../../components/input/comments";
import Notification from "../../components/notification/Notification";
import NotificationContext from "../../public/store/notification-context";
import { useContext } from "react";
const EventDetailPage = ({ data }) => {
  // const router = useRouter();
  // const id = router.query.eventId;
  const notificationCtx = useContext(NotificationContext);
  const notificationData = notificationCtx.notification;
  const eventItem = data;
  if (!eventItem) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Head>
        <title>{eventItem.title}</title>
        <meta name="description" content={eventItem.description}></meta>
      </Head>
      <EventSummary title={eventItem.title} />
      <EventLogistics
        date={eventItem.date}
        address={eventItem.location}
        image={eventItem.image}
        imageAlt={eventItem.description}
      />
      <EventContent>
        <p>{eventItem.description}</p>
      </EventContent>
      <Comments eventId={eventItem.id} />
      {notificationData && (
        <Notification
          title={notificationData.title}
          message={notificationData.message}
          status={notificationData.status}
        />
      )}
    </>
  );
};

export const getStaticPaths = async () => {
  // const allevents = await getAllEvent();

  const jsonDirectory = path.join(process.cwd(), "data/dummyBackend.json");
  //Read the json data file data.json

  const fileContents = await fs.readFile(jsonDirectory, "utf8");

  let { products } = JSON.parse(fileContents);
  // const allevents = products;
  const paramsArr = products.map((p) => {
    return { params: { eventId: p.id } };
  });

  return {
    paths: paramsArr,
    fallback: true,
  };
};

export const getStaticProps = async (ctx) => {
  const eventId = ctx.params.eventId;
  const jsonDirectory = path.join(process.cwd(), "data/dummyBackend.json");
  //Read the json data file data.json

  const fileContents = await fs.readFile(jsonDirectory, "utf8");

  let { products } = JSON.parse(fileContents);
  //const singleEvent = await getEventById(eventId);
  const singleEvent = products.find((event) => event.id === eventId);
  return {
    props: {
      data: singleEvent,
    },
    revalidate: 30,
  };
};
export default EventDetailPage;
