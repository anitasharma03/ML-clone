import React, {useState, useEffect } from 'react';
import './form.css';
import axios from 'axios';

function FormComponent() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
      event.preventDefault();    
      // fetch('https://demo5216204.mockable.io/formdata',{
      //   method: 'POST',
      //   body: JSON.stringify(inputs)
      // })
      axios.post("https://demo5216204.mockable.io/formdata", JSON.stringify(inputs, null, 2)
      ) 
      .then(() =>{
        console.log('Data submitted successfully')
      })
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <div className='main-form'>
            <h2>User Information</h2>
        <div>

        <label className='Form-label'>First Name <span aria-hidden='true'>*</span></label>
        <div>
        <input className='form-textarea'
          type="text" 
          name="firstName" 
          value={inputs.firstName || ""} 
          onChange={handleChange}
          required
        />
       </div>

        </div>
        <div>

        <label className='Form-label'>Last Name <span aria-hidden='true'>*</span></label>
        <div>
          <input className='form-textarea' 
            type="text" 
            name="lastName" 
            value={inputs.lastName || ""} 
            onChange={handleChange}
            required
          />
          </div>

        </div>
        <div>

          <label className='Form-label'>Job Title <span aria-hidden='true'>*</span></label>
          <div>
          <input className='form-textarea' 
            type="text" 
            name="title" 
            value={inputs.title || ""} 
            onChange={handleChange}
            required
          />
          </div>

          </div>
          <div>

          <label className='Form-label'>Department <span aria-hidden='true'>*</span></label>
          <div>
          <input className='form-textarea' 
            type="text" 
            name="department" 
            value={inputs.department || ""} 
            onChange={handleChange}
            required
          />
          </div>

          </div>
          <div>

          <label className='Form-label'>Your Message <span aria-hidden='true'>*</span></label>
          <div>
          <textarea className='form-textarea' 
            name="message" 
            value={inputs.message || ""} 
            onChange={handleChange}
            required></textarea>
         </div>

         <div>

         <input 
            type="checkbox" 
            name="checkbox" 
            value={inputs.checkbox || ""} 
            onChange={handleChange}
            required
          />
          <label>Yes, I would like to receive the latest content from your website.</label>
        
          </div>
          </div>
          <input className= "form-button" type="submit" />
        </div>


      </form>   
    )
  }
  
export default FormComponent;