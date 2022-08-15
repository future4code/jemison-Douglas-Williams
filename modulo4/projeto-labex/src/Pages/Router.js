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
                {/* Rotas usando o Link */}
                <Route path="ListTrip" element={<ListTrip />} />
                <Route path="ApplicationForm"  element={<ApplicationForm />} />
                <Route path="Login" element={<Login />} />
                <Route path="AdminHouse" element={<AdminHouse />} />
                <Route path="CreateTrip" element={<CreateTrip />} />
                <Route path="TripDetails" element={<TripDetails />} />
                <Route path="404" element={<Error />} />
                {/* Rotas usando o useNavigate */}
                <Route path="/trips/list" element={<ListTrip />} />
                <Route path="/trips/application"  element={<ApplicationForm />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin/trips/list" element={<AdminHouse />} />
                <Route path="/admin/trips/create" element={<CreateTrip />} />
                <Route path="/admin/trips/:id" element={<TripDetails />} />
                <Route path="404" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
