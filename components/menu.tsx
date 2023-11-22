import React from 'react';
import {
  UserCircleIcon,
  IdentificationIcon,
  CreditCardIcon,
  MapPinIcon,
  MapIcon,
  UserGroupIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const Menu = () => {
  return (
    <div className='w-auto sm:grid-flow-col gap-3 hidden md:block '>
      <div className='flex h-full flex-col bg-white py-6 shadow-xl'>
        <div className='px-4 sm:px-2 '>
          <div className='h-32 w-32'>
            <div className='flex place-content-center'>
              <UserCircleIcon className='text-sm h-20 w-20' aria-hidden='true' />
            </div>
            <div className='text-base text-center font-semibold leading-6 text-gray-500'>
              Preferencial
            </div>
          </div>
          <hr className='my-4 w-88' color='text-black' />
          <div className='h-14 sm:grid-flow-col text-2xl font-semibold leading-6 text-gray-900'>
            Mi perfil
          </div>
          <div className=' min-w-0 flex flex-col gap-5 justify-center'>
            
            <div className='flex justify-center gap-10 rounded-lg w-80 sm:px-2 text-lg font-semibold leading-6 hover:bg-cyan-400/[.3] hover:text-blue-600 '>
              <IdentificationIcon
                fill='black'
                className='mx-2 h-10 w-10'
                aria-hidden='true'
              />
              <Link className='h-10 w-full items-center' href='/info'>
                Información Personal 
              </Link>
            </div>
            
            <div className='flex justify-center gap-10 rounded-lg w-80 sm:px-2 text-lg font-semibold leading-6 hover:bg-cyan-400/[.3] hover:text-blue-600 '>
              <CreditCardIcon
                fill='black'
                className='mx-2 h-10 w-10'
                aria-hidden='true'
              />
              <Link className='h-10 w-full items-center' href='/metodos-pago'>
                Métodos de Pago
              </Link>
            </div>
            <div className='flex justify-center gap-10 rounded-lg w-80 sm:px-2 text-lg font-semibold leading-6 hover:bg-cyan-400/[.3] hover:text-blue-600 '>
              <MapPinIcon
                fill='black'
                className='mx-2 h-10 w-10'
                aria-hidden='true'
              />
              <Link className='h-10 w-full items-center' href='/sitios-fav'>
                Sitios Favoritos 
              </Link>
            </div>
            <div className='flex justify-center gap-10 rounded-lg w-80 sm:px-2 text-lg font-semibold leading-6 hover:bg-cyan-400/[.3] hover:text-blue-600 '>
              <MapIcon
                fill='black'
                className='mx-2 h-10 w-10'
                aria-hidden='true'
              />
              <Link className='h-10 w-full items-center' href='/historial-viajes'>
                Historial de Viajes
              </Link>
            </div>
            <div className='flex justify-center gap-10 rounded-lg w-80 sm:px-2 text-lg font-semibold leading-6 hover:bg-cyan-400/[.3] hover:text-blue-600 '>
              <UserGroupIcon
                fill='black'
                className='mx-2 h-10 w-10'
                aria-hidden='true'
              />
              <Link className='h-10 w-full items-center' href='/perfil-familiar'>
                Perfil Familiar
              </Link>
            </div>
          </div>
          <hr className='w-88 my-4' />
        </div>
        <div className='mt-auto flex justify-center gap-10 rounded-lg w-80 sm:px-2 text-lg font-semibold leading-6 hover:bg-cyan-400/[.3] hover:text-blue-600 '>
        <HomeIcon
                fill='black'
                className='mx-2 h-10 w-10'
                aria-hidden='true'
              />
              <Link className='h-10 w-full mt-2 items-center' href='/perfil-familiar'>
                Ir a inicio
              </Link>
        </div>
      </div>
    </div>
  );
};
export { Menu };
