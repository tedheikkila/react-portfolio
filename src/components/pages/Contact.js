import { useState } from 'react';
import '../../App.css';

import { validateEmail } from '../../utils/helpers';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email');
      return;
    } else if (!name) {
      setErrorMessage('Please provide your name')
      return
    } else if (!message) {
      setErrorMessage('Please type a message')
      return
    }
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h3>Hello {name}</h3>
      <form className="form">
        <div className="form-group row">
          <label for="input-name" className="col-sm-2 col-form-label">Name</label>
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
          <label for="input-email" className="col-sm-2 col-form-label">Email</label>
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
          <label for="input-message" class="col-sm-2 col-form-label">Message</label>
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
            <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
          </div>
        </div>
      </form>

      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
