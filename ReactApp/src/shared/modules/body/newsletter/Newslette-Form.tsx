import React, { useState, useContext } from "react";
import { Form, FormGroup } from "reactstrap";

import _ from "lodash";

import * as NewsletterAPI from "../../../api/end-points/Newsletter-API";

import IEventHandlerHTMLElement from "../../../../typescript/interfaces/shared/event-handlers/IEvent-Handler-Html-Element";
import IEventHandlerForm from "../../../../typescript/interfaces/shared/event-handlers/IEvent-Handler-Form";
import ErrorFieldDisplayer from "../../../hoc/styled-components/forms/Error-Field-Displayer";
import InputBasic from "../../../components/common/inputs/Input-Basic";
import BaseBootstrapButton from "../../../components/common/buttons/Base-Bootstrap-Button";
import { validateEmail } from "../../../helpers/validators/Email-Validator-Helper";
import NotificationSystemContext from "../../../contexts/notification-system/notification-system.context";

/**
 * @function NewsletterModuleForm => Subscribe new user with e-mail address to get frequently new feed.
 */
const NewsletterModuleForm: React.FC = () => {
  const initialEmailValue = "Váš@email";
  const [email, setEmail] = useState(initialEmailValue);
  const [formError, setFormError] = useState(false);

  const [formErrorMessage, setFormErrorMessage] = useState(
    "Zadejte platnou e-mailovou adresu."
  );

  const notificationSystemContext = useContext(NotificationSystemContext);

  /**
   * @function onBlurInputHandler => Handler for losing focus of  email Input element.
   * @param event => Event object that handels change of email input.
   */
  const onBlurInputHandler = (event: IEventHandlerHTMLElement) => {
    if (event.target.value === "@") {
      setEmail(initialEmailValue);
    }
  };

  /**
   * @function onEmailChangeHandler => Change handler of e-mail field.
   * @param event => Event object that handels change of email input.
   */
  const onEmailChangeHandler = (event: IEventHandlerHTMLElement) => {
    setEmail(event.target.value);
  };

  /**
   * @function onFocusInputHandler => Focus handler of email field.
   * @param event => Event object that handels change of email input.
   */
  const onFocusInputHandler = (event: IEventHandlerHTMLElement) => {
    setFormError(false);

    if (!formError && email.length === 0) {
      setEmail("");
    }

    if (event.target.value === initialEmailValue) {
      setEmail("@");
    }
  };

  /**
   * @function resetModalState => Reset modal state.
   */
  const resetModalState = () => {
    setEmail(initialEmailValue);
  };

  /**
   * @function onSubmitHandler => Event handler for newsletter form submission.
   */
  const onSubmitHandler = (event: IEventHandlerForm) => {
    event.preventDefault();

    const isEmailValid = validateEmail(email);

    if (!isEmailValid) {
      setFormError(true);
      return;
    }

    NewsletterAPI.addSubscriber(email).then((response) => {
      if (response.data.hasError) {
        /* Duplicity has been found. */
        setFormErrorMessage("Tato e-mailová adresa se již nachází v odběru.");
        setFormError(true);
        return;
      }
      setFormError(false);
      resetModalState();

      notificationSystemContext.displayNotification(
        `${email} byl přidán do odběru.`
      );
    });

    setTimeout(() => {
      notificationSystemContext.resetNotificationState();
    }, 5000);
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <FormGroup>
        <ErrorFieldDisplayer hasErrorOccured={formError}>
          <InputBasic
            type="text"
            name="email"
            id="exampleEmail"
            isPublicSide
            value={email}
            onChange={onEmailChangeHandler}
            onBlur={onBlurInputHandler}
            onFocus={onFocusInputHandler}
          />
        </ErrorFieldDisplayer>
      </FormGroup>

      {formError && <p>{formErrorMessage}</p>}
      <BaseBootstrapButton isPublicSide>Přihlásit se</BaseBootstrapButton>
    </Form>
  );
};
export default NewsletterModuleForm;
