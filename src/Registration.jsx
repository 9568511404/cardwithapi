import React, { useState } from 'react';

function Registration() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
const [modaltwo,setModaltwo]= useState(false)

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, e.g., send it to a server
    console.log(formData);
    // closeModal();
  };

  const fun =(e)=>{
    
    setModaltwo(true)
  }

  const fun2 =(e)=>{
   
    setModaltwo(false)
  setShowModal (false)
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h4>Registration</h4>
            <form onSubmit={handleSubmit}>
            <div className='inform'>
              <label htmlFor="firstName">First Name:
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              /></label>

<label htmlFor="middleName">Middle Name:
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              /> </label>

              <label htmlFor="lastName">Last Name:
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              /> </label></div> <br />

<div className='inform'>
              <label htmlFor="firstName">First Name:
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              /></label>

              <label htmlFor="lastName">Last Name:
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              /> </label></div> <br />



<div className='inform'>
              <label htmlFor="firstName">First Name:
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              /></label>

              <label htmlFor="lastName">Last Name:
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              /> </label></div> <br />
             
              <button type="submit" onClick={()=>setModaltwo(true)}>Next</button>
            </form>
          </div>
        </div>
      )}

      {modaltwo && (
        <div className="modal" onClick={()=>fun2()}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h4>Registration 2</h4>
            <form onSubmit={handleSubmit}>
            <div className='inform'>
              <label htmlFor="firstName">First Name:
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              /></label>

<label htmlFor="middleName">Middle Name:
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              /> </label>

              <label htmlFor="lastName">Last Name:
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              /> </label></div> <br />

<div className='inform'>
              <label htmlFor="firstName">First Name:
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              /></label>

              <label htmlFor="lastName">Last Name:
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              /> </label></div> <br />



<div className='inform'>
              <label htmlFor="firstName">First Name:
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              /></label>

              <label htmlFor="lastName">Last Name:
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              /> </label></div> <br />
             
              <button type="submit" onClick={()=>fun()}>Next</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Registration;
