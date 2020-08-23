import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

/* Type checking. */
import IEventHandlerHTMLElement from "../../../../typescript/interfaces/shared/event-handlers/IEvent-Handler-Html-Element";
import InputBasic from "../../../components/common/inputs/Input-Basic";
import PageTitle from "../../../components/common/title/Page-Title";

/* Component`s props interface. */
interface IProps {
  projectDetail: {
    projectName: string;
  };
  actions: {
    updateProjectName(projectName: string): void;
  };
}

/**
 * @function ProjectName => Component to setup of project name via administration.
 * @param props
 */
const ProjectName: React.FC<IProps> = (props: IProps) => {
  const sendBackProjectNameData = (event: IEventHandlerHTMLElement) => {
    switch (event.target.id) {
      case "projectNameAdminField":
        //setProjectName(event.target.value);
        props.actions.updateProjectName(event.target.value);
        break;
    }
  };

  return (
    <>
      <PageTitle>Základní údaje</PageTitle>
      <FormGroup>
        <Label for="projectNameAdminField">Název projektu</Label>
        <InputBasic
          type="text"
          name="projectNameAdminAttribute"
          id="projectNameAdminField"
          value={props.projectDetail.projectName}
          onChange={sendBackProjectNameData}
        />
      </FormGroup>
    </>
  );
};

export default ProjectName;
