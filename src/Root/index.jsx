import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "../components/layout/header";
import HomePage from "../pages/HomePage";
import { Footer } from "../components/sections";



const Root = () => {
  return (
    <>
      <Toaster/>
      <Header/>
      <Routes>
        <Route path="/" element={ HomePage() } />
      </Routes>
      <Footer/>
    </>
  );
}


export default Root;