import React from 'react';
import { useEffect } from 'react';
import Nav from '../components/header';
import AyselImage from '../assets/image/Aysel Alakbarova.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, faInstagram, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
// import {  faCss3Alt } from '@fortawesome/free-brands-svg-icons';
// import {  faSass} from '@fortawesome/free-brands-svg-icons';
// import {  faJs } from '@fortawesome/free-brands-svg-icons';
// import {  faJquery} from '@fortawesome/free-brands-svg-icons';
// import {  faReact } from '@fortawesome/free-brands-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';



const home = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
        });
    }, [])
    return (

        <>
            <Nav />
            <section id='Home' className='flex flex-col items-center justify-center h-50vh  ' data-aos="fade-right" >
                <h1 className='text-8xl text-white text-center'>
                    <span className=' text-7xl  italic leading-snug'>Hi there, I'm </span> <br />
                    Aysel Alakbarova
                </h1>
                {/* <p className='text-white text-center leading-snug text-italic'>shine in the world</p> */}

            </section>
            <section id='about' className='p-8 bg-black-100 my-36 text-white flex items-center '>
                <div className='w-9/12 max-w-4xl mx-auto' data-aos="fade-right">
                    <h2 className='text-5xl  font-medium mb-6 text-left italic text-700 gradient-text' style={{ color: '#FFD700' }}>About Me</h2>
                    <div className='flex items-center mb-6'>

                        <div>
                            <p className='text-lg'>
                                Hi, I'm <span className='font-bold text-700'>Aysel Alakbarova</span>, a passionate web developer and designer
                                with a love for creating beautiful and functional web experiences.
                                {/* <FontAwesomeIcon icon={faHtml5} size="2x" />
                                <FontAwesomeIcon icon={faCss3Alt} size="2x" />
                                <FontAwesomeIcon icon={faSass} size="2x" />
                                <FontAwesomeIcon icon={faJs} size="2x" />
                                <FontAwesomeIcon icon={faJquery} size="2x" />
                                <FontAwesomeIcon icon={faReact} size="2x" />
                                <FontAwesomeIcon icon={faGithub} size="2x" /> */}

                            </p>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <p>
                            My journey into the world of web development started not in a classroom, but with a simple curiosity and a desire to
                            bring my creative ideas to life on the internet. From my first HTML page to complex interactive websites, every project
                            has been a step in my self-taught adventure.
                        </p>
                        <p>
                            I draw inspiration from the world around me - the colors of nature, the patterns in everyday life, and the stories
                            of the people I meet. This inspiration fuels my work and drives me to push the boundaries of web design.
                        </p>
                        <p>
                            In addition to my love for coding, I am a lifelong learner who enjoys exploring new technologies and trends. Whether
                            it's a new JavaScript framework or a novel design approach, I am always eager to expand my skill set and take on
                            new challenges.
                        </p>
                        <p>
                            When I'm not in front of a computer screen, you can find me hiking in the mountains, painting, or experimenting with
                            new recipes in the kitchen. These activities help me stay creative and bring fresh perspectives to my work.  <span className='font-bold text-700'>Skilss</span>
                        </p>
                    </div>

                </div>
                <img src={AyselImage} data-aos="flip-right" className='w-3/12 max-w-4xl mx-auto object-cover rounded-lg shadow-md' alt="" />
            </section>
            <section id='skills' className='py-12 my-38 text-white section-animation ' data-aos="fade-up"
                data-aos-duration="5000">
                <div className='w-12/12 max-w-7xl mx-auto' >
                    <h2 className='text-5xl font-medium mb-6 text-left italic text-700 gradient-text' style={{ color: '#FFD700' }}> <span class="text-4xl font-bold mb-4">01</span>  Skills</h2>

                </div>

                <div class="bg-black text-white py-36 w-12/12 max-w-7xl mx-auto ">
                    <div class="container mx-auto text-xl">
                        <ul class="flex">
                            <li class="mb-2 p-6 bg-black border border-black border-white hover:border-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-5 
cursor-pointer">
                                HTML</li>
                            <li class="mb-2 p-6 bg-black border border-black border-white hover:border-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-5 
cursor-pointer">CSS</li>
                            <li class="mb-2 p-6 bg-black border border-black border-white hover:border-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-5 
cursor-pointer">SCSS</li>
                            <li class="mb-2 p-6 bg-black border border-black border-white hover:border-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-5 
cursor-pointer">Tailwind CSS</li>
                            <li class="mb-2 p-6 bg-black border border-black border-white hover:border-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-5 
cursor-pointer">JavaScript</li>
                            <li class="mb-2 p-6 bg-black border border-black border-white hover:border-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-5 
cursor-pointer">jQuery</li>
                            <li class="mb-2 p-6 bg-black border border-black border-white hover:border-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-5 
cursor-pointer">React</li>
                            <li class="mb-2 p-6 bg-black border border-black border-white hover:border-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-5 
cursor-pointer">
                                <FontAwesomeIcon icon={faGitAlt} size="2x" />
                                GIT</li>
                            <li class="mb-2 p-6 bg-black border border-black border-white hover:border-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-5 
cursor-pointer">GitHub</li>
                        </ul>



                    </div>
                </div>

                {/* <section id='animated-section' className='py-12 my-38 text-white' data-aos="fade-left">
      <div className='w-12/12 max-w-7xl mx-auto'>
        <h2 className='text-5xl font-medium mb-6 text-left italic text-700 gradient-text' style={{ color: '#FFD700' }}>Animated Section</h2>
      </div>

    </section> */}

            </section>
            <section id="experience" className='py-12 my-38 text-white section-animation ' data-aos="fade-up"
                data-aos-duration="5000">
                <div className='w-12/12 max-w-7xl mx-auto'>
                    <h2 className='text-5xl font-medium mb-6 text-left italic text-700 gradient-text' style={{ color: '#FFD700' }}>
                        <span className="text-4xl font-bold mb-4">02</span> Experience
                    </h2>

                    <div className="bg-black text-white py-8 mb-24 px-4flex flex-col">
                        <div className="mb-4">
                            <span className="text-lg font-bold">WeWork</span>
                            <span className="text-sm ml-2">Full-time - 3 yrs 2 mos</span>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="w-4 h-4 bg-gray-500 rounded-full mr-2"></div>
                            <h2 className="text-xl font-bold">Senior Marketing Manager</h2>
                        </div>
                        <p className="text-sm mb-2">Jul 2020 - Aug 2022 · 2 yrs 2 mos</p>
                        <p className="text-sm">
                            Built, executed, and optimized all lead nurturing programs for ESP providers using our pre-built HTML.
                        </p>
                        <div className="flex items-center mt-4">
                            <div className="w-4 h-4 bg-gray-500 rounded-full mr-2"></div>
                            <h2 className="text-lg font-bold">Marketing Manager</h2>
                        </div>
                        <p className="text-sm mb-2">Jul 2019 - Jul 2020 · 1 yr 1 mo</p>
                        <p className="text-sm">
                            Boosted brand awareness by 25% and led the development of a new marketing strategy.
                        </p>
                    </div>
                </div>
            </section>
            <section id='projects' className='py-12 my-8 text-white section-animation' data-aos="fade-up" data-aos-duration="5000">
                <div className='w-12/12 max-w-7xl mx-auto'>
                    <h2 className='text-5xl font-medium mb-6 text-left italic text-700 gradient-text' style={{ color: '#FFD700' }}>
                        <span className="text-4xl font-bold mb-4">03</span> Projects
                    </h2>

                    <div className="container mx-auto py-24">
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className=" border-white p-8 rounded-lg shadow-lg border border-transparent hover:border-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-5">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-2xl font-semibold text-white">My Portfolio</h3>
                                    <div className="flex space-x-4">
                                        <a href="#" className="text-gray-400 hover:text-gray-300 text-xl">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-gray-300 text-xl">
                                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                                        </a>
                                    </div>
                                </div>
                                <p className="mt-4 text-lg">Vite+ React, Tailwind CSS</p>
                            </div>
                            <div className=" border-white p-8 rounded-lg shadow-lg border border-transparent hover:border-white text-white transition-all duration-300 transform hover:-translate-x-5">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-2xl font-semibold text-white">TEC</h3>
                                    <div className="flex space-x-4">
                                        <a href="#" className="text-gray-400 hover:text-gray-300 text-xl">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-gray-300 text-xl">
                                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                                        </a>
                                    </div>
                                </div>
                                <p className="mt-4 text-lg">Html, Scss, JavaScript</p>

                            </div>
                            <div className=" border-white p-8 rounded-lg shadow-lg border border-transparent hover:border-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-5">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-2xl font-semibold text-white">SparkAcademy </h3>
                                    <div className="flex space-x-4">
                                        <a href="#" className="text-gray-400 hover:text-gray-300 text-xl">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-gray-300 text-xl">
                                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                                        </a>
                                    </div>
                                </div>
                                <p className="mt-4 text-lg">Html, Css, JavaScript</p>
                            </div>
                            <div className=" border-white p-8 rounded-lg shadow-lg border  hover:border-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-x-5">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-2xl font-semibold text-white">EduFord</h3>
                                    <div className="flex space-x-4">
                                        <a href="#" className="text-gray-400 hover:text-gray-300 text-xl">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-gray-300 text-xl">
                                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                                        </a>
                                    </div>
                                </div>
                                <p className="mt-4 text-lg">Html, Css, JavaScript</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='contact' className='py-12 my-8 text-white section-animation' data-aos="fade-up" data-aos-duration="5000">
                <div className='w-12/12 max-w-7xl mx-auto'>
                    <h2 className='text-5xl font-medium mb-6 text-left italic text-700 gradient-text' style={{ color: '#FFD700' }}>
                        <span className="text-4xl font-bold mb-4">04</span> Contact
                    </h2>
                    <div className="flex justify-between pt-8 pb-24">
                        <div className='w-6/12 max-w-4xl mx-auto' data-aos="fade-right">

                            <div className='space-y-4 text-xl'>
                                <p>
                                    Embark on a visual journey through my creative realm, where innovation meets imagination.
                                </p>
                                <p>
                                    With a keen eye for detail and a passion for design, I showcase my finest work and achievements.
                                </p>
                                <p>
                                    Dive into a world where each project tells a story of dedication, skill, and boundless creativity.
                                </p>
                                <p>
                                    <span className='font-bold text-700 underline'>Join me</span>  in exploring the limitless possibilities of visual expression and craftsmanship, on this coding journey as we bring innovation and creativity to life in the digital world
                                </p>
                            </div>

                        </div>

                        <div className='w-6/12 max-w-4xl mx-auto' data-aos="fade-right">
                            <div className="bg-black w-4/5 sm:w-5/5 rounded-lg mx-auto ">
                                <form className="space-y-6">
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full bg-black text-white border-b-2 border-white outline-none"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your email here"
                                        className="w-full bg-black text-white border-b-2 border-white outline-none"
                                    />
                                    <textarea
                                        placeholder="Message"
                                        className="w-full h-32 bg-black text-white border-b-2 border-white outline-none"
                                    />
                                    <button
                                        className="w-full bg-white text-black py-2 rounded-md hover:bg-gray-200"
                                    >
                                        Contact me
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>

    )
}

export default home