import { useState, useEffect } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import NotificationContext from "../../public/store/notification-context";
import { useContext } from "react";
function Comments(props) {
  const notificationCtx = useContext(NotificationContext);
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  function toggleCommentsHandler() {
    setShowComments(!showComments);
  }

  useEffect(() => {
    fetch(`/api/comments/${eventId}`)
      .then((res) => res.json())
      .then((data) => setComments(data.comments));
  }, [showComments]);

  function addCommentHandler(commentData) {
    // send data to API
    notificationCtx.showNotification({
      title: "Add New Comment",
      message: "You add new comment",
      status: "pending",
    });
    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) =>
        notificationCtx.showNotification({
          title: "Add New Comment",
          message: "You add new comment",
          status: "success",
        })
      )
      .catch((err) => {
        notificationCtx.showNotification({
          title: "Add New Comment",
          message: err.message,
          status: "error",
        });
      });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
