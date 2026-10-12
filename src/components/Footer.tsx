import React from 'react';
import { ShieldAlert } from 'lucide-react';
import type { Navigate } from '../types';

export const Footer: React.FC<{ navigate: Navigate }> = ({ navigate }) => {
  return (
    <footer className="bg-army-950 text-khaki-200 mt-16">
      <div className="border-t-2 border-gold-500" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif font-bold text-white text-lg mb-3">ISSB Tayari</h3>
            <p className="text-sm leading-relaxed text-khaki-300">
              Free, honest ISSB preparation guidance in Urdu and English. Original notes,
              practice tools, and a 30-day plan — written for students, not copied from anyone.
            </p>
          </div>
          <div>
            <h3 className="font-serif font-bold text-white text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button className="hover:text-gold-400" onClick={() => navigate({ page: 'notes' })}>
                  All Notes
                </button>
              </li>
              <li>
                <button className="hover:text-gold-400" onClick={() => navigate({ page: 'wat' })}>
                  WAT Simulator
                </button>
              </li>
              <li>
                <button className="hover:text-gold-400" onClick={() => navigate({ page: 'quiz' })}>
                  Intelligence Quiz
                </button>
              </li>
              <li>
                <button className="hover:text-gold-400" onClick={() => navigate({ page: 'plan' })}>
                  30-Day Plan
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif font-bold text-white text-lg mb-3 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-gold-400" /> Disclaimer
            </h3>
            <p className="text-xs leading-relaxed text-khaki-300">
              Educational guide only. Not affiliated with Pakistan Army, Pakistan Navy, PAF,
              or ISSB. All practice material is original and labeled as sample — not real test
              papers. Always verify dates and procedures at issb.gov.pk and joinpakarmy.gov.pk.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-army-800 text-center text-xs text-khaki-400">
          ISSB Tayari © 2026 — Free forever. Made for the students of Pakistan.
        </div>
      </div>
    </footer>
  );
};
