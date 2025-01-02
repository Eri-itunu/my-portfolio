'use client'

import styles from './styles.module.css';

export default function Home() {
  // Smooth scrolling handler
  const scrollToSection = (id:string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-white w-full container mx-auto">
      {/* Hero Section */}
      <div className=" h-3/4 text-left pb-12 pt-12 md:pb-20 md:pt-36 flex items-center flex-col justify-center">
        <div className="text-body px-12 flex flex-col items-center justify-center gap-6">
          {/* Typewriter Effect for Name */}
          <h1 className={`text-5xl font-semibold ${styles.typewriter}`}>
            Adesioye Eriitunu
          </h1>
        </div>
        {/* Fade-in Text */}
        <div className={`${styles["fade-in-up"]} mt-6 text-xl text-center px-4`}>
          I am a software engineer passionate about creating impactful products.
        </div>
        {/* Call-to-Actions */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded shadow"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded shadow"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded shadow"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Placeholder Sections */}
      <div id="projects" className="py-20 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-4">Projects</h2>
        <p className="text-center text-gray-300">
          Showcase your best work here with descriptions, links, and screenshots.
        </p>
      </div>

      <div id="about" className="py-20 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-4">About Me</h2>
        <p className="text-center text-gray-300">
          Share your background, skills, and what makes you unique as a developer.
        </p>
      </div>

      <div id="contact" className="py-20 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-4">Contact</h2>
        <p className="text-center text-gray-300">
          Include a contact form or details for reaching out.
        </p>
      </div>
    </div>
  );
}
