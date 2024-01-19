import { Routes, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { ForgotPassword } from './pages/ForgotPassword';

export default function Router(){
    return (
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/esqueceu-sua-senha' element={<ForgotPassword />}/>
        </Routes>
    );
}