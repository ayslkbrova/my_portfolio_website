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
            <section id='Home' className='h-screen bg-[url("src/assets/image/1.jpg")] bg-cover bg-center flex items-center' data-aos="fade-right" >
    <div className='flex flex-col-reverse md:flex-row items-center justify-around h-full w-11/12 mx-auto'>
        <h1 className='text-4xl sm:text-5xl md:text-7xl text-white text-center md:text-left'>
            <span className='text-3xl sm:text-4xl md:text-7xl italic leading-snug block md:inline'>Hi there, I'm</span><br />
            Aysel Alakbarova<br />
            <button className='mt-4 h-12 w-40 text-center text-white font-normal text-xl sm:text-2xl border border-white-transparent rounded-xl hover:bg-white hover:text-black transition duration-300 ease-out'>
                Hire me
            </button>
        </h1>
        <img src={AyselImage} data-aos="flip-right" className='w-8/12 sm:w-6/12 md:w-3/12 max-w-2xl object-cover rounded-lg shadow-md mb-6 md:mb-0' alt="" />
    </div>
</section>

            <section id='about' className='p-4 bg-black-100 justify-around my-8 w-full mx-auto text-white flex flex-col items-center sm:p-8 sm:h-80vh sm:flex-row sm:w-11/12'>
                <div className='w-full sm:w-11/12' data-aos="fade-right">
                    <h2 className='text-3xl font-medium mb-4 text-center italic text-700 text-custom-red sm:text-left sm:text-5xl sm:mb-6'>
                        About Me
                    </h2>
                    <div className='flex items-center mb-4 sm:mb-6'>
                        <div>
                            <p className='text-base sm:text-lg'>
                                Hi, I'm <span className='font-bold text-700'>Aysel Alakbarova</span>, a passionate web developer and designer
                                with a love for creating beautiful and functional web experiences.
                            </p>
                        </div>
                    </div>
                    <div className='space-y-2 sm:space-y-4'>
                        <p className='text-sm sm:text-base'>
                            My journey into the world of web development started not in a classroom, but with a simple curiosity and a desire to
                            bring my creative ideas to life on the internet. From my first HTML page to complex interactive websites, every project
                            has been a step in my self-taught adventure.
                        </p>
                        <p className='text-sm sm:text-base'>
                            I draw inspiration from the world around me - the colors of nature, the patterns in everyday life, and the stories
                            of the people I meet. This inspiration fuels my work and drives me to push the boundaries of web design.
                        </p>
                        <p className='text-sm sm:text-base'>
                            In addition to my love for coding, I am a lifelong learner who enjoys exploring new technologies and trends. Whether
                            it's a new JavaScript framework or a novel design approach, I am always eager to expand my skill set and take on
                            new challenges.
                        </p>
                        <p className='text-sm sm:text-base'>
                            When I'm not in front of a computer screen, you can find me hiking in the mountains, painting, or experimenting with
                            new recipes in the kitchen. These activities help me stay creative and bring fresh perspectives to my work. <span className='font-bold text-700'>Skilss</span>
                        </p>
                    </div>
                </div>
            </section>

            <section
  id="skills"
  className="py-12 my-20 text-white section-animation"
  data-aos="fade-up"
  data-aos-duration="5000"
