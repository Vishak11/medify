import React from 'react';
import patient_caring_img from '../../assets/patient_caring_img.png'

const styles = {
  container: {
    backgroundColor: '#e8f1ff',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  imageContainer: {
    display: 'flex',         
    justifyContent: 'flex-end', 
    // alignItems: 'flex-end',       
    width: '50%',
  },
  consultationBadge: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    backgroundColor: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  phoneIcon: {
    color: '#0099ff',
    fontSize: '1.2rem',
  },
  content: {
    width: '50%',
  },
  topText: {
    color: '#0099ff',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#1a237e',
  },
  titleHighlight: {
    color: '#0099ff',
  },
  description: {
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '2rem',
  },
  features: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#1a237e',
    fontSize: '1.1rem',
  },
  checkIcon: {
    color: '#0099ff',
    fontSize: '1.2rem',
  },
  lowerImage: {
    marginTop: '2rem',
    width: '100%',
    borderRadius: '8px',
  }
};

const PatientCaring = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.imageContainer}>
          <img 
            src={patient_caring_img}
            alt="Doctor with patient" 
            style={{ width: '70%' }}
          />
        </div>
        
        <div style={styles.content}>
          <div style={styles.topText}>
            HELPING PATIENTS FROM AROUND THE GLOBE!!
          </div>
          <h1 style={styles.title}>
            Patient <span style={styles.titleHighlight}>Caring</span>
          </h1>
          <p style={styles.description}>
            Our goal is to deliver quality of care in a courteous, respectful, and
            compassionate manner. We hope you will allow us to care for you and
            strive to be the first and best choice for healthcare.
          </p>
          
          <div style={styles.features}>
            <div style={styles.featureItem}>
              <span style={styles.checkIcon}>✓</span>
              Stay Updated About Your Health
            </div>
            <div style={styles.featureItem}>
              <span style={styles.checkIcon}>✓</span>
              Check Your Results Online
            </div>
            <div style={styles.featureItem}>
              <span style={styles.checkIcon}>✓</span>
              Manage Your Appointments
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientCaring;