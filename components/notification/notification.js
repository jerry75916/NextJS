import { useContext } from "react";
import NotificationContext from "../../public/store/notification-context";
import classes from "./notification.module.css";
// import NotificationContext from "../../store/notification-context";

function Notification(props) {
  //   const notificationCtx = useContext(NotificationContext);
  const notificationCtx = useContext(NotificationContext);

  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  if (status === "pending") {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;
  // onClick={notificationCtx.hideNotification}
  return (
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
