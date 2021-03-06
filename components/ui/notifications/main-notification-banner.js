import { useEffect, useCallback } from "react";
import ReactDOM from "react-dom";

import classes from "../../../styles/ui/notifications/main-notification-banner.module.css";

const MainNotificationBanner = (props) => {
  const { title, message, status, onClose } = props;

  useEffect(() => {
    if (status === "error" || status === "success") {
      const timeoutId = setTimeout(() => onClose(), 3000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [status, onClose]);

  const onClick = useCallback(() => {
    if (status === "error" || status === "success") onClose();
  }, [status, onClose]);

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

  return ReactDOM.createPortal(
    <div className={activeClasses} onClick={onClick}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notification")
  );
};

export default MainNotificationBanner;
