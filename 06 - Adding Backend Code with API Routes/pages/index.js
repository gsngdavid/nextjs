import { useRef, useState } from "react";

function HomePage() {
  const [ feedbackItems, setFeedbackItems] = useState([]);

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

  function loadFeedbackHandler() {
    fetch('/api/feedback')
    .then(response => response.json())
    .then(data => {
      setFeedbackItems(data.feedback);
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
    <hr />
    <button onClick={loadFeedbackHandler}>Load feedback</button>
    <ul>
      {feedbackItems.map(item => <li key={item.id}>{item.message}</li>)}
    </ul>
  </div>
}

export default HomePage;