import { Fragment, MouseEventHandler } from "react";


interface NotificationProps{
  title: string;
  description: string;
  isOpen: boolean;
  setIsOpen: CallableFunction;
  children: React.ReactNode;
  onClose: MouseEventHandler;  
}

const Notification=({title,description,isOpen,setIsOpen,children,onClose}:NotificationProps)=>{
    return (
        <Fragment>
            {isOpen && (
                <div className=' m-8 flex flex-col w-96 gap-10'>
                    <div className=' flex flex-row'>
                        <div className=' font-semibold w-3/4  text-3xl '>
                            {title}
                        </div>
                        <div className=' w-1/4 '>
                            {children}
                        </div>
                    </div>
                    <div className=' font-normal text-lg ml-4 '>
                        {description}
                    </div>
                </div>
            )}
        </Fragment>
    );
}

export  {Notification};
