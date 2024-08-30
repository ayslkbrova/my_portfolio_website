import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const HireMe = () => {
  return (
    <section id="hire-me" className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg">
            I'm Aysel Alakbarova, a Frontend Developer with a passion for creating visually stunning and user-friendly websites.
          </p>
        </div>

        {/* Services */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold mb-6">What I Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Web Development', description: 'Building responsive and functional websites tailored to your needs.' },
              { title: 'Responsive Design', description: 'Ensuring your site looks great on all devices and screen sizes.' },
              { title: 'UI/UX Design', description: 'Creating intuitive and engaging user interfaces and experiences.' },
              { title: 'Custom Web Solutions', description: 'Offering unique solutions to fit your specific project requirements.' }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Me */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold mb-6">Why Choose Me?</h3>
          <ul className="list-disc list-inside space-y-4">
            {[
              { text: 'Client-Centered Approach: I work with a focus on your needs and provide tailored solutions.' },
              { text: 'Proven Experience: I have a diverse portfolio and have achieved success in various projects.' },
              { text: 'Timely Delivery: I emphasize delivering projects on time with high quality.' }
            ].map((item, index) => (
              <li key={index} className="text-lg">{item.text}</li>
            ))}
          </ul>
        </div>

        {/* Portfolio */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold mb-6">My Work</h3>
          <p className="text-lg mb-6">
            Check out some of the projects I’ve worked on to see the quality and variety of my work.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Placeholder for portfolio items */}
            {[
              { title: 'Project 1', description: 'A description of the project.' },
              { title: 'Project 2', description: 'A description of the project.' },
              { title: 'Project 3', description: 'A description of the project.' },
              { title: 'Project 4', description: 'A description of the project.' }
            ].map((project, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-80">
                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold mb-6">What My Clients Say</h3>
          <p className="text-lg">
            "A few words from previous clients about their experience working with me."
          </p>

        </div>

        {/* Contact */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold mb-6">Get in Touch</h3>
          <p className="text-lg mb-6">
            Let's discuss your project and see how I can help!
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:your-email@example.com" className="text-xl text-primaryColor hover:underline">
              <FaEnvelope />
            </a>
            <a href="tel:+1234567890" className="text-xl text-primaryColor hover:underline">
              <FaPhone />
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="text-xl text-primaryColor hover:underline">
              <FaLinkedin />
            </a>
            <a href="https://github.com/yourprofile" className="text-xl text-primaryColor hover:underline">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Process */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold mb-6">How I Work</h3>
          <p className="text-lg">
            I follow a structured process to ensure your project is delivered on time and meets your expectations.
          </p>
          <ul className="list-disc list-inside space-y-4 mx-auto max-w-xl">
            {[
              'Initial Consultation: Understanding your needs and project scope.',
              'Planning & Design: Creating a plan and design for the project.',
              'Development: Building and coding the project.',
              'Testing & Review: Ensuring everything works as expected.',
              'Launch & Support: Launching the project and providing ongoing support.'
            ].map((step, index) => (
              <li key={index} className="text-lg">{step}</li>
            ))}
          </ul>
        </div>

        {/* Conclusion */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-6">Ready to Start Your Project?</h3>
          <p className="text-lg mb-6">
            Contact me today and let’s discuss how we can make your project a success!
          </p>
          <a href="mailto:your-email@example.com" className="bg-primaryColor text-white py-3 px-6 rounded-lg text-lg hover:bg-primaryColor-dark">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
