import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Chay
        </h1>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
          <li className="hover:text-blue-500 cursor-pointer">Skills</li>
          <li className="hover:text-blue-500 cursor-pointer">Experience</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>
        {/* Mobile button */}
        {open ? <button className="md:hidden text-3xl text-gray-900 dark:text-white"
          onClick={() => setOpen(!open)}
        >
            ✖
        </button> : <button className="md:hidden text-3xl text-gray-900 dark:text-white" onClick={() => setOpen(!open)}>
            ☰
        </button>
        }
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700">
          <ul className="flex flex-col p-6 gap-6 text-gray-700 dark:text-gray-200">
            <li className="hover:text-blue-500">Home</li>
            <li className="hover:text-blue-500">About</li>
            <li className="hover:text-blue-500">Skills</li>
            <li className="hover:text-blue-500">Experience</li>
            <li className="hover:text-blue-500">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;