import { createContext } from "react";

/* Initialize Write-us module context. */
const WriteUsModuleContext = createContext({
  senderEmail: "",
  recipientEmail: "",
  message: "",
  modalVisibility: false,
  toggleModalVisibility: () =>
    console.log("Template for toggleModalVisibility method."),

  setMessage: (message: string) =>
    console.log("Template for setMessage method"),
  setRecipientEmail: (recipientEmail: string) =>
    console.log("Template for setRecipientEmail method"),
  setSenderEmail: (senderEmail: string) =>
    console.log("Template for setSenderEmail method."),
});

export default WriteUsModuleContext;
