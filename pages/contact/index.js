import { Fragment, useCallback } from "react";
import Head from "next/head";

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
  const { onSetNotification } = props;

  const onContactFormSubmit = useCallback(
    async (form) => {
      const pendingNotification = {
        title: "Submitting...",
        message: "Posting your contact data...",
        status: "pending",
      };

      onSetNotification(pendingNotification);
      const [response, error] = await appLib.contact.addContactMessage(form);
      if (error) {
        onSetNotification({
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

      onSetNotification(finishedNotification);
    },
    [onSetNotification]
  );

  return (
    <Fragment>
      <Head>
        <title>Contact me!</title>
        <meta
          name="description"
          content="Contact me so we can talk about being failures!"
        />
      </Head>
      <ContactForm onSubmit={onContactFormSubmit} />;
    </Fragment>
  );
};

export default connect(ContactPage, undefined, mapDispatchToProps);
