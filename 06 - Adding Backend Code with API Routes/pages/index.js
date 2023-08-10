import { useRef } from "react";

function HomePage() {
  const emailRef = useRef();
  const messageRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify({email: emailRef.current.value, message: messageRef.current.value}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => console.log(error))
    .finally(() => {
      emailRef.current.value = '';
      messageRef.current.value = '';
    })
  }

  return <div>
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="email">Your email address</label><br />
        <input ref={emailRef} type="email" id="email" />
      </div>
      <div>
        <label htmlFor="message">Your feedback</label><br />
        <textarea ref={messageRef} id="message" rows={5}></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
}

export default HomePage;