import React from "react";
import { Route, Routes } from "react-router-dom";
import Words from "./Words";
import Sentences from "./Sentences";
import { SentenceProvider } from "../context/Context";
const Body = () => {
  return (
    <Routes>
      <Route
        path="/words"
        element={
          <SentenceProvider>
            <Words />
          </SentenceProvider>
        }
      />
      <Route path="/sentences" element={<Sentences />} />
    </Routes>
  );
};

export default Body;