>
  <div className="w-full max-w-7xl mx-auto px-4">
    <div className="flex flex-col items-center sm:flex-row sm:items-center">
      <span className="text-3xl font-bold mb-2 text-custom-red sm:text-4xl">
        01
      </span>
      <h2
        className="text-4xl font-medium mb-4 text-center italic text-700 gradient-text mx-0 sm:mx-3 sm:text-5xl sm:mb-6"
        style={{ color: "#FFD700" }}
      >
        Skills
      </h2>
    </div>
  </div>

  <div className="bg-black text-white pb-10 w-full max-w-7xl mx-auto px-4">
    <div className="text-lg sm:text-xl">
      <ul className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6">
        {webTechnologies.technologies.map((item) => (
          <li
            key={item.name}
            className="mb-4 p-4 text-center bg-customGray border shadow-custom hover:border-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-2 cursor-pointer rounded-3xl flex flex-col items-center justify-center"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-16 h-16 mb-4 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
            />
            <span className="font-normal text-xl sm:text-2xl">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>


            <section id="experience" className='py-12 my-20 text-white section-animation' data-aos="fade-up" data-aos-duration="5000">
                <div className='w-full max-w-7xl mx-auto px-4'>
                    <div className='flex flex-col items-center sm:flex-row sm:items-center'>
                        <span className="text-3xl font-bold mb-2 text-custom-red sm:text-4xl">02</span>
                        <h2 className='text-4xl font-medium mb-4 text-center italic text-700 gradient-text mx-0 sm:mx-3 sm:text-5xl sm:mb-6' style={{ color: '#FFD700' }}>
                            Experience
                        </h2>
                    </div>
                    <div className="bg-black text-white py-6 mb-12 px-4 flex flex-col space-y-8 sm:space-y-0 sm:py-8 sm:mb-24">
                        <div className="flex flex-col mb-4 sm:mb-8">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <span className="text-lg font-bold">Digigo</span>
                                {/* <span className="text-sm mt-1 sm:mt-0 sm:ml-2">Full-time - 3 yrs 2 mos</span> */}
                            </div>
                            <div className="flex items-center mb-2 mt-4">
                                <div className="w-4 h-4 bg-custom-red rounded-full mr-2"></div>
                                <h2 className="text-xl font-bold">Junior Frontend Developer</h2>
                            </div>
                            <p className="text-sm mb-2">June 2024 · Present</p>
                            <p className="text-sm">
                                Built, executed, and optimized all lead nurturing programs for ESP providers using our pre-built HTML.
                            </p>
                        </div>

                        <div className="flex flex-col mb-4 sm:mb-8">
                            <div className="flex items-center mb-2">
                                <div className="w-4 h-4 bg-custom-red rounded-full mr-2"></div>
                                <h2 className="text-lg font-bold">IKT Club UNEC Intern</h2>
                            </div>
                            <p className="text-sm mb-2">Dec 2023 - May 2024 · 6 mo</p>
                            <p className="text-sm">
                                Boosted brand awareness by 25% and led the development of a new marketing strategy.
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <div className="flex items-center mb-2">
                                <div className="w-4 h-4 bg-custom-red rounded-full mr-2"></div>
                                <h2 className="text-lg font-bold">Frontend Courses</h2>
                            </div>
                            <p className="text-sm mb-2">Sep 2023 - Dec 2023 · 4 mo</p>
                            <p className="text-sm">
                                Boosted brand awareness by 25% and led the development of a new marketing strategy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='projects' className='py-12 my-8 text-white section-animation' data-aos="fade-up" data-aos-duration="5000">
                <div className='w-full max-w-7xl mx-auto px-4'>
                    <div className='flex flex-col items-center mb-8 sm:flex-row sm:items-center'>
                        <span className="text-3xl font-bold mb-2 text-custom-red sm:text-4xl">03</span>
                        <h2 className='text-4xl font-medium mb-4 text-center italic gradient-text mx-0 sm:mx-3 sm:text-5xl sm:mb-6' style={{ color: '#FFD700' }}>
                            Projects
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-8 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="relative border-white p-6 rounded-lg shadow-lg border border-transparent text-white transition-transform duration-400 transform hover:translate-y-4 hover:scale-105 hover:shadow-2xl hover:bg-gray-800"
                                style={{
                                    backgroundColor: '#1a1a1a', // Koyu gri arka plan
                                }}
                            >
                                <div className="flex flex-col h-full justify-between">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-semibold text-white sm:text-xl">{project.name}</h3>
                                        <div className="flex space-x-4">
                                            <a href={project.github} className="text-gray-300 hover:text-white text-lg sm:text-xl">
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                            <a href={project.externalLink} className="text-gray-300 hover:text-white text-lg sm:text-xl">
                                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            </a>
                                        </div>
                                    </div>
                                    <p className="text-md mb-4 sm:text-lg">{project.stack}</p>
                                    <p className="text-sm text-gray-400">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id='contact' className='py-12 my-8 text-white section-animation' data-aos="fade-up" data-aos-duration="5000">
    <div className='w-full max-w-7xl mx-auto'>
        <div className='flex flex-col items-center mb-8 sm:flex-row sm:items-center'>
            <span className="text-3xl font-bold mb-2 text-custom-red sm:text-4xl">04</span>
            <h2 className='text-4xl font-medium mb-4 text-center italic gradient-text mx-0 sm:mx-3 sm:text-5xl sm:mb-6' style={{ color: '#FFD700' }}>
                Contact
            </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-between pt-8 pb-24 space-y-8 lg:space-y-0">
            <div className='w-full lg:w-1/2 max-w-4xl mx-auto' data-aos="fade-right">
                <div className='space-y-4 text-lg sm:text-xl'>
                    <p>Embark on a visual journey through my creative realm, where innovation meets imagination.</p>
                    <p>With a keen eye for detail and a passion for design, I showcase my finest work and achievements.</p>
                    <p>Dive into a world where each project tells a story of dedication, skill, and boundless creativity.</p>
                    <p>
                        <span className='font-bold text-700 underline'>Join me</span> in exploring the limitless possibilities of visual expression and craftsmanship, on this coding journey as we bring innovation and creativity to life in the digital world.
                    </p>
                </div>
            </div>

            <div className='w-full lg:w-1/2 max-w-4xl mx-auto' data-aos="fade-right">
                <div className="bg-black w-full sm:w-5/5 rounded-lg mx-auto p-6">
                    <form className="space-y-5">
                        <label htmlFor="name" className="block text-white text-sm font-medium">Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full bg-black text-white border-b-2 border-white outline-none py-2"
                        />
                        <label htmlFor="email" className="block text-white text-sm font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="john.doe@example.com"
                            className="w-full bg-black text-white border-b-2 border-white outline-none py-2"
                        />
                        <label htmlFor="message" className="block text-white text-sm font-medium">Message</label>
                        <textarea
                            placeholder="What can we help you with?"
                            className="w-full h-32 bg-black text-white border-b-2 border-white outline-none py-2"
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

export const webTechnologies = {
    technologies: [
        {
            name: "HTML",
            img: "src/assets/skillsImg/HTML.svg",
            size: "129x129"
        },
        {
            name: "CSS",
            img: "src/assets/skillsImg/css.svg",
            size: "129x129"
        },
        {
            name: "SCSS",
            img: "src/assets/skillsImg/scss.svg",
            size: "129x129"
        },
        {
            name: "Tailwind CSS",
            img: "src/assets/skillsImg/tailwind.svg",
            size: "129x129"
        },
        {
            name: "JavaScript",
            img: "src/assets/skillsImg/javascript.svg",
            size: "129x129"
        },
        {
            name: "jQuery",
            img: "src/assets/skillsImg/jquery.svg",
            size: "129x129"
        },
        {
            name: "GIT",
            img: "src/assets/skillsImg/git.svg",
            size: "129x129"
        },
        {
            name: "GitHub",
            img: "src/assets/skillsImg/github.svg",
            size: "129x129"
        }
    ]
};

const projects = [
    {
        "name": "My Portfolio",
        "stack": "Vite + React, Tailwind CSS",
        "description": "A personal portfolio showcasing my projects and skills.",
        "github": "#",
        "externalLink": "#"
    },
    {
        "name": "TEC",
        "stack": "Html, Scss, JavaScript",
        "description": "A project developed using HTML, SCSS, and JavaScript for dynamic content.",
        "github": "#",
        "externalLink": "#"
    },
    {
        "name": "Spark Academy",
        "stack": "Html, Css, JavaScript",
        "description": "An educational platform built with HTML, CSS, and JavaScript.",
        "github": "#",
        "externalLink": "#"
    },
    {
        "name": "EduFord",
        "stack": "Html, Css, JavaScript",
        "description": "A modern web application developed using HTML, CSS, and JavaScript.",
        "github": "#",
        "externalLink": "#"
    },
];




{/* <div className="container mx-auto py-24">
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {projects.map((project, index) => (
                                <div key={index} className="border-white p-8 rounded-lg shadow-lg border border-transparent hover:border-white text-white transition-all duration-300 transform hover:-translate-x-5">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                                        <div className="flex space-x-4">
                                            <a href={project.github} className="text-gray-400 hover:text-gray-300 text-xl">
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                            <a href={project.externalLink} className="text-gray-400 hover:text-gray-300 text-xl">
                                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            </a>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-lg">{project.stack}</p>
                                </div>
                            ))}
                            
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
                    </div> */}
