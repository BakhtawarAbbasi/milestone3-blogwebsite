// pages/about.tsx

import Link from "next/link";
import { FC } from "react";

const About: FC = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-accentDarkSecondary">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-center max-w-2xl">
          Welcome to my blogs! I am passionate about sharing insights, knowledge,
          and stories that inspire and educate. Explore my journey and connect
          with me to learn more.
        </p>
      </section>

      {/* Interactive Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20 py-10">
        {/* Card 1 */}
        <div className="group relative bg-secondary-light dark:bg-secondary-dark border rounded-lg p-6 shadow-2xl hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-2 text-accentDarkPrimary">
            My Journey
          </h2>
          <p className="text-dark/80 dark:text-light/80">
            From a beginner to building interactive web experiences, my journey
            has been all about growth and creativity.
          </p>
          <span className="absolute bottom-4 right-4 text-sm text-gray-500 group-hover:text-primary-light dark:group-hover:text-primary-dark">
            Learn More
          </span>
        </div>

        {/* Card 2 */}
        <div className="group relative bg-secondary-light dark:bg-secondary-dark border rounded-lg p-6 shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-2 text-accentDarkPrimary">
            My Skills
          </h2>
          <p className="text-dark/80 dark:text-light/80">
            Proficient in Next.js, TypeScript, and Tailwind CSS, I specialize in
            creating responsive and user-friendly designs.
          </p>
          <span className="absolute bottom-4 right-4 text-sm text-gray-500 group-hover:text-primary-light dark:group-hover:text-primary-dark">
            Read More
          </span>
        </div>

        {/* Card 3 */}
        <div className="group relative bg-secondary-light dark:bg-secondary-dark border dark:border-white rounded-lg p-6 shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-2 text-accentDarkPrimary">
            My Vision
          </h2>
          <p className="text-dark/80 dark:text-light/80">
            To inspire, educate, and create a community of learners through
            engaging content and innovative designs.
          </p>
          <span className="absolute bottom-4 right-4 text-sm text-gray-500 group-hover:text-primary-light dark:group-hover:text-primary-dark">
            Read More
          </span>
        </div>
      </section>

      {/* Call to Action */}
      <section className="flex flex-col items-center justify-center py-10 ">
        <h2 className="text-3xl font-semibold mb-4 text-accentDarkPrimary">Want to Collaborate?</h2>
        <p className="text-center max-w-xl">
          I’m always open to exploring new ideas and projects. Feel free to
          reach out and let’s create something amazing together!
        </p>
        <Link href="/contact">
        <button className="mt-6 px-6 py-2 bg-gray-700 text-white text-primary-light dark:text-primary-dark rounded-full shadow-lg  transition">
          Contact Me
        </button>
        </Link>
      </section>
    </div>
  );
};

export default About;
