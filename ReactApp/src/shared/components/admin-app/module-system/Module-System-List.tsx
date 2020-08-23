import React, { useState } from "react";
import { Table, Button } from "reactstrap";
import PaginationContainer from "../../common/pagination/Pagination-Container";
import keyGen from "../../../helpers/dynamic-rendering/key-generator";

/* Type checking. */
import FeatureSystemModel from "../../../../typescript/types/app/models/Feature-System-Model";
import useDidMount from "../../../hooks/dom/component.didmount.hook";
import Error404Container from "../../common/errors/404/Error404-Display-Message";


/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  pagginationAction(pageId: number, pageSize: number): void;
  features: FeatureSystemModel[];
  dispatchFeatureAction(featureId: number): void;
  totalCount: number;
  actualPageId: number;
}

/**
 * @function ModuleSystemList => List of all features, that can be switched on or off (Admin area).
 * @param props => passed props data.
 */
const ModuleSystemList = (props: IProps) => {
  const changeState = (featureId: number, isFeature: boolean) => {
    props.dispatchFeatureAction(featureId);
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Nazev modulu</th>
            <th>Popis modulu</th>
          </tr>
        </thead>
        <tbody>
          {props.features.map((arg: FeatureSystemModel) => {
            return (
              <tr key={keyGen()}>
                <td>
                  {arg.ModuleFeatureCategory.name} -{">"} {" " + arg.name}
                </td>
                <td>{arg.description}</td>
                <td>
                  {arg.isEnabled == true ? (
                    <Button
                      color="danger"
                      onClick={() => changeState(arg.id, arg.isFeature)}
                    >
                      Vypnout
                    </Button>
                  ) : (
                    <Button
                      color="success"
                      onClick={() => changeState(arg.id, arg.isFeature)}
                    >
                      Zapnout
                    </Button>
                  )}{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <PaginationContainer
        switchPageEvent={props.pagginationAction}
        totalCount={props.totalCount}
        baseUrl="modules"
        currentPageId={props.actualPageId}
        pageSize={5}
        isPublicSide={false}
      />
    </>
  );
};

export default ModuleSystemList;
