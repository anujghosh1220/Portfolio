'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Card from './Card';
import SectionHeading from './SectionHeading';
import ProjectModal from './ProjectModal';
import { projects } from '@/lib/data/projects';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const project = projects.find((p) => p.id === selectedProject);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle="A showcase of full-stack applications and engineering solutions."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className="p-6 h-full flex flex-col"
                glow
                onClick={() => setSelectedProject(proj.id)}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{proj.title}</h3>
                  <p className="text-gray-400 text-sm">{proj.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.technologies.length > 4 && (
                    <span className="px-2 py-1 text-gray-500 text-xs">
                      +{proj.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-800">
                  <div className="flex gap-2">
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-400 hover:text-white text-sm transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="mr-2" size={20} />
                        <span>Code</span>
                      </a>
                    )}
                    {proj.liveDemo && (
                      <a
                        href={proj.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-400 hover:text-white text-sm transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt size={16} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <ProjectModal
          project={project || null}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
