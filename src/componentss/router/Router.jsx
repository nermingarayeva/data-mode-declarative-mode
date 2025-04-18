import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import NotFound from "../NotFound";
import Home from "../pages/Shop";
import ContactUs from "../pages/ContactUs";
import Shop from "../pages/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/shop" element={<Home />} />
                    <Route path="/contactus" element={<ContactUs />} />
                    <Route path="/home" element={<Shop/>} />
                    <Route path="/"  element={<Shop />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
