import { Header } from "../components/Header"
import { Menu } from "../components/Menu";

export function Dashboard(){ 
    return  (
        <div className="bg-bege w-screen h-screen flex flex-col">
            <Header />
            <div className='w-full bg-bege mx-auto flex flex-col p-10'>
                <div className="flex flex-row justify-between items-center py-4">
                    <p className="text-2xl text-vinho">Olá Ana</p>
                    <p className="text-sm text-gray">25 de Janeiro de 2024</p>
                </div>
                <div className="border-t my-auto flex flex-col border-cinza py-5 items-center justify-center">
                    <div className='flex flex-row items-center mt-10'>
                        <svg className="w-5 h-5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.5 2a7 7 0 0 0-.5 0 1 1 0 0 0-1 1v8c0 .6.4 1 1 1h8c.5 0 1-.4 1-1v-.5A8.5 8.5 0 0 0 13.5 2Z"/>
                            <path d="M11 6a1 1 0 0 0-1-1 8.5 8.5 0 1 0 9 9 1 1 0 0 0-1-1h-7V6Z"/>
                        </svg>
                        <h1 className='text-xl font-bold'>Resumo</h1>
                    </div>
                    <div className="w-80 h-80 my-10 border border-gray rounded-full text-center mx-auto">
                        <p className="text-lg mt-8">Janeiro / 2024</p>
                        <p className="text-4xl font-bold my-20">R$ 234,00</p>
                        <p className="text-lg text-green mb-5 font-bold">+12%</p>
                    </div>
                </div>
            </div>
            <Menu />
        </div>
    );
}