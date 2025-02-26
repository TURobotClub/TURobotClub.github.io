import { Link } from "react-router-dom";

interface NavBarProps {
  page: string; // Accepts the current page as a prop
}

function NavBar({ page }: NavBarProps) {
  return (
    <>
      <header className="shadow-md">
        <div className="hidden md:flex navbar bg-yellow-500 fixed">
          <div className="flex-1">
            <Link
              to="/"
              className="btn btn-ghost text-xl hover:bg-yellow-500 font-bold text-white"
            >
              TU Robot club
            </Link>
          </div>
          <div className="flex-none">
            <div role="tablist" className="tabs tabs-bordered">
              <Link
                to="/"
                role="tab"
                id="home-tab"
                className={`tab text-white ${
                  page === "Home" ? "tab-active" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                role="tab"
                id="about-tab"
                className={`tab text-white ${
                  page === "About" ? "tab-active" : ""
                }`}
              >
                About
              </Link>
              <Link
                to="/oph"
                role="tab"
                id="oph-tab"
                className={`tab text-white ${
                  page === "OpenHouse" ? "tab-active" : ""
                }`}
              >
                Open House 2024
              </Link>
              <Link
                to="/book"
                role="tab"
                id="github-tab"
                className={`tab text-white ${
                  page === "Book" ? "tab-active" : ""
                }`}
              >
                Book
              </Link>
              <a
                href="#"
                onClick={() =>
                  alert(
                    "The audition period hasn’t started yet. Please check back later."
                  )
                }
                role="tab"
                id="audition-tab"
                className="tab text-white"
              >
                Audition
              </a>
            </div>
            <a
              role="button"
              target="_blank"
              href="https://github.com/TURobotClub"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 h-9 rounded-full bg-gray-200 border-white border-[1px] flex items-center justify-center">
                <i className="fab fa-github text-4xl"></i>
              </div>
            </a>
          </div>
        </div>

        <div className="drawer md:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer"
              className="btn bg-yellow-500 border-transparent drawer-button fixed top-4 left-4 z-50"
            >
              <i className="material-icons">menu</i>
            </label>
          </div>

          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="pt-20 menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/book">Book</Link>
              </li>
              <li>
                <Link to="/oph">Open House 2024</Link>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() =>
                    alert(
                      "The audition period hasn’t started yet. Please check back later."
                    )
                  }
                >
                  Audition
                </a>
              </li>
              <li>
                <a href="https://github.com/TURobotClub" target="_blank">
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
