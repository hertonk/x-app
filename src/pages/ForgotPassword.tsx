import logo from '../assets/logo.png';

export function ForgotPassword(){ 
    return  (
        <div className="bg-bege w-screen h-screen flex items-center justify-center">
            <div className="w-96 mx-auto flex flex-col justify-center items-center">
                <img src={logo} alt="Logotipo X do Infinito" width={200} className='block' />
                <h1 className='text-vinho font-bold mt-10 mb-3'>Esqueceu sua senha?</h1>
                <form className='flex flex-col'>
                    <p className='text-center mt-3'>Digite seu e-mail</p>
                    <input type="text" name="" id="" placeholder='E-mail' className='my-2 rounded-md px-4 py-2 border-2 border-marrom' />
                    <button className='bg-vinho px-4 py-2 rounded-md text-white'>RECUPERAR</button>
                </form>
                <div className='my-10'>
                    <a href="/" className='text-vinho'>&laquo; Voltar</a>
                </div>
            </div>
        </div>
    );
}