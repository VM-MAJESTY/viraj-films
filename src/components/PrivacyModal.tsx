import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface PrivacyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 bg-[#1C1C1C]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="bg-[#FFFFFF] text-[#1C1C1C] max-w-2xl w-full max-h-[85vh] flex flex-col border border-[#E2E2DF] shadow-2xl rounded-none">
        
        {/* HEADER */}
        <div className="flex items-center justify-between p-6 border-b border-[#E2E2DF] bg-[#F2F2F0]">
          <div className="flex items-center gap-3">
            {isPrivacy ? (
              <ShieldCheck className="w-5 h-5 text-[#C8B9A6]" />
            ) : (
              <FileText className="w-5 h-5 text-[#C8B9A6]" />
            )}
            <h3 className="font-serif text-xl font-bold uppercase tracking-wider text-[#1C1C1C]">
              {isPrivacy ? 'PRIVACY POLICY' : 'TERMS & CONDITIONS'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-[#707070] hover:text-[#1C1C1C] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* BODY CONTENT */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-sm text-[#707070] leading-relaxed font-sans">
          {isPrivacy ? (
            <>
              <p className="font-semibold text-[#1C1C1C]">
                Viraj Film Studio is strictly committed to protecting client privacy and personal data security.
              </p>
              
              <h4 className="font-serif text-base text-[#1C1C1C] font-semibold pt-2 border-t border-[#E2E2DF]">
                1. Data Confidentiality & Protection
              </h4>
              <p>
                We maintain strict confidentiality regarding all wedding enquiries, client contact numbers, email addresses, private event locations, and event schedules. Submitted enquiry information is used solely to respond to studio booking requests and is NEVER displayed publicly or sold to third parties.
              </p>

              <h4 className="font-serif text-base text-[#1C1C1C] font-semibold pt-2 border-t border-[#E2E2DF]">
                2. Portfolio Photography & Film Release
              </h4>
              <p>
                Public portfolio stories and cinematic video samples featured on this platform display generic wedding categories (such as Wedding Stories, Pre-Wedding, Haldi, Mehndi, Sangeet, and Reception) with zero private client personal identification.
              </p>

              <h4 className="font-serif text-base text-[#1C1C1C] font-semibold pt-2 border-t border-[#E2E2DF]">
                3. Cookies & Analytical Usage
              </h4>
              <p>
                This website uses standard essential session cookies purely to ensure fluid client-side page navigation, filter states, and video media responsiveness.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-[#1C1C1C]">
                Welcome to Viraj Film Studio. By accessing or sending an enquiry through our platform, you agree to these standard studio terms.
              </p>

              <h4 className="font-serif text-base text-[#1C1C1C] font-semibold pt-2 border-t border-[#E2E2DF]">
                1. Service Bookings & Confirmation
              </h4>
              <p>
                Initial enquiries sent via this website or WhatsApp do not constitute a confirmed studio booking. Bookings are officially confirmed only upon written agreement and retainer payment.
              </p>

              <h4 className="font-serif text-base text-[#1C1C1C] font-semibold pt-2 border-t border-[#E2E2DF]">
                2. Intellectual Property & Copyright
              </h4>
              <p>
                All photographs, visual compositions, video trailers, and design elements presented on this platform are copyrighted intellectual property of Viraj Film Studio.
              </p>

              <h4 className="font-serif text-base text-[#1C1C1C] font-semibold pt-2 border-t border-[#E2E2DF]">
                3. Deliverables & Turnaround
              </h4>
              <p>
                Post-production color grading, video editing, and custom album finishing schedules are specified in individual client service contracts.
              </p>
            </>
          )}
        </div>

        {/* FOOTER */}
        <div className="p-4 bg-[#F2F2F0] border-t border-[#E2E2DF] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#1C1C1C] text-white text-xs tracking-widest uppercase font-semibold hover:bg-[#111111] transition-colors"
          >
            I UNDERSTAND
          </button>
        </div>

      </div>
    </div>
  );
};
