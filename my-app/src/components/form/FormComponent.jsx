import './FormComponent.css'

function FormComponent() {
  return (
    <>
      <h4>Simple Form</h4>
      <form>
        <div className='form-field'>
          <label htmlFor='name'>Full Name</label>
          <input type='text' id='name' />
        </div>
        <div className='form-field'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' />
        </div>
        <button className='form-button' type='submit'>Submit</button>
      </form>
    </>
  )
}

export default FormComponent
