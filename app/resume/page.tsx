'use client';

import Link from 'next/link';
import { MotionConfig, motion } from 'framer-motion';
import { FaArrowLeft, FaArrowUpRightFromSquare, FaDownload, FaPrint } from 'react-icons/fa6';
import ResumeDocument from '@/components/ResumeDocument';

export default function ResumePage() {
  const printResume = () => window.print();

  return (
    <MotionConfig reducedMotion="user">
    <main className="resume-page">
      <div className="resume-atmosphere" aria-hidden="true" />
      <motion.header className="resume-actions no-print resume-motion" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: 'easeOut' }}>
        <Link href="/" className="resume-back"><FaArrowLeft size={12} /> Back to portfolio</Link>
        <div className="resume-action-group">
          <motion.button type="button" onClick={printResume} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}><FaDownload size={12} /> Download PDF</motion.button>
          <motion.button type="button" onClick={printResume} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}><FaPrint size={12} /> Print resume</motion.button>
        </div>
      </motion.header>

      <motion.section className="resume-intro no-print resume-motion" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}>
        <div>
          <p className="resume-page-eyebrow"><span /> Professional document / 2026</p>
          <h1>Resume</h1>
        </div>
        <p>Software engineered with precision.<br />A clear record of experience, craft, and technical practice.</p>
      </motion.section>

      <motion.div className="resume-sheet-wrap resume-motion" initial={{ opacity: 0, y: 24, scale: 0.99 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.75, delay: 0.16, ease: 'easeOut' }}>
        <ResumeDocument />
      </motion.div>

      <footer className="resume-page-footer no-print">
        <span>ANUJ GHOSH / SOFTWARE ENGINEER</span>
        <Link href="/"><FaArrowUpRightFromSquare size={11} /> Return to portfolio</Link>
      </footer>
    </main>
    </MotionConfig>
  );
}
