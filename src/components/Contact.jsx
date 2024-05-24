

const Contact = () => {
  return (
    <section id="contact" className="contact-page-wrapper">
      <h2 className="primary-heading">Have Question In Mind?</h2>
      <h3 className="primary-heading">Let Us Help You</h3>
      <form action="submit" className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </form>

      
    </section>
  );
};

export default Contact;