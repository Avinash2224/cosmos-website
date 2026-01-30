import { useEffect, useRef } from 'react';

export default function Loader({ onExitStart, onFinish }) {
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!ref.current) return;

      // Start BOTH animations
      ref.current.classList.add('slide-up-exit');
      onExitStart();

      // Remove loader after animation ends
      setTimeout(() => {
        onFinish();
      }, 900); // must match app animation
    }, 1800);

    return () => clearTimeout(timer);
  }, [onExitStart, onFinish]);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f6f1ea]"
    >
      <img
        src="/logo.png"
        alt="Cosmos Logo"
        className="w-40 md:w-56 animate-fadeIn"
      />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 1.2s ease forwards;
        }

        @keyframes slideUpExit {
          to {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }

        .slide-up-exit {
          animation: slideUpExit 0.9s cubic-bezier(0.77,0,0.175,1) forwards;
        }
      `}</style>
    </div>
  );
}
