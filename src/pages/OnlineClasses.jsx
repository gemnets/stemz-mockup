import React, { useEffect, useState } from 'react';
import './OnlineClasses.css';
import HeroOther from '../components/HeroOther';
import coding from '../assets/coding.jpg';
import coding2 from '../assets/coding2.jpg';
import biochem from '../assets/biochem.jpg';
import genetics from '../assets/genetics.jpg';
import microbiology from '../assets/Microbiology.jpg';
import defaultImg from '../assets/defaultcourseimg.jpg';
import axios from 'axios';

const OnlineClasses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/api/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <HeroOther title="Online Classes" />
      <h1 className='course-online-main'>Online Classes</h1>
      <div className='course-list'>
        {courses.length > 0 ? (
          courses.map((course) => (
            <div key={course.id} className='course-card'>
              <img
                src={
                  course.image === 'coding'
                    ? coding
                    : course.image === 'coding2'
                    ? coding2
                    : course.image === 'biochem'
                    ? biochem
                    : course.image === 'genetics'
                    ? genetics
                    : course.image === 'microbiology'
                    ? microbiology
                    : defaultImg
                }
                alt={course.title}
                className='course-image'
              />
              <h2 className='course-title'>{course.title}</h2>
              <p className='course-description'>{course.description}</p>
            </div>
          ))
        ) : (
          <p>Loading courses...</p>
        )}
      </div>
    </div>
  );
};

export default OnlineClasses;
