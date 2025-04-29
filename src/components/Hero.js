function Hero() {
    return (
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-500 to-indigo-600 text-white">
        <h1 className="text-5xl font-bold">Hi, I'm [Your Name]</h1>
        <p className="mt-4 text-xl">Web Developer | Designer | Coder</p>
        <a href="#projects" className="mt-6 bg-white text-indigo-600 px-4 py-2 rounded-full font-semibold">View My Work</a>
      </section>
    );
  }
  
  export default Hero;
  