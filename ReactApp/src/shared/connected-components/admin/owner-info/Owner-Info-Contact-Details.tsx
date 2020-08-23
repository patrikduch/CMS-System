import React from "react";

import { FormGroup } from "reactstrap";

/* Type checking */
import OwnerInfoFieldType from "../../../../typescript/enums/shared/redux/Owner-Info-Field-Type";
import OwnerInfoTypeModel from "../../../../typescript/types/app/models/Owner-Info-Type-Model";
import IEventHandlerHTMLElement from "../../../../typescript/interfaces/shared/event-handlers/IEvent-Handler-Html-Element";
import InputBasic from "../../../components/common/inputs/Input-Basic";
import LabelBasic from "../../../components/common/labels/Label-Basic";
import PageTitle from "../../../components/common/title/Page-Title";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  ownerInfo: {
    contactInfo: {
      city: string;
      email: string;
      street: string;
      zipCode: string;
    };
  };
  actions: {
    changeOwnerInfoField(type: OwnerInfoFieldType, value: string): void;
  };
}

/*
  Setup contact information of product owner.
*/
const OwnerInfoContactDetails: React.FC<IProps> = (props: IProps) => {
  const onChangeHandler = (event: IEventHandlerHTMLElement) => {
    switch (event.target.id) {
      case "streetAdminField":
        props.actions.changeOwnerInfoField(
          OwnerInfoFieldType.Street,
          event.target.value
        );
        break;
      case "zipCodeAdminField":
        props.actions.changeOwnerInfoField(
          OwnerInfoFieldType.ZipCode,
          event.target.value
        );
        break;
      case "cityAdminField":
        props.actions.changeOwnerInfoField(
          OwnerInfoFieldType.City,
          event.target.value
        );
        break;

      case "emailAdminField":
        props.actions.changeOwnerInfoField(
          OwnerInfoFieldType.Email,
          event.target.value
        );
        break;
    }
  };

  return (
    <>
      <PageTitle>Kontaktní údaje</PageTitle>
      <FormGroup>
        <LabelBasic elementRef="streetAdminField">Ulice</LabelBasic>
        <InputBasic
          type="text"
          name="streetAdminAttribute"
          id="streetAdminField"
          value={props.ownerInfo.contactInfo.street}
          onChange={onChangeHandler}
        />
      </FormGroup>

      <FormGroup>
        <LabelBasic elementRef="zipCodeAdminField">PSČ</LabelBasic>
        <InputBasic
          type="text"
          name="zipCodeAdminAttribute"
          id="zipCodeAdminField"
          onChange={onChangeHandler}
          value={props.ownerInfo.contactInfo.zipCode}
        />
      </FormGroup>
      <FormGroup>
        <LabelBasic elementRef="cityAdminField">Město</LabelBasic>
        <InputBasic
          type="text"
          name="cityAdminAttribute"
          id="cityAdminField"
          onChange={onChangeHandler}
          value={props.ownerInfo.contactInfo.city}
        />
      </FormGroup>

      <FormGroup>
        <LabelBasic elementRef="emailAdminField">E-mail</LabelBasic>
        <InputBasic
          type="text"
          name="emailAdminAttribute"
          id="emailAdminField"
          onChange={onChangeHandler}
          value={props.ownerInfo.contactInfo.email}
        />
      </FormGroup>
    </>
  );
};

export default OwnerInfoContactDetails;
