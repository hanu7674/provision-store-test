import React, { useEffect } from "react";
import Loading from "../components/Loading/loading";
import { Container } from "react-bootstrap";
import NavScrollExample from "../components/NavBar";
import { Route, Routes, useLocation, Redirect } from "react-router-dom";
import LoginPage from "./login";
import ProductsPage from "./Products";
import AboutUsPage from "./About";
import Footer from "../components/Footer";
const AppRoutes = () => {
    return (
        <React.Suspense fallback={<Loading />}>
                <NavScrollExample/>
            <Container className="mb-3">
                <Routes>
                    <Route exact path="/" element={<LoginPage /> }/>
                    <Route path="/login" element={<LoginPage /> }/>
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/about-us" element={<AboutUsPage />} />
                </Routes>
            </Container>
            <Footer/>
        </React.Suspense>
    )
}
export default AppRoutes;