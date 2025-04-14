import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Senior Developer',
    company: 'Tech Company',
    period: '2020 - Present',
    description: 'Led development of multiple web applications using React and Node.js.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Agency',
    period: '2018 - 2020',
    description: 'Developed and maintained client websites and applications.',
  },
  // Add more experiences as needed
];

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* About Hero Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About Me</h1>
            <p className="text-lg text-gray-600 mb-8">
              Hi, I'm Jayeep Joshi. I'm a passionate full-stack developer with expertise in modern web technologies.
              I love creating beautiful and functional applications that solve real-world problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Experience</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                <div className="text-primary font-medium mb-2">{exp.company}</div>
                <div className="text-gray-500 text-sm mb-4">{exp.period}</div>
                <p className="text-gray-600">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Interests */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg mx-auto"
            >
              <h2 className="text-3xl font-display font-bold text-center mb-8">Skills & Interests</h2>
              <p className="text-gray-600 mb-6">
                I specialize in full-stack web development with a focus on React, TypeScript, and Node.js.
                My experience includes building responsive web applications, RESTful APIs, and working with
                various databases.
              </p>
              <p className="text-gray-600">
                When I'm not coding, I enjoy staying up-to-date with the latest tech trends, contributing
                to open-source projects, and sharing my knowledge with the developer community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 