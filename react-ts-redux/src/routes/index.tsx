import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import AddComponent from '../components/AddComponent';
import NavBar from '../components/NavBar';
import HomePage from '../pages/HomePage';



const AppRoutes = (props: any): any => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/addMachinery/:id" element={<AddComponent />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes

