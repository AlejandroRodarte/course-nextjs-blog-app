import classes from "../../../styles/pages/contact/contact-form.module.css";

import useForm from "../../../hooks/use-form";
import specs from "../../../lib/forms/specs/client";

const ContactForm = () => {
  const { form, metadata, onInputChange } = useForm(
    {
      email: "",
      name: "",
      message: "",
    },
    specs.contactFormSpec,
    {
      email: "email",
      name: "name",
      message: "message",
    }
  );

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={onInputChange}
              className={
                !metadata.inputs.email.isValid && metadata.inputs.email.touched
                  ? classes.invalid
                  : ""
              }
            />
            {!metadata.inputs.email.isValid && (
              <p>{metadata.inputs.email.message}</p>
            )}
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="name"
              id="name"
              name="name"
              required
              value={form.name}
              onChange={onInputChange}
              className={
                !metadata.inputs.name.isValid && metadata.inputs.name.touched
                  ? classes.invalid
                  : ""
              }
            />
            {!metadata.inputs.name.isValid && (
              <p>{metadata.inputs.name.message}</p>
            )}
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={onInputChange}
            className={
              !metadata.inputs.message.isValid &&
              metadata.inputs.message.touched
                ? classes.invalid
                : ""
            }
          ></textarea>
          {!metadata.inputs.message.isValid && (
            <p>{metadata.inputs.message.message}</p>
          )}
        </div>
        <div className={classes.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
