import { createContext } from "react";

/* Initialize Recommend-us module context. */
const RecommendUsModuleContext = createContext({
  senderEmail: "",
  recipientEmail: "",
  modalVisibility: false,

  setRecipientEmail: (recipientEmail: string) =>
    console.log("Template for setRecipientEmail method"),
  setSenderEmail: (senderEmail: string) =>
    console.log("Template for setSenderEmail method."),

  toggleModalVisibility: () =>
    console.log("Template for toggleModalVisibility method."),
});

export default RecommendUsModuleContext;
