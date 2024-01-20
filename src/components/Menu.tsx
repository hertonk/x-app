import { Link } from 'react-router-dom';

export function Menu(){
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-vinho border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                    <Link to="/dashboard" className='inline-flex flex-col items-center justify-center px-5 hover:bg-marrom group bg-marrom'>
                        <svg className="w-5 h-5 mb-2 text-white group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                        </svg>
                        <span className="text-sm text-white group-hover:text-white">Home</span>
                    </Link>
                    <Link to="/vender" className="inline-flex flex-col items-center justify-center px-5 hover:bg-marrom group">
                        <svg className="w-5 h-5 mb-2 text-marrom group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.75 15.363a4.954 4.954 0 0 0 2.638 1.574c2.345.572 4.653-.434 5.155-2.247.502-1.813-1.313-3.79-3.657-4.364-2.344-.574-4.16-2.551-3.658-4.364.502-1.813 2.81-2.818 5.155-2.246A4.97 4.97 0 0 1 10 5.264M6 17.097v1.82m0-17.5v2.138"/>
                        </svg>
                        <span className="text-sm text-marrom group-hover:text-white">Vender</span>
                    </Link>
                    <Link to="/relatorio" className="inline-flex flex-col items-center justify-center px-5 hover:bg-marrom group">
                        <svg className="w-5 h-5 mb-2 text-marrom group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                        </svg>
                        <span className="text-sm text-marrom group-hover:text-white">Relatório</span>
                    </Link>
                    <Link to="/meu-perfil" className="inline-flex flex-col items-center justify-center px-5 hover:bg-marrom group">
                        <svg className="w-5 h-5 mb-2 text-marrom group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                        </svg>
                        <span className="text-sm text-marrom group-hover:text-white">Perfil</span>
                    </Link>
                </div>
            </div>
    );
}