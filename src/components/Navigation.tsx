// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// interface NavigationProps {
//   currentPage: string;
//   onNavigate: (page: string) => void;
// }

// export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: 'Home', id: 'home' },
//     { name: 'About', id: 'about' },
//     { name: 'Services', id: 'services' },
//     { name: 'Works', id: 'works' },
//     { name: 'Our-Clients', id: 'silent' },
//     { name: 'Contact', id: 'contact' },
//   ];

//   const handleNavigate = (page: string) => {
//     onNavigate(page);
//     setIsOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-earth-cream/95 backdrop-blur-sm border-b border-earth-beige">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         <div className="flex items-center justify-between h-20">
//           <button
//             onClick={() => handleNavigate('home')}

//             className="font-serif text-3xl tracking-wide text-earth-charcoal hover:text-earth-brown transition-colors"

//           >
//             COSMOS
//           </button>

//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => handleNavigate(item.id)}
//                 className={`text-sm tracking-wider transition-colors ${
//                   currentPage === item.id
//                     ? 'text-earth-charcoal font-medium'
//                     : 'text-earth-stone hover:text-earth-charcoal'
//                 }`}
//               >
//                 {item.name}
//               </button>
//             ))}
//           </div>

//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-earth-charcoal p-2"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-earth-cream border-t border-earth-beige">
//           <div className="px-6 py-6 space-y-4">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => handleNavigate(item.id)}
//                 className={`block w-full text-left text-lg transition-colors ${
//                   currentPage === item.id
//                     ? 'text-earth-charcoal font-medium'
//                     : 'text-earth-stone hover:text-earth-charcoal'
//                 }`}
//               >
//                 {item.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }


// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: 'Home', id: 'home' },
//     { name: 'About', id: 'about' },
//     { name: 'Services', id: 'services' },
//     { name: 'Works', id: 'works' },
//     { name: 'Our Clients', id: 'silent' },
//     { name: 'Contact', id: 'contact' },
//   ];

//   const scrollTo = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//     setIsOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-earth-cream/90 backdrop-blur border-b">
//       <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
//         <button
//           onClick={() => scrollTo('home')}
//           className="font-serif text-3xl"
//         >
//           COSMOS
//         </button>

//         <div className="hidden md:flex gap-8">
//           {navItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => scrollTo(item.id)}
//               className="text-sm tracking-wider hover:text-earth-charcoal"
//             >
//               {item.name}
//             </button>
//           ))}
//         </div>

//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden"
//         >
//           {isOpen ? <X /> : <Menu />}
//         </button>
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-earth-cream p-6 space-y-4">
//           {navItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => scrollTo(item.id)}
//               className="block w-full text-left text-lg"
//             >
//               {item.name}
//             </button>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Works', id: 'works' },
    { name: 'Our Clients', id: 'silent' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-earth-cream/95 backdrop-blur border-b border-earth-beige">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('home')}
          className="font-serif text-3xl tracking-wide text-earth-charcoal"
        >
          COSMOS
        </button>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm tracking-wider text-earth-stone hover:text-earth-charcoal"
            >
              {item.name}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-earth-charcoal"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-earth-cream border-t border-earth-beige px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-lg text-earth-stone hover:text-earth-charcoal"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
