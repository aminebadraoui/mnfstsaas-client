import React from 'react';
import { motion } from 'framer-motion';
import { FaLandmark, FaUserLock, FaChartLine, FaCreditCard, FaRobot } from 'react-icons/fa';
import { FaBuilding, FaBullseye, FaChartBar, FaRocket } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">MNFST Saas</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#services" className="hover:text-primary-500 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-primary-500 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
        <CoreSaasElements />
        <WhyChooseUs />
        <Services />
        <Contact />
      </main>

      <footer className="bg-gray-900 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 MNFST Saas. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center py-20"
    >
      <h2 className="text-5xl font-bold mb-6">Launch Your SaaS MVP in Record Time</h2>
      <p className="text-xl mb-8">Turn your idea into reality with our expert team. From concept to launch, we've got you covered.</p>
      <a href="#services" className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-full transition-colors">Explore Our Services</a>
    </motion.section>
  );
}

function CoreSaasElements() {
  const elements = [
    { title: "Landing Page", description: "Attract and convert visitors" },
    { title: "Authentication", description: "Secure user access (email, magic link, OAuth)" },
    { title: "Admin Dashboard", description: "Manage your SaaS and track performance" },
    { title: "Payment Infrastructure", description: "Handle billing and subscriptions" },
    { title: "Chatbot", description: "Provide automated customer support" }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-32 bg-gray-800"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Building a SaaS Can Be Challenging</h2>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-6 mb-16">
            {elements.map((element, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start"
              >
                <svg className="w-6 h-6 text-primary-500 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <h3 className="text-xl font-bold">{element.title}</h3>
                  <p className="text-gray-300">{element.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

    </motion.section>
  );
}


function WhyChooseUs() {
  const benefits = [
    {
      title: "Full-Stack Solution",
      description: "We build everything you need: landing page, auth system, admin dashboard, and payment infrastructure.",
      icon: FaBuilding
    },
    {
      title: "Core Feature Focus",
      description: "You focus on your unique idea, we handle the foundational elements every SaaS needs.",
      icon: FaBullseye
    },
    {
      title: "Marketing Assistance",
      description: "We don't just build, we help you market. Get guidance on lead acquisition and growth strategies.",
      icon: FaChartBar
    },
    {
      title: "Streamlined Process",
      description: "From concept to launch, our streamlined process gets your SaaS to market faster.",
      icon: FaRocket
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="py-20 "
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Here's Where We Come In</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <benefit.icon className="text-4xl mr-4 text-primary-500" />
                <h3 className="text-2xl font-bold">{benefit.title}</h3>
              </div>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Services() {
  const services = [
    {
      title: "Premium Package",
      price: "$6,997",
      features: [
        "Complete MVP development",
        "Server and domain setup",
        "Waitlist landing page",
        "Full source code ownership",
        "3 months free maintenance",
        "Training and funnel crafting",
      ],
      cta: "Get Started",
    },
    {
      title: "Standard Package",
      price: "$3,497 + $97/mo",
      features: [
        "SaaS + landing page development",
        "Hosted on our secure servers",
        "Monthly maintenance included",
        "Basic funnel training",
      ],
      cta: "Choose Standard",
    },
    {
      title: "Starter Kit",
      price: "$497",
      features: [
        "Frontend and backend starter code",
        "Deployment scripts included",
        "Video walkthrough",
        "Comprehensive SOP files",
      ],
      cta: "Buy Now",
    },
  ];

  return (
    <section id="services" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">A Solution for Every Budget</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 rounded-lg p-8 shadow-lg flex flex-col"
          >
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-3xl font-bold text-primary-500 mb-6">{service.price}</p>
              <ul className="mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded transition-colors mt-auto">
              {service.cta}
            </button>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-xl mb-4">Need a custom solution or have more than one core feature?</p>
        <a href="#contact" className="text-primary-500 hover:text-primary-600 font-bold">Contact us for a personalized quote</a>
      </div>
    </section>
  );
}
function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input type="text" id="name" className="w-full px-3 py-2 bg-gray-700 rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input type="email" id="email" className="w-full px-3 py-2 bg-gray-700 rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea id="message" rows="4" className="w-full px-3 py-2 bg-gray-700 rounded" required></textarea>
        </div>
        <button type="submit" className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded transition-colors">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default App;