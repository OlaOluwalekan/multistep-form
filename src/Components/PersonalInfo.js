import React from "react"

const PersonalInfo = () => {
  return (
    <div className='personal-info-container'>
      <h2 className='personal-info-header'>Personal info</h2>
      <p className='info'>
        Please provide your name, email address, and phone number
      </p>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        id='name'
        placeholder='e.g. Stephen King'
      />
      <label htmlFor='email'>Email Address</label>
      <input
        type='email'
        name='email'
        id='email'
        placeholder='e.g. stephenking@lorem.com'
      />
      <label htmlFor='tel'>Phone Number</label>
      <input type='tel' name='tel' id='tel' placeholder='e.g. +1 234 567 890' />
    </div>
  )
}

export default PersonalInfo
