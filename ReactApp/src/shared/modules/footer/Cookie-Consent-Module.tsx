import React from "react";
import CookieConsent from "react-cookie-consent";

/* 
  Cookie consent for this app. This consent is displayed only once when you agree is stored in cookies.
*/
const CookieConsentModule: React.FC = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Souhlasím"
      cookieName="cookieconsent"
      style={{ background: "#2B373B" }}
      buttonStyle={{
        color: "black",
        fontSize: "20px",
        background: "white"
      }}
      expires={150}
    >
      Tato stránka v rámci poskytování služeb využívá cookies, pokračováním v
      návštěvě stránky souhlasíte s jejich používáním.{" "}
    </CookieConsent>
  );
};

export default CookieConsentModule;
