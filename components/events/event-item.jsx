import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./event-item.module.css";
import Button from "../ui/button";
import { MdOutlineDateRange } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";

const EventItem = ({ eventItem }) => {
  const { title, image, location, description, date, id } = eventItem;
  const HumanreadDate = new Date(date).toLocaleTimeString("zh-TW", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const humanlocation = location.replace(",", "\n");
  const linkid = `/events/${id}`;
  return (
    <li key={id} className={styles.item}>
      <Image
        src={"/" + image}
        alt={description}
        width={240}
        height={160}
      ></Image>
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <MdOutlineDateRange />
            <time>{HumanreadDate}</time>
          </div>
          <div className={styles.address}>
            <CiLocationOn />
            <address>{humanlocation}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={linkid}>
            <span>
              Explore Event <BsArrowRight />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
