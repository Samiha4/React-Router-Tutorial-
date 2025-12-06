import React from 'react'
import ContactInfo from '../components/ContactInfo'
import { useNavigate } from 'react-router-dom'
function Contact() {
const navigate =useNavigate();

  return (
    <div>
     <h2>Contact page</h2>
     <div className="contact-buttons">
       <button  onClick={()=>navigate('info')}>contact Info</button>
       <button  onClick={()=>navigate('form')}>contact from</button>
     </div>
    </div>
  )
}

export default Contact