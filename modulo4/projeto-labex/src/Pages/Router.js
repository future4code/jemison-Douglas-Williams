import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import AdminHouse from '../Pages/AdminHouse/AdminHouse';
import ApplicationForm from '../Pages/ApplicationForm/ApplicationForm';
import CreateTrip from '../Pages/CreateTrip/CreateTrip';
import ListTrip from '../Pages/ListTrips/ListTrips'
import Login from '../Pages/Login/Login'
import TripDetails from '../Pages/TripDetails/TripDetails';
import Error from '../Pages/Err/Err';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="ListTrip" element={<ListTrip />} />
                <Route path="ApplicationForm" element={<ApplicationForm />} />
                <Route path="Login" element={<Login />} />
                <Route path="AdminHouse" element={<AdminHouse />} />
                <Route path="CreateTrip" element={<CreateTrip />} />
                <Route path="TripDetails" element={<TripDetails />} />
                <Route path="404" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
