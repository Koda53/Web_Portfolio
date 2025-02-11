function Navbar() {
   
    return(
      //REMEMBER TO FIGURE OUT HOW TO KEEP HOME CONTACT ABOUT CENTERED
        <nav className="fixed top-0 left-0 w-full h-20 bg-emerald-200 shadow-md flex items-center px-7 z-50">
      <div className="flex items-center justify-between w-3/5">
        <div className="text-2xl font-bold">
            <h>Some Logo</h>
            </div>
        <ul className="flex space-x-x text-lg font-semibold">
        <li><a href="#home" className="hover:bg-emerald-300 px-4 py-2 rounded">Home</a></li>
          <li><a href="#about" className="hover:bg-emerald-300 px-4 py-2 rounded">About</a></li>
          <li><a href="#contact" className="hover:bg-emerald-300 px-4 py-2 rounded">Contact</a></li>
        </ul>
      </div>
    </nav>
    );
}

export default Navbar;