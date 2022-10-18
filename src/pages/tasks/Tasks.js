import React, { useState, useEffect } from "react";
import tasksService from "../../services/tasksService";
import { DataGrid } from "@mui/x-data-grid";

function Tasks() {
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
      <div style={{ height: 400, width: "70%", backgroundColor: "white" }}>
        <h1>Tasks: </h1>
        <DataGrid
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
