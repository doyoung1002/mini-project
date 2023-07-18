import { Route, Routes } from "react-router-dom";

import Footers from "../common/footer/Footer";
import Product from "../common/product";
import ContainerForm from "../components/container/ContainerForm";

import Headers from "../common/header/Header";
import Main from "../common/main";

const Router = () => {
  return (
    <>
      <Headers />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/products' element={<Product />} />
        <Route path='/detail/:itemId' element={<ContainerForm />} />
      </Routes>
      <Footers />
    </>
  );
};
export default Router;
