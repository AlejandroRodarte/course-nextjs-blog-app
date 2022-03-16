import { useCallback } from "react";

import ContactForm from "../../components/pages/contact/contact-form";
import appLib from "../../lib/app";
import connect from "../../hoc/connect";
import * as notificationTypes from "../../store/modules/notifications/types";

const mapDispatchToProps = (dispatch) => ({
  onSetNotification: (notification) =>
    dispatch({
      type: notificationTypes.SET_NOTIFICATION,
      payload: { notification },
    }),
});

const ContactPage = (props) => {
  const onContactFormSubmit = useCallback(
    async (form) => {
      const pendingNotification = {
        title: "Submitting...",
        message: "Posting your contact data...",
        status: "pending",
      };

      props.onSetNotification(pendingNotification);
      const [response, error] = await appLib.contact.addContactMessage(form);
      if (error) {
        props.onSetNotification({
          title: "Whoops!",
          message: error.message,
          status: "error",
        });
        return;
      }

      const finishedNotification = {
        title: "",
        message: response.message,
        status: "",
      };

      switch (response.status) {
        case 201:
          finishedNotification.title = "Success!";
          finishedNotification.status = "success";
          break;
        case 422:
        case 500:
          finishedNotification.title = "Whoops!";
          finishedNotification.status = "error";
          break;
      }

      props.onSetNotification(finishedNotification);
    },
    [props.onSetNotification]
  );

  return <ContactForm onSubmit={onContactFormSubmit} />;
};

export default connect(ContactPage, undefined, mapDispatchToProps);
