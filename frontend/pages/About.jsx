
import image1 from '../src/assets/image1.jpeg'
import html from '../src/assets/skills/html.svg'
import css from '../src/assets/skills/css.svg'
import js from '../src/assets/skills/js.svg'
import react from '../src/assets/skills/react.svg'
import expressjs from '../src/assets/skills/expressjs.svg'
import mongodb from '../src/assets/skills/mongodb.svg'
import sql from '../src/assets/skills/sql.svg'
import php from '../src/assets/skills/php.png'
import tailwind from '../src/assets/skills/tailwind.svg'
import Bootstrap from '../src/assets/skills/bootstrap.svg'
import clanguate from '../src/assets/skills/c.svg'
import cplue from '../src/assets/skills/c++.svg'
import java from '../src/assets/skills/java.svg'
import python from '../src/assets/skills/python.svg'

import unified from '../src/assets/skills/unified.png'
import cognifyed from '../src/assets/skills/cognifyz.png'
import saikets from '../src/assets/skills/saiket.png'
import offer_letter from '../src/assets/skills/offer_letter.pdf'
import cognifyz from '../src/assets/skills/cognifyz.pdf'
import saiket from '../src/assets/skills/saiket.pdf'



const About = () => {
  return (

    <div className='bg-[#130b3a] text-white'>


      {/* about me section */}
      <section className='max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10'>
        {/* left section */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm Neeraj 👋
            <br />
            Full Stack Developer
          </h1>
          <p className='mt-6 text-gray-300'>
            Hi, I'm Neeraj Singh, a passionate Full Stack Developer focused on building modern and scalable web applications using the MERN stack.

            I enjoy turning complex problems into simple, clean, and user-friendly solutions. Recently, I have built authentication systems using JWT, implemented protected routes, and connected frontend applications to backend APIs.

            My current focus is improving my backend architecture skills and learning advanced system design concepts.

            I believe in writing clean code, continuous learning, and building real-world projects that solve practical problems.
          </p>

        </div>

        {/* right section is here */}
        <div className="flex-1">
          <img
            src={image1}
            alt="heroImage"
            className='w-95  object-cover rounded-xl shadow-2xl'
          />
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 py-16 text-center'>
        <h2 className='text-3xl font-bold mb-6'>These are my skills</h2>
        <p className='text-gray-300 max-w-3xl mx-auto'>
          I continuously work on improving my technical skills in both frontend and backend development.
          I enjoy building responsive, user-friendly applications and writing clean, efficient code. I am also exploring machine learning
          and predictive analysis to expand my problem-solving abilities and create intelligent solutions.
        </p>

      </section>

      {/* skills section */}
      <section className='max-w-6xl mx-auto px-4 sm:px-6 pb-20 grid grid-cols-2 md:grid-cols-6 gap-6 place-items-center'>
        <div className="bg-[#1c1445] w-30 flex flex-col justify-center p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <a href="#" className='text-center'>
            <img src={html} alt="html" />
            HTML
          </a>
        </div>

        <div className="bg-[#1c1445] w-30 flex flex-col justify-center p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <a href="#" className='text-center'>
            <img src={css} alt="css" />
            CSS
          </a>
        </div>
        <div className="bg-[#1c1445] w-30 flex flex-col justify-center p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <a href="#" className='text-center'>
            <img src={js} alt="java-script" />
            JavaScript
          </a>
        </div>
        <div className="bg-[#1c1445] w-30 flex flex-col justify-center p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <a href="#" className='text-center'>
            <img src={react} alt="reactjs" />
            ReactJs
          </a>
        </div>
        <div className="bg-[#1c1445] w-30 flex flex-col justify-center p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <a href="#" className='text-center'>
            <img src={expressjs} alt="expressjs" />
            Express.js
          </a>
        </div>
        <div className="bg-[#1c1445] w-30 flex flex-col justify-center p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <a href="#" className='text-center'>
            <img src={mongodb} alt="mongodb" />
            MongoDb
          </a>
        </div>




        <div className="bg-[#1c1445] w-30 flex flex-col justify-center p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <a href="#" className='text-center'>
            <img src={sql} alt="sql" />
            MySql
          </a>
        </div>
        <div className="bg-[#1c1445] w-30 flex flex-col justify-center p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <a href="#" className='text-center mt-6'>
            <img src={php} alt="sql" />
            Php
          </a>
        </div>
        <div className="bg-[#1c1445] w-30 flex flex-col justify-center p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <a href="#" className='text-center'>
            <img src={tailwind} alt="tailwind" />
            Tailwind
          </a>
        </div>
        <div className="bg-[#1c1445] w-30 flex flex-col justify-center p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <a href="#" className='text-center'>
            <img src={Bootstrap} alt="bootstrap" />
            Bootstrap
          </a>
        </div>
        <div className="bg-[#1c1445] w-30 flex flex-col justify-center p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <a href="#" className='text-center'>
            <img src={clanguate} alt="c++" />
            C++
          </a>
        </div>
        <div className="bg-[#1c1445] w-30 flex flex-col justify-center p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <a href="#" className='text-center'>
            <img src={cplue} alt="java" />
            Java
          </a>
        </div>
        <div className="bg-[#1c1445] w-30 flex flex-col justify-center p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <a href="#" className='text-center'>
            <img src={java} alt="twitter_logo" />
            Bootstrap
          </a>
        </div>
        <div className="bg-[#1c1445] w-30 flex flex-col justify-center p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <a href="#" className='text-center'>
            <img src={python} alt="twitter_logo" />
            Python
          </a>
        </div>
      </section>


      {/* Internships informations... */}

      <section className='max-w-6xl mx-auto px-6 py-4 text-center'>
        <h2 className='text-3xl font-bold mb-6'>These are my Internships (on going and completed)</h2>
        <p className='text-gray-300 max-w-3xl mx-auto'>
          I continuously work on improving my technical skills in both frontend and backend development.
          I enjoy building responsive, user-friendly applications and writing clean, efficient code. I am also exploring machine learning
          and predictive analysis to expand my problem-solving abilities and create intelligent solutions.
        </p>

      </section>


      <section className="max-w-6xl mx-auto  place-items-center px-6 py-16">





        <h2 className="text-3xl font-bold text-center mb-4">
          1.Full Stack Development Internship (In <a href="https://unifiedmentor.com/" className='text-blue-400'>@unifiedmentor.com</a> )
        </h2>

        <p className="text-gray-300 text-center max-w-3xl mx-auto">
          I am currently working as a Full Stack Development Intern at
          <a href="https://unifiedmentor.com/" className='text-blue-400'> @unifiedmentor.com</a>
          ,
          where I contribute to both frontend and backend development. I build responsive
          user interfaces, integrate APIs, manage databases, and implement secure
          authentication systems while collaborating with a professional development team.
        </p>
        {/* image come herea */}
        <div className="grid grid-cols-1  gap-8 mb-8">
          <a href={offer_letter}>
            <img
              src={unified}
              alt="Internship Work 1"
              className="w-70 h-90 object-cover rounded-2xl shadow-lg "
            />

          </a>
        </div>




        {/* 2nd internships  */}




        <h2 className="text-3xl font-bold text-center mb-4">
          2.Full Stack Development Internship (In <a href="https://www.linkedin.com/company/cognifyz-techonologies/posts/?feedView=all" className='text-blue-400'>@cognifyz.com</a> )
        </h2>

        <p className="text-gray-300 text-center max-w-3xl mx-auto">
          I am currently working as a Full Stack Development Intern at
          <a href="https://www.linkedin.com/company/cognifyz-techonologies/posts/?feedView=all" className='text-blue-400'> @cognifyz.com</a>
          ,
          where I contribute to frontend development. I build responsive
          user interfaces, integrate APIs, manage databases, and implement secure
          authentication systems while collaborating with a professional development team.
        </p>

        {/* image will come here */}

        <div className="grid grid-cols-1  gap-8 mb-8">
          <a href={cognifyz}>
            <img
              src={cognifyed}
              alt="Internship Work 1"
              className="w-70 h-80 object-cover rounded-2xl shadow-lg "
            />
          </a>
        </div>

        {/* 3rd internships */}




        <h2 className="text-3xl font-bold text-center mb-4">
          3.Web Development Internship (In <a href="https://www.linkedin.com/company/saiket-systems/posts/?feedView=all" className='text-blue-400'>@SaiketSystem</a> )
        </h2>

        <p className="text-gray-300 text-center max-w-3xl mx-auto">
          I am currently working as a Full Stack Development Intern at
          <a href="https://www.linkedin.com/company/saiket-systems/posts/?feedView=all" className='text-blue-400'> @SaiketSystem</a>
          ,
          where I contribute only frontend development. I build responsive
          user interfaces, integrate APIs, manage databases, and implement secure
          authentication systems while collaborating with a professional development team.
        </p>


        <div className="grid grid-cols-1  gap-8 mb-8">
          <a href={saiket}>
            <img
              src={saikets}
              alt="Internship Work 1"
              className="w-70 h-80 object-cover rounded-2xl shadow-lg "
            />

          </a>
        </div>





      </section>








    </div>


  )
}

export default About
