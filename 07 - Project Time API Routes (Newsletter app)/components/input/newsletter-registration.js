import { useRef } from 'react';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const emailRef = useRef();
  async function registrationHandler(event) {
    event.preventDefault();
    // fetch user input (state or refs)
    const email = emailRef.current.value.trim();
    // optional: validate input
    if(email.includes('@') && email.includes('.')) {
      // send valid data to API
      const response = await fetch('/api', {
        method: 'POST',
        body: JSON.stringify({email}),
        headers: {
          'Type-Content': 'application/json'
        }
      });

      const data = await response.json();
      console.log(data);
    }
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={emailRef}
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
