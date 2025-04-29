function Contact() {
    return (
      <section id="contact" className="py-20 px-8">
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
        <form className="max-w-xl mx-auto flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="border p-3 rounded" />
          <input type="email" placeholder="Your Email" className="border p-3 rounded" />
          <textarea placeholder="Your Message" className="border p-3 rounded"></textarea>
          <button type="submit" className="bg-indigo-600 text-white py-3 rounded font-semibold">Send</button>
        </form>
      </section>
    );
  }
  
  export default Contact;
  