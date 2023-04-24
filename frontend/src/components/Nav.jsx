/* eslint-disable */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = (menuOption) => {
    if (menuOption === 'personal') {
      navigate('/profile');
    } else if (menuOption === 'setting') {
      navigate('/settings');
    } else if (menuOption === 'logout') {
      handleLogout();
    }
    setShowMenu(false);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <nav className="relative container mx-auto p-6 ">
      <div className="flex justify-between items-center ">
        <div className="pt-2 text-brightRed text-3xl">|||</div>
        <div className="hidden md:flex space-x-6 text-sky-900">
          <a href="#" className="hover:text-darkGrayishBlue ">
            Home
          </a>
          <a href="#" className="hover:text-darkGrayishBlue ">
            Trend
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Products
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Contact
          </a>
        </div>
        <div className="relative">
          <button
            id="userBtn"
            className="md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full
                baseline hover:bg-brightRedSupLight"
            onClick={() => setShowMenu(!showMenu)}
          >
            More
          </button>
          {showMenu && (
            <div
              className="absolute z-40 right-0 top-full mt-1 py-2 bg-white border 
                rounded-lg shadow-lg"
            >
              <ul>
                <li>
                  <button
                    className="block px-4 py-2 hover:text-darkGrayishBlue"
                    onClick={() => handleMenuClick('personal')}
                  >
                    Personal
                  </button>
                </li>
                <li>
                  <button
                    className="block px-4 py-2 hover:text-darkGrayishBlue"
                    onClick={() => handleMenuClick('setting')}
                  >
                    Settings
                  </button>
                </li>
                <li>
                  <button
                    className="block px-4 py-2 hover:text-darkGrayishBlue"
                    onClick={() => handleMenuClick('logout')}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
