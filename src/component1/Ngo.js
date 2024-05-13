import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../component1/logo1.png';


const NGOForm = () => {
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
    <div className="container py-3">
      <header>
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <Link to="/" className="nav-link px-2 text-body-secondary">
            <img src={logo1} alt="Logo" width="200" height="40" className="d-inline-block align-text-top" />
          </Link>
          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <Link
              className="me-3 py-2 text-dark text-decoration-none"
              to="#"
              style={linkStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Home
            </Link>
            <Link
              className="me-3 py-2 text-dark text-decoration-none"
              to="#"
              style={linkStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Login
            </Link>
            <Link
              className="me-3 py-2 text-dark text-decoration-none"
              to="#"
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
          <h4>Enter the details to continue.</h4>
        </div>
      </header>
      <main>
        <form className="needs-validation" noValidate>
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">
                Owner's First name
              </label>
              <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
              <div className="invalid-feedback">Valid first name is required.</div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">
                Last name
              </label>
              <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
              <div className="invalid-feedback">Valid last name is required.</div>
            </div>

            <div className="col-12">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" />
              <div className="invalid-feedback">Please enter a valid email address.</div>
            </div>

            <div className="col-12">
              <label htmlFor="number" className="form-label">
                Phone No
              </label>
              <input type="number" className="form-control" id="number" placeholder="Enter phone no" />
              <div className="invalid-feedback">Please enter a valid phone no.</div>
            </div>

            <div className="col-12">
              <label htmlFor="occupation" className="form-label">
                Field of work
              </label>
              <input type="text" className="form-control" id="occupation" placeholder="eg. shopkeeper" />
              <div className="invalid-feedback">Please enter a valid occupation.</div>
            </div>

            <div className="col-12">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
              <div className="invalid-feedback">Please enter your shipping address.</div>
            </div>

            <div className="col-12">
              <label htmlFor="address2" className="form-label">
                Address 2 <span className="text-muted">(Optional)</span>
              </label>
              <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
            </div>

            <div className="col-md-5">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <select className="form-select" id="country" required>
                <option value="">Choose...</option>
                <option>United States</option>
              </select>
              <div className="invalid-feedback">Please select a valid country.</div>
            </div>

            <div className="col-md-4">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <select className="form-select" id="state" required>
                <option value="">Choose...</option>
                <option>California</option>
              </select>
              <div className="invalid-feedback">Please provide a valid state.</div>
            </div>

            <div className="col-md-3">
              <label htmlFor="zip" className="form-label">
                Zip
              </label>
              <input type="text" className="form-control" id="zip" placeholder="" required />
              <div className="invalid-feedback">Zip code required.</div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="save-info" />
            <label className="form-check-label" htmlFor="save-info">
              My NGO is government registered.
            </label>
            <div className="row g-3">
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  id="registrationNo"
                  placeholder="Enter registration No"
                  value=""
                  required
                />
                <div className="invalid-feedback">Valid registration number is required.</div>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="col-12">
            <label htmlFor="password" className="form-label">
              Enter Password
            </label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" />
          </div>
          <div className="col-12">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" />
          </div>
          <hr className="my-4" />
          <Link to="/dashboard">
            <button className="w-100 btn btn-primary btn-lg" type="submit">
              Submit to Register
            </button>
          </Link>
        </form>
      </main>
      <section className="footer">
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
                <Link to="#aim" className="nav-link px-2 text-body-secondary">
                  About
                </Link>
              </li>
            </ul>
            <p className="text-center text-body-secondary">© NGOConnect</p>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default NGOForm;
