import {
  MapPinIcon,
  BanknotesIcon,
  TrashIcon,
  PlusCircleIcon,
  PlayCircleIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { Travel } from '@/interfaces/user.interfaces';
import { addFavSite, deleteTravel } from '@/services/user.services';
import React from 'react';

const Viajes = ({
  loadTravels,
  setLoadTravels,
}: {
  loadTravels: Travel[];
  setLoadTravels: React.Dispatch<React.SetStateAction<Travel[]>>;
}) => {
  const progress = [
    {
      content: (
        <div className='font-medium text-blue-700' aria-hidden='true'>
          {' '}
          Confirm{' '}
        </div>
      ),
    },
    {
      content: (
        <div className='font-medium text-green-600' aria-hidden='true'>
          {' '}
          Completed{' '}
        </div>
      ),
    },
    {
      content: (
        <div className='font-medium text-gray-400' aria-hidden='true'>
          {' '}
          Cancelled{' '}
        </div>
      ),
    },
  ];

  const [checked, setChecked] = React.useState({
    checked: false,
    id: 0,
  });

  const handleAddFavs = async () => {
    if (checked.checked != true) {
      return;
    }
    const updatedRows = {
      userCode: 0,
      id: 0,
      imageId: 3,
      name: loadTravels[checked.id].destiny,
      address: loadTravels[checked.id].destiny,
      icon: 3,
    };

    try {
      const response = await addFavSite(updatedRows);

      if (response === undefined) {
      }
      
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const handleDelete = async () => {
    if (checked.checked != true) {
      return;
    }
    const updatedRows = loadTravels.filter(
      (loadSites) => loadSites.id !== checked.id
    );
    const newData = updatedRows.map((row, index) => {
      return { ...row, id: index };
    });
    try {
      const response = await deleteTravel(updatedRows[0]);

      if (response === undefined) {
        setLoadTravels(loadTravels);
      }

      setLoadTravels(newData);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const handleCheck = (id: number) => () => {
    setChecked({
      checked: !checked.checked,
      id: Number(id),
    });
  };

  return (
    <div className='flex gap-11'>
      <div className='flex flex-col'>
        {loadTravels.map((e) => {
          return (
            <div className='mt-8 ml-20 w-full h-full flex flex-col'>
              <div className=' w-[22rem] h-full  '>
                <div className='border rounded-xl shadow-md'>
                  <div className='mt-2 w-auto flex justify-between text-gray-800'>
                    <div className='flex'>
                      <PlayCircleIcon
                        className='ml-2 h-7 w-7 mr-4 text-green-500'
                        aria-hidden='true'
                      />
                      {e.origin}
                    </div>
                    <div className='mt-1 mr-4 w-5 h-5'>
                      <input
                        onChange={handleCheck(e.id)}
                        className='w-5 h-5'
                        type='checkbox'
                        name={'id' + e.id}
                      />
                    </div>
                  </div>
                  <div className='ml-[21px] h-6 w-6 flex text-gray-300 text-[9px]'>
                    | <br />|
                  </div>
                  <div className='w-auto flex text-gray-800'>
                    <MapPinIcon
                      className='ml-2 h-7 w-7 mr-4 text-red-500'
                      aria-hidden='true'
                    />
                    {e.destiny}
                  </div>
                  <hr className='w-88 my-2' />
                  <div className='w-auto flex justify-between'>
                    <div className='w-auto flex font-medium'>
                      <BanknotesIcon
                        className='ml-2 h-7 w-7 mr-4 mb-2'
                        aria-hidden='true'
                      />
                      ${e.cost.toFixed(2)}
                    </div>
                    <div className='w-auto flex'>
                      <button
                        className='w-auto flex'
                        disabled={e.completed === 2 ? true : false}
                      >
                        {progress[e.completed].content}
                        <ChevronRightIcon
                          className='ml-2 h-6 w-6 mt-[1px] mr-2 text-gray-400'
                          aria-hidden='true'
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className='flex flex-col mt-8'>
        <button
          onClick={handleDelete}
          className='flex flex-row font-semibold mb-3'
        >
          <TrashIcon className='ml-1 h-8 w-8 mr-2' aria-hidden='true' />
          Eliminar
        </button>
        <button className='flex flex-row font-semibold'>
          <PlusCircleIcon
            onClick={handleAddFavs}
            className='ml-1 h-8 w-8 mr-2'
            aria-hidden='true'
          />
          Agregar a sitios favoritos
        </button>
      </div>
    </div>
  );
};
export { Viajes };
