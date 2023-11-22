import {
  HomeIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  BuildingStorefrontIcon,
  BuildingLibraryIcon,
  PencilSquareIcon,
  TrashIcon,
  XMarkIcon,
  DocumentCheckIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import { Sites } from '@/interfaces/user.interfaces';
import { updateFavSites } from '@/services/user.services';

const icons = [
  { content: <HomeIcon className='ml-1 h-10 w-10 mr-6' aria-hidden='true' /> },
  {
    content: (
      <BuildingOfficeIcon className='ml-1 h-10 w-10 mr-6' aria-hidden='true' />
    ),
  },
  {
    content: (
      <AcademicCapIcon className='ml-1 h-10 w-10 mr-6' aria-hidden='true' />
    ),
  },
  {
    content: (
      <BuildingStorefrontIcon
        className='ml-1 h-10 w-10 mr-6'
        aria-hidden='true'
      />
    ),
  },
  {
    content: (
      <BuildingLibraryIcon className='ml-1 h-10 w-10 mr-6' aria-hidden='true' />
    ),
  },
];

const Sitios = ({
  loadSites,
  setLoadSites,
}: {
  loadSites: Sites[];
  setLoadSites: React.Dispatch<React.SetStateAction<Sites[]>>;
}) => {
  const [modify, setModify] = React.useState({
    isAble: false,
    modifyId: 1,
  });

  const [newSite, setNewSite] = React.useState({
    userCode: 0,
    icon: 0,
    name: '',
    address: '',
  });

  const handleEdit = (id: number) => () => {
    setModify({
      isAble: true,
      modifyId: Number(id),
    });
    setNewSite(loadSites[Number(id)]);
  };

  const handleIcon = (newImage: number) => () => {
    setNewSite({
      ...newSite,
      icon: Number(newImage),
    });
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSite({
      ...newSite,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => () => {
    setModify({
      ...modify,
      isAble: false,
    });
  };

  const handleSave = (id: number) => async () => {
    setModify({
      ...modify,
      isAble: false,
    });
    const newData = loadSites.map((c, i) => {
      if (i === id) {
        return (c = newSite);
      } else {
        return c;
      }
    });
    updateDB(newData, { ...newSite, userCode: Number(1) });
    setLoadSites(newData);
  };

  const handleErase = (id: number, loadSites: Sites[]) => () => {
    const updatedRows = loadSites.filter(
      (site) => site.userCode !== id
    );
    const newData = updatedRows.map((row, index) => {
      return { ...row, usercode: index };
    });
    setLoadSites(newData);
    updateDB(newData, updatedRows[0]);
  };

  const updateDB = async (newData: Sites[], updatedData: Sites) => {
    try {
      const response = await updateFavSites(updatedData);

      if (response === undefined) {
        setLoadSites(loadSites);
      } else {
        setLoadSites(newData);
      }
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  return (
    <>
      {loadSites.map((e) => {
        return (
          <div className='mt-8 ml-20 w-full h-full flex '>
            <details>
              <summary className='w-[30rem] cursor-pointer flex list-none justify-between'>
                <div className='flex '>
                  {modify.isAble === true && modify.modifyId === e.userCode ? (
                    <div className='inline-block group'>
                      {icons[newSite.icon].content}
                      <div className=' group-hover:block hidden absolute z-1 min-w-[1px] bg-white'>
                        <button className='block' onClick={handleIcon(0)}>
                          {icons[0].content}
                        </button>
                        <button className='block' onClick={handleIcon(1)}>
                          {icons[1].content}
                        </button>
                        <button className='block' onClick={handleIcon(2)}>
                          {icons[2].content}
                        </button>
                        <button className='block' onClick={handleIcon(3)}>
                          {icons[3].content}
                        </button>
                        <button className='block' onClick={handleIcon(4)}>
                          {icons[4].content}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div> {icons[e.icon].content} </div>
                  )}
                  {modify.isAble === true && modify.modifyId === e.userCode ? (
                    <input
                      size={50}
                      onChange={handleOnChange}
                      type='text'
                      value={newSite.name}
                      name='name'
                      className='w-60 apperance-none border-2 border-black text-2xl font-semibold leading-6'
                    />
                  ) : (
                    <div className='text-2xl font-semibold leading-6 mt-2'>
                      {' '}
                      {e.name}{' '}
                    </div>
                  )}
                </div>
                {modify.isAble === true && modify.modifyId === e.userCode ? (
                  <div>
                    <button className='' onClick={handleSave(e.userCode)}>
                      <DocumentCheckIcon
                        className='ml-1 h-8 w-8 mr-2'
                        aria-hidden='true'
                      />
                    </button>
                    <button className='' onClick={handleCancel()}>
                      <XMarkIcon
                        className='ml-1 h-8 w-8 mr-2'
                        aria-hidden='true'
                      />
                    </button>
                  </div>
                ) : (
                  <div>
                    <button className='' onClick={handleEdit(e.userCode)}>
                      <PencilSquareIcon
                        className='ml-1 mt-1 h-8 w-8 mr-2'
                        aria-hidden='true'
                      />
                    </button>
                    <button
                      className=''
                      onClick={handleErase(e.userCode, loadSites)}
                    >
                      <TrashIcon
                        className='ml-1 h-8 w-8 mr-2'
                        aria-hidden='true'
                      />
                    </button>
                  </div>
                )}
              </summary>
              {modify.isAble === true && modify.modifyId === e.userCode ? (
                <input
                  size={50}
                  onChange={handleOnChange}
                  type='text'
                  value={newSite.address}
                  name='address'
                  className='w-60 apperance-none border-2 border-black text-xl font-medium leading-6 mt-4 ml-[4.2rem]'
                />
              ) : (
                <div className='text-xl font-medium leading-6 w-auto pt-4 pl-16'>
                  {' '}
                  {e.address}{' '}
                </div>
              )}
            </details>
          </div>
        );
      })}
    </>
  );
};
export { Sitios };
