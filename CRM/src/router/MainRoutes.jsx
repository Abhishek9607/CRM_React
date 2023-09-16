import {Route, Routes} from 'react-router-dom';

import Login from '../Pages/auth/Login';
import Signup from '../Pages/auth/Signup';
import Dashboard from '../Pages/dashBoard.jsx/Dashboard';
import Home from '../Pages/home/Home';
function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/Dashboard' element={<Dashboard/>}/>
        
        </Routes>
    );
}

export default MainRoutes;