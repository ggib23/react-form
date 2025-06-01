import { useState } from 'react'
import './FormComponent.css' 

export default function FormComponent() {
  const [formData, setFormData] = useState({
    'name': 'GG',
    'email': 'gg@gmail.com',
    'zipcode': '',
    'reason': 'I am hungry and would like a cheeseburger.',
    'voting': '',
    'climate': '',
    'healthcare': '',
    'education': '',
    'contact': 'email',
    'terms': 'true',
  })

  function submitForm(event) {
    event.preventDefault()
    // Validate input on submit
  }

  function inputChange(event) {
    switch(event.target.type) {
      case 'checkbox':
        console.log(`${event.target.name}: ${event.target.checked}`);
        setFormData({
          ...formData,
          [event.target.name]: event.target.checked
        })
        break;
      default:
        console.log(`${event.target.name}: ${event.target.value}`);
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        })
    }
  }
  
  return (
    <>
      <h4>Simple Form</h4>
      <form onSubmit={submitForm}>
        {/* Text */}
        <div className='form-field'>
          <label htmlFor='name'>Full Name</label>
          <input type='text' id='name' name='name' value={formData.name} onChange={inputChange} autoFocus='true' autoComplete="off" required />
        </div>
        <div className='form-field'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' value={formData.email} onChange={inputChange} autoComplete="off" required />
        </div>
        <div className='form-field'>
          <label htmlFor='zipcode'>Zip Code</label>
          {/* input type=number does not validate using minlength */}
          <input type='text' id='zipcode' name='zipcode' value={formData.zipcode} onChange={inputChange} pattern="\d{5}" minLength='5' title='Zip Code requires 5 digits' />
        </div>
        {/* Textarea */}
        <div className='form-field'>
          <label htmlFor='reason'>Reason for Supporting</label>
          <textarea id='reason' name='reason' value={formData.reason} onChange={inputChange} rows='2' cols='20' minLength='20' required ></textarea>
        </div>
        {/* Checkbox */}
        <fieldset className='fieldset-checkbox'>
          <legend>Interests</legend>
          <div>
            <input type='checkbox' id='voting' name='voting' checked={formData.voting} onChange={inputChange} value='voting' />
            <label htmlFor='voting'>Voting Rights</label>
          </div>
          <div>
            <input type='checkbox' id='climate' name='climate' checked={formData.climate} onChange={inputChange} value='climate' />
            <label htmlFor='climate'>Climate Action</label>
          </div>
          <div>
            <input type='checkbox' id='healthcare' name='healthcare' checked={formData.healthcare} onChange={inputChange} value='healthcare' />
            <label htmlFor='healthcare'>Healthcare</label>
          </div>
          <div>
            <input type='checkbox' id='education' name='education' checked={formData.education} onChange={inputChange} value='education' />
            <label htmlFor='education'>Education</label>
          </div>
        </fieldset>
        {/* Radio Buttons */}
        <fieldset className='fieldset-radio'>
          <legend>Preferred Contact Method</legend>
          <div>
            <input type='radio' id='method1' name='contact' checked={formData.contact === 'email'} value='email' onChange={inputChange} />
            <label htmlFor='method1'>Email</label>
          </div>
          <div>
            <input type='radio' id='method2' name='contact' checked={formData.contact === 'sms'} value='sms' onChange={inputChange} />
            <label htmlFor='method2'>SMS</label>
          </div>
        </fieldset>
        <div className='terms-checkbox'>
          <input type='checkbox' id='terms' name='terms' checked={formData.terms} onChange={inputChange} required />
          <label htmlFor='terms'> Check to agree to the Terms & Conditions of this form.</label>
        </div>
        {/* Submit Button */}
        <button className='form-button' type='submit'>Submit</button>
      </form>
    </>
  )
}
