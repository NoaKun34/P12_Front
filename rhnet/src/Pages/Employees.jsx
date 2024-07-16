import React from "react";
import "../index.css";
import { useSelector } from "react-redux";
import { useMemo } from "react";

import { columnsTitles } from "../Mocks/tableColumns.js";
import Table from "../Components/Table.jsx";

export default function Employees() {

  const employeesData = useSelector((state) => state.employees);
  const columnsNames = useMemo(() => columnsTitles, []);
  const rowsData = useMemo(() => employeesData, [employeesData]);

  console.log(rowsData);

  return (
    <div>
      <h1>Current employees</h1>
      <Table columns={columnsNames} data={rowsData} />
    </div>
  );
}
