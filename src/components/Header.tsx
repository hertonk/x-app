import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png';
import profile from '../assets/profile.png';

export function Header(){
    return (
        <div className="w-full bg-vinho mx-auto flex flex-row justify-between border-b-4 border-white">
               <div className='flex items-center justify-center px-8'>
                    <Link to="/dashboard">
                        <img src={logo} alt="X do Infinito" />
                    </Link>
               </div>
               <div className='flex flex-row p-4'>
                    <div className='flex flex-col justify-center'>
                        <p className="text-white">Ana Kohl</p>
                        <p className='text-marrom text-sm'>anakohl@email.com</p>
                    </div>
                    <div className='ml-5'>
                        <img src={profile} alt="X do Infinito" width={64} className='rounded-full border-2 border-marrom' />
                    </div>
               </div>
            </div>
    );
}