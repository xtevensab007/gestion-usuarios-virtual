import { PencilSquareIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline'
import { Menu } from'@/components/menu';
import { changeUserInfo } from '@/services/user.services';
import { useState } from 'react';
const Home = () => {

    const [userInfo, setUserInfo] = useState({
        name: "",
        lastName: "",
        idDocument: 0,
        email: "",
        password: ""
    })

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        });
    };

    const handleOnclick = async () => {
        try {
            const response = await changeUserInfo(userInfo)
        } catch (error) {
            console.log("Error: ", error)
        }
    }

    return (
        <div className=' fixed inset-y-0 left-0 flex max-w-full '>
            <Menu />
            <div className="w-full px-18  flex flex-row  ml-11">
                <form className="flex flex-col px-18 pr-6 pt-6 pb-8 mb-4  ">
                    <div className=' mb-4 '>
                        <div className="flex place-content-start mb-10 mt-11 ">
                            <ClipboardDocumentListIcon className="ml-1 h-12 w-12" aria-hidden="true" />
                            <div className="my-4 h-12 sm:px-3 text-4xl font-bold leading-6 text-gray-900">
                                Información personal
                            </div>
                        </div>
                    </div>
                    <div className=' mb-4 mt-16 '>
                        <div className=' '>
                            <div className=' grid grid-flow-row sm:grid-flow-col gap-3 '>
                                <div className='w-20 sm:col-span-4 justify-center ml-16 mr-11 mb-4'>
                                    <label className="block text-gray-700 text-lg font-bold mb-2"><span>Nombres</span>  
                                
                                    <input size={50} onChange={handleOnChange} type="text" value={userInfo.name} name="names" className='text-center shadow apperance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='nombre ' />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='  '>
                            <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                                <div className='w-20 sm:col-span-4 justify-center ml-16 mr-11 mb-4'>
                                    <label className="block text-gray-700 text-lg font-bold mb-2"><span>Apellidos</span>
                                
                                    <input size={50} onChange={handleOnChange} type="text" value={userInfo.lastName} name="lastNames" className='text-center shadow apperance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='apellido ' />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='  '>
                            <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                                <div className='w-20 sm:col-span-4 justify-center ml-16 mr-11 mb-4'>
                                    <label className="block text-gray-700 text-lg font-bold mb-2"><span>Identificacion</span>
                                
                                    <input size={50} onChange={handleOnChange} type="text" value={userInfo.idDocument} name="idDocument" className='text-center shadow apperance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' placeholder='documento' />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='  '>
                            <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                                <div className='w-20 sm:col-span-4 justify-center ml-16 mr-11'>
                                    <label className="block text-gray-700 text-lg font-bold mb-2"><span>Correo</span>
                                
                                    <input size={50} onChange={handleOnChange} type="text" value={userInfo.email} name="email" className='text-center shadow apperance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' placeholder='correo ' />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </form>
                
                <div className=" w-18 h-60 mt-48  mr-6 text-lg font-semibold leading-6 ">
                    <button className="flex gap-1 " onClick={() => window.location.href = '/registro'}>
                        <PencilSquareIcon className="h-10" aria-hidden="true" />
                        <div className="mt-3">
                            Editar
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Home;