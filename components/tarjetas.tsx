import { CreditCardIcon, PencilSquareIcon } from "@heroicons/react/24/outline";


const Tarjetas= () => {
    return (
        <div className="ml-20 flex flex-col w-full pb-4 h-full  ">
            <div className="pt-4 mb-4 flex h-20 w-full  border rounded-lg">
                <CreditCardIcon className="mx-4 mt-1 h-10 w-10 mr-16" />
                <label >**************************</label>
                <div className=" h-4 w-18 content-center">
                    <PencilSquareIcon className="mx-4 mt-1 h-10 w-8" aria-hidden="true" />
                </div>
            </div>
        </div>
    )
}
export  {Tarjetas};