import React from 'react';
import './App.css';

function Hero() {
  return (
    <section className="hero">
    <div className="falling-leaves">
      <img src="/flower.png" className="leaf leaf1" alt="leaf" />
      <img src="/froggie.png" className="leaf leaf2" alt="leaf" />
      <img src="/bear.png" className="leaf leaf3" alt="leaf" />
      <img src="/berry.png" className="leaf leaf4" alt="leaf" />
      <img src="/bulaklak.png" className="leaf leaf5" alt="leaf" />
      <img src="/leaf.png" className="leaf leaf6" alt="leaf" />
    </div>
    <h1>Hello, I'm <span>Trish-Anne</span></h1>
    <p>2nd Year | BSIT student</p>
    <a href="#hobbies" className="button">See My Works</a>
  </section>
);
}

function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <p> I am a 20 year old female, studying at the Dalubhasaan ng Lungsod ng Lucena, currently living in Lucena City.   </p>
    </section>
  );
}

//my works talaga 'to
function Hobbies() {
  const hobbies = [
    { name: 'Taking pictures', description: 'Capturing moments, mostly random.', image: 'pic3.jpg' },
    { name: 'Web Design', description: 'My focus on web designing is that it rely on the theme.', image: 'portfolio.PNG' },
    { name: 'Creative Writing', description: 'Writing soulful events that happened to be so plain.', image: 'pic4.jpg' },
  ];

  return (
    <section className="hobbies" id="hobbies">
      <h2>My Works</h2>
      <div className="grid">
        {hobbies.map((hobby, index) => (
          <div key={index} className="card">
            <img src={hobby.image} alt={hobby.name} className="hobby-image" />
            <h3>{hobby.name}</h3>
            <p>{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>If you have any concerns, feel free to reach out!</p>
      <a href="mailto:huidemt@gmail.com" className="contactButton">Email Me</a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Trish-Anne | All Rights Reserved</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
