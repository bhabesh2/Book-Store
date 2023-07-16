import React from 'react'
import aboutImg from '../../Assets/aboutImg.jpg'
import './About.css'
const About = () => {
  return (
    <>
     <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>
        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="about-image" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BooksLab</h2>
            <p className="fs-17">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod a voluptas accusantium, labore tempore iure quos vel ducimus vero tenetur itaque neque cum obcaecati. Necessitatibus ex aliquid repudiandae tempora architecto nostrum, exercitationem soluta inventore cumque magnam eum reiciendis sequi non officia 
            </p>
            <p className="fs-17">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure accusamus .
            </p>
          </div>
        </div>
      </div>
     </section>
    </>
  )
}

export default About
