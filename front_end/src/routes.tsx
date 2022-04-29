import React from "react";
import { Routes, Route } from "react-router-dom";

import Tasks from "./pages/Tasks";
import About from "./pages/About";


export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Tasks/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    )
}