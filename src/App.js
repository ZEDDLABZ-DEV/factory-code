import { Navigation } from "./features/navigation/Index";
import { BrowserRouter } from "react-router-dom";
import { createContext, useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  data: {},
  token: "",
};

export const UserContext = createContext(initialState);

function App() {
  const [store, dispatch] = useReducer((state, diff) => ({
    ...state,
    ...diff,
  }));
  return (
    <BrowserRouter>
      <ToastContainer />
      <UserContext.Provider value={{ store, dispatch }}>
        <Navigation />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
