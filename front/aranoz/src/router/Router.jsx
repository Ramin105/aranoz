import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import AdminPanel from "../pages/admin/Admin";
import Basket from "../pages/basket/Basket";
import Wish from "../pages/wish/Wish";
import Notfound from "../pages/home/notfound/Notfound";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/admin" element={<AdminPanel/>}  />
          <Route path="/basket" element={<Basket/>} />
          <Route path="/wish" element={<Wish/>} />
          <Route path="*" element={<Notfound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
