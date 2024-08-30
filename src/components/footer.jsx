import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
        });
    }, []);

    return (
        <footer className=" dark:bg-white text-white dark:text-black py-4 w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div>&copy; 2024 Aysel Alakbarova</div>
                <div className="flex space-x-4">
                    <div>
                        <a href="link-to-linkedin" className="text-white  dark:text-black hover:text-gray-300 dark:hover:text-gray-700">
                            <FontAwesomeIcon icon={faLinkedin} className="text-500 h-5 w-5" />
                        </a>
                    </div>
                    <div>
                        <a href="link-to-gmail" className="text-white dark:text-black hover:text-gray-300 dark:hover:text-gray-700">
                            <FontAwesomeIcon icon={faEnvelope} className="text-500 h-5 w-5" />
                        </a>
                    </div>
                    <div>
                        <a href="link-to-github" className="text-white dark:text-black hover:text-gray-300 dark:hover:text-gray-700">
                            <FontAwesomeIcon icon={faGithub} className="text-500 h-5 w-5" />
                        </a>
                    </div>
                    <div>
                        <a href="link-to-instagram" className="text-white dark:text-black hover:text-gray-300 dark:hover:text-gray-700">
                            <FontAwesomeIcon icon={faInstagram} className="text-500 h-5 w-5" />
                        </a>
                    </div>
                    <div>
                        <a href="link-to-medium" className="text-white dark:text-black hover:text-gray-300 dark:hover:text-gray-700 transition-transform duration-300 transform hover:rotate-180">
                            <FontAwesomeIcon icon={faMedium} className="text-500 h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
