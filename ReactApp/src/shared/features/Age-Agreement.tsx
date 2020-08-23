import React, { useState } from "react";

import Modal from "../components/common/modals/Chooser-Modal";

export default () => {
  const [modal, setModal] = useState(true);
  return (
    <>
      <Modal
        title="Vstup na stránky je povolen pouze osobám starším 18-ti let"
        message="
        Chystáte se vstoupit na stránky s obsahem pro dospělé!
        
        Prosíme potvrďte, že vám je více než 18 let.
        Zabránim, aby ke zde uvedeným datům nemohl kdokoliv nezpůsobilý, nezletilý.
        Na tyto stránky vstupuji bez donucení, sexuální materiály mne nepohoršují, neurážejí a ani mne nijak neohrožují."
        yesMessage="ANO, jsem starší 18 let"
        noMessage="NE, nejsem starší 18 let"
        isOpen={modal}
        method={() => console.log("aa")}
        setModal={setModal}
      />
    </>
  );
};
