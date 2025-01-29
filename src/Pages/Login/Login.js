import React, { useState } from 'react';
import './Login.css';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isSignUp ? 'Sign Up Form submitted:' : 'Login Form submitted:', formData);
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      name: '',
      email: '',
      password: '',
      agreeToTerms: false
    });
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {isSignUp && (
            <div className="terms">
              <input
                type="checkbox"
                name="agreeToTerms"
                id="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
              />
              <label htmlFor="agreeToTerms">
                By continuing, I agree to the terms of use & privacy policy.
              </label>
            </div>
          )}
          <button className="submit-btn" type="submit">
            {isSignUp ? 'Continue' : 'Login'}
          </button>
        </form>
        <p className="login-link">
          {isSignUp ? (
            <>
              Already have an account?{' '}
              <a onClick={toggleForm} style={{ cursor: 'pointer', color: '#ff0000' }}>
                Login here
              </a>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <a onClick={toggleForm} style={{ cursor: 'pointer', color: '#ff0000' }}>
                Sign up here
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
