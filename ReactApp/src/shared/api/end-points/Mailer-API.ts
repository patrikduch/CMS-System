import * as requestUtils from "../Request-Utils";

/**
 * @type MailerDataType => Type anotation for object from which is generated email.
 */
type MailerDataType = {
  recipient: string;
  subject: string;
  html: string;
};

/**
 * @function sendEmail => Processing of email sending via SMTP.
 * @param data
 * @param header
 */
export const sendEmail = (data: MailerDataType, header: {}) => {
  return requestUtils.sendPost("/mailer/send", false, data, header);
};
