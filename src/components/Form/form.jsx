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
      <div className='Main-elementor-container'>
         <div className='help-element-widget-container'>
          <h2 className='help-heading-title'>
            Need Help With
          </h2>
          <p className='help-element-content'>
            Designing an experience? <br/>
            Building a product? <br/>
            Scaling technology? <br/>
            Need to grow your digital business?
          </p>
          <p className='help-element-contact-content'>
            <a href='mailto:contact@mobilelive.ca'>
              contact@mobilelive.ca
            </a>
          </p>
          <p className='help-element-contact-content'>
            <a href='tel:+16474995585'>
              +1 (647) 499-5585
            </a>
          </p> 

         </div>

      <div className='form-element-container'>
      <form onSubmit={handleSubmit}>
        <div className='form-element-holder'>
          <label className='form-label'>First Name<span>*</span></label>
          <div>
          <input className='form-text-field' type="text" name="firstName"   
            value={inputs.firstName || ""} 
            onChange={handleChange}   required />
          </div>
        </div>
        
        <div className='form-element-holder'>
          <label className='form-label'>Last Name<span>*</span></label>
          <div>
            <input className='form-text-field' type="text" name="lastName"            
              value={inputs.lastName || ""} 
              onChange={handleChange} required />
          </div>
        </div>
        
        <div className='form-element-holder'>
          <label className='form-label'>Job Title<span>*</span></label>
          <div>
            <input className='form-text-field' type="text" name="title"           
              value={inputs.title || ""} 
              onChange={handleChange} required />          
          </div>
        </div>
          
        <div className='form-element-holder'>
          <label className='form-label'>Department<span>*</span></label>
          <div>
            <input className='form-text-field' type="text" name="department"          
               value={inputs.department || ""} 
              onChange={handleChange}  required />
          </div>
        </div>

        <div className='form-element-holder'>
          <label className='form-label'>Business Email<span>*</span></label>
          <div>
            <input className='form-text-field' type="text" name="businessEmail"          
               value={inputs.businessEmail || ""} 
              onChange={handleChange}  required />
          </div>
        </div>

        <div className='form-element-holder'>
          <label className='form-label'>Business Name<span>*</span></label>
          <div>
            <input className='form-text-field' type="text" name="businessName"          
               value={inputs.businessName || ""} 
              onChange={handleChange}  required />
          </div>
        </div>

        <div className='form-element-holder'>
          <label className='form-label'>Industry<span>*</span></label>
          <div>
            <input className='form-text-field' type="text" name="industry"          
               value={inputs.industry || ""} 
              onChange={handleChange}  required />
          </div>
        </div>

        <div className='form-element-holder'>
          <label className='form-label'>How did you hear about us?<span>*</span></label>
          <div>
            <input className='form-text-field' type="text" name="aboutUs"          
               value={inputs.aboutUs || ""} 
              onChange={handleChange}  required />
          </div>
        </div>

        <div className='form-element-holder'>
          <label className='form-label'>Your Message<span>*</span></label>
          <div>
            <textarea className='form-textarea' name="message"        
            value={inputs.message || ""} 
            onChange={handleChange}
            required></textarea>
          </div>
          </div>
          <div className='checkbox-holder'>
            <input type="checkbox" name="checkbox" id='form-checkbox'        
              value={inputs.checkbox || ""} 
              onChange={handleChange} required/>
            <label className='form-message'>Yes, I would like to receive the latest content from your website.</label>       
          </div>
        
          <button className= "form-button" type="submit">
            <span>Submit</span>
          </button>
        </form>
      </div>
         
      </div>
    )
  }
  
export default FormComponent;