import { IoIosCloseCircleOutline } from "react-icons/io";

export default function ModelCard ({isOpen, close, children}) {
   
    return (
      <div className="flex justify-center">
      {
        isOpen && 
        <div  className=" flex justify-center z-40 backdrop-blur h-screen  w-screen top-0 absolute">

        <div className="z-50 relative min-w-[350px] h-[] bg-white p-3 rounded-md m-auto">

          <div className=" text-3xl flex justify-end cursor-pointer ">
            <IoIosCloseCircleOutline onClick={close} />
          </div>

          <div>{children}</div>

       </div>
       
       </div>
      }

      </div>
    )
}