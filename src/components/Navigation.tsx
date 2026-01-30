// import { useEffect, useRef, useState } from 'react';
// import { Menu, X } from 'lucide-react';

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hidden, setHidden] = useState(false);

//   const lastScrollY = useRef(0);

//   const navItems = [
//     { name: 'Home', id: 'home' },
//     { name: 'Our Clients', id: 'silent' },
//     { name: 'About', id: 'about' },
//     { name: 'Services', id: 'services' },
//     { name: 'Works', id: 'works' },
//     { name: 'Contact', id: 'contact' },
//   ];

//   const scrollToSection = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       // Hide navbar when scrolling DOWN
//       if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
//         setHidden(true);
//       }

//       // Show navbar when scrolling UP
//       if (currentScrollY < lastScrollY.current) {
//         setHidden(false);
//       }

//       lastScrollY.current = currentScrollY;
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-out
//         ${hidden ? '-translate-y-full' : 'translate-y-0'}
//       `}
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between bg-transparent">
//         {/* Logo */}
//         <button
//           onClick={() => scrollToSection('home')}
//           className="font-serif text-3xl tracking-wide text-white hover:opacity-80 transition"
//         >
//           COSMOS
//         </button>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-8">
//           {navItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => scrollToSection(item.id)}
//               className="text-sm tracking-wider text-white/80 hover:text-white transition"
//             >
//               {item.name}
//             </button>
//           ))}
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-white"
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-earth-charcoal/95 backdrop-blur px-6 py-6 space-y-4">
//           {navItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => scrollToSection(item.id)}
//               className="block w-full text-left text-lg text-white/80 hover:text-white transition"
//             >
//               {item.name}
//             </button>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }

import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Our Clients', id: 'silent' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Works', id: 'works' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY.current && current > 100) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
      }

      lastScrollY.current = current;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000]
      transition-transform duration-500 ease-out
      ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('home')}
          className="font-serif text-3xl tracking-wide text-white"
        >
          COSMOS
        </button>

        <div className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm tracking-wider text-white/80 hover:text-white"
            >
              {item.name}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-earth-charcoal/95 backdrop-blur px-6 py-6 space-y-4">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-lg text-white/80"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
