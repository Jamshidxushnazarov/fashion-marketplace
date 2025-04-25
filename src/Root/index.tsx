import { FC } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "../components/layout/header";
import HomePage from "../pages/HomePage";
import { Footer } from "../components/sections";
import SignIn from "../auth/login";
import SignUp from "../auth/register";
import CardAdd from "../pages/CardAdd";

const Root: FC = () => {
    const location = useLocation();
    console.log(location.pathname);

    const hideLayout =
        location.pathname === "/login" ||
        location.pathname === "/register" ||
        location.pathname === "/cart/add";

    return (
        <div>
            <Toaster />
            {!hideLayout && <Header />}

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<SignIn />} />
                <Route path='/register' element={<SignUp />} />
                <Route path='/cart/add' element={<CardAdd />} />
            </Routes>

            {!hideLayout && <Footer />}
        </div>
    );
};

export default Root;
