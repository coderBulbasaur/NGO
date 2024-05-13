import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../component1/logo1.png';

const Volunteer = () => {
  return (
    <div>
      <div className="container py-3">
        <header>
          <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
          <Link to="/" className="nav-link px-2 text-body-secondary">
            <img src={logo1} alt="Logo" width="200" height="40" className="d-inline-block align-text-top" />
          </Link>
            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
              <Link className="me-3 py-2 text-dark text-decoration-none" to="/">
                Home
              </Link>
              <Link className="me-3 py-2 text-dark text-decoration-none" to="/login">
                Login
              </Link>
              <Link className="me-3 py-2 text-dark text-decoration-none" to="/contact">
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal">Welcome to NGOConnect</h1>
            <h4>Enter the details to continue.</h4>
          </div>
        </header>
        <main style={{ padding: '0 50px' }}>
          <form className="needs-validation" noValidate>
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">
                  First name
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
                <input type="number" className="form-control" id="number" placeholder="enter phone no" />
                <div className="invalid-feedback">Please enter a valid Phone no.</div>
              </div>
              <div className="col-12">
                <label htmlFor="number" className="form-label">
                  Password
                </label>
                <input type="number" className="form-control" id="number" placeholder="enter phone no" />
                <div className="invalid-feedback">Please enter a valid Phone no.</div>
              </div>
              <div className="col-12">
                <label htmlFor="number" className="form-label">
                  Confirm Password
                </label>
                <input type="number" className="form-control" id="number" placeholder="enter phone no" />
                <div className="invalid-feedback">Please enter a valid Phone no.</div>
              </div>
              <div className="col-12">
                <label htmlFor="occupation" className="form-label">
                  Occupation
                </label>
                <input type="text" className="form-control" id="occupation" placeholder="eg. shopkeeper" />
                <div className="invalid-feedback">Please enter a valid Phone no.</div>
              </div>
              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Submit to Register
              </button>
            </div>
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
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
    </div>
  );
};

export default Volunteer;
