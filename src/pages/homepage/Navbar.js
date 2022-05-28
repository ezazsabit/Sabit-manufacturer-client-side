import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
  // ----------------user declaration
  const [user] = useAuthState(auth);
  console.log(user)
  const logout = () => {
    signOut(auth);
  };
  // .....................
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label for="drop" tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <input type="checkbox" id="drop" class="modal-toggle" />
     
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      {/* <label for="drop" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label> */}
        <li> <Link to='/home' className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto'>Home</Link></li>
        {/* <li tabindex="0">
          <a className="justify-between">
            Parent
            
          </a>
          </li> */}
         {
           user? <div >
           <li><p className='logOut my-auto text-danger signout d-flex align-items-center px-2 mx-auto' onClick={logout}>Log-out:{user?.displayName || user?.email} </p></li>
           <li><Link to='/dashboard' className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto'>Dash-Board</Link></li>
         </div>:<li><Link to='/login' className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto'>Sign-In</Link></li>
        
         }
         <li> <Link className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto' to='/register'>Sign-Up</Link> </li>
        
      
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">SM Co.</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li> <Link to='/home' className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto'>Home</Link></li>
      {
           user? <div className='flex '>
           <li><p className='logOut my-auto text-primary signout' onClick={logout}>Log-Out:{user?.displayName || user?.email}</p></li>
           <li><Link to='/dashboard' className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto'>Dash-Board</Link></li>
           {/* <li><Link to='/additems' className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto'>Add-Items</Link></li>
           <li><Link to='/myitems' className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto'>My-Items</Link></li> */}
         </div>:<li><Link to='/login' className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto'>Sign-In</Link></li>
        
         }
         <li> <Link className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto' to='/register'>Sign-Up</Link> </li>
        
   
    </ul>
  </div>
  
  <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open-dashboard</label>

</div>

        </div>
    );
};

export default Navbar;