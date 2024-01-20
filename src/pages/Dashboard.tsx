import { Header } from "../components/Header"
import { Menu } from "../components/Menu";

export function Dashboard(){ 
    return  (
        <div className="bg-bege w-screen h-screen flex flex-col">
            <Header />
            <div className='w-full bg-bege mx-auto flex flex-row justify-between p-10'>
                <p>Dashboard</p>
            </div>
            <Menu />
        </div>
    );
}