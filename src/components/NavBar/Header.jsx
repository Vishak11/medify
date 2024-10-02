import React from 'react'
import { RiTodoLine } from "react-icons/ri";

const Header = () => {
  return (
    <header style={styles.header}>
        {/* <div style={styles.logo}>Logo</div> */}
        <RiTodoLine />
        <div style={styles.headerButtons}>
          <button style={{...styles.headerButton, ...styles.loginButton}}>Login</button>
          <button style={{...styles.headerButton, ...styles.signupButton}}>Signup</button>
        </div>
      </header>
  )
}
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
}

export default Header