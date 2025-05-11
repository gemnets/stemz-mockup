import React, { useEffect, useState } from 'react';
import './OnlineClasses.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroOther from '../components/HeroOther';
import coding from '../assets/coding.jpg';
import coding2 from '../assets/coding2.jpg';
import biochem from '../assets/biochem.jpg';
import genetics from '../assets/genetics.jpg';
import microbiology from '../assets/Microbiology.jpg';
import defaultImg from '../assets/defaultcourseimg.jpg';
import '../components/Navbar.css';

const OnlineClasses = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      image: 'coding',
      title: 'Learn Coding',
      description: 'Start your coding journey with our courses.',
      date: 'June 2 - June 5',
      time: '10 - 11 AM PST',
      gradeLevel: '4th - 6th Grade'
    },
    {
      id: 2,
      image: 'biochem',
      title: 'Biochemistry for Beginners',
      description: 'Explore the basics of Biochemistry.',
      date: 'June 6 - June 9',
      time: '1 - 2 PM PST',
      gradeLevel: '7th - 9th Grade'
    },
    {
      id: 3,
      image: 'microbiology',
      title: 'Microbiology 101',
      description: 'An introduction to microbiology and its importance.',
      date: 'June 10 - June 13',
      time: '9 - 10 AM PST',
      gradeLevel: '5th - 8th Grade'
    },
    {
      id: 4,
      image: 'genetics',
      title: 'Genetics for Beginners',
      description: 'Learn the basics of Genetics and inheritance.',
      date: 'June 14 - June 17',
      time: '11 AM - 12 PM PST',
      gradeLevel: '6th - 8th Grade'
    },
    {
      id: 5,
      image: 'coding2',
      title: 'Advanced Coding',
      description: 'Take your coding skills to the next level.',
      date: 'June 20 - June 23',
      time: '2 - 3 PM PST',
      gradeLevel: '8th - 10th Grade'
    },
    {
      id: 6,
      image: 'defaultImg',
      title: 'Introduction to Data Science',
      description: 'An introduction to data analysis and visualization.',
      date: 'June 25 - June 28',
      time: '4 - 5 PM PST',
      gradeLevel: '10th - 12th Grade'
    }
  ]);

  const imageMapping = {
    coding,
    coding2,
    biochem,
    genetics,
    microbiology,
    defaultImg
  };

  return (
    <div>
      <Header />
      <HeroOther title="Online Classes" />
      
      <div className='page-wrapper'> {/* Added page-wrapper */}
        <div className='course-list'>
          {courses.length > 0 ? (
            <div className="course-cards-container">
              {courses.map(({ id, image, title, description, date, time, gradeLevel }) => (
                <div key={id} className="course-card">
                  <img
                    src={imageMapping[image] || defaultImg}
                    alt={title}
                    className='course-image'
                  />
                  <h2 className='course-title'>{title}</h2>
                  <p className='course-description'>{description}</p>
                  <p className='course-date-time'>
                    <strong>When:</strong> {date}, {time}
                  </p>
                  <p className='course-grade-level'>
                    <strong>Recommended Grade Level:</strong> {gradeLevel}
                  </p>
                  <button className="register-button">Register</button>
                </div>
              ))}
            </div>
          ) : (
            <p>No courses available at the moment. Please try again later.</p>
          )}
        </div>
      </div> {/* End of page-wrapper */}
      <Footer />
    </div>
  );
};

export default OnlineClasses;