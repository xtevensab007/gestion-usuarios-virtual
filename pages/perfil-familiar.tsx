import {
    PencilSquareIcon,
    TrashIcon,
    UserCircleIcon,
    PlusIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';
import { Menu } from '@/components/menu';

import Link from 'next/link';

const Familia = () => {


    return (
        <div>
            <div className='relative z-1'>
                <div className='fixed inset-0 overflow-hidden'>
                    <div className='absolute inset-0 overflow-hidden'>
                        <div className='fixed inset-y-0 left-0 flex max-w-full'>
                            <Menu />
                            <div className='w-full px-18  flex flex-row  ml-11'>
                                <div className='h-full w-full '>
                                    <div className=' mb-4 '>
                                        <div className='flex place-content-start  mt-11 '>
                                            <UserGroupIcon
                                                className='ml-1 h-12 w-12'
                                                aria-hidden='true'
                                            />
                                            <div className='my-4 h-12 sm:px-3 text-4xl font-bold leading-6 text-gray-900'>
                                                Perfil Familiar
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-16 ml-20 flex flex-col w-full pb-4 h-full  ">
                                        <div className="pt-4 mb-4 flex h-20 w-full  border rounded-lg">
                                            <UserCircleIcon className="mx-4 mt-1 h-10 w-10 " />
                                            <label className='ml-2 '>nombre</label>

                                            <div className=" h-4 w-18 content-center">
                                                <Link className='h-10 w-full items-center' href='#'>
                                                    <PencilSquareIcon className=" ml-16 mt-1 h-10 w-8" aria-hidden="true" />
                                                </Link>
                                            </div>
                                            <div className=" h-4 w-18 content-center">
                                                <Link className='h-10 w-full items-center' href='#'>
                                                    <TrashIcon className=" ml-16 mt-1 h-10 w-8" aria-hidden="true" />
                                                </Link>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className=' w-18 h-60 mt-16 ml-20 mr-6 text-lg font-semibold leading-6 '>
                                    <button
                                        className='flex gap-1 '
                                        onClick={() => (window.location.href = '/agregar-tarjetas')}
                                    >
                                        <PlusIcon className='h-10' aria-hidden='true' />
                                        <div className='mt-3'>Agregar Personas</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Familia;