import React, { useState, useContext } from "react";
import { Form, FormGroup } from "reactstrap";

import * as mailerAPI from "../../../api/end-points/Mailer-API";
import * as ownerInfoAPI from "../../../api/end-points/Owner-Info-API";

import LabelBasic from "../../../components/common/labels/Label-Basic";
import WriteToUsFieldType from "../../../../typescript/enums/shared/redux/Write-To-Us-Field-Type";
import ErrorFieldDisplayer from "../../../hoc/styled-components/forms/Error-Field-Displayer";
import InputBasic from "../../../components/common/inputs/Input-Basic";
import SubmitButton from "../../../components/common/buttons/Submit-Button";
import IEventHandlerForm from "../../../../typescript/interfaces/shared/event-handlers/IEvent-Handler-Form";
import IEventHandlerHTMLElement from "../../../../typescript/interfaces/shared/event-handlers/IEvent-Handler-Html-Element";
import writeToUsTemplate from "./write-To-Us-Template";
/* Context API imports. */
import WriteUsModuleContext from "../../../contexts/write-us/write-us-module.context";
import NotificationSystemContext from "../../../contexts/notification-system/notification-system.context";
import useDidMount from "../../../hooks/dom/component.didmount.hook";
import getOwnerInfo from "../../../helpers/api-fetch/get-owner-info";

const WriteUsForm: React.FC = () => {
  const [formError, setFormError] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const writeUsModuleContext = useContext(WriteUsModuleContext);
  const notificationSystemContext = useContext(NotificationSystemContext);

  useDidMount(async () => {
    const ownerInfo = await getOwnerInfo();
    writeUsModuleContext.setRecipientEmail(ownerInfo.email);
    setCompanyName(ownerInfo.companyName);
  });

  /**
   * @function onChangeEventHandler => Event handler for handling change of form fields.
   * @param event
   */
  const onChangeEventHandler = (event: IEventHandlerHTMLElement) => {
    switch (event.target.id) {
      case WriteToUsFieldType.Sender:
        writeUsModuleContext.setSenderEmail(event.target.value);
        break;

      case WriteToUsFieldType.Message:
        writeUsModuleContext.setMessage(event.target.value);
        break;
    }
  };

  /**
   * @function resetModalState => Reset all filled modal fields.
   */

  const resetModalState = () => {
    writeUsModuleContext.setRecipientEmail("");
    writeUsModuleContext.setSenderEmail("");
    writeUsModuleContext.setMessage("");
  };

  /**
   * @function sendEmail => Event handler for email sending.
   * @param event  => Submittion event.
   */
  const sendEmail = async (event: IEventHandlerForm) => {
    event.preventDefault();

    if (
      writeUsModuleContext.message.length === 0 ||
      writeUsModuleContext.recipientEmail.length === 0
    ) {
      setFormError(true);
      return;
    }

    const subjectTitle = "Nová zpráva od zákaznika";

    const res = mailerAPI.sendEmail(
      {
        recipient: writeUsModuleContext.recipientEmail,
        html: writeToUsTemplate({
          sender: writeUsModuleContext.senderEmail,
          subject: subjectTitle,
          projectName: "OSU",
          projectUrl: "http://bachelor-project-3627.rostiapp.cz/",
          message: writeUsModuleContext.message,
          companyName: companyName,
        }),
        subject: subjectTitle,
      },
      {}
    );

    res
      .then(() => {
        setFormError(false);
        resetModalState();
        writeUsModuleContext.toggleModalVisibility();

        notificationSystemContext.displayNotification("Zprava byla odeslána.");

        setTimeout(() => {
          notificationSystemContext.resetNotificationState();
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form onSubmit={sendEmail}>
      <FormGroup>
        <LabelBasic elementRef={WriteToUsFieldType.Sender} isPublicSide>
          Váš e-mail
        </LabelBasic>
        <ErrorFieldDisplayer
          hasErrorOccured={
            writeUsModuleContext.senderEmail.length === 0 && formError
          }
        >
          <InputBasic
            type="email"
            name="email"
            id={WriteToUsFieldType.Sender}
            isPublicSide
            onChange={onChangeEventHandler}
            value={writeUsModuleContext.senderEmail}
          />
        </ErrorFieldDisplayer>
      </FormGroup>
      <FormGroup>
        <LabelBasic elementRef={WriteToUsFieldType.Message} isPublicSide>
          Zpráva
        </LabelBasic>
        <ErrorFieldDisplayer
          hasErrorOccured={
            writeUsModuleContext.message.length === 0 && formError
          }
        >
          <InputBasic
            type="textarea"
            name="text"
            id={WriteToUsFieldType.Message}
            isPublicSide
            value={writeUsModuleContext.message}
            onChange={onChangeEventHandler}
          />
        </ErrorFieldDisplayer>
      </FormGroup>
      <SubmitButton isPublicSide>Odeslat</SubmitButton>
    </Form>
  );
};

export default WriteUsForm;
