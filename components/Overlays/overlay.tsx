import { Fragment, MouseEventHandler, ReactNode } from "react";
import { XCircleIcon } from '@heroicons/react/24/solid'

interface OverlayProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onClose: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
}

const Overlay = ({ isOpen, setIsOpen, onClose, children }: OverlayProps) => {

    const handleClose = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Fragment>
            {isOpen && (
                <div className=''>
                    <button type="button" onClick={handleClose} className=' bg-black bg-opacity-40 w-screen h-screen fixed z-9' />
                    <div className='fixed top-0 bottom-16 right-0 left-0 m-auto z-10 w-fit h-fit'>
                        <button onClick={handleClose} type="button" className="">
                            <XCircleIcon className="h-10 w-10" aria-hidden="true" />
                        </button>
                        <div className=' relative bottom-4 left-7 '>
                            <div className='bg-white m-auto flex items-center flex-col w-fit h-fit rounded-md border-black border-2'>
                                <div className='flex flex-row justify-between w-fit h-fit'>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
}

export { Overlay };