function Projects() {
    return (
      <section id="projects" className="py-20 px-8 bg-gray-100">
        <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
            <p>A cool project that solves real-world problems.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Project 2</h3>
            <p>Another awesome project that I'm proud of.</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;
  