import React from "react";
import { FormGroup, Label } from "reactstrap";
import OwnerInfoFieldType from "../../../../typescript/enums/shared/redux/Owner-Info-Field-Type";

/* Type checking. */
import IEventHandlerHTMLElement from "../../../../typescript/interfaces/shared/event-handlers/IEvent-Handler-Html-Element";
import OwnerInfoBasicDetailPropsType from "../../../../typescript/types/shared/connected-components/admin/owner-info/Owner-Info-Basic-Details-Props-Type";
/* Common components imports. */
import InputBasic from "../../../components/common/inputs/Input-Basic";
import LabelBasic from "../../../components/common/labels/Label-Basic";
import PageTitle from "../../../components/common/title/Page-Title";

/**
 * @function OwnerInfoBasicDetails => Setup basic owner information (company name, dic and ico.
 * @param props => passed props data.
 */
const OwnerInfoBasicDetails: React.FC<OwnerInfoBasicDetailPropsType> = (
  props: OwnerInfoBasicDetailPropsType
) => {
  const onChangeHandler = (event: IEventHandlerHTMLElement) => {
    switch (event.target.id) {
      case "companyNameAdminField":
        props.actions.changeOwnerInfoField(
          OwnerInfoFieldType.CompanyName,
          event.target.value
        );
        break;

      case "icoAdminField":
        props.actions.changeOwnerInfoField(
          OwnerInfoFieldType.ICO,
          event.target.value
        );
        break;
      case "dicAdminField":
        props.actions.changeOwnerInfoField(
          OwnerInfoFieldType.Dic,
          event.target.value
        );
        break;
    }
  };

  return (
    <div>
      <PageTitle>Údaje o vlastníkovi</PageTitle>

      <FormGroup>
        <LabelBasic elementRef="companyNameAdminField">Firma</LabelBasic>
        <InputBasic
          type="text"
          name="companyNameAdminAttribute"
          id="companyNameAdminField"
          value={props.ownerInfo.companyName}
          onChange={onChangeHandler}
        />
      </FormGroup>

      <FormGroup>
        <LabelBasic elementRef="icoAdminField">IČO</LabelBasic>
        <InputBasic
          type="text"
          name="icoAdminAttribute"
          id="icoAdminField"
          value={props.ownerInfo.ico}
          onChange={onChangeHandler}
        />
      </FormGroup>

      <FormGroup>
        <LabelBasic elementRef="dicAdminField">DIČ</LabelBasic>
        <InputBasic
          type="text"
          name="dicAdminAttribute"
          id="dicAdminField"
          value={props.ownerInfo.dic}
          onChange={onChangeHandler}
        />
      </FormGroup>
    </div>
  );
};

export default OwnerInfoBasicDetails;
