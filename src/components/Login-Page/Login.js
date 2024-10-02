import React, { useState } from 'react';
import Header from '../NavBar/Header';

const globalStyles = `
  body, html {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`;

const styles = {
  header: {
    backgroundColor: '#3b82f6',
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerButtons: {
    display: 'flex',
  },
  headerButton: {
    marginLeft: 10,
    padding: '5px 10px',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
  },
  loginButton: {
    backgroundColor: 'white',
    color: '#3b82f6',
  },
  signupButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: '1px solid white',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 50px)',
  },
  loginForm: {
    border: '1px solid #3b82f6',
    padding: 20,
    borderRadius: 8,
    width: 300,
  },
  formTitle: {
    textAlign: 'center',
    color: '#3b82f6',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 8,
    marginBottom: 10,
    border: '1px solid #ccc',
    borderRadius: 4,
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    marginBottom: 10,
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 14,
  },
  link: {
    color: '#3b82f6',
    textDecoration: 'none',
  },
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted with:', email, password);
  };

  return (
    <>
      <style>{globalStyles}</style>
     <Header/>
      <div style={styles.container}>
        <form style={styles.loginForm} onSubmit={handleSubmit}>
          <h2 style={styles.formTitle}>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Login</button>
          <button 
            type="button" 
            onClick={() => console.log('Login with Google clicked')}
            style={styles.button}
          >
            Login with Google
          </button>
          <p style={styles.paragraph}>
            Don't have an account? <a href="/signup" style={styles.link}>Signup</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginPage;