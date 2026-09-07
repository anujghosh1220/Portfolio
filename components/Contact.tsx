'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import Card from './Card';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { personalInfo } from '@/lib/data/personal';

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Let's Build Something"
          subtitle="Have an opportunity, project, or interesting engineering problem? I'd be happy to connect."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 text-center max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                href={`mailto:${personalInfo.email}`}
                size="lg"
                className="flex-1"
              >
                <FaPaperPlane className="mr-2" size={20} />
                Email Me
              </Button>
              <Button
                href={personalInfo.linkedin}
                variant="secondary"
                size="lg"
                external
                className="flex-1"
              >
<FaLinkedin className="mr-2" size={20} />
                LinkedIn
              </Button>
              <Button
                href={personalInfo.github}
                variant="secondary"
                size="lg"
                external
                className="flex-1"
              >
<FaGithub className="mr-2" size={20} />
                GitHub
              </Button>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 mb-2">Get in touch</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-white text-lg font-medium hover:text-blue-400 transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
