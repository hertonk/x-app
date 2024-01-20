import { Routes, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { ForgotPassword } from './pages/ForgotPassword';
import { Dashboard } from './pages/Dashboard';
import { Profile } from './pages/Profile';
import { Sales } from './pages/Sales';
import { Sell } from './pages/Sell';

export default function Router(){
    return (
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/esqueceu-sua-senha' element={<ForgotPassword />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/meu-perfil' element={<Profile />}/>
            <Route path='/relatorio' element={<Sales />}/>
            <Route path='/vender' element={<Sell />}/>
        </Routes>
    );
}