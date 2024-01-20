import { Header } from '../components/Header';
import { Menu } from '../components/Menu';

export function Profile(){ 
    return  (
        <div className="bg-bege w-screen h-screen flex flex-col">
            <Header />
            <div className='w-full bg-bege mx-auto flex flex-row justify-between p-10'>
                <p>Perfil</p>
            </div>
            <Menu />
        </div>
    );
}