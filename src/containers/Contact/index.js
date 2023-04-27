import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <p>
        If you have any questions or comments, please feel free to contact me
        using the form below:
      </p>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
