import React, { useState, useContext } from "react";
import { Form, FormGroup } from "reactstrap";
import * as mailerAPI from "../../../api/end-points/Mailer-API";

/* E-mail template. */
import recommendUsTemplate from "./recommend-Us-Template";

/* Type checking. */
import IEventHandler from "../../../../typescript/interfaces/shared/event-handlers/IEvent-Handler-Html-Element";
import IEventHandlerForm from "../../../../typescript/interfaces/shared/event-handlers/IEvent-Handler-Form";
import RecommendUsFieldType from "../../../../typescript/enums/shared/redux/Recommend-Us-Field-Type";

/* HOC imports. */
import ErrorFieldDisplayer from "../../../hoc/styled-components/forms/Error-Field-Displayer";

/* Common components imports. */
import SubmitButton from "../../../components/common/buttons/Submit-Button";
import LabelBasic from "../../../components/common/labels/Label-Basic";
import InputBasic from "../../../components/common/inputs/Input-Basic";
/* Context API imports... */
import NotificationSystemContext from "../../../contexts/notification-system/notification-system.context";
import RecommendUsModuleContext from "../../../contexts/recommend-us/recommend-us-module.context";
import useDidMount from "../../../hooks/dom/component.didmount.hook";
import getOwnerInfo from "../../../helpers/api-fetch/get-owner-info";
import getProjectDetails from "../../../helpers/api-fetch/get-project-details";

/**
 * @function RecommendUsForm => Email form for recommends us functionality.
 */
const RecommendUsForm: React.FC = () => {
  const [companyName, setCompanyName] = useState("");
  const [domainUrl, setDomainUrl] = useState("");
  const [projectName, setProjectName] = useState("");

  const [formError, setFormError] = useState(false);
  const notificationSystemContext = useContext(NotificationSystemContext);
  const recommendsModuleContext = useContext(RecommendUsModuleContext);

  useDidMount(async () => {
    const ownerInfo = await getOwnerInfo();
    setCompanyName(ownerInfo.companyName);

    const projectDetails = await getProjectDetails();
    setDomainUrl(projectDetails.domainUrl);
    setProjectName(projectDetails.projectName);
  });

  /**
   * @function resetModalState => Reset all filled modal fields.
   */

  const resetModalState = () => {
    recommendsModuleContext.setRecipientEmail("");
    recommendsModuleContext.setSenderEmail("");
  };

  const sendEmail = (event: IEventHandlerForm) => {
    event.preventDefault();

    if (
      recommendsModuleContext.senderEmail.length === 0 ||
      recommendsModuleContext.recipientEmail.length === 0
    ) {
      setFormError(true);
      return;
    }

    const subjectTitle = "Doporučení webové stránky";

    const res = mailerAPI.sendEmail(
      {
        recipient: recommendsModuleContext.recipientEmail,
        html: recommendUsTemplate({
          projectName,
          projectUrl: `http://${domainUrl}`,
          senderEmail: recommendsModuleContext.senderEmail,
          companyName: companyName,
          subject: subjectTitle,
        }),
        subject: subjectTitle,
      },
      {}
    );

    res
      .then(() => {
        setFormError(false);
        recommendsModuleContext.toggleModalVisibility();
        resetModalState();

        notificationSystemContext.displayNotification(
          "Doporučení bylo odesláno."
        );

        setTimeout(() => {
          notificationSystemContext.resetNotificationState();
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /*
   *  Event handler for handling change of form fields.
   */
  const onChangeEventHandler = (event: IEventHandler) => {
    switch (event.target.id) {
      case RecommendUsFieldType.Recipient:
        recommendsModuleContext.setRecipientEmail(event.target.value);
        break;
      case RecommendUsFieldType.Sender:
        recommendsModuleContext.setSenderEmail(event.target.value);
        break;
    }
  };

  return (
    <Form onSubmit={sendEmail}>
      <FormGroup>
        <LabelBasic isPublicSide elementRef="senderEmailFieldInput">
          Váš e-mail
        </LabelBasic>
        <ErrorFieldDisplayer
          hasErrorOccured={
            recommendsModuleContext.senderEmail.length === 0 && formError
          }
        >
          <InputBasic
            type="text"
            name="senderEmailField"
            id="senderEmailFieldInput"
            isPublicSide
            onChange={onChangeEventHandler}
            value={recommendsModuleContext.senderEmail}
          />
        </ErrorFieldDisplayer>
      </FormGroup>
      <FormGroup>
        <LabelBasic isPublicSide elementRef="recipientEmailFieldInput">
          E-mail příjemce
        </LabelBasic>
        <ErrorFieldDisplayer
          hasErrorOccured={
            recommendsModuleContext.recipientEmail.length === 0 && formError
          }
        >
          <InputBasic
            type="text"
            name="recipientEmailField"
            id="recipientEmailFieldInput"
            isPublicSide
            onChange={onChangeEventHandler}
            value={recommendsModuleContext.recipientEmail}
          />
        </ErrorFieldDisplayer>
      </FormGroup>
      <SubmitButton isLink isPublicSide>
        Odeslat
      </SubmitButton>
    </Form>
  );
};

export default RecommendUsForm;
