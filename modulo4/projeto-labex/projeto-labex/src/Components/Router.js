import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "../Pages/Admin/Admin";
import ApplicationForm from "../Pages/ApplicationForm/ApplicationForm";
import CreateVoyage from "../Pages/CreateVoyage/CreateVoyage";
import Details from "../Pages/Details/Details";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import TripsList from "../Pages/TripsList/TripsList";

function Router() {
    return(
         <BrowserRouter>
            <Routes>
                <Route index element = { <Home /> } />

                <Route path = "trips" element = { <TripsList/> } />

                <Route path = "subscribe" element = { <ApplicationForm/> } />

                <Route path = "login" element = { <Login /> } />

                <Route path = "/login/admin" element = { <Admin /> } />

                <Route path = "/login/admin/create-voyage" element = { <CreateVoyage/> } />

                <Route path = "/login/admin/details/:id" element = { <Details/> } />



            </Routes>
        </BrowserRouter>
    )
}

export default Router
