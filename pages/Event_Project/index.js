import { promises as fs } from "fs";
import path from "path";
import Head from "next/head";
import { useContext } from "react";
import { useRouter } from "next/router";
import { getFeaturedEvents } from "../../dummy-data";
import EventList from "@components/events/event-list";
import Layout from "@components/layout/Layout";
import axios from "axios";
import { getAllEvent } from "../../util/util";
import NewsletterRegistration from "@components/input/newsletter-registration";
import Notification from "@components/notification/notification";
import NotificationContext from "../../public/store/notification-context";

export default function Home({ data }) {
  const notificationCtx = useContext(NotificationContext);
  const notificationData = notificationCtx.notification;
  const featuredEvents = data;
  return (
    <Layout>
      <Head>
        <title>Jerry Next Js Practice</title>
        <meta name="description" content="Find a lot of events"></meta>
      </Head>
      <div>
        <NewsletterRegistration />
        <EventList items={featuredEvents} />
      </div>
      {notificationData && (
        <Notification
          title={notificationData.title}
          message={notificationData.message}
          status={notificationData.status}
        />
      )}
    </Layout>
  );
}

export const getStaticProps = async () => {
  // const res = await getAllEvent();

  const jsonDirectory = path.join(process.cwd(), "data/dummyBackend.json");
  //Read the json data file data.json

  const fileContents = await fs.readFile(jsonDirectory, "utf8");

  let { products } = JSON.parse(fileContents);

  const filterData = products.filter((event) => event.isFeatured);
  return {
    props: {
      data: filterData,
    },
    revalidate: 60,
  };
};
