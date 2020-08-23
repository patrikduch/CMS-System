import React, { Component, useEffect } from "react";
import NotFoundPage from "../../pages/errors/public-side/Not-Found-Page";
import FeatureSystemModel from "../../../typescript/types/app/models/Feature-System-Model";
import { useLocation, useHistory } from "react-router-dom";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  actions: {
    fetchAllFeatures(): void;
  };

  isPage?: boolean;
  children: React.ReactNode[] | React.ReactNode;
  code: string;
  features: FeatureSystemModel[];
}

/**
 * @function FeatureSystemChecker => HOC with Redux integration that checks if provided  feature is currently enabled.
 * @param props => passed props data.
 */
const FeatureSystemChecker: React.FC<IProps> = (props: IProps) => {
  const history = useHistory();

  useEffect(() => {
    props.actions.fetchAllFeatures();
  }, []);

  const check = () => {
    const entity: FeatureSystemModel[] = props.features.filter(
      (arg: FeatureSystemModel) => {
        return arg.code == props.code;
      }
    );

    let isValid: boolean = false;

    entity.forEach((arg) => {
      if (arg.code == props.code && arg.isEnabled) {
        isValid = true;
      }
    });

    return isValid;
  };

  const checkerState = check();
  if (props.isPage && !checkerState) {
    history.push("/error");
  }

  return <>{checkerState && props.children}</>;
};

export default FeatureSystemChecker;
