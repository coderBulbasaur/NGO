import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sheet.css'; 
import { Link, useLocation, useNavigate} from 'react-router-dom';
// import donation from '../component1/donation.jpg'
import donationSer from '../component1/donation-services.webp';
import eventGuide from '../component1/event-management-guide.jpg';
import logo1 from '../component1/logo1.png';
import volunteer from '../component1/volunteer.jpeg';
import donations from '../component1/donations.jpg'
import education from '../component1/education.jpg'
import zerohunger from '../component1/zero-hunger.jpg'
// import a from '../component1/1.png';
import a from '../component1/1.png'
import b from '../component1/2.png';
import c from '../component1/3.png';
import d from '../component1/4.png';
import e from '../component1/5.png';
import f from '../component1/6.png';


const Home = () => {
    let navigate = useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem('token')
        navigate('/login')
    }
    let location = useLocation();

  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
      <div className="container">
        <Link className="navbar-brand" to="#">
          <img src={logo1} alt="Logo" width="ms-auto" height="40" className="d-inline-block align-text-top" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">Home</Link>
            </li>

            {!localStorage.getItem('token')?
            
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                Join
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                Login
                </Link>
              </li>
            </>:
             <button onClick={handleLogout} className='nav-link'>Logout</button>}

          </ul>
        </div>
      </div>
    </nav>

    {/* scroller feedbacks */}
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={donations} className="d-block w-100" alt="..." height="400px" />
        </div>
        <div className="carousel-item">
          <img src={education} className="d-block w-100" alt="..." height="400px" />
        </div>
        <div className="carousel-item">
          <img src={zerohunger} className="d-block w-100" alt="..." height="400px" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    {/* our aim */}
    <div className="container" id="aim">
      <div className="px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4" src={logo1} alt="" width="300" height="100" />
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">"Our aim is to create a dynamic and inclusive platform that bridges the gap between NGOs and their communities. We strive to empower NGOs with efficient event management tools while providing individuals with an accessible avenue to contribute, volunteer, and support local causes. By fostering seamless connections and facilitating resource sharing, our goal is to amplify the impact of charitable efforts and drive positive change within communities."</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Register</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Login</button>
          </div>
        </div>
      </div>
    </div>

    {/* services */}
    <section className="services" id="services">
      <h2>What we are providing</h2>
      <div className="card-container">
        <div className="row">
          <div className="card col-12 col-lg-4 col-md-4 p-0" style={{ width: "18rem" }}>
            <img src={eventGuide} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Our platform enables NGOs to create, organize, and manage events while requesting vital resources like food, accessories, and land. With a dedicated dashboard, NGOs amplify their reach, fostering greater community engagement and maximizing their impact.</p>
            </div>
          </div>
          <div className="card col-12 col-lg-4 col-md-4 p-0" style={{ width: "18rem" }}>
            <img src={donationSer} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Donors can contribute various essentials required for events, including food, accessories, and more. Your donations directly aid in fulfilling the needs of these NGOs, ensuring impactful and successful events within your community.</p>
            </div>
          </div>
          <div className="card col-12 col-lg-4 col-md-4 col-sm-4 p-0" style={{ width: "18rem" }}>
            <img src={volunteer} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">NGOs, discover dedicated volunteers for your events here. If you're an individual seeking volunteer opportunities, this is the perfect platform for you to contribute your time and skills toward meaningful causes and events.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* sustainable dev goals */}
    <section className="sustanable-dev-goals">
      <h2>Sustainable development <br />Goals</h2>
      <div className="card-container">
      <div className="row justify-content-center">
      <div className="card col-12 col-lg-2 col-md-3 col-sm-4 p-2">
        <img src={a} className="card-img-top img-fluid" alt="..." />
      </div>
      <div className="card col-12 col-lg-2 col-md-3 col-sm-4 p-2">
        <img src={b} className="card-img-top img-fluid" alt="..." />
      </div>
      <div className="card col-12 col-lg-2 col-md-3 col-sm-4 p-2">
        <img src={c} className="card-img-top img-fluid" alt="..." />
      </div>
      <div className="card col-12 col-lg-2 col-md-3 col-sm-4 p-2">
        <img src={d} className="card-img-top img-fluid" alt="..." />
      </div>
      <div className="card col-12 col-lg-2 col-md-3 col-sm-4 p-2">
        <img src={e} className="card-img-top img-fluid" alt="..." />
      </div>
      <div className="card col-12 col-lg-2 col-md-3 col-sm-4 p-2">
        <img src={f} className="card-img-top img-fluid" alt="..." />
      </div>
    </div>
      </div>
    </section>

    {/* contact us section */}
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputname" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputname" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputno" className="form-label">Phone No.</label>
            <input type="number" className="form-control" id="exampleInputno" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your Phone Number with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputenquiry" className="form-label">Enquiry</label>
            <input type="password" className="form-control" id="exampleInputenquiry" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>

    {/* footer section */}
    <section className="footer">
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><Link to="#" className="nav-link px-2 text-body-secondary">Register</Link></li>
            <li className="nav-item"><Link to="#" className="nav-link px-2 text-body-secondary">Login</Link></li>
            <li className="nav-item"><Link to="#services" className="nav-link px-2 text-body-secondary">Services</Link></li>
            <li className="nav-item"><Link to="#aim" className="nav-link px-2 text-body-secondary">About</Link></li>
          </ul>
          <p className="text-center text-body-secondary">© NGOConnect</p>
        </footer>
      </div>
    </section>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  </div>
  );
};

export default Home;
