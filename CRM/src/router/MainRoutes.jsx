import {Route, Routes} from 'react-router-dom';

import Login from '../Pages/auth/Login';
import Signup from '../Pages/auth/Signup';
function MainRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>

        
        </Routes>
    );
}

export default MainRoutes;