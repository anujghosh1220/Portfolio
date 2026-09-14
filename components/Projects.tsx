'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import Card from './Card';
import SectionHeading from './SectionHeading';
import ProjectModal from './ProjectModal';
import { projects } from '@/lib/data/projects';
import { StaggerContainer, StaggerItem, HoverCard } from './animations';
import { useReducedMotion } from './animations';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const project = projects.find((p) => p.id === selectedProject);

  return (
    <section id="projects" className="py-20 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle="A showcase of full-stack applications and engineering solutions."
        />

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <StaggerItem key={proj.id} direction="up">
              <HoverCard
                enableTilt={!prefersReducedMotion}
                maxTilt={3}
                onClick={() => setSelectedProject(proj.id)}
              >
                <Card className="p-6 h-full flex flex-col" glow>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">{proj.title}</h3>
                    <p className="text-gray-400 text-sm">{proj.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.technologies.slice(0, 4).map((tech, i) => (
                      <motion.span
                        key={tech}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs border border-gray-700 hover:border-blue-500/50 transition-colors cursor-default"
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: i * 0.03 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {proj.technologies.length > 4 && (
                      <span className="px-2 py-1 text-gray-500 text-xs">
                        +{proj.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-800">
                    <div className="flex gap-4">
                      {proj.github && (
                        <motion.a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaGithub className="mr-2" size={20} />
                          <span>Code</span>
                        </motion.a>
                      )}
                      {proj.liveDemo && (
                        <motion.a
                          href={proj.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt size={16} />
                          <span>Demo</span>
                        </motion.a>
                      )}
                      <motion.div
                        className="ml-auto flex items-center text-blue-400"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaArrowRight size={16} />
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ProjectModal
          project={project || null}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
