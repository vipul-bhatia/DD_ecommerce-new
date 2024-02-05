
import React, { useState } from 'react';
// import { db } from '../firebase/config.js';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  

  const handleSubscribe = async (e) => {
    e.preventDefault();
  
    // Validate form inputs
    if (!name || !email || !contact) {
      setError('All fields are required');
      return;
    }
  
    // try {
    //   await db.collection('ResQ-Notify-PreBook').add({ name, email, contact });
    //   setName('');
    //   setEmail('');
    //   setContact('');
    //   setMessage('Thanks for Pre-Booking!');
    //   setError(''); // Clear the error message on success
    // } catch (error) {
    //   console.error('Error adding email: ', error);
    //   setMessage('Failed to subscribe. Try again later.');
    // }
  };
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="flex-wrapper">
          <div className="form-container">
            <div className="form-wrapper">
              <h2 className="form-title">
                Contact Us by filling the below form or call us on +91 9680046943
                <br/>
                Address:Jaipur , Rajasthan ,302020
              </h2>
              <p className="form-description">
                You can contact us for any queries or suggestions. We will be happy to help you.
              </p>
              <form onSubmit={handleSubscribe}>
                <div className="form-inner-wrapper">
                  <div className="input-group">
                    <label htmlFor="name" className="input-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="input-field"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="email" className="input-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="input-field"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="number" className="input-label">
                      Your Phone Number
                    </label>
                    <input
                      type="number"
                      placeholder="Enter your phone number"
                      className="input-field"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-group-full">
                    <label htmlFor="message" className="input-label">
                      Any Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Enter your Message"
                      className="textarea-field"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="submit-group">
                    <button type="submit" className="submit-button">
                      Submit Query
                    </button>
                    <p className="message-text">{message}</p>
                    {error && <p className="error-text">{error}</p>}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="newsletter-box-container">
            {/* Assume NewsLatterBox is a component you will include here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
