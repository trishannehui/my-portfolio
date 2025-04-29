function Navbar() {
    return (
      <nav className="flex justify-between items-center p-6 shadow-md">
        <div className="text-2xl font-bold">MyPortfolio</div>
        <div className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  