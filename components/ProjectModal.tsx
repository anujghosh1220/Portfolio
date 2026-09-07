'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Project } from '@/lib/data/projects';
import Button from './Button';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-gray-900 border border-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 p-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <FaTimes size={24} />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {project.longDescription && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Overview</h3>
                <p className="text-gray-300">{project.longDescription}</p>
              </div>
            )}

            {project.problem && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Problem</h3>
                <p className="text-gray-300">{project.problem}</p>
              </div>
            )}

            {project.solution && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Solution</h3>
                <p className="text-gray-300">{project.solution}</p>
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-2">
                    <span className="text-blue-400 mt-1.5">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {project.engineering && project.engineering.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Engineering Focus</h3>
                <ul className="space-y-2">
                  {project.engineering.map((eng, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="text-violet-400 mt-1.5">•</span>
                      {eng}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-gray-800/50 text-gray-300 rounded-lg text-sm border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.security && project.security.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Security Considerations</h3>
                <ul className="space-y-2">
                  {project.security.map((sec, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="text-green-400 mt-1.5">•</span>
                      {sec}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.developmentNotes && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Development Notes</h3>
                <p className="text-gray-300">{project.developmentNotes}</p>
              </div>
            )}

            <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-800">
              {project.github && (
                <Button href={project.github} external>
  <FaGithub className="mr-2" size={20} />
                  View on GitHub
                </Button>
              )}
              {project.liveDemo && (
                <Button href={project.liveDemo} variant="secondary" external>
                  <FaExternalLinkAlt className="mr-2" size={20} />
                  Live Demo
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
