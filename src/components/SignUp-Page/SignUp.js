import React, { useState } from 'react';

export default function SignupForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', { firstName, lastName, email, password, confirmPassword });
  };

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
      backgroundColor: '#3b82f6',
      color: 'white',
      border: '1px solid white',
    },
    signupButton: {
      
      backgroundColor: 'white',
      color: '#3b82f6',
    },
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '400px',
      margin: '20px auto',
      padding: '20px',
    },
    form: {
      border: '1px solid #4285F4',
      borderRadius: '8px',
      padding: '20px',
    },
    title: {
      color: '#4285F4',
      fontSize: '24px',
      marginBottom: '20px',
      textAlign: 'center',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '14px',
      boxSizing: 'border-box',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#4285F4',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
      marginBottom: '10px',
    },
    text: {
      textAlign: 'center',
      margin: '10px 0',
      fontSize: '14px',
    },
    link: {
      color: '#4285F4',
      textDecoration: 'none',
    },
    googleButton: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#4285F4',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '14px',
      cursor: 'pointer',
    },
  };

  return (
    <>
    <header style={styles.header}>
        <div style={styles.logo}>Logo</div>
        <div style={styles.headerButtons}>
          <button style={{...styles.headerButton, ...styles.loginButton}}>Login</button>
          <button style={{...styles.headerButton, ...styles.signupButton}}>Signup</button>
        </div>
      </header>
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Signup</h2>
        <input
          type="text"
          placeholder="First Name"
          style={styles.input}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          style={styles.input}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          style={styles.input}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" style={styles.button}>
          Signup
        </button>
        <p style={styles.text}>
          Already have an account? <a href="#" style={styles.link}>Login</a>
        </p>
        <button type="button" style={styles.googleButton}>
          Signup with Google
        </button>
      </form>
    </div>
    </>

  );
}