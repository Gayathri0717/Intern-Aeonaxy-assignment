import React, { useState } from 'react';
import "./signup.css";
import { useNavigate } from 'react-router-dom';
import example from '../images/s4.png';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [usernameTaken, setUsernameTaken] = useState(false);

  const handleSignup = () => {
    navigate('/profile');
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    const isUsernameTaken = checkIfUsernameTaken(event.target.value);
    setUsernameTaken(isUsernameTaken);
  };

  const checkIfUsernameTaken = (newUsername) => {
    const existingUsernames = ['john_doe', 'jane_smith'];
    return existingUsernames.includes(newUsername);
  };

  return (
    <div className="cont1">
      <div className="left-section">
        <h1>dribbble</h1>
        <h2>Discover the world top designers & creatives</h2>
        <img src={example} alt="Image" />
        <p className="small-text">Art by Peter Tarka</p>
      </div>
      <div className="right-section">
        <div className="already">
          <p>Already a member?{' '}
            <span className="change-color">
              Sign in
            </span>{' '} </p>
        </div>
        <div className="right-top">
          <h2 className="sign">Sign up to Dribble</h2>
        </div>

        <form>
          {usernameTaken && (
            <p className="error">Username is already taken.</p>
          )}
          <div className="input-group2">
            <label htmlFor="name" className="label">
              Name:
            </label>
            <input type="text" id="name" name="name" />
            <label htmlFor="username" className="label2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />

          </div>
          <div className="input-group">
            <label htmlFor="email" className="label">
              Email:
            </label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="label">
              Password:
            </label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="terms">
            <input type="checkbox" id="terms-checkbox" />
            <p htmlFor="terms-checkbox">
              Creating an account means you are okay with our{' '}
              <span className="change-color">
                terms of services privacy policy
              </span>{' '}
              and our default {' '}
              <span className="change-color">
                Notification settings
              </span>{' '}
            </p>
          </div>
          <button type="submit" onClick={handleSignup}>
            Create Account
          </button>
          <div className="captcha-text">
            <p>
              This site is protected by reCaptcha and the Googler{' '}
              <span className="change-color">
                Privacy Policy
              </span>{' '}
              and {' '}
              <span className="change-color">
                Terms of Service
              </span>{' '}  apply
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
