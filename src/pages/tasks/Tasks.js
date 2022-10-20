import React, { useState, useEffect, useContext } from "react";
import tasksService from "../../services/tasksService";
import { DataGrid } from "@mui/x-data-grid";
import { ThemeContext } from "../../ThemeContext";

function Tasks() {
  const { state } = useContext(ThemeContext);
  const columnas = [
    {
      title: "Id",
      field: "id",
    },
    {
      title: "Name",
      field: "name",
    },
    {
      title: "Descripcion",
      field: "description",
    },
    {
      title: "Status",
      field: "status",
    },
    {
      title: "AssignedTo",
      field: "assignedTo",
    },
    {
      title: "DueDate",
      field: "dueDate",
    },
    {
      title: "CreatedAt",
      field: "createdAt",
    },
  ];
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    tasksService.getTasks().then((response) => {
      console.log(response);
      setTasks(response);
    });
  }, []);

  return (
    <center>
      <div
        style={{
          height: 400,
          width: "70%",
          backgroundColor: `${state.isDarkMode ? "rgb(98, 3, 187)" : "white"}`,
        }}
      >
        <h1>Tasks: </h1>
        <DataGrid
          style={{
            color: `${state.isDarkMode ? "white" : "black"} `,
            borderColor: `${state.isDarkMode ? "white" : "black"} `,
          }}
          rows={tasks}
          columns={columnas}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </center>
  );
}

export default Tasks;
