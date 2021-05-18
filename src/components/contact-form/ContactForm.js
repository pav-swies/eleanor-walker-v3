import React from 'react';
import * as style from './contact-form.module.css';

const ContactForm = () => {
  return (
    <form className={style.form} method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div className={style.formRow}>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" />
      </div>
      <div className={style.formRow}>
        <label htmlFor="email">Your Email:</label>
        <input type="text" id="email" />
      </div>
      <div className={style.formRow}>
        <label htmlFor="message">Message:</label>
        <textarea id="message"></textarea>
      </div>
      <button class="cta form__button" type="submit">
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
