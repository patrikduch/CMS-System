import { createContext } from "react";


/* Initialize Notification system context. */
const NotificationSystemContext = createContext({
  message: "",
  isVisible: false,

  displayNotification: (message: string) => {
    console.log("Template for toggling notification system display component.");
  },

  resetNotificationState: () =>
    console.log("Template for resetNotificationState method."),
});

export default NotificationSystemContext;
