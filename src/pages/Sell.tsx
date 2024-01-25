import { Header } from "../components/Header";
import { Menu } from "../components/Menu";

export function Sell(){ 
    return  (
        <div className="bg-bege w-screen h-screen flex flex-col">
            <Header />
            <div className='w-full bg-bege mx-auto flex flex-col justify-between p-10'>
                <div className='flex flex-row items-center'>
                    <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.75 15.363a4.954 4.954 0 0 0 2.638 1.574c2.345.572 4.653-.434 5.155-2.247.502-1.813-1.313-3.79-3.657-4.364-2.344-.574-4.16-2.551-3.658-4.364.502-1.813 2.81-2.818 5.155-2.246A4.97 4.97 0 0 1 10 5.264M6 17.097v1.82m0-17.5v2.138"/>
                    </svg>
                    <h1 className='text-xl font-bold'>Vender</h1>
                </div>
                <div className="py-4 mt-4">
                    <p className="text-sm text-vinho">VALOR DA VENDA</p>
                    <form action="" className='flex flex-col'>
                        <div className="my-2 bg-white rounded-md px-4 h-32 border-2 border-marrom flex flex-row items-center justify-between">
                            <p className="text-cinza text-5xl">R$</p>
                            <input type="text" name="" id="" placeholder='0,00' className='w-64 text-6xl text-right' />    
                        </div>
                        <p className="text-sm text-vinho mt-4">FORMA DE PAGAMENTO</p>
                        <div className="flex flex-row my-5">
                            <div className="bg-marrom rounded-lg p-5 mr-2 flex flex-col items-center justify-center ">
                                <svg className="w-6 h-6 mb-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M4 5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4Zm0 6h16v6H4v-6Z" clip-rule="evenodd"/>
                                    <path fill-rule="evenodd" d="M5 14c0-.6.4-1 1-1h2a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm5 0c0-.6.4-1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
                                </svg>
                                <a href="#" className="text-white">Débito</a>
                            </div>
                            <div className="border border-marrom rounded-lg p-5 mr-2 flex flex-col items-center justify-center">
                                <svg className="w-6 h-6 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M6 14h2m3 0h5M3 7v10c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1Z"/>
                                </svg>
                                <a href="#">Crédito</a>
                            </div>
                            <div className="border border-marrom rounded-lg p-5">
                            <svg fill="#000000" version="1.1" className="mb-2" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                <g>
                                    <rect x="38" y="23" width="2" height="5"/>
                                    <rect x="42" y="23" width="2" height="5"/>
                                    <rect x="38" y="30" width="2" height="2"/>
                                    <rect x="42" y="30" width="2" height="2"/>
                                    <rect x="31" y="34" width="2" height="2"/>
                                    <rect x="26" y="54" width="2" height="2"/>
                                    <rect x="42" y="34" width="2" height="2"/>
                                    <rect x="38" y="38" width="2" height="2"/>
                                    <rect x="42" y="38" width="2" height="2"/>
                                    <path d="M2,2h3V0H1C0.448,0,0,0.448,0,1v4h2V2z"/>
                                    <path d="M63,0h-4v2h3v3h2V1C64,0.448,63.552,0,63,0z"/>
                                    <path d="M2,59H0v4c0,0.552,0.448,1,1,1h4v-2H2V59z"/>
                                    <path d="M62,62h-3v2h4c0.552,0,1-0.448,1-1v-4h-2V62z"/>
                                    <path d="M4,5v12c0,0.552,0.448,1,1,1h12c0.552,0,1-0.448,1-1V5c0-0.552-0.448-1-1-1H5C4.448,4,4,4.448,4,5z M6,6h10v10H6V6z"/>
                                    <path d="M13,8H9C8.448,8,8,8.448,8,9v4c0,0.552,0.448,1,1,1h4c0.552,0,1-0.448,1-1V9C14,8.448,13.552,8,13,8z M12,12h-2v-2h2V12z"
                                        />
                                    <path d="M47,18h12c0.552,0,1-0.448,1-1V5c0-0.552-0.448-1-1-1H47c-0.552,0-1,0.448-1,1v12C46,17.552,46.448,18,47,18z M48,6h10v10
                                        H48V6z"/>
                                    <path d="M55,8h-4c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1h4c0.552,0,1-0.448,1-1V9C56,8.448,55.552,8,55,8z M54,12h-2v-2h2V12z
                                        "/>
                                    <path d="M17,46H5c-0.552,0-1,0.448-1,1v12c0,0.552,0.448,1,1,1h12c0.552,0,1-0.448,1-1V47C18,46.448,17.552,46,17,46z M16,58H6V48
                                        h10V58z"/>
                                    <path d="M9,56h4c0.552,0,1-0.448,1-1v-4c0-0.552-0.448-1-1-1H9c-0.552,0-1,0.448-1,1v4C8,55.552,8.448,56,9,56z M10,52h2v2h-2V52z"
                                        />
                                    <path d="M44,19h-7V7h-2v13c0,0.552,0.448,1,1,1h8V19z"/>
                                    <rect x="22" y="12" width="7" height="2"/>
                                    <rect x="26" y="8" width="7" height="2"/>
                                    <rect x="4" y="19" width="2" height="9"/>
                                    <path d="M18,25H8v2h9v4h2v-5C19,25.448,18.552,25,18,25z"/>
                                    <rect x="9" y="20" width="2" height="2"/>
                                    <rect x="21" y="18" width="2" height="8"/>
                                    <rect x="21" y="28" width="9" height="2"/>
                                    <path d="M61,29h-2v10h-3v2h4c0.552,0,1-0.448,1-1V29z"/>
                                    <rect x="26" y="18" width="2" height="2"/>
                                    <rect x="4" y="33" width="2" height="8"/>
                                    <rect x="4" y="42" width="9" height="2"/>
                                    <path d="M50,28h2v-4c0-0.552-0.448-1-1-1h-5v2h4V28z"/>
                                    <rect x="9" y="33" width="2" height="2"/>
                                    <rect x="20" y="32" width="2" height="8"/>
                                    <rect x="20" y="42" width="9" height="2"/>
                                    <rect x="8" y="38" width="9" height="2"/>
                                    <rect x="21" y="52" width="2" height="4"/>
                                    <rect x="20" y="48" width="9" height="2"/>
                                    <path d="M36,44v-5c0-0.552-0.448-1-1-1H25v2h9v4H36z"/>
                                    <rect x="26" y="32" width="2" height="2"/>
                                    <rect x="15" y="34" width="2" height="2"/>
                                    <rect x="59" y="53" width="2" height="7"/>
                                    <rect x="54" y="58" width="3" height="2"/>
                                    <rect x="54" y="52" width="2" height="4"/>
                                    <path d="M61,44c0-0.552-0.448-1-1-1H49v2h10v6h2V44z"/>
                                    <path d="M48,56v-5c0-0.552-0.448-1-1-1H36v2h10v4H48z"/>
                                    <rect x="50" y="47" width="7" height="2"/>
                                    <rect x="20" y="58" width="7" height="2"/>
                                    <rect x="30" y="51" width="2" height="9"/>
                                    <rect x="32" y="46" width="4" height="2"/>
                                    <path d="M47,36h5v-2h-4v-6h-2v7C46,35.552,46.448,36,47,36z"/>
                                    <rect x="50" y="30" width="5" height="2"/>
                                    <rect x="54" y="20" width="3" height="2"/>
                                    <rect x="59" y="20" width="2" height="5"/>
                                    <rect x="54" y="25" width="2" height="2"/>
                                    <path d="M39,17h4c0.552,0,1-0.448,1-1V3h-2v12h-3V17z"/>
                                    <path d="M24,5h15V3H23c-0.552,0-1,0.448-1,1v5h2V5z"/>
                                    <path d="M25,24h7c0.552,0,1-0.448,1-1v-8h-2v7h-6V24z"/>
                                    <rect x="34" y="23" width="2" height="4"/>
                                    <rect x="36" y="54" width="7" height="2"/>
                                    <rect x="36" y="58" width="9" height="2"/>
                                    <path d="M50,58h-2v2h3c0.552,0,1-0.448,1-1v-8h-2V58z"/>
                                    <rect x="16" y="42" width="2" height="2"/>
                                    <rect x="39" y="42" width="4" height="2"/>
                                    <rect x="46" y="38" width="2" height="3"/>
                                    <rect x="45" y="43" width="2" height="2"/>
                                    <rect x="39" y="46" width="3" height="2"/>
                                    <rect x="50" y="38" width="2" height="2"/>
                                    <rect x="54" y="34" width="3" height="2"/>
                                    <rect x="35" y="34" width="5" height="2"/>
                                    <rect x="34" y="29" width="2" height="3"/>
                                </g>
                                </svg>
                                <a href="#">PIX</a>
                            </div>
                        </div>
                        <button className='bg-vinho px-4 py-2 rounded-md text-white'>CONTINUAR</button>
                    </form>
                </div>
            </div>
            <Menu />
        </div>
    );
}