'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Card from './Card';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { FadeIn } from './animations';

export default function GitHubSection() {
  return (
    <section id="github" className="py-20 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Open Source & Code"
          subtitle="Explore my repositories and contributions on GitHub."
        />

        <FadeIn direction="up" delay={0.2}>
          <Card className="p-8 text-center">
            <motion.div
              className="flex justify-center mb-6"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-4 bg-gray-800/50 rounded-full">
                <FaGithub className="text-white" size={48} />
              </div>
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Check Out My GitHub
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Browse through my projects, contributions, and open source work. 
              My GitHub profile contains the complete source code for the projects 
              featured on this portfolio and more.
            </p>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                href="https://github.com/anujghosh1220"
                size="lg"
                external
              >
<FaGithub className="mr-2" size={20} />
                Visit GitHub Profile
                <motion.span
                  className="ml-2 inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaExternalLinkAlt size={20} />
                </motion.span>
              </Button>
            </motion.div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
