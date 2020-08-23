import React from "react";
import DayNotificationContainer from "./Day-Notification-Container";
import DayCalculatorHelper from "../../../../core/modules/body/day-notification/Day-Calculator-Helper";
import MonthCalculatorHelper from "../../../../core/modules/body/day-notification/Month-Calculator-Helper";

/*
  Display today info. For instance (Day (Friday), Date(31. December))
*/

const DayNotificationModule: React.FC = () => {
  const monthCalculator = new MonthCalculatorHelper();
  const dayCalculatorHelper = new DayCalculatorHelper();
  const actualDate = new Date();
  return (
    <>
      <DayNotificationContainer>
        {dayCalculatorHelper.getCurrentDay(actualDate.getDay())}{" "}
        {actualDate.getDate()}
        {"."}
        {monthCalculator.getCurrentMonth().toLowerCase()}
      </DayNotificationContainer>
    </>
  );
};

export default DayNotificationModule;
