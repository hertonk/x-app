import logo from '../assets/logo.png';

export function Login(){ 
    return  (
        <div className="bg-bege w-screen h-screen flex items-center justify-center">
            <div className="w-96 mx-auto flex flex-col justify-center items-center">
                <img src={logo} alt="Logotipo X do Infinito" width={200} className='block' />
                <h1 className='text-vinho font-bold mt-10 mb-3'>Acesse sua conta</h1>
                <form className='flex flex-col'>
                    <input type="text" name="" id="" placeholder='E-mail' className='my-2 rounded-md px-4 py-2 border-2 border-marrom' />
                    <input type="password" name="" id="" placeholder='Senha' className='my-2 rounded-md px-4 py-2 border-2 border-marrom' />
                    <button className='bg-vinho px-4 py-2 rounded-md text-white'>ENTRAR</button>
                </form>
                <div className='my-10'>
                    <a href="/esqueceu-sua-senha" className='text-vinho'>Esqueceu sua senha?</a>
                </div>
            </div>
        </div>
    );
}