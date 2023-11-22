import {
  ClipboardDocumentListIcon,
  CreditCardIcon,
  XCircleIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import {Menu} from '@/components/menu';


const Home = () => {
  return (
    <div>
      <div className='relative z-1'>
        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='fixed inset-y-0 left-0 flex max-w-full'>
              <Menu />
              <div className='w-full px-18  flex flex-row  ml-11'>
                <form className='tarea-formulario px-18 pr-6 pt-6 pb-8 mb-4  '>
                  <div className=' mb-4 '>
                    <div className='flex place-content-start mb-10 mt-11 '>
                      <ClipboardDocumentListIcon
                        className='ml-1 h-12 w-12'
                        aria-hidden='true'
                      />
                      <div className='my-4 h-12 sm:px-3 text-4xl font-bold leading-6 text-gray-900'>
                        Agregar Tarjetas
                      </div>
                    </div>
                  </div>
                  <div className=' mb-4 mt-16 ml-16'>
                  <div className=' mb-4 flex '>
                      <CreditCardIcon className='ml-1 h-10 w-10 mr-3'/>
                      <CreditCardIcon className='ml-1 h-10 w-10 mr-3'/>
                      <CreditCardIcon className='ml-1 h-10 w-10 mr-3'/>
                    </div>
                    <div className=' mb-6 '>
                      <div className=' grid grid-flow-row sm:grid-flow-col gap-3 '>
                         <div className='sm:col-span-4 justify-center '>
                          <input
                            size={50}
                            type='text'
                            className='tarea-input text-center shadow apperance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            placeholder='nombre Completo '
                            name='texto'
                          />
                        </div>
                      </div>
                    </div>
                    <div className=' mb-6 '>
                      <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                        
                        <div className='sm:col-span-4 justify-center '>
                          <input
                            size={50}
                            type='text'
                            className='text-center shadow apperance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            placeholder='Numero de Tarjeta'
                            name='apellido'
                          />
                        </div>
                      </div>
                    </div>
                    <div className=' mb-6 '>
                      <div className=' flex  '>
                        
                        <div className='mr-4'>
                          <input
                            size={30}
                            type='text'
                            className='text-center shadow apperance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline '
                            placeholder='fecha de expiracion'
                            name='id'
                          />
                        </div>
                        <div className=' '>
                          <input
                            size={10}
                            type='text'
                            className='text-center shadow apperance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline '
                            placeholder='CCV '
                            name='email'
                          />
                        </div>
                      </div>
                      <div className="w-full mt-2 px-18 flex justify-end flex-row gap-10">
                        <button type="button" className="flex gap-1 "onClick={() => window.location.href = '/metodos-pago'}>
                            <XCircleIcon className="ml-1 h-10 w-10" aria-hidden="true" />
                            <div className="mt-2">
                                Cancel
                            </div>
                        </button>
                        <button type="button" className="flex gap-1 " >
                            <ArrowRightOnRectangleIcon className="ml-1 h-10 w-10" aria-hidden="true" />
                            <div className="mt-2">
                                Registrar
                            </div>
                        </button>
                    </div>
                    </div>
                    
                  </div>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
