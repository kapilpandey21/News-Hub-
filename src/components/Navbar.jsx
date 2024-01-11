import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            NewsHub
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to={'/'} aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={'/general'} aria-current="page" href="#">
                  General
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to={'/business'} aria-current="page" href="#">
                  Business
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to={'/entertainment'} aria-current="page" href="#">
                  Entertainment
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to={'/health'} aria-current="page" href="#">
                  Health
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to={'science'} aria-current="page" href="#">
                  Science
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to={'sports'} aria-current="page" href="#">
                  Sports
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to={'/technology'} aria-current="page" href="#">
                  Technology
                </Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
