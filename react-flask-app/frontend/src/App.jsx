import { useEffect, useState } from 'react'
import ContactList from './contactList'
import './App.css'
import ContactForm from './contactForm'

function App() {
  const [Contacts, setContacts] = useState([])
  
  useEffect(() => {
    fetchContacts()
  }, []);
  

  const fetchContacts = async()  => {
    const response = await fetch("http://127.0.0.1:5000/contacts")
    const data = await response.json()
    setContacts(data.Contacts)
    console.log(data.Contacts)
  }

  return <>
  <ContactList contacts={Contacts}/>
  <ContactForm />
  </>
}

export default App 