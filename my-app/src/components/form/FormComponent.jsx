import './FormComponent.css'

function FormComponent() {
  return (
    <>
      <h4>Simple Form</h4>
      <form>
        {/* Text */}
        <div className='form-field'>
          <label htmlFor='name'>Full Name</label>
          <input type='text' id='name' required />
        </div>
        <div className='form-field'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' required />
        </div>
        <div className='form-field'>
          <label htmlFor='zipcode'>Zip Code</label>
          {/* input type=number does not validate using minlength */}
          <input type='text' id='zipcode' pattern="\d{5}" minlength='5' title='Zip Code requires 5 digits' />
        </div>
        {/* Textarea */}
        <div className='form-field'>
          <label htmlFor='reason'>Reason for Supporting</label>
          <textarea id='reason' rows='2' cols='20' minlength='20' required ></textarea>
        </div>
        {/* Checkbox */}
        <fieldset className='fieldset-checkbox'>
          <legend>Interests</legend>
          <div>
            <input type='checkbox' id='voting' />
            <label htmlFor='voting'>Voting Rights</label>
          </div>
          <div>
            <input type='checkbox' id='climate' />
            <label htmlFor='climate'>Climate Action</label>
          </div>
          <div>
            <input type='checkbox' id='healthcare' />
            <label htmlFor='healthcare'>Healthcare</label>
          </div>
          <div>
            <input type='checkbox' id='education' />
            <label htmlFor='education'>Education</label>
          </div>
        </fieldset>
        {/* Radio Buttons */}
        <fieldset className='fieldset-radio'>
          <legend>Preferred Contact Method</legend>
          <div>
            <input type='radio' id='method1' name='contact' />
            <label htmlFor='method1'>Email</label>
          </div>
          <div>
            <input type='radio' id='method2' name='contact' />
            <label htmlFor='method2'>SMS</label>
          </div>
        </fieldset>
        <div className='terms-checkbox'>
          <input type='checkbox' id='terms' required />
          <label htmlFor='terms'> Check to agree to the Terms & Conditions of this form.</label>
        </div>
        {/* Submit Button */}
        <button className='form-button' type='submit'>Submit</button>
      </form>
    </>
  )
}

export default FormComponent
