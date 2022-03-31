import { Navigation } from "./features/navigation/Index";
import { BrowserRouter } from "react-router-dom";
import { createContext, useReducer, useState } from "react";
const initialState = {
  user_id: "",
  username: "",
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
      <UserContext.Provider value={{ store, dispatch }}>
        <Navigation />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
