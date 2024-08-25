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
        <footer className="bg-black text-white py-4 w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div>&copy; 2024 Aysel Alakbarova</div>
                <div className="flex space-x-4">
                    <div>
                        <a href="link-to-linkedin" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faLinkedin} className="text-500 h-5 w-5" />
                        </a>
                    </div>
                    <div>
                        <a href="link-to-gmail" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faEnvelope} className="text-500 h-5 w-5" />
                        </a>
                    </div>
                    <div>
                        <a href="link-to-github" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faGithub} className="text-500 h-5 w-5" />
                        </a>
                    </div>
                    <div>
                        <a href="link-to-instagram" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faInstagram} className="text-500 h-5 w-5" />
                        </a>
                    </div>
                    <div>
                        <a href="link-to-medium" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faMedium} className="text-500 h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
