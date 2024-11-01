import React, { useState } from 'react';
import './FinddoctorCard.css';

const DoctorCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const days = [
    { day: 'Today', slots: 11 },
    { day: 'Tomorrow', slots: 17 },
    { day: 'Fri, 5 May', slots: 18 }
  ];

  const timeSlots = {
    morning: ['11:30 AM'],
    afternoon: ['12:00 PM', '12:30 PM', '01:30 PM', '02:00 PM', '02:30 PM'],
    evening: ['06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM']
  };

  const handleTimeSlotClick = (time) => {
    setSelectedTimeSlot(time);
  };

  return (
    <div className={`expandable-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="hospital-card" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="hospital-info">
          <div className="hospital-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#33A9FF">
              <path d="M19 2H5C3.89543 2 3 2.89543 3 4V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V4C21 2.89543 20.1046 2 19 2Z"/>
              <path d="M12 6V18M18 12H6" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
          
          <div className="hospital-details">
            <div className="hospital-header">
              <h2>Fortis Hospital Richmond Road</h2>
              <svg className="verified-icon" width="16" height="16" viewBox="0 0 24 24" fill="#33A9FF">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            
            <div className="location">
              <span>Banglore, Karnataka</span>
            </div>
            
            <div className="speciality">
              <span>Smilessence Center for Advanced Dentistry + 1 more</span>
            </div>
            
            <div className="consultation-info">
              <span className="free-tag">FREE</span>
              <span className="strike">₹500</span>
              <span>Consultation fee at clinic</span>
            </div>
            
            <div className="card-footer">
              <div className="likes">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#4CAF50">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                </svg>
                <span>5</span>
              </div>
              <div className="availability">
                <span className="available">Available Today</span>
              </div>
            </div>
          </div>
        </div>
        
        <button className="book-visit-btn">Book FREE Center Visit</button>
      </div>

      {isExpanded && (
        <div className="time-slots-container">
          <div className="days-selector">
            <button className="nav-btn prev">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M15 18l-6-6 6-6" strokeWidth="2"/>
              </svg>
            </button>
            <div className="days-scroll">
              {days.map((day, index) => (
                <div
                  key={index}
                  className={`day-item ${selectedDay === index ? 'selected' : ''}`}
                  onClick={() => setSelectedDay(index)}
                >
                  <div className="day-name">{day.day}</div>
                  <div className="slots-available">{day.slots} Slots Available</div>
                  {selectedDay === index && <div className="selection-indicator" />}
                </div>
              ))}
            </div>
            <button className="nav-btn next">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 18l6-6-6-6" strokeWidth="2"/>
              </svg>
            </button>
          </div>

          <div className="time-slots">
            <div className="time-section">
              <h3>Morning</h3>
              <div className="slots-grid">
                {timeSlots.morning.map((time) => (
                  <button
                    key={time}
                    className={`time-slot ${selectedTimeSlot === time ? 'selected' : ''}`}
                    onClick={() => handleTimeSlotClick(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="time-section">
              <h3>Afternoon</h3>
              <div className="slots-grid">
                {timeSlots.afternoon.map((time) => (
                  <button
                    key={time}
                    className={`time-slot ${selectedTimeSlot === time ? 'selected' : ''}`}
                    onClick={() => handleTimeSlotClick(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="time-section">
              <h3>Evening</h3>
              <div className="slots-grid">
                {timeSlots.evening.map((time) => (
                  <button
                    key={time}
                    className={`time-slot ${selectedTimeSlot === time ? 'selected' : ''}`}
                    onClick={() => handleTimeSlotClick(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorCard;