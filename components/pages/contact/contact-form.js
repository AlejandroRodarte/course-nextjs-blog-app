import classes from "../../../styles/pages/contact/contact-form.module.css";

const ContactForm = () => {
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="name" id="name" name="name" required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
