import { useCallback } from "react";

import ContactForm from "../../components/pages/contact/contact-form";
import appLib from "../../lib/app";

const ContactPage = () => {
  const onContactFormSubmit = useCallback(async (form) => {
    const [response, error] = await appLib.contact.addContactMessage(form);
    if (error) return;
    console.log(response);
  }, []);

  return <ContactForm onSubmit={onContactFormSubmit} />;
};

export default ContactPage;
