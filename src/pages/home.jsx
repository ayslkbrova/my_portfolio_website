import React from 'react';
import { useEffect } from 'react';
import Nav from '../components/header';
import AyselImage from '../assets/image/Aysel Alakbarova.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

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
            <section id='Home' className='flex items-center justify-start h-50vh mx-14 ' data-aos="fade-right" >
                <h1 className='text-8xl text-white'>
                    <span className='text-7xl italic'>hi there, I'm </span> <br />
                    Aysel Alakbarova
                </h1>
            </section>
            <section id='about' className='p-8 bg-black-100 my-36 text-white flex items-center '>
                <div className='w-9/12 max-w-4xl mx-auto' data-aos="fade-right">
                    <h2 className='text-4xl font-medium mb-6 text-left italic text-700 gradient-text' style={{ color: '#FFD700' }}>About Me</h2>
                    <div className='flex items-center mb-6'>

                        <div>
                            <p className='text-lg'>
                                Hi, I'm <span className='font-bold text-700'>Aysel Alakbarova</span>, a passionate web developer and designer
                                with a love for creating beautiful and functional web experiences.
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
                    <h2 className='text-4xl font-medium mb-6 text-left italic text-700 gradient-text' style={{ color: '#FFD700' }}> <span class="text-3xl font-bold mb-4">01</span>  Skills</h2>

                </div>
                {/* <div className='max-w-7xl mx-auto'>

                    <div className='grid grid-cols-2 gap-6'>
                        <div>
                            <h3 className='text-2xl font-semibold mb-4'>Front-End</h3>
                            <ul className='list-disc list-inside'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Scss</li>
                                <li>Tailwind</li>
                                <li>JavaScript</li>
                                <li>Jquery</li>
                                <li>React</li>
                             
                            </ul>
                        </div>
                       
                    </div>
                </div> */}
                <div class="bg-black text-white py-36">
                    <div class="container mx-auto text-xl">
                        <ul class="flex">
                            <li class="mb-2 p-6 bg-black border border-black border-white hover:border-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-5 
cursor-pointer">HTML</li>
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
cursor-pointer">GIT</li>
                            <li class="mb-2 p-6 bg-black border border-black border-white hover:border-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-5 
cursor-pointer">GitHub</li>
                        </ul>



                    </div>
                </div>

                {/* <section id='animated-section' className='py-12 my-38 text-white' data-aos="fade-left">
      <div className='w-12/12 max-w-7xl mx-auto'>
        <h2 className='text-4xl font-medium mb-6 text-left italic text-700 gradient-text' style={{ color: '#FFD700' }}>Animated Section</h2>
      </div>

    </section> */}

            </section>
            <section id='projects' className='py-12 my-8 text-white section-animation' data-aos="fade-up" data-aos-duration="5000">
    <div className='w-12/12 max-w-7xl mx-auto'>
        <h2 className='text-4xl font-medium mb-6 text-left italic text-700 gradient-text' style={{ color: '#FFD700' }}>
            <span className="text-3xl font-bold mb-4">02</span> Projects
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
                <div className="  p-8 rounded-lg shadow-lg border border-transparent hover:border-white text-white transition-all duration-300 transform hover:-translate-x-5">
                    <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-semibold text-white">Proje 2</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-gray-300 text-xl">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-300 text-xl">
                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </a>
                        </div>
                    </div>
                    <p className="mt-4 text-lg">Bu benim ikinci proje açıklaması. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className=" border-white p-8 rounded-lg shadow-lg border border-transparent hover:border-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-5">
                    <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-semibold text-white">Proje 3</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-gray-300 text-xl">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-300 text-xl">
                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </a>
                        </div>
                    </div>
                    <p className="mt-4 text-lg">Bu benim üçüncü proje açıklaması. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className=" border-white p-8 rounded-lg shadow-lg border border-transparent hover:border-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-x-5">
                    <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-semibold text-white">Proje 4</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-gray-300 text-xl">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-300 text-xl">
                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </a>
                        </div>
                    </div>
                    <p className="mt-4 text-lg">Bu benim dördüncü proje açıklaması. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
        </div>
    </div>
</section>



            <section className='data'></section>
        </>

    )
}

export default home