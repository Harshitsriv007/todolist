import React from "react";
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Index from "../components";
export default function Routerpath()
{
    return<>
    <Router>
        <Link to="/"></Link>
        <Routes>
            <Route exact path="/" element={<Index/>}></Route>
        </Routes>
    </Router>
    </>
}