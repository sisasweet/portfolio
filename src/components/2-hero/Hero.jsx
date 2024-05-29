import React from 'react'
import'./hero.css'
import Lottie from 'lottie-react';
import devAnimation from "../../animation/dev.json";
const Hero= () => {
  return (
    <section id="anchor-about"   className=' hero flex'>
     <div className='left-section '>
      <div className='parent-avatar flex'>
        <img src="./photos.jpg" className='avatar' alt="" />
        <div className="icon-verified"></div> {/* span n'accepte pas le margin element inline */}
      </div>

      <h1 className='title'>Full stack <br/>Programer,<br/>
      designer,and<br/>Founder. </h1>

      <p className='paragraph'> Passionate Full-Stack Developer (MERN Stack)
       with a knack for crafting dynamic and responsive websites.
        💻 Specializing in e-commerce platforms, portfolios, and corporate websites, 
        I bring a unique blend of technical expertise and creative flair to every project.
         Let's turn your ideas into seamless, user-friendly experiences! 💡 Ready to collaborate and innovate. 
         Let's build something amazing together! 🌐 
      #WebDevelopment #MERNStack #FreelanceDeveloper" </p>

      <div className='Icons flex'>
      <div className="icon icon-twitter"></div>
        <div className="icon icon-instagram"></div>
        <div className="icon icon-github"></div>
        <div className="icon icon-linkedin"></div>
        
      
        
      </div>

     </div>
     <div className='right-section animation  '>
      
     <Lottie
         
          className=""
        
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
            
          }}
          animationData={devAnimation}
        />
      
      
       </div>
    </section>
  )
}

export default Hero
