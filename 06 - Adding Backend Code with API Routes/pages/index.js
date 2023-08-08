function HomePage() {
  return <div>
    <form>
      <div>
        <label htmlFor="email">Your email address</label><br />
        <input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="message">Your feedback</label><br />
        <textarea id="message" rows={5}></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
}

export default HomePage;