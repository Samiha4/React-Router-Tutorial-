import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <form action="">
        <input type="text" placeholder='Name' /> <br />
        <input type="email" placeholder='Email' /> <br />
        <textarea placeholder='Massage'></textarea> <br />
        <button type='submit'>submit</button> <br />
      </form>
    </div>
  )
}

export default ContactForm
