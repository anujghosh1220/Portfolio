'use client';

import ResumeDocument from '@/components/ResumeDocument';

export default function ResumePage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 py-8 px-4">
      {/* Control Bar - Hidden in Print */}
      <div className="max-w-5xl mx-auto mb-6 flex justify-between items-center no-print">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </a>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-lg transition-all border border-gray-700/50 backdrop-blur-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print
        </button>
      </div>

      {/* Resume Container */}
      <div className="max-w-5xl mx-auto flex justify-center">
        <div className="bg-white text-gray-900 shadow-2xl shadow-blue-900/10 rounded-sm overflow-hidden" style={{ width: '210mm', minHeight: '297mm' }}>
          <ResumeDocument />
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        @page {
          size: A4;
          margin: 0;
        }

        @media print {
          body {
            background: white !important;
          }
          
          .no-print {
            display: none !important;
          }

          .min-h-screen {
            padding: 0 !important;
            background: white !important;
          }

          .max-w-5xl {
            max-width: none !important;
            margin: 0 !important;
          }

          .shadow-2xl,
          .shadow-blue-900\/10 {
            box-shadow: none !important;
          }

          .rounded-sm {
            border-radius: 0 !important;
          }

          .overflow-hidden {
            overflow: visible !important;
          }

          .resume-document {
            padding: 48px !important;
          }
        }

        @media screen and (max-width: 768px) {
          .max-w-5xl {
            padding: 0 8px;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }

          .bg-white {
            margin: 0 auto;
          }

          .resume-document {
            padding: 32px !important;
          }
        }
      `}</style>
    </div>
  );
}
