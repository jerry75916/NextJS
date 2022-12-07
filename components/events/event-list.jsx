import React from "react";
import EventItem from "./event-item";
import styles from "./event-list.module.css";
const EventList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((event) => (
        <EventItem key={event.id} eventItem={event} />
      ))}
    </ul>
  );
};

export default EventList;
