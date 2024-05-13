import React, {useState} from 'react';
import ngoReg from '../component1/ngo-registration.png';
import logo1 from '../component1/logo1.png';
import volunteer from '../component1/volunteer.jpeg';
import ngo from '../component1/ngo.png'
import { Link } from 'react-router-dom';



const Join = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const linkStyle = {
    textDecoration: 'none',
    color: isHovered ? 'blue' : 'black',
    borderBottom: isHovered ? '1px solid blue' : 'none',
  };


  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <symbol id="check" viewBox="0 0 16 16">
          <title>Check</title>
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
        </symbol>
      </svg>

      <div className="container py-3">
        <header className='bg-light'>
          <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
          <Link to="/" className="nav-link px-2 text-body-secondary">
            <img src={logo1} alt="Logo" width="200" height="40" className="d-inline-block align-text-top" />
          </Link>
          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <Link
        to="/"
        className="me-3 py-2 text-dark"
        style={linkStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Home
      </Link>
      <Link
        to="/login"
        className="me-3 py-2 text-dark"
        style={linkStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Login
      </Link>
      <Link
        to="/contact"
        className="me-3 py-2 text-dark"
        style={linkStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Contact Us
      </Link>
    </nav>

          </div>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal">Welcome to NGOConnect</h1>
            <p className="fs-5 text-muted">Choose an option to continue.</p>
          </div>
        </header>

        <main style={{ padding: '0 50px', display: 'flex', justifyContent: 'center', gap: '50px' }}>
          <div className="card" style={{ width: '18rem', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal text-center">NGO</h4>

            </div>
            <img src={ngoReg} className="card-img-top" alt="..." id="ngo-registration" style={{ paddingBottom: '40px' }}  />
            <div className="d-flex justify-content-center align-items-center">
      <Link
        className="btn btn-primary"
        to="/ngo"
        style={{
          width: '100%',
          height: '100%',
          padding: '10px 20px',
          borderRadius: '5px',
          textDecoration: 'none',
          color: '#fff',
          transition: 'background-color 0.3s',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
          transition: 'background-color 0.3s, color 0.3s'
        }}
      >
        Get Started
      </Link>
    </div>
          </div>
          <div className="card" style={{ width: '18rem', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal text-center">Volunteer/Donor</h4>
            </div>
            <img src={volunteer} className="card-img-top" alt="..." />
            <div className="d-flex justify-content-center align-items-center">
      <Link
        className="btn btn-primary"
        to="/volunteer"
        style={{
          width: '100%',
          height: '100%',
          padding: '10px 20px',
          borderRadius: '5px',
          textDecoration: 'none',
          color: '#fff',
          transition: 'background-color 0.3s',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px'
        }}
      >
        Get Started
      </Link>
    </div>
          </div>
        </main>



        <section className="footer bg-light">
          <div className="container">
            <footer className="py-3 my-4">
              <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                  <Link to="#" className="nav-link px-2 text-body-secondary">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#services" className="nav-link px-2 text-body-secondary">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link px-2 text-body-secondary">
                    Home
                  </Link>
                </li>
              </ul>
              <p className="text-center text-body-secondary">© NGOConnect</p>
            </footer>
          </div>
        </section>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </div>
  );
};

export default Join;
