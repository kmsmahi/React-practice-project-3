import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100/80 sticky top-0 z-50 backdrop-blur-md border-b border-base-200 px-4 lg:px-8 container mx-auto">
  <div className="navbar-start">
    {/* Mobile Menu */}
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-xl w-52 border border-base-200">
        <li><a>Dashboard</a></li>
        <li>
          <span className="menu-title text-xs uppercase font-bold opacity-50">Resources</span>
          <ul>
            <li><a>Documentation</a></li>
            <li><a>API Reference</a></li>
          </ul>
        </li>
        <li><a>Pricing</a></li>
      </ul>
    </div>
    
    {/* Branding */}
    <a className="flex items-center gap-2 cursor-pointer group">
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-content font-bold group-hover:scale-110 transition-transform">
        D
      </div>
      <span className="text-xl font-bold tracking-tight">Daisy University</span>
    </a>
  </div>

  {/* Desktop Menu */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-1 px-1 font-medium">
      <li><a className="rounded-lg">Home</a></li>
      <li><a className="rounded-lg">Faculty</a></li>
      <li><a className="rounded-lg">Students</a></li>
      <li><a className="rounded-lg">Contact</a></li>
    </ul>
  </div>

  <div className="navbar-end gap-2">
    <a className="btn btn-ghost btn-sm hidden md:inline-flex">Sign In</a>
    <a className="btn btn-primary btn-sm md:btn-md shadow-md hover:shadow-lg transition-all">
      + New Assignment
    </a>
  </div>
</div>
        </div>
    );
};

export default Navbar;