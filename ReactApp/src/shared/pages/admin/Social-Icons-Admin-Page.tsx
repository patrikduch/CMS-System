import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";

import PageTitle from "../../components/common/title/Page-Title";

import * as SocialIconsApi from "../../api/end-points/Social-Icons-Api";

/* React hooks life-cycle methods. */
import useDidMount from "../../hooks/dom/component.didmount.hook";

/* Type checking. */
import IEventHandlerForm from "../../../typescript/interfaces/shared/event-handlers/IEvent-Handler-Form";
import IEventHandlerHTMLElement from "../../../typescript/interfaces/shared/event-handlers/IEvent-Handler-Html-Element";
import SocialIconModelType from "../../../typescript/types/app/models/Social-Icon-Model-Type";
import IRoutePath from "../../../typescript/interfaces/shared/router/IRoutePath";
import LabelBasic from "../../components/common/labels/Label-Basic";
import InputBasic from "../../components/common/inputs/Input-Basic";
import BaseBootstrapButton from "../../components/common/buttons/Base-Bootstrap-Button";

const SocialIconsAdminPage: React.FC<IRoutePath> = () => {
  const [facebookIcon, setFacebookIcon] = useState({
    url: "",
    code: "",
  });

  const [twitterIcon, setTwitterIcon] = useState({
    url: "",
    code: "",
  });

  const [linkedInIcon, setLinkedInIcon] = useState({
    url: "",
    code: "",
  });

  const socialIconsInit = () => {
    SocialIconsApi.getAll().then((response) => {
      const facebook = response.data.socialIcons.filter(
        (arg: SocialIconModelType) => {
          return arg.code == "facebook_social";
        }
      );

      // Twitter entry
      const twitter = response.data.socialIcons.filter(
        (arg: SocialIconModelType) => {
          return arg.code == "twitter_social";
        }
      );

      // LinkedIn entry
      const linkedIn = response.data.socialIcons.filter(
        (arg: SocialIconModelType) => {
          return arg.code == "linkedIn_social";
        }
      );

      /* Change state to the new one */

      setFacebookIcon({
        url: facebook[0].url,
        code: "facebook_social",
      });

      setTwitterIcon({
        url: twitter[0].url,
        code: "twitter_social",
      });

      setLinkedInIcon({
        url: linkedIn[0].url,
        code: "linkedIn_social",
      });
    });
  };

  useDidMount(() => {
    socialIconsInit();
  });

  /**
   * @function saveChange => Save changes that were made in this form.
   * @param event
   */
  const saveChanges = (event: IEventHandlerForm) => {
    event.preventDefault();

    SocialIconsApi.updateSocialIcon(
      "Facebook",
      facebookIcon.code,
      facebookIcon.url
    );
    SocialIconsApi.updateSocialIcon(
      "Twitter",
      twitterIcon.code,
      twitterIcon.url
    );

    SocialIconsApi.updateSocialIcon(
      "LinkedIn",
      linkedInIcon.code,
      linkedInIcon.url
    );

    //SocialIconsApi.updateUrl()
  };

  /*
    Change state when change of social field occurs.
  */
  const onSocialFieldChange = (event: IEventHandlerHTMLElement) => {
    switch (event.target.id) {
      case "socialFacebookLabel":
        setFacebookIcon({
          url: event.target.value,
          code: "facebook_social",
        });
        break;

      case "socialTwitterLabel":
        setTwitterIcon({
          url: event.target.value,
          code: "twitter_social",
        });

        break;

      case "socialLinkedinLabel":
        setLinkedInIcon({
          url: event.target.value,
          code: "linkedIn_social",
        });

        break;
    }
  };

  return (
    <Container>
      <PageTitle>Sociální sítě</PageTitle>
      <Form onSubmit={saveChanges}>
        <Row>
          <Col md="5" sm="12">
            <FormGroup>
              <LabelBasic isAdminSide elementRef="socialFacebookLabel">
                Facebook
              </LabelBasic>
              <InputBasic
                name="socialFacebookField"
                type="text"
                id="socialFacebookLabel"
                value={facebookIcon.url}
                onChange={onSocialFieldChange}
              />
            </FormGroup>
          </Col>

          <Col md="5" sm="12">
            <FormGroup>
              <LabelBasic isAdminSide elementRef="socialTwitterLabel">
                Twitter
              </LabelBasic>
              <InputBasic
                id="socialTwitterField"
                name="socialTwitterLabel"
                type="text"
                value={twitterIcon.url}
                onChange={onSocialFieldChange}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md="5" sm="12">
            <FormGroup>
              <LabelBasic isAdminSide elementRef="socialLinkedinLabel">
                LinkedIn
              </LabelBasic>
              <InputBasic
                id="socialLinkedinLabel"
                name="socialLinkedinField"
                type="text"
                value={linkedInIcon.url}
                onChange={onSocialFieldChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <BaseBootstrapButton>Uložit změny</BaseBootstrapButton>
      </Form>
    </Container>
  );
};

export default SocialIconsAdminPage;
