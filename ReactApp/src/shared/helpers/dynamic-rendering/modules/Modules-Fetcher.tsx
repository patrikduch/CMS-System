import React, { useState } from "react";
import keyGen from "../key-generator";

// Tyoe-checking for fetched modules
import SectionType from "../../../../typescript/enums/shared/helpers/dynamic-rendering/Section-Type";

// Blocks
import ModuleHeaderBlocks from "../modules/header/Module-Header-Blocks";
import ModuleBodyBlocks from "../modules/body/Module-Body-Blocks";
import ModuleFooterBlocks from "../modules/footer/Module-Footer-Blocks";
import ModuleSystemType from "../../../../typescript/types/app/models/Module-System-Type";
import NotificationSystemContext from "../../../contexts/notification-system/notification-system.context";

// Props interface

type PropsType = {
  modules: ModuleSystemType[];
  sectionType: SectionType;
};

/*
	Shared functionality for fetching "Header, Body, Footer" modules.
*/
const ModulesFetcher: React.FC<PropsType> = (props: PropsType) => {
  const fetchContent = () => {
    switch (props.sectionType) {
      case SectionType.Header:
        return <ModuleHeaderBlocks key={keyGen()} modules={props.modules} />;

      case SectionType.Body:
        return <ModuleBodyBlocks key={keyGen()} modules={props.modules} />;

      case SectionType.Footer:
        return <ModuleFooterBlocks key={keyGen()} modules={props.modules} />;

      default:
        return <div key={keyGen()}></div>;
    }
  };

  return fetchContent();
};

export default ModulesFetcher;
