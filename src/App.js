import { React, useReducer, useState } from "react";
import "./App.css";
import Login from "./pages/login/login";
import Tasks from "./pages/tasks/Tasks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import { themeReducer, initialState } from "./utils";
import Helmet from "react-helmet";
import { Button } from "@material-ui/core";

function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const bg = state.isDarkMode
    ? "body {background-color: rgb(43, 43, 43);}"
    : "body {background-color: rgb(177, 177, 177);}";
  const [mode, setMode] = useState("Change to dark mode");
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <Helmet>
        <style>{bg}</style>
      </Helmet>
      <Button
        style={{
          background: `${
            state.isDarkMode ? "rgb(177, 177, 177)" : "rgb(43, 43, 43)"
          }`,
        }}
        onClick={() => {
          if (state.isDarkMode) {
            dispatch("SET_LIGHT_MODE");
            setMode("Change to dark mode");
          } else {
            dispatch("SET_DARK_MODE");
            setMode("Change to light mode");
          }
        }}
      >
        <div className={`${state.isDarkMode ? "light" : "dark"}`}>{mode}</div>
      </Button>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
