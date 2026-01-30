// import { useEffect } from 'react';

// interface LoaderProps {
//   onFinish: () => void;
// }

// export default function Loader({ onFinish }: LoaderProps) {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onFinish();
//     }, 1800); // ⏱️ duration of loader

//     return () => clearTimeout(timer);
//   }, [onFinish]);

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f6f1ea]">
//       <img
//         src="/logo.png"
//         alt="Cosmos Logo"
//         className="w-40 md:w-56 animate-fadeIn"
//       />

//       {/* animation */}
//       <style>{`
//         @keyframes fadeIn {
//           0% {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fadeIn {
//           animation: fadeIn 1.2s ease forwards;
//         }
//       `}</style>
//     </div>
//   );
// }


import { useEffect, useRef } from 'react';

interface LoaderProps {
  onFinish: () => void;
}

export default function Loader({ onFinish }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.classList.add('slide-up-exit');
        // Trigger onFinish IMMEDIATELY after starting exit animation (no animationend wait)
        onFinish();
      }
    }, 1800); // ⏱️ duration of loader

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div 
      ref={loaderRef} 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f6f1ea]"
    >
      <img
        src="/logo.png"
        alt="Cosmos Logo"
        className="w-40 md:w-56 animate-fadeIn"
      />

      {/* animations */}
      <style>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1.2s ease forwards;
        }

        @keyframes slideUpExit {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-100vh);
          }
        }
        
        .slide-up-exit {
          animation: slideUpExit 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
    </div>
  );
}
