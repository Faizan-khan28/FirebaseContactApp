import { collection, doc, updateDoc } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import ModelCard from "./ModelCard";
import {Form, Field, Formik } from 'formik';
import { db } from "./config/firebase";
import { toast } from "react-toastify";

export default function AddndUpdateContact ({isOpen, close , isUpdate, contact}) {

    const AddContact = async (contact) => {
        try {
            const contacts = collection(db, "contacts")
            await addDoc(contacts, contact)
            close()
            toast.success("Contact Added Succesfully")
        } catch (error) {
            console.log(error)
        }
    }

    const updateContact = async (contact , id) => {
        try {
            const contacts = doc(db, "contacts", id)
            await updateDoc(contacts, contact)
            close()
            toast.success("Update Contact Succesfully")
        } catch (error) {
            console.log(error)
        }
    }

    

    return (
        <div className="">
            <ModelCard isOpen={isOpen} close={close}>

              <Formik initialValues={
                isUpdate 
              ? {
                name: contact.name,
                email: contact.email
               }

             : {
                  name: "",
                  email: ""
                }}

                 onSubmit={(values) => {
                    console.log(values)
                    isUpdate ? 
                    updateContact(values , contact.id) :
                    AddContact(values)
                 }}
                >

                <Form className="flex flex-col gap-1">
                    <label htmlFor="name">Name</label>
                    <Field type="name" name="name" placeholder="Enter Name" className=" border pl-2 h-10 rounded-sm"  />

                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" placeholder="Enter Email" className="border pl-2 h-10 rounded-sm" />

                    <button type="submit"  className="border bg-[#F6820C] rounded-sm font-medium mt-2 mb- h-8">{isUpdate ? "Update" : "Add"} Contact</button>
                </Form>

              </Formik>

            </ModelCard>
        </div>
    )
}