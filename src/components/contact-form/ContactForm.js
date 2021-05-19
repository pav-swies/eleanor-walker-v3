import React from 'react';
import * as style from './contact-form.module.css';

const ContactForm = () => {
  return (
    <form
      className={style.form}
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
      action="/thank-you"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div className={style.formRow}>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className={style.formRow}>
        <label htmlFor="email">Your Email:</label>
        <input type="text" id="email" name="email" required />
      </div>
      <div className={style.formRow}>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="6" required></textarea>
      </div>
      <input className={style.formSubmit} type="submit" value="Send message" />
    </form>
  );
};

export default ContactForm;
