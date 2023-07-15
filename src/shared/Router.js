import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Products from "../pages/Products";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        {/* a태그와 비슷 */}
        <Route path='products' element={<Products />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
