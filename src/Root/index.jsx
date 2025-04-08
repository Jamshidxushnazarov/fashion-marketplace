import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "../components/layout/header";
import HomePage from "../pages/HomePage";



const Root = () => {
  return (
    <>
      <Toaster/>
      <Header/>
      <Routes>
        <Route path="/" element={ HomePage() } />
      </Routes>
    </>
  );
}


export default Root;