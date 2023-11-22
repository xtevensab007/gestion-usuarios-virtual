import {
  
  RectangleGroupIcon,
  BanknotesIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import {Menu} from '@/components/menu';



import {Tarjetas} from '@/components/tarjetas';

const Pagos = () => {
  

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
                      <RectangleGroupIcon
                        className='ml-1 h-12 w-12'
                        aria-hidden='true'
                      />
                      <div className='my-4 h-12 sm:px-3 text-4xl font-bold leading-6 text-gray-900'>
                        Tarjetas Bancarias
                      </div>
                    </div>
                    <div className='flex place-content-start mb-4  '>
                      <BanknotesIcon
                        className='ml-1 h-12 w-12'
                        aria-hidden='true'
                      />
                      <div className='my-4 h-12 sm:px-3 text-4xl font-bold leading-6 text-gray-900'>
                        Efectivo
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col w-full   '>
                    <Tarjetas />
                    
                  </div>
                </div>
                <div className=' w-18 h-60 mt-16  mr-6 text-lg font-semibold leading-6 '>
                  <button
                    className='flex gap-1 '
                    onClick={() => (window.location.href = '/agregar-tarjetas')}
                  >
                    <PlusIcon className='h-10' aria-hidden='true' />
                    <div className='mt-3'>Agregar Tarjeta</div>
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

export default Pagos;
