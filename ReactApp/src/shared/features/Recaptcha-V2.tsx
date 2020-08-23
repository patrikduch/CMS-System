import React, { Component, useState } from "react";
import Recaptcha, { RecaptchaProps } from "react-recaptcha";
import { Button } from "reactstrap";

/* Component`s props interface. */
interface IProps {
  submitTitle: string;
  action: () => void;
}

const RecaptchaV2: React.FC<IProps> = (props: IProps) => {
  const [isVerified, setIsVerified] = useState(false);

  const recaptchaLoaded = () => {
    console.log("RECAPTCHA V2 loaded.");
  };

  const verifyCallback = (response: string) => {
    if (response) {
      setIsVerified(true);
    }
  };

  return (
    <>
      <Button onClick={props.action} disabled={!isVerified}>
        {props.submitTitle}
      </Button>

      <Recaptcha
        sitekey="6LfEU8QUAAAAAONWOA2xZuF1HsCyHWkzVAJb5rdd"
        render="explicit"
        onloadCallback={recaptchaLoaded}
        verifyCallback={verifyCallback}
      />
    </>
  );
};

export default RecaptchaV2;
