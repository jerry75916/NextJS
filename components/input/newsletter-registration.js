import { useRef, useContext } from "react";
import classes from "./newsletter-registration.module.css";
import NotificationContext from "../../public/store/notification-context";
function NewsletterRegistration() {
  const NoticationCtx = useContext(NotificationContext);
  const inputEmail = useRef();
  function registrationHandler(event) {
    event.preventDefault();
    const email = inputEmail.current.value;

    NoticationCtx.showNotification({
      title: "Register",
      message: "Start to register..",
      status: "pending",
    });
    // fetch user input (state or refs)
    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.json || "There is an error happend");
        }
      })
      .then((data) =>
        NoticationCtx.showNotification({
          title: "Add New email",
          message: "You add new email success",
          status: "success",
        })
      );
    // optional: validate input
    // send valid data to API
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={inputEmail}
            required
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
