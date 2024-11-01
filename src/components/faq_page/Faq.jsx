// FAQComponent.js
import React, { useState } from 'react';
import faq_Icon from '../../assets/Faq_Icon.png'

const faqData = [
  {
    id: 1,
    question: "Why choose our medical for your family?",
    answer: "We provide comprehensive family healthcare with experienced doctors who understand your family's needs. Our patient-centered approach ensures personalized care for every family member."
  },
  {
    id: 2,
    question: "Why we are different from others?",
    answer: "Our unique approach combines modern medical expertise with compassionate care. We offer flexible scheduling, comprehensive services, and a dedicated team that truly listens to our patients."
  },
  {
    id: 3,
    question: "Trusted & experience senior care & love",
    answer: "With decades of experience in senior care, our specialists provide thoughtful, comprehensive care tailored to elderly patients' unique needs, ensuring comfort and dignity."
  },
  {
    id: 4,
    question: "How to get appointment for emergency cases?",
    answer: "For emergencies, call our 24/7 hotline or use our online emergency appointment system. We prioritize urgent cases and ensure quick response times for critical situations."
  }
];

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    color: '#1a365d',
    marginBottom: '40px',
  },
  statsContainer: {
    backgroundColor: 'red', 
    alignItems: 'center',
    marginBottom: '20px',
    gap: '10px',
  },
  emoji: {
    fontSize: '24px',
  },
  stats: {
    color: '#2c5282',
    fontWeight: 'bold',
    fontSize: '24px',
    margin: '0',
  },
  subStats: {
    color: '#718096',
    margin: '0',
    fontSize: '14px',
  },
  faqContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px',
  },
  imageContainer: {
    borderRadius: '10px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  questionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  questionItem: {
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: '15px',
  },
  questionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#2d3748',
    fontWeight: '500',
    padding: '10px 0',
  },
  expandButton: {
    color: '#4299e1',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  answer: {
    color: '#718096',
    marginTop: '10px',
    lineHeight: '1.6',
    padding: '0 0 10px 0',
  },
  hidden: {
    display: 'none',
  }
};

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Frequently Asked Questions</h1>
      
      <div style={styles.faqContainer}>
        <div style={styles.imageContainer}>
          <img
            src={faq_Icon} 
            alt="Doctor with patient" 
            style={styles.image}
          />
         
        </div>
         {/* <div style={styles.statsContainer}>
            <span style={styles.emoji}>😊</span>
            <div>
              <p style={styles.stats}>84k+</p>
              <p style={styles.subStats}>Happy Patients</p>
            </div>
          </div> */}

        <div style={styles.questionsContainer}>
          {faqData.map((item) => (
            <div key={item.id} style={styles.questionItem}>
              <div 
                style={styles.questionHeader}
                onClick={() => toggleQuestion(item.id)}
              >
                <span>{item.question}</span>
                <span style={styles.expandButton}>
                  {openId === item.id ? '-' : '+'}
                </span>
              </div>
              <div style={openId === item.id ? styles.answer : styles.hidden}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;