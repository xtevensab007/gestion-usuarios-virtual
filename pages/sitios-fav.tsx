import { PlusCircleIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Menu } from '@/components/menu';
import React, { useEffect, useState } from 'react';
import { Sitios } from '@/components/sitios';
import { Sites } from '@/interfaces/user.interfaces';
import { loadFavSites } from '@/services/user.services';

const testSites: Sites[] = [];

const SitiosFavoritos = () => {
  const [sites, setSites] = useState(testSites);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await loadFavSites();
        

        if (!response) {
          return;
        }

        setSites([response]);
      } catch (error) {
        console.error("Error: ", error);
        setSites([]);
      }
    };

    fetchData();
  }, []);

  const handleAdd = () => {
    const newSite: Sites = {
      userCode: sites.length,
      icon: 0,
      name: '',
      address: '',
    };
    setSites([...sites, newSite]);
  };

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
                      <MapPinIcon
                        className='ml-1 h-12 w-12'
                        aria-hidden='true'
                      />
                      <div className='my-4 h-12 sm:px-3 text-4xl font-bold leading-6 text-gray-900'>
                        Sitios Favoritos
                      </div>
                      <div className='mt-4 ml-10 text-lg font-semibold leading-6 '>
                        <button className='flex gap-2 ' onClick={handleAdd}>
                          <div className='mt-1'>Agregar</div>
                          <PlusCircleIcon className='h-8' aria-hidden='true' />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col w-full   '>
                    <Sitios loadSites={sites} setLoadSites={setSites} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitiosFavoritos;