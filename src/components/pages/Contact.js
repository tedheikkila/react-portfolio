import { useState } from 'react';
import '../../App.css';

import { validateEmail } from '../../utils/helpers';

// exports contact component (handles name, email, message)
// displays error or sucess message depending upon user input
// uses validateEmail helper for user's email input 
export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('')

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    }
    else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

      if (!name) {
    setErrorMessage('Please provide your name')
      return
    } else if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email');
      return;
    } else if (!message) {
      setErrorMessage('Please type a message')
      return
    } 

    setSuccessMessage('Thanks. Contact me via email:')

    setErrorMessage('')

    setName('');
    setEmail('');
    setMessage('');

  };

  return (
    <div className="form-container">
      <h3 id="form-greeting">Hi {name}</h3>
      <br></br>
      <p>all fields required</p>
      <form className="form">
        <div className="form-group row">
          <label htmlFor="input-name" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="Full Name"
              id="input-name"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="input-email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              className="form-control"
              id="input-email"
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email@mail.com"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="input-message" className="col-sm-2 col-form-label">Message</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="input-message"
              value={message}
              name="message"
              onChange={handleInputChange}
              placeholder="Type question or comment here"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <button type="button" className="btn btn-primary" id="form-btn" onClick={handleFormSubmit}>Submit</button>
          </div>
        </div>
      </form>

      {successMessage && (
        <div>
          <h5 className="success-text">{successMessage}</h5>
          <h5 className="email"><a href="mailto:ted.heikkila@gmail.com">ted.heikkila@gmail.com</a></h5>
        </div>
      )}

      {errorMessage && (
        <div>
          <h5 className="error-text">{errorMessage}</h5>
        </div>
      )}
    </div>
  );
}
