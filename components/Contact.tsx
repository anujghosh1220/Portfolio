'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPaperPlane, FaArrowRight } from 'react-icons/fa';
import Card from './Card';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { personalInfo } from '@/lib/data/personal';
import { FadeIn } from './animations';

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Let's Build Something"
          subtitle="Have an opportunity, project, or interesting engineering problem? I'd be happy to connect."
        />

        <FadeIn direction="up" delay={0.2}>
          <Card className="p-8 text-center max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  href={`mailto:${personalInfo.email}`}
                  size="lg"
                  className="flex-1"
                >
                  <FaPaperPlane className="mr-2" size={20} />
                  Email Me
                  <motion.span
                    className="ml-2 inline-block"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaArrowRight size={16} />
                  </motion.span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
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
              </motion.div>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
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
              </motion.div>
            </div>

            <motion.div
              className="border-t border-gray-800 pt-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <p className="text-gray-400 mb-2">Get in touch</p>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="text-white text-lg font-medium hover:text-blue-400 transition-colors inline-block"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {personalInfo.email}
              </motion.a>
            </motion.div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
