import { PiUserCircle } from "react-icons/pi";
import { TbEditCircle } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./config/firebase";
import useDisclouse from "./useDisclouse";
import AddndUpdateContact from "./AddndUpdateContact";
import { toast } from "react-toastify";
export default function ContactCard ({contact}) {
  
  const {isOpen , open, close} = useDisclouse()

  let deleteCard = async (id) => {
    try {
      const deleteref = doc(db, "contacts", id)
     await  deleteDoc(deleteref)
     toast.success("Contact Deleted Succesfully")
    } catch (error) {
     console.log(error)
    }
   }
 
     

    return (

      <>
        <div key={contact.id} className=' bg-[#FFEAAE] flex justify-between items-center mt-4 pr-2 h-16 rounded-md'>

        <div className=" flex items-center gap-2" >
             
         <PiUserCircle className=' text-[#F6820C] text-5xl ml-1' />

          <div>
             <h2 className=' text-2xl font-medium '>{contact.name}</h2>
             <h4>{contact.email}</h4>
          </div>
          
        </div>

        <div className=' flex gap-2 '>
              <TbEditCircle onClick={open} className='text-3xl  cursor-pointer' />
              <MdDelete onClick={()=> deleteCard(contact.id)} className='text-3xl text-[#5F00D9] cursor-pointer' />
         </div>


       </div>

       <AddndUpdateContact contact={contact} isOpen={isOpen} close={close}  isUpdate />

    </>
    
    )
   
}