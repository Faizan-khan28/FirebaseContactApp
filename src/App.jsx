import { useEffect, useState } from 'react';
import './App.css'
import NavBar from './NavBar'
import { CiSearch } from "react-icons/ci";
import { FaCirclePlus} from "react-icons/fa6";
import {collection, getDocs, onSnapshot} from "firebase/firestore";
import {db} from "./config/firebase";
import ContactCard from './ContactCard';
import AddndUpdateContact from './AddndUpdateContact';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './NotFound';

function App() {

  const [contacts , setContacts] = useState([]);

  const [isOpen, SetOpen] = useState(false);

  // const [noContactFound , setNoContactFound ] = useState()

  let open = () => {
    SetOpen(true)
  }

  let close = () => {
    SetOpen(false)
  }

  useEffect(()=> {
    
    const getContacts = async () => {

      try {
        const Contacts = collection(db, "contacts");

        onSnapshot(Contacts, (snapshot) => {
          const ContactList = snapshot.docs.map( (Docs) => {
            return {
              id: Docs.id,
              ...Docs.data(),
            }
          })
          setContacts(ContactList);
          console.log(ContactList);
          return(ContactList);
        })
      } catch (error) {
        console.log("error");
      }
    }
    
    getContacts();

  },[]);


  const filterContacts = (event) => {
     const value = event.target.value;
     
     const Contacts = collection(db, "contacts");

     onSnapshot(Contacts, (snapshot) => {
       const ContactList = snapshot.docs.map( (Docs) => {
         return {
           id: Docs.id,
           ...Docs.data(),
         }
       })

       const filteredContacts = ContactList.filter( (contact) => (
        contact.name.toLowerCase().includes(value.toLowerCase())
       ))

       setContacts(filteredContacts);
       return(filteredContacts);
     })

  }

  

  return (
    <>
      <div className='max-w-[370px] mx-auto'>
        <NavBar/>
        
        <div className=' flex  gap-2 items-center '>


          <div className=' relative flex flex-grow items-center'>
           <CiSearch className='text-white ml-3  text-3xl absolute'/>

        
            <input onChange={filterContacts} type="text" placeholder='Search Contact' className='bg-transparent border ml-2
             border-white rounded-md h-10 pl-9 flex flex-grow text-white'
            />
         </div>

         <FaCirclePlus onClick={open} className='text-5xl text-white cursor-pointer' />

        </div>
        
        <div>{
            contacts <= 0 ? <NotFound/> : 
            contacts.map( (contact) => (
            <ContactCard contact={contact} key={contact.id}/>
          )) 
        }</div>
    

      </div>

      <AddndUpdateContact isOpen={isOpen} close={close}/>

      <ToastContainer position="bottom-center"/>
      
    </>
  )
}

export default App 