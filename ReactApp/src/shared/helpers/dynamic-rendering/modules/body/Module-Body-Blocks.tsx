import React from "react";

// Sections
import ModuleBodyTopSection from "./sections/Module-Body-Top-Section";
import ModuleBodyMiddleSection from "./sections/Module-Body-Middle-Section";
import ModuleBodyBottomSection from "./sections/Module-Body-Bottom-Section";
import ModuleSystemType from "../../../../../typescript/types/app/models/Module-System-Type";

/* Notification system imports. */
import NotificationSystemDisplay from "../../../../modules/body/notification-system/Notification-System-Display";

type PropsType = {
  modules: ModuleSystemType[];
};

const ModuleBodyBlocks: React.FC<PropsType> = (props: PropsType) => {
  /*
    Get all modules for top section of Body area.
  */

  const getTopModules = () => {
    const topModules = new Array<ModuleSystemType>();

    props.modules.forEach((module: ModuleSystemType) => {
      switch (module.code) {
        case "day-notification":
          topModules.push(module);
          break;
        case "top-articles":
          topModules.push(module);
          break;
      }
    });

    return topModules;
  };

  /* 
  Get all modules for middle section of Body area.
*/
  const getMiddleModules = () => {
    const middleModules = new Array<ModuleSystemType>();

    props.modules.forEach((module: ModuleSystemType) => {
      switch (module.code) {
        case "newsletter-subscriber":
          middleModules.push(module);
          break;
        case "owner-info":
          middleModules.push(module);
          break;
        case "recommend-us":
          middleModules.push(module);
          break;

        case "write-us":
          middleModules.push(module);
          break;
      }
    });

    const result = middleModules.filter(
      (module: ModuleSystemType) =>
        module.code != "recommend-us" && module.code != "write-us"
    );

    result.push(
      middleModules.filter(
        (module: ModuleSystemType) => module.code == "write-us"
      )[0]
    );

    return result;
  };

  /*
  Get all modules for bottom section of Body area.
*/

  const getBottomModules = () => {
    const bottomModules = new Array<ModuleSystemType>();

    props.modules.forEach((module: ModuleSystemType) => {
      switch (module.code) {
        case "social-icons":
          bottomModules.push(module);
          break;
      }
    });

    return bottomModules;
  };

  /*
   * Main entry method for rendering Body`s modules.
   */
  const renderContent = () => {
    return (
      <>
        <NotificationSystemDisplay />
        <ModuleBodyTopSection modules={getTopModules()} />
        <ModuleBodyMiddleSection
          modules={getMiddleModules()}
          subModules={props.modules.filter(
            (arg: ModuleSystemType) =>
              (arg.isEnabled == true && arg.code == "write-us") ||
              (arg.isEnabled == true && arg.code == "recommend-us")
          )}
        />
        <ModuleBodyBottomSection modules={getBottomModules()} />
      </>
    );
  };

  return <>{renderContent()}</>;
};

export default ModuleBodyBlocks;
