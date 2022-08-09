import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Admin/Admin";
import ApplicationForm from "./ApplicationForm/ApplicationForm";
import CreateVoyage from "./CreateVoyage/CreateVoyage";
import Details from "./Details/Details";
import Home from "./Home/Home";
import Login from "./Login/Login";
import TripsList from "./TripsList/TripsList";

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

                <Route path = "/login/admin/details" element = { <Details/> } />



            </Routes>
        </BrowserRouter>
    )
}

export default Router
