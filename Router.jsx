import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";
import Home from "../pages/Shop";
import Shop from "../pages/Home";

const Router = () => {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/shop" element={<Home/>} />
                    <Route path="/home" element={<Shop/>} />
                    <Route path="/"  element={<Shop />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
