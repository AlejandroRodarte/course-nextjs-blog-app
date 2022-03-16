import { Fragment, useCallback } from "react";

import MainNavigation from "../ui/navigation/main-navigation";
import MainNotificationBanner from "../ui/notifications/main-notification-banner";
import connect from "../../hoc/connect";
import * as notificationTypes from "../../store/modules/notifications/types";

const mapStateToProps = (state) => ({
  notifications: state.notifications,
});

const mapDispatchToProps = (dispatch) => ({
  onClearNotification: () =>
    dispatch({ type: notificationTypes.CLEAR_NOTIFICATION }),
});

const DefaultLayout = (props) => {
  const onCloseNotification = useCallback(() => {
    props.onClearNotification();
  }, [props.onClearNotification]);

  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
      {props.notifications.show && (
        <MainNotificationBanner
          title={props.notifications.notification.title}
          message={props.notifications.notification.message}
          status={props.notifications.notification.status}
          onClose={onCloseNotification}
        />
      )}
    </Fragment>
  );
};

export default connect(DefaultLayout, mapStateToProps, mapDispatchToProps);
