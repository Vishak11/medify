import React from 'react';

const styles = {
  container: {
    backgroundColor: '#f8f9fa',
    padding: '4rem 2rem',
    display: 'flex',
    gap: '4rem',
    alignItems: 'center',
  },
  contentSection: {
    flex: '1',
    maxWidth: '400px',
  },
  subtitle: {
    color: '#0099ff',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: '2.5rem',
    color: '#1a237e',
    marginBottom: '1.5rem',
  },
  description: {
    color: '#666',
    lineHeight: '1.6',
    fontSize: '1rem',
  },
  statsSection: {
    flex: '1',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5rem',
  },
  statCard: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  statCardOffset: {
    transform: 'translateY(-2rem)',
  },
  statIcon: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  statNumber: {
    fontSize: '2.5rem',
    color: '#1a237e',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  statLabel: {
    color: '#666',
    fontSize: '0.9rem',
  },
  blueIcon: {
    color: '#0099ff',
  },
  redIcon: {
    color: '#ff4757',
  },
  yellowIcon: {
    color: '#ffa502',
  },
  greenIcon: {
    color: '#2ed573',
  },
};

const Ourfamily = () => {
  const stats = [
    {
      icon: '👥',
      number: '5000+',
      label: 'Happy Patients',
      color: 'blueIcon',
      offset: true
    },
    {
      icon: '🏥',
      number: '200+',
      label: 'Hospitals',
      color: 'redIcon',
      offset: false
    },
    {
      icon: '🔬',
      number: '1000+',
      label: 'Laboratories',
      color: 'yellowIcon',
      offset: false
    },
    {
      icon: '👨‍⚕️',
      number: '700+',
      label: 'Expert Doctors',
      color: 'greenIcon',
      offset: true
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.contentSection}>
        <div style={styles.subtitle}>
          CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
        </div>
        <h2 style={styles.title}>Our Families</h2>
        <p style={styles.description}>
          We will work with you to develop individualised care plans,
          including management of chronic diseases. If we cannot assist,
          we can provide referrals or advice about the type of practitioner
          you require. We treat all enquiries sensitively and in the strictest
          confidence.
        </p>
      </div>

      <div style={styles.statsSection}>
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              ...styles.statCard,
              ...(stat.offset ? styles.statCardOffset : {}),
            }}
          >
            <div style={{...styles.statIcon, ...styles[stat.color]}}>
              {stat.icon}
            </div>
            <div style={styles.statNumber}>{stat.number}</div>
            <div style={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourfamily;