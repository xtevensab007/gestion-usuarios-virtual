import { XCircleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import * as React from 'react';
import {Overlay} from '@/components/Overlays/overlay';
import {Notification} from '@/components/Overlays/notification';
import { registerUser } from '@/services/user.services';





const Home = () =>{
    const emailregex = /^[-a-z0-9~!$%^&*_=+}{?'?]+(\.[-a-z0-9~!$%^&*_=+}{?'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    const [error, setError] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    

    const [userReg, setUserReg] = React.useState({
        name: "",
        lastName: "",
        idDocument: 0,
        email: "",
        password: ""
    })

    const [veriPassword, setVeriPassword] = React.useState("")

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numregex = /^$|^[0-9]*$/;
        const regex = /^(?=(?:[^0-9]*[0-9]){0,3}[^0-9]*$)(?=(?:[0-9]*[^0-9]){0,3}[0-9]*$)[a-zA-Z0-9]{0,6}$/;
    
        if (
            (e.target.name === "password" && !regex.test(e.target.value)) ||
            (e.target.name === "veriPassword" && !regex.test(e.target.value)) ||
            (e.target.name === "id" && !numregex.test(e.target.value))
        ) {
            return;
        }
    
        if (e.target.name === "veriPassword") {
            setVeriPassword(e.target.value);
            return;
        } else {
            setUserReg({
                ...userReg,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleRegister = async () => {
        if (veriPassword !== userReg.password) {
          setError(true);
          return;
        }
        if (!emailregex.test(userReg.email)) {
          return;
        }
        try {
            const response = await registerUser(userReg);
        
            if (response === undefined) {
              setError(true);
              toggleOverlay();
            }
        
            setError(false);
            toggleOverlay();
          } catch (error) {
            console.error(error);
        }
        };
    
    const toggleOverlay = () => {
        setIsOpen(!isOpen);
    };

return(
    <div>
        <Overlay isOpen={isOpen} setIsOpen={setIsOpen} onClose={toggleOverlay}>
            <Notification title={error === true ? "Registro Fallido" : "Registro Exitoso"} description={error === true ? 'El usuario ya existe o no ha podido ser registrado' : 'El usuario se ha registrado exitosamente'} isOpen={isOpen} setIsOpen={setIsOpen} onClose={toggleOverlay}>
                <UserCircleIcon color={error === true ? 'red' : 'green'} className='ml-1 h-12 w-12'/>
            </Notification>
        </Overlay>
        <div className=" top-0 bottom-0 right-0 left-0 m-auto w-fit flex flex-row">
            <form className=" px-18 pr-6 pt-6 pb-8 mb-4  ">
                <div className=' mb-4 '>      
                    <div className="flex place-content-start mb-10 mt-11 ">
                        <UserCircleIcon className="ml-1 h-12 w-12" aria-hidden="true" />
                        <div className="my-2 h-12 sm:px-3 text-3xl font-bold leading-6 text-gray-900">
                            Registro de usuario
                        </div>
                    </div>
                </div>
                <div className=' ml-20 mb-4 mt-12 '>
                        <div className=' mb-4 '>
                            <div className=' grid grid-flow-row sm:grid-flow-col gap-3 '>
                                <div className='sm:col-span-4 justify-center '>
                                    <input size={50} onChange={handleOnChange} type="text" value={userReg.name} name="name" className='shadow apperance-none border rounded-lg  py-2 px-3 placeholder:text-black text-black bg-sky-200 leading-tight focus:outline-none focus:shadow-outline'placeholder='Nombres' />
                                </div>
                            </div>
                        </div>
                    <div className=' mb-4 '>
                        <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                            <div className='sm:col-span-4 justify-center '>
                                <input size={50} onChange={handleOnChange} type="text" value={userReg.lastName} name="lastName" className='shadow apperance-none border rounded-lg  py-2 px-3 placeholder:text-black text-black bg-sky-200 leading-tight focus:outline-none focus:shadow-outline'placeholder='Apellidos' />
                            </div>
                        </div>
                    </div>
                    <div className=' mb-4 '>        
                        <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                            <div className='sm:col-span-4 justify-center '>
                                <input size={50} onChange={handleOnChange} type="text" value={userReg.idDocument} name="idDocument" className='shadow apperance-none border rounded-lg  py-2 px-3 placeholder:text-black text-black bg-sky-200 leading-tight focus:outline-none focus:shadow-outline'placeholder='Documento' />
                            </div>
                        </div>
                    </div>
                    <div className=' mb-4 '>        
                        <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                            <div className='sm:col-span-4 justify-center '>
                                <input size={50} onChange={handleOnChange} type="email" value={userReg.email} name="email" className={!emailregex.test(userReg.email) === true ? 'shadow apperance-none border rounded-lg  py-2 px-3 placeholder:text-black text-red-700 dark:text-red-500 bg-sky-200 leading-tight focus:outline-none focus:shadow-outline' : 'shadow apperance-none border rounded-lg  py-2 px-3 placeholder:text-black text-black bg-sky-200 leading-tight focus:outline-none focus:shadow-outline'} placeholder='Email' />
                            </div>
                        </div>
                    </div>
                    <div className='mb-2 '>        
                        <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                            <div className='sm:col-span-4 justify-center '>
                                <input size={50} onChange={handleOnChange} type="password" value={userReg.password} name="password" className={error === true ? 'shadow apperance-none border rounded-lg  py-2 px-3 placeholder:text-black text-red-700 dark:text-red-500 bg-sky-200 leading-tight focus:outline-none focus:shadow-outline' : 'shadow apperance-none border rounded-lg  py-2 px-3 placeholder:text-black text-black bg-sky-200 leading-tight focus:outline-none focus:shadow-outline'} placeholder='Contraseña' />
                            </div>
                        </div>
                        <div className="text-xs text-gray-500">
                            Porfavor ingrese una contraseña que contenga 3 numeros y 3 caracteres
                        </div>
                    </div>
                    <div className=' mb-4 '>        
                        <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                            <div className='sm:col-span-4 justify-center '>
                                <input size={50} onChange={handleOnChange} type="password" value={veriPassword} name="veriPassword" className={error === true ? 'shadow apperance-none border rounded-lg  py-2 px-3 placeholder:text-black text-red-700 dark:text-red-500 bg-sky-200 leading-tight focus:outline-none focus:shadow-outline' : 'shadow apperance-none border rounded-lg  py-2 px-3 placeholder:text-black text-black bg-sky-200 leading-tight focus:outline-none focus:shadow-outline'} placeholder='Repita la Contraseña' />
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-2 px-18 flex justify-end flex-row gap-10">
                        <button type="button" className="flex gap-1 "onClick={() => window.location.href = '/info'}>
                            <XCircleIcon className="ml-1 h-10 w-10" aria-hidden="true" />
                            <div className="mt-2">
                                Cancel
                            </div>
                        </button>
                        <button type="button" className="flex gap-1 " onClick={handleRegister}>
                            <ArrowRightOnRectangleIcon className="ml-1 h-10 w-10" aria-hidden="true" />
                            <div className="mt-2">
                                Registrar
                            </div>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}
export default Home;