import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// const logo = `${import.meta.env.BASE_URL}images/tender-logo.png`;
// const PhoneImg = `${import.meta.env.BASE_URL}images/phone.png`;
// const LandlineImg = `${import.meta.env.BASE_URL}images/landline.png`;
// const WAImg = `${import.meta.env.BASE_URL}images/whatsapp.png`;

const Navbar = () => {
  const auth = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const dashboard = () => {
    navigate("/dashboard/admin");
  };
  const Userdashboard = () => {
    navigate("/userDashboard");
  };

  const toggleMobileDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      {/* contact bar */}

      <nav className="bg-green-700 shadow ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-4">
          <div className="flex items-center justify-between h-16">
            {/* <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img className="w-[60px] h-auto " src={logo} alt="logo" loading="lazy" />
              </Link>
            </div> */}
            <div className="flex items-center justify-center flex-1 sm:items-stretch">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4 ">
                  <Link
                    to="/"
                    className="px-3 py-2 text-lg font-bold text-white transition-colors duration-300 rounded-md hover:text-white"
                  >
                    Home
                  </Link>

                  <Link
                    to="/contact"
                    className="px-3 py-2 text-lg font-bold text-white transition-colors duration-300 rounded-md hover:text-white"
                  >
                    Contact
                  </Link>
                  <Link
                    to="/contact"
                    className="px-3 py-2 text-lg font-bold text-white transition-colors duration-300 rounded-md hover:text-white"
                  >
                    About Us
                  </Link>
                  <div className=" flex items-center justify-between gap-8  text-black font-bold">
                    <div>
                      {auth ? (
                        <>
                          <div className="md:flex hidden flex-row gap-8">
                            <button
                              onClick={logout}
                              className="px-3 py-2 text-lg font-medium text-white transition-colors duration-300 bg-black rounded-md"
                            >
                              Logout
                            </button>

                            {auth.userRole == "admin" ? (
                              <button
                                onClick={dashboard}
                                className="px-3 py-2 text-lg font-medium text-white transition-colors duration-300 bg-black rounded-md"
                              >
                                Dashboard
                              </button>
                            ) : 
                              <></>
                            }
                          </div>
                        </>
                      ) : (
                        <Link
                          to="/login"
                          className="px-3 py-2 text-lg font-medium text-white transition-colors duration-300 bg-black rounded-md"
                        >
                          Login
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-300 rounded-md hover:text-red-700 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${menuOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${menuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="flex justify-end">
            <div
              className="w-full p-2 bg-black sm:hidden overflow text-gray-50"
              onMouseLeave={toggleMenu}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className="block px-3 py-1 text-lg font-medium text-white transition-colors duration-300 rounded-md hover:text-red-100"
                >
                  Home
                </Link>

                <Link
                  to="/contact"
                  onClick={toggleMenu}
                  className="block px-3 py-1 text-lg font-medium text-white transition-colors duration-300 rounded-md hover:text-red-100"
                >
                  Contact
                </Link>
                {/* <Link
                  to="/contact"
                  onClick={toggleMenu}
                  className="block px-3 py-1 text-lg font-medium text-white transition-colors duration-300 rounded-md hover:text-red-100"
                >
                  Contact
                </Link> */}
              </div>
              <div>
                {auth ? (
                  <>
                    <div className="flex flex-col">
                      <button
                        onClick={logout}
                        className="px-3 py-2 mx-4 text-lg font-medium text-black transition-colors duration-300 bg-white rounded-md"
                      >
                        Logout
                      </button>

                      {auth.userRole == "admin" ||
                      auth.userRole == "hr" ||
                      auth.userRole == "employee" ||
                      auth.userRole == "franchise" ? (
                        <button
                          onClick={dashboard}
                          className="px-3 py-2 mx-4 text-lg font-medium text-black transition-colors duration-300 bg-white rounded-md"
                        >
                          Dashboard
                        </button>
                      ) : (
                        <></>
                      )}

                      {auth.userRole == "user" ? (
                        <button
                          onClick={Userdashboard}
                          className="px-3 py-2 mx-4 text-lg font-medium text-black transition-colors duration-300 bg-white rounded-md"
                        >
                          Dashboard
                        </button>
                      ) : (
                        <></>
                      )}
                    </div>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="px-3 py-2 mx-4 text-lg font-medium text-black transition-colors duration-300 bg-white rounded-md"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
