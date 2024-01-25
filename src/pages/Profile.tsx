import { Header } from '../components/Header';
import { Menu } from '../components/Menu';

export function Profile(){ 
    return  (
        <div className="bg-bege w-screen h-screen flex flex-col">
            <Header />
            <div className='w-full bg-bege mx-auto flex flex-col justify-between p-10'>
                <div className='flex flex-row items-center'>
                    <svg className="w-5 h-5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    <h1 className='text-xl font-bold'>Perfil</h1>
                </div>
                <div className='my-4 space-y-5'>
                    <div className='pt-4 border-cinza'>
                        <p className='text-vinho text-xs'>CÓDIGO</p>
                        <p className='text-gray mb-1'>0001</p>
                    </div>
                    <div className='pt-4 border-t border-cinza'>
                        <p className='text-vinho text-xs'>NOME</p>
                        <p className='text-gray'>ANA KOHL</p>
                        <p className='text-gray mb-1 text-xs'>REVENDEDORA</p>
                    </div>
                    <div className='pt-4 border-t border-cinza'>
                        <p className='text-vinho text-xs'>CPF</p>
                        <p className='text-gray mb-1'>000.000.000-00</p>
                    </div>
                    <div className='pt-4 border-t border-cinza'>
                        <p className='text-vinho text-xs'>E-MAIL</p>
                        <p className='text-gray mb-1'>ana@gmail.com</p>
                    </div>
                    <div className='pt-4 border-t border-cinza'>
                        <p className='text-vinho text-xs'>TELEFONES</p>
                        <p className='text-gray mb-1'>(45)99999-9999</p>
                    </div>
                    <div className='pt-4 border-t border-cinza'>
                        <p className='text-vinho text-xs'>CIDADE/ESTADO</p>
                        <p className='text-gray mb-1'>Cascavel - PR</p>
                    </div>
                </div>
                <div className='flex flex-row items-center'>
                    <svg className="w-5 h-5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6c.6 0 1 .4 1 1v3a1 1 0 1 1-2 0v-3c0-.6.4-1 1-1Z" clip-rule="evenodd"/>
                    </svg>
                    <h1 className='text-lg font-bold'>Trocar Senha</h1>
                </div>
                <div className='my-5'>
                    <p className='text-sm mb-2 text-gray'>Para alterar sua senha digite uma nova senha e sua confirmação abaixo e clique em "salvar".</p>
                    <form action="" className='flex flex-col'>
                            <input type="password" name="" id="" placeholder='Senha' className='my-2 rounded-md px-4 py-2 border-2 border-marrom' />    
                            <input type="password" name="" id="" placeholder='Confirme a Senha' className='my-2 rounded-md px-4 py-2 border-2 border-marrom' />
                            <button className='bg-vinho px-4 py-2 rounded-md text-white'>Salvar</button>
                        </form>
                </div>
                <div className='flex flex-row items-center'>
                    <svg  className="w-5 h-5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5c0-.6.4-1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3c0-.6.4-1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3c0-.6.4-1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm2 4a3 3 0 0 0-3 2v.2c0 .1-.1.2 0 .2v.2c.3.2.6.4.9.4h6c.3 0 .6-.2.8-.4l.2-.2v-.2l-.1-.1A3 3 0 0 0 10 14H7.9Z" clip-rule="evenodd"/>
                    </svg>
                    <h1 className='text-lg font-bold'>Alterar Foto</h1>
                </div>
                <div className='my-5'>
                    <p className='text-sm mb-2 text-gray'>Para alterar sua foto selecione a nova foto desejada abaixo e clique em "salvar".</p>
                    <form action="" className='flex flex-col'>
                        <input type="file" name="" id="" placeholder='Foto' className='my-2 rounded-md px-4 py-2 border-2 border-marrom' />    
                        <button className='bg-vinho px-4 py-2 rounded-md text-white'>Salvar</button>
                    </form>
                </div>
                <div className='mt-5 mb-10 border-t border-cinza pt-5 flex flex-row items-center'>
                     <svg className="w-4 h-4 text-gray mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                    </svg>
                    <a href="" className='text-gray'>Sair da Conta</a>
                </div>
            </div>
            <Menu />
        </div>
    );
}