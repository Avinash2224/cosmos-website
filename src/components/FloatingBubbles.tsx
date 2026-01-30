import { Instagram, Phone, Mail } from 'lucide-react';

export default function FloatingBubbles() {
  return (
    <>
      <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-4">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/cosmosmedia.co?igsh=dm96NzNpeDg3aGJi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="floating-bubble"
        >
          <Instagram size={22} />
        </a>

        {/* Phone */}
        <a
          href="tel:+916393468280"
          aria-label="Call"
          className="floating-bubble delay-100"
        >
          <Phone size={22} />
        </a>

        {/* Email */}
        <a
          href="mailto:cosmosmedia.co@gmail.com"
          aria-label="Email"
          className="floating-bubble delay-200"
        >
          <Mail size={22} />
        </a>
      </div>

      {/* Styles */}
      <style>{`
        .floating-bubble {
          width: 56px;
          height: 56px;
          border-radius: 9999px;
          background: rgba(245, 245, 247, 0.95);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1f1f1f;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: float 6s ease-in-out infinite;
        }

        .floating-bubble:hover {
          transform: scale(1.12);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
        }

        .delay-100 {
          animation-delay: 1s;
        }

        .delay-200 {
          animation-delay: 2s;
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .floating-bubble {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </>
  );
}
