
import project01 from '../src/assets/project01.png'
import project02 from '../src/assets/project02.png'
import project1 from '../src/assets/project1.png'
import project2 from '../src/assets/project2.png'
import project3 from '../src/assets/project3.png'
import project4 from '../src/assets/project4.png'
import project5 from '../src/assets/project5.png'
import project6 from '../src/assets/project6.png'


const Projects = () => {
  return (
    <div className='bg-[#130b3a] text-white min-h-screen'>

      {/* This is the hero section */}

      <section className='max-w-6xl mx-auto px-6 py-16 text-center'>
        <h1 className="text-4xl md:text-5xl font-bold">
          My Projects 🚀
        </h1>
        <p className='mt-4'>
          Here are some of the projects I've built using modern web
          technologies like React, Node.js, and MongoDB.
        </p>
      </section>


      {/* These are the projects cards */}
      <section className='max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-8'>

        {/* project card one... */}
        {/* here will come Image bg removal */}
        <div className='bg-[#1c1445] p-8 rounded-xl border border-gray-700 shadow-lg hover:Shadow-2xl hover:translate-y-2 transition duration-300'>
          <img
            src={project01}
            alt="heroImage"
            className='rounded-xl shadow-2xl'
          />
          <h3 className="text-xl font-semibold mb-4">
            Image bg-removal
          </h3>
          <p text-gray-300 mb-6>
            A Fully responsive personal portfolio website built using
            React and Tailwind CSS with authentication system.
          </p>

          <a href="#"
            className='inline-block px-5 py-2 bg-white text-[#130b3a] font-semibold rounded-lg hover:bg-gray-200 transition'
          >
            View Project
          </a>
        </div>


        {/* project card 2 */}
        {/* here wheather tracker application project */}
        <div className='bg-[#1c1445] p-8 rounded-xl border border-gray-700 shadow-lg hover:Shadow-2xl hover:translate-y-2 transition duration-300'>
          <img
            src={project02}
            alt="heroImage"
            className='rounded-xl shadow-2xl'
          />
          <h3 className="text-xl font-semibold mb-4">
            Wheather Tracking website
          </h3>
          <p text-gray-300 mb-6>
            A MERN stack habit tracker application with authentication,
            dashboard, and performance tracking features.
          </p>

          <a href="#"
            className='inline-block px-5 py-2 bg-white text-[#130b3a] font-semibold rounded-lg hover:bg-gray-200 transition'
          >
            View Project
          </a>
        </div>


        {/* project card 3 */}
        {/* here habit tracker project will come */}
        <div className='bg-[#1c1445] p-8 rounded-xl border border-gray-700 shadow-lg hover:Shadow-2xl hover:translate-y-2 transition duration-300'>
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="heroImage"
            className='rounded-xl shadow-2xl'
          />
          <h3 className="text-xl font-semibold mb-4">
            Habit Tracker app
          </h3>
          <p text-gray-300 mb-6>
            RESTful API backend built using Node.js and Express
            with JWT authentication and MongoDB integration
          </p>

          <a href="#"
            className='inline-block px-5 py-2 bg-white text-[#130b3a] font-semibold rounded-lg hover:bg-gray-200 transition'
          >
            View Project
          </a>
        </div>

        {/* prject card 4 */}
        <div className='bg-[#1c1445] p-8 rounded-xl border border-gray-700 shadow-lg hover:Shadow-2xl hover:translate-y-2 transition duration-300'>
          <img
            src={project1}
            alt="heroImage"
            className=' rounded-xl shadow-2xl'
          />
          <h3 className="text-xl font-semibold mb-4">
            Netflix Clone
          </h3>
          <p text-gray-300 mb-6>
            A visually stunning Netflix replica built with React and Tailwind CSS, featuring dynamic content fetching via the TMDB API. I implemented a responsive 'Browse'"
          </p>

          <a href="#"
            className='inline-block px-3 py-2 mr-2 my-2 bg-white text-[#130b3a] font-semibold rounded-lg hover:text-white hover:bg-red-500 transitions'
          >
            View Project
          </a>
          <a href="https://github.com/neerajsingh701/netflix-clone"
            className='inline-block px-3 py-2 bg-white text-[#130b3a] font-semibold rounded-lg hover:text-white hover:bg-sky-600 transitions'
          >
            View source code
          </a>
        </div>

        {/* project card 5 */}

        <div className='bg-[#1c1445] p-8 rounded-xl border border-gray-700 shadow-lg hover:Shadow-2xl hover:translate-y-2 transition duration-300'>
          <img
            src={project2}
            alt="heroImage"
            className='rounded-xl shadow-2xl'
          />
          <h3 className="text-xl font-semibold mb-4">
            Youtube clone
          </h3>
          <p text-gray-300 mb-6>
            "A high-performance YouTube-inspired video streaming platform built with the MERN stack and Tailwind CSS.
            It features dynamic video rendering using the YouTube Data API v3"
          </p>

          <a href="https://ytneeraj.netlify.app/"
            className='inline-block px-3 py-2 mr-2 my-2 bg-white text-[#130b3a] font-semibold rounded-lg hover:text-white hover:bg-red-500 transitions'
          >
            View Project
          </a>
          <a href="https://github.com/neerajsingh701/youtube-design"
            className='inline-block px-3 py-2 bg-white text-[#130b3a] font-semibold rounded-lg hover:text-white hover:bg-sky-600 transitions'
          >
            View source code
          </a>
        </div>

        {/* project card 6 */}

        <div className='bg-[#1c1445] p-8 rounded-xl border border-gray-700 shadow-lg hover:Shadow-2xl hover:translate-y-2 transition duration-300'>
          <img
            src={project3}
            alt="heroImage"
            className='rounded-xl shadow-2xl'
          />
          <h3 className="text-xl font-semibold mb-4">
            Movie-TMDB-Website
          </h3>
          <p text-gray-300 mb-6>
            Our sleek and interactive chatbot website offers a user-friendly and intuitive experience for seamless conversations.
            Key features include:
          </p>
          <a href="#"
            className='inline-block px-3 py-2 mr-2 my-2 bg-white text-[#130b3a] font-semibold rounded-lg hover:text-white hover:bg-red-500 transitions'
          >
            View Project
          </a>
          <a href="#"
            className='inline-block px-3 py-2 bg-white text-[#130b3a] font-semibold rounded-lg hover:text-white hover:bg-sky-600 transitions'
          >
            View source code
          </a>
        </div>

        {/* project 7 */}

        <div className='bg-[#1c1445] p-8 rounded-xl border border-gray-700 shadow-lg hover:Shadow-2xl hover:translate-y-2 transition duration-300'>
          <img
            src={project4}
            alt="heroImage"
            className='rounded-xl shadow-2xl'
          />
          <h3 className="text-xl font-semibold mb-4">
            Cars website
          </h3>
          <p text-gray-300 mb-6>
            A Fully responsive personal portfolio website built using
            React and Tailwind CSS with authentication system.
          </p>

          <a href="#"
            className='inline-block px-3 py-2 mr-2 my-2 bg-white text-[#130b3a] font-semibold rounded-lg hover:text-white hover:bg-red-500 transitions'
          >
            View Project
          </a>
          <a href="#"
            className='inline-block px-3 py-2 bg-white text-[#130b3a] font-semibold rounded-lg hover:text-white hover:bg-sky-600 transitions'
          >
            View source code
          </a>
        </div>

        {/* project 8 */}

        <div className='bg-[#1c1445] p-8 rounded-xl border border-gray-700 shadow-lg hover:Shadow-2xl hover:translate-y-2 transition duration-300'>
          <img
            src={project5}
            alt="heroImage"
            className='rounded-xl shadow-2xl'
          />
          <h3 className="text-xl font-semibold mb-4">
            Simple calculator UI/UX
          </h3>
          <p text-gray-300 mb-6>
            Our calculator website is designed for quick, accurate,
            and hassle-free calculations for all your needs. Whether it's basic math, scientific functions,
            or financial calculations.
          </p>
          <a href="https://neerajsingh701.github.io/Calulator/"
            className='inline-block px-3 py-2 mr-2 my-2 bg-white text-[#130b3a] font-semibold rounded-lg hover:text-white hover:bg-red-500 transitions'
          >
            View Project
          </a>
          <a href="https://github.com/neerajsingh701/Calulator"
            className='inline-block px-3 py-2 bg-white text-[#130b3a] font-semibold rounded-lg hover:text-white hover:bg-sky-600 transitions'
          >
            View source code
          </a>
        </div>

        {/* project 9 */}

        <div className='bg-[#1c1445] p-8 rounded-xl border border-gray-700 shadow-lg hover:Shadow-2xl hover:translate-y-2 transition duration-300'>
          <img
            src={project6}
            alt="heroImage"
            className='rounded-xl shadow-2xl'
          />
          <h3 className="text-xl font-semibold mb-4">
            ATM-Card UI/UX
          </h3>
          <p text-gray-300 mb-6>
            Our ATM card interface is designed for a
            smooth, or making transactions, our intuitive design ensures effortless navigation and enhanced security.
            🔹 Modern & Simple UI
          </p>

          <a href="https://neerajsingh701.github.io/Atm-card-/"
            className='inline-block px-3 py-2 mr-2 my-2 bg-white text-[#130b3a] font-semibold rounded-lg hover:text-white hover:bg-red-500 transitions'
          >
            View Project
          </a>
          <a href="https://github.com/neerajsingh701/Atm-card-"
            className='inline-block px-3 py-2 bg-white text-[#130b3a] font-semibold rounded-lg hover:text-white hover:bg-sky-600 transitions'
          >
            View source code
          </a>
        </div>

        {/*  */}



      </section>






    </div>
  )
}

export default Projects
