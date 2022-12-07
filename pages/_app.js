import "../styles/globals.css";
import Layout from "@components/layout/Layout";
import Head from "next/head";
import Notification from "../components/notification/Notification";
import { NotificationProvider } from "../public/store/notification-context";
function MyApp({ Component, pageProps }) {
  return (
    <NotificationProvider>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </NotificationProvider>
  );
}

export default MyApp;
