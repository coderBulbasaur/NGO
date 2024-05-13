import React from 'react';
// import './YourComponentStyles.css';
import './LoginS.css';

const Login = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#06aa5e" />
        <meta name="msapplication-navbutton-color" content="#06aa5e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <title>Login | NGOConnect  ™</title>
        <link rel="shortcut icon" href="./assets/images/favicon.png" type="image/x-icon" />
        <link rel="stylesheet" href="./assets/css/styles.css" />
        <script src="./assets/js/script.js" defer></script>
      </head>

      <body className='bb'>
        <main className="card-container1 slideUp-animation1">
          <div className="image-container1">
            <h1 className="company1">NGOConnect <sup>&trade;</sup></h1>
            <img src="./assets/images/signUp.svg" className="illustration" alt="" />
            <p className="quote">Sign up today to get exciting offers..!</p>
            <a href="#btm" className="mobile-btm-nav1">
              <img src="./assets/images/dbl-arrow.png" alt="" />
            </a>
          </div>
          <form action="" method="">
            <div className="form-container1 slideRight-animation1">
              <h1 className="form-header1">Get started</h1>
              <div className="input-container1">
                <label htmlFor="f-name"></label>
                <input type="text" name="f-name" id="f-name" required />
                <span>First name</span>
                <div className="1"></div>
              </div>
              {/* phone no */}
              <div className="input-container1">
                <label htmlFor="f-name"></label>
                <input type="number" name="f-name" id="f-name" required />
                <span>Phone No.</span>
                <div className="1"></div>
              </div>
              {/* email id  */}
              <div className="input-container1">
                <label htmlFor="f-name"></label>
                <input type="email" name="f-name" id="f-name" required />
                <span>Email Id.</span>
                <div className="1"></div>
              </div>
              {/* password */}
              <div className="input-container1">
                <label htmlFor="f-name"></label>
                <input type="password" name="f-name" id="f-name" required />
                <span>Password</span>
                <div className="1"></div>
              </div>
              {/* Repeat similar blocks for other form inputs */}
              <div id="btm">
                
                <button type="submit" className="submit-btn">
                  Create Account
                </button>
                <p className="btm-text1">
                  Already have an account..? <span className="btm-text1-highlighted">Log in</span>
                </p>
              </div>
            </div>
          </form>
        </main>
        <section className="outro-overla1 disabled1 slideUp-animation1">
          <h1 className="company1">Basket <sup>&trade;</sup></h1>
          <h1 className="outro-greeting">Thank's for signing up..!</h1>
          <img src="./assets/images/shape.svg" alt="" className="shape" />
          <img src="./assets/images/signedUp.svg" alt="" id="signedUp-illustration" className="slideRight-animation1" />
          <div className="author-link">
            &copy;&nbsp;
            <a href="https://www.0xabdulkhalid.ml/">0xabdulkhalid</a> |
            <a href="https://www.github.com/0xabdulkhalid/basket-sign-up-form/">Source Code</a>
          </div>
        </section>
      </body>
    </html>
  );
};

export default Login;

