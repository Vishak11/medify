import React from 'react';

const SpecializationSection = () => {
  const specializations = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="spec-icon">
          <path d="M19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3M19 19H5V5H19V19M11 7H13V11H17V13H13V17H11V13H7V11H11V7Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Dentistry',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="spec-icon">
          <path d="M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6A2,2 0 0,1 10,4A2,2 0 0,1 12,2M12.5,7H11.5A2,2 0 0,0 9.5,9V14.5H11V22H13V14.5H14.5V9A2,2 0 0,0 12.5,7Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Primary Care',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="spec-icon">
          <path d="M7.5,4A5.5,5.5 0 0,0 2,9.5C2,10 2.09,10.5 2.22,11H6.3L7.57,7.63C7.87,6.83 9.05,6.75 9.43,7.63L11.5,13L12.09,11.58C12.22,11.25 12.57,11 13,11H21.78C21.91,10.5 22,10 22,9.5A5.5,5.5 0 0,0 16.5,4C14.64,4 13,4.93 12,6.34C11,4.93 9.36,4 7.5,4V4M3,12.5A1,1 0 0,0 2,13.5A1,1 0 0,0 3,14.5H5.44L11,20C12,20.9 12,20.9 13,20L18.56,14.5H21A1,1 0 0,0 22,13.5A1,1 0 0,0 21,12.5H13.4L12.47,14.8C12.07,15.81 10.92,15.67 10.55,14.83L8.5,9.5L7.54,11.83C7.39,12.21 7.05,12.5 6.6,12.5H3Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Cardiology',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="spec-icon">
          <path d="M19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3M19 19H5V5H19V19M11 16H10V15H8V13H10V12H11V13H13V15H11V16M15 10H13V8H11V6H13V4H15V6H17V8H15V10Z" fill="currentColor"/>
        </svg>
      ),
      title: 'MRI Resonance',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="spec-icon">
          <path d="M7,3H17A2,2 0 0,1 19,5V19A2,2 0 0,1 17,21H7A2,2 0 0,1 5,19V5A2,2 0 0,1 7,3M7,5V19H17V5H7M8,17H16V15H8V17M8,13H16V11H8V13M8,9H16V7H8V9Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Blood Test',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="spec-icon">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,3.18L19,6.3V11.22C19,12.92 18.5,14.65 17.65,16.17C16,14.94 13.26,14.5 12,14.5C10.74,14.5 8,14.94 6.35,16.17C5.5,14.65 5,12.92 5,11.22V6.3L12,3.18M12,6A3.5,3.5 0 0,0 8.5,9.5A3.5,3.5 0 0,0 12,13A3.5,3.5 0 0,0 15.5,9.5A3.5,3.5 0 0,0 12,6M12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Phcologist',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="spec-icon">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Laboratory',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="spec-icon">
          <path d="M19.8 5.6L17.4 3.2C16.6 2.4 15.4 2.4 14.6 3.2L13.2 4.6L19.4 10.8L20.8 9.4C21.6 8.6 21.6 7.4 19.8 5.6M12.4 5.4L3 14.8V21H9.2L18.6 11.6L12.4 5.4M6.8 19H5V17.2L12.4 9.8L14.2 11.6L6.8 19Z" fill="currentColor"/>
        </svg>
      ),
      title: 'X-Ray',
    },
  ];

  return (
    <div className="specialization-section">
      <h2>Find By Specialisation</h2>
      
      <div className="specialization-grid">
        {specializations.map((spec, index) => (
          <div key={index} className="specialization-card">
            <div className="icon-wrapper">
              {spec.icon}
            </div>
            <p>{spec.title}</p>
          </div>
        ))}
      </div>

      <button className="view-all-btn">View All</button>

      <style jsx>{`
        .specialization-section {
          padding: 60px 20px;
          background-color:#e8f1ff;
          text-align: center;
        }

        h2 {
          color: #1e3a8a;
          font-size: 2rem;
          margin-bottom: 40px;
        }

        .specialization-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr); /* Changed to 4 columns */
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto 30px;
        }

        .specialization-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .specialization-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
        }

        .icon-wrapper {
          width: 50px;
          height: 50px;
          margin: 0 auto 15px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .spec-icon {
          width: 40px;
          height: 40px;
          color: #2196F3;
        }

        p {
          margin: 0;
          color: #64748b;
          font-size: 0.9rem;
        }

        .view-all-btn {
          background: #2196F3;
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 25px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .view-all-btn:hover {
          background: #1976D2;
        }

        @media (max-width: 768px) {
          .specialization-grid {
            grid-template-columns: repeat(2, 1fr); /* Two columns for tablets */
          }
        }

        @media (max-width: 480px) {
          .specialization-grid {
            grid-template-columns: 1fr; /* One column for mobile */
          }
          
          h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SpecializationSection;