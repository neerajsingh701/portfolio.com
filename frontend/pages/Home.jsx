
import image1 from '../src/assets/image1.jpeg'
import frontend from '../src/assets/frontend.jpg'
import backend from '../src/assets/backend_1.jpg'
import optimization from '../src/assets/optimization.jpg'
import github from '../src/assets/github.svg'
import linkedin from '../src/assets/linkedin.svg'
import twitter from '../src/assets/twitter.svg'
import oldPortfolio from '../src/assets/old_profile.svg'


const Home = () => {
    return (
        <div className='bg-[#130b3a] text-white'>


            {/* This is the hero section */}
            <section className='max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10'>

                {/* left section */}
                <div className="flex-1">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Hi, I'm Neeraj 👋
                        <br />
                        Full Stack Developer
                    </h1>
                    <p className='mt-6 text-gray-300'>
                        I build modern, scalable and high-performance web applications
                        using MERN stack and modern UI technologies.
                    </p>
                    <button className="mt-8 px-6 py-3 bg-white text-[#130b3a] font-semibold rounded-lg cursor-pointer hover:text-white hover:bg-blue-500 transition">
                        <a href="/projects" >View projects</a>
                    </button>
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

            {/* About sections */}


            <section className='max-w-6xl mx-auto px-6 py-16 text-center'>
                <h2 className="text-3xl font-bold mb-6">What I Do</h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                    "I build scalable, end-to-end web applications using the MERN stack, turning complex ideas into functional digital products.
                    From architecting robust Node.js backends to crafting polished, responsive interfaces with
                    Tailwind CSS, I focus on delivering seamless user experiences that are both fast and reliable."
                </p>

            </section>

            {/* 3 Cards section */}
            <section className='max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-8'>
                {/* card 1 */}
                <div className="bg-[#1c1445] flex flex-col p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                    <h3 className='text-xl font-semibold mb-4'>Frontend Development</h3>
                    <img
                        src={frontend}
                        alt="heroImage"
                        className='h-50 w-full  object-cover rounded-xl shadow-2xl'
                    />
                    <p className="text-gray-300 mt-2">
                        "As a passionate Frontend Developer, I
                        specialize in building responsive, user-centric web applications that blend seamless functionality with modern aesthetics. With a strong foundation in React and the MERN stack, I focus on writing clean,
                        maintainable code and leveraging tools like Tailwind
                        CSS to create polished interfaces. I thrive on turning complex problems
                        into intuitive digital experiences that perform beautifully across all devices."
                    </p>
                </div>

                {/* card 2 */}
                <div className="bg-[#1c1445] flex flex-col p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                    <h3 className='text-xl font-semibold mb-4'>Backend Development</h3>
                    <img
                        src={backend}
                        alt="heroImage"
                        className='h-50 w-full  object-cover rounded-xl shadow-2xl'
                    />
                    <p className="text-gray-300 mt-2">
                        "As a Full-Stack Developer, I bridge the gap between elegant user interfaces and robust
                        server-side logic. With a deep understanding of the MERN stack (MongoDB, Express, React, and Node.js),
                        I build end-to-end web applications that are both scalable and high-performing. From crafting responsive layouts with Tailwind CSS to designing efficient RESTful APIs and managing databases, I enjoy the
                        challenge of building complete digital solutions that solve real-world problems."
                    </p>
                </div>

                {/* card 3 */}

                <div className="bg-[#1c1445] p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                    <h3 className='text-xl font-semibold mb-4'>Performance Optimization</h3>
                    <img
                        src={optimization}
                        alt="heroImage"
                        className='h-50 w-full object-cover rounded-xl shadow-2xl'
                    />
                    <p className="text-gray-300 mt-2">

                        "I am deeply committed to Web Performance Optimization, ensuring every application I build is fast, accessible, and lightweight.
                        On the frontend, I utilize techniques like Lazy Loading, Code Splitting, and Image Compression to achieve high Lighthouse scores and a smooth
                        user experience. On the backend, I focus on Database Indexing, Query Optimization in MongoDB,
                        and implementing Caching strategies to handle high traffic and reduce server response times."
                    </p>
                </div>
            </section>


            <section className='max-w-6xl mx-auto px-6 py-16 text-center'>
                <h2 className='text-3xl font-bold mb-6'>Connect with me</h2>
                <p className='text-gray-300 max-w-3xl mx-auto'>Let's build the future together. Whether you're looking to collaborate on a repository on GitHub, connect over a professional opportunity on
                    LinkedIn, or keep up with my latest tech threads on Twitter, I’m just a click away. Reach out and say hello!"</p>
            </section>



            {/* social media section */}
            <section className='max-w-6xl mx-auto px-4 sm:px-6 pb-20 grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center'>
                <div className="bg-[#1c1445] w-30 flex flex-col justify-center p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                    <a href="https://github.com/neerajsingh701">
                        <img src={github} alt="github_logo" />
                        Github
                    </a>
                </div>

                <div className="bg-[#1c1445] w-30 flex flex-col justify-center p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                    <a href="https://www.linkedin.com/in/neerajsingh521/">
                        <img src={linkedin} alt="linkedin_logo" />
                        Linkedin
                    </a>
                </div>
                <div className="bg-[#1c1445] w-30 flex flex-col justify-center p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                    <a href="#">
                        <img src={twitter} alt="twitter_logo" />
                        Twitter
                    </a>
                </div>
                <div className="bg-[#1c1445] w-30 flex flex-col justify-center p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                    <a href="https://neerajsingh701.github.io/neerajSingh_portfolio/">
                        <img src={oldPortfolio} alt="twitter_logo" />
                        Portfolio
                    </a>
                </div>




            </section>

        </div>
    )
}

export default Home
