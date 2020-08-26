import nodeMailer from "nodemailer";

/**
 * @class EmailService => Service for sending emails in automated fashion.
 */
class EmailService {
  static sendEmail = (obj: any) => {
    const transporter = nodeMailer.createTransport({
      host: "smtp.seznam.cz",
      port: 465,
      secure: true,
      auth: {
        user: "patrikduch@seznam.cz",
        pass: "pavouk",
      },
    });

    const mailOptions = {
      from: '"noreply" <patrikduch@seznam.cz>',
      to: obj.recipient,
      subject: obj.subject,
      html: obj.html,
    };

    transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        return console.log(error);
      }

      console.log("Message %s sent: %s", info.messageId, info.response);
    });
  };
}

export default EmailService;
