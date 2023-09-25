import {Route, Routes} from 'react-router-dom';

import Login from '../Pages/auth/Login';
import Signup from '../Pages/auth/Signup';
import Dashboard from '../Pages/dashBoard/Dashboard';
import Home from '../Pages/home/Home';
import ListAllUsers from '../Pages/users/ListAllUsers';
import AuthRoutes from './AuthRoutes';

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>  
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route element={<AuthRoutes allowListedRoles={["admin"]} />}>
                <Route path="/users" element={<ListAllUsers />}/>
            </Route>
            <Route path="/Dashboard" element={<Dashboard/>}/>
        
        </Routes>
    );
}

export default MainRoutes;