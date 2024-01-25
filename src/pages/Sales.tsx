import { Header } from "../components/Header";
import { Menu } from "../components/Menu";

export function Sales(){ 
    return  (
        <div className="bg-bege w-screen h-screen flex flex-col">
        <Header />
        <div className='w-full bg-bege mx-auto flex flex-col justify-between p-10'>
                <div className='flex flex-row items-center'>
                    <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                    </svg>
                    <h1 className='text-xl font-bold'>Relatório</h1>
                </div>
                <div className="py-4 mt-10 flex flex-row justify-between">
                    <a href="#">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 16-4-4 4-4m-6 8-4-4 4-4"/>
                        </svg>
                    </a>
                    <span className="text-vinho"> JANEIRO / 2024</span>
                    <a href="#">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 16 4-4-4-4m6 8 4-4-4-4"/>
                        </svg>
                    </a>
                </div>
                <div className="py-10">
                    <div className="flex flex-row items-center justify-between border-b border-cinza pb-3 mb-2">
                        <p className="text-sm text-gray">25/02/2024 8:35:23</p>
                        <p className="text-sm">CRÉDITO (3X)</p>
                        <p className="text-sm font-bold">R$ 450,00</p>
                    </div>
                    <div className="flex flex-row items-center justify-between border-b border-cinza pb-3 mb-2">
                        <p className="text-sm text-gray">25/02/2024 8:39:08</p>
                        <p className="text-sm">PIX</p>
                        <p className="text-sm font-bold">R$ 122,60</p>
                    </div>
                    <div className="flex flex-row items-center justify-between border-b border-cinza pb-3 mb-2">
                        <p className="text-sm text-gray">25/02/2024 8:39:08</p>
                        <p className="text-sm">PIX</p>
                        <p className="text-sm font-bold">R$ 122,60</p>
                    </div>
                    <div className="flex flex-row items-center justify-between border-b border-cinza pb-3 mb-2">
                        <p className="text-sm text-gray">25/02/2024 8:39:08</p>
                        <p className="text-sm">PIX</p>
                        <p className="text-sm font-bold">R$ 122,60</p>
                    </div>
                    <div className="flex flex-row items-center justify-between border-b border-cinza pb-3 mb-2">
                        <p className="text-sm text-gray">25/02/2024 8:39:08</p>
                        <p className="text-sm">PIX</p>
                        <p className="text-sm font-bold">R$ 122,60</p>
                    </div>
                    <div className="flex flex-row items-center justify-between border-b border-cinza pb-3 mb-2">
                        <p className="text-sm text-gray">25/02/2024 8:39:08</p>
                        <p className="text-sm">PIX</p>
                        <p className="text-sm font-bold">R$ 122,60</p>
                    </div>
                    <div className="flex flex-row items-center justify-between border-b border-cinza pb-3 mb-2">
                        <p className="text-sm text-gray">25/02/2024 8:39:08</p>
                        <p className="text-sm">PIX</p>
                        <p className="text-sm font-bold">R$ 122,60</p>
                    </div>
                </div>
            </div>
            <Menu />
    </div>
    );
}