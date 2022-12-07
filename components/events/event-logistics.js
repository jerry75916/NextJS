import LogisticsItem from "./logistics-item";
import classes from "./event-logistics.module.css";
import { MdOutlineDateRange } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";
function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("zh-TW", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={imageAlt} width={320} height={320} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem Icon={MdOutlineDateRange}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem Icon={CiLocationOn}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
