import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "../Pages/HomePage/HomePage";
import ListMatches from "../Pages/ListMatches/ListMatches";



function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/list" element={<ListMatches />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;