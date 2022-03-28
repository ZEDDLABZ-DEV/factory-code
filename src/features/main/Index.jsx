import React from "react";
import { Header } from "./components/Header";
import { LayoutUnAuth } from "./components/LayoutUnAuth";

export const Main = () => {
  return (
    <div>
      <Header />
      <LayoutUnAuth></LayoutUnAuth>
    </div>
  );
};
