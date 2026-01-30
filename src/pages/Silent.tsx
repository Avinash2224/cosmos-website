// import FadeIn from '../components/FadeIn';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { useRef } from 'react';

// interface ClientsProps {
//   onNavigate: (page: string) => void;
// }

// export default function Clients({ onNavigate }: ClientsProps) {
//   const row1Ref = useRef<HTMLDivElement>(null);
//   const row2Ref = useRef<HTMLDivElement>(null);
//   const row3Ref = useRef<HTMLDivElement>(null);

//   const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
//     if (ref.current) {
//       const scrollAmount = 400;
//       ref.current.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   };

//   const clientsRow1 = [
//     { name: 'Red Bull', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Red-Bull-Logo.png' },
//     { name: 'Government of India', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg' },
//     { name: 'Irrigation Department', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg' },
//     { name: 'Maha Kumbh', logo: 'https://i.imgur.com/placeholder.png' },
//     { name: 'Myntra', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Myntra-Logo.png' },
//     { name: 'A2 Cricket', logo: 'https://i.imgur.com/placeholder.png' },
//     { name: 'Talli Tales', logo: 'https://i.imgur.com/placeholder.png' },
//     { name: 'Lulu Mall', logo: 'https://www.lulumall.in/images/logo.png' },
//     { name: 'Phoenix Pallassio', logo: 'https://www.thephoenixmills.com/images/logo.png' },
//     { name: 'Sarovar Portico', logo: 'https://www.sarovarhotels.com/images/logo.png' },
//     { name: 'Fortune Park', logo: 'https://www.fortunehotels.in/images/logo.png' },
//     { name: 'Repetwahr', logo: 'https://i.imgur.com/placeholder.png' },
//     { name: 'Eight Restaurant', logo: 'https://i.imgur.com/placeholder.png' },
//   ];

//   const clientsRow2 = [
//     { name: 'Vara', logo: 'https://i.imgur.com/placeholder.png' },
//     { name: 'FoSho', logo: 'https://i.imgur.com/placeholder.png' },
//     { name: 'Chhappan Bhog', logo: 'https://i.imgur.com/placeholder.png' },
//     { name: 'Talllk', logo: 'https://i.imgur.com/placeholder.png' },
//     { name: 'Kokkam Coffee', logo: 'https://i.imgur.com/placeholder.png' },
//     { name: 'FICCI', logo: 'https://ficci.in/images/ficci-logo.png' },
//     { name: 'Badri Jewellers', logo: 'https://i.imgur.com/placeholder.png' },
//     { name: 'Ruminaari', logo: 'https://i.imgur.com/placeholder.png' },
//     { name: 'Maison Mahogany', logo: 'https://i.imgur.com/placeholder.png' },
//     { name: 'Radio Mirchi', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Radio_Mirchi_Logo.png' },
//     { name: 'Clarks Awadh', logo: 'https://i.imgur.com/placeholder.png' },
//     { name: 'Old Spice', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Old-Spice-Logo.png' },
//     { name: 'Mandala Fest', logo: 'https://i.imgur.com/placeholder.png' },
//   ];

//   const clientsRow3 = [
//     { name: 'KC Suits', logo: 'https://i.imgur.com/placeholder.png' },
//     { name: 'Hues', logo: 'https://i.imgur.com/placeholder.png' },
//     { name: 'Starbucks', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png' },
//     { name: 'OPPO', logo: 'https://logos-world.net/wp-content/uploads/2020/07/OPPO-Logo.png' },
//     { name: 'Pickle Enough', logo: 'https://i.imgur.com/placeholder.png' },
//     { name: 'Dove', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Dove-Logo.png' },
//     { name: 'Garnier', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Garnier-Logo.png' },
//     { name: 'ORO', logo: 'https://i.imgur.com/placeholder.png' },
//     { name: 'Crystal Studio', logo: 'https://i.imgur.com/placeholder.png' },
//     { name: 'Jugal Kishore', logo: 'https://i.imgur.com/placeholder.png' },
//     { name: 'IHS School', logo: 'https://i.imgur.com/placeholder.png' },
//     { name: 'Easy Buy', logo: 'https://i.imgur.com/placeholder.png' },
//     { name: 'Lettering Co', logo: 'https://i.imgur.com/placeholder.png' },
//     { name: 'Le Press', logo: 'https://i.imgur.com/placeholder.png' },
//   ];

//   return (
//     <div className="pt-20">
//       {/* Hero Section */}
//       <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: 'url(https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920)',
//           }}
//         >
//           <div className="absolute inset-0 bg-earth-charcoal/70" />
//         </div>

//         <div className="relative z-10 text-center px-6 max-w-4xl">
//           <FadeIn>
//             <h1
//               className="text-5xl md:text-8xl text-white mb-6 tracking-wide"
//               style={{ fontFamily: 'Gotu, sans-serif' }}
//             >
//               Our Clients
//             </h1>
//           </FadeIn>
//           <FadeIn delay={200}>
//             <p className="text-earth-beige text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
//               Trusted by leading brands across industries to tell their stories
//             </p>
//           </FadeIn>
//         </div>
//       </section>

//       {/* Infinite Scrolling Clients Section */}
//       <section className="py-24 bg-earth-cream overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
//           <FadeIn>
//             <h2 className="font-serif text-4xl md:text-5xl text-earth-charcoal mb-6 text-center">
//               Brands We've Worked With
//             </h2>
//             <p className="text-earth-stone text-center text-lg max-w-3xl mx-auto leading-relaxed">
//               From global giants to innovative startups, we've had the privilege of partnering with incredible brands to bring their visions to life.
//             </p>
//           </FadeIn>
//         </div>

//         {/* Row 1 - Scroll Right to Left */}
//         <div className="relative mb-12 group/row">
//           <button
//             onClick={() => scroll(row1Ref, 'left')}
//             className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-earth-charcoal hover:text-earth-brown opacity-0 group-hover/row:opacity-100 transition-all duration-300 hover:scale-125"
//             aria-label="Scroll left"
//           >
//             <ChevronLeft size={40} strokeWidth={2.5} />
//           </button>
//           <button
//             onClick={() => scroll(row1Ref, 'right')}
//             className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-earth-charcoal hover:text-earth-brown opacity-0 group-hover/row:opacity-100 transition-all duration-300 hover:scale-125"
//             aria-label="Scroll right"
//           >
//             <ChevronRight size={40} strokeWidth={2.5} />
//           </button>
//           <div ref={row1Ref} className="flex overflow-x-auto scrollbar-hide scroll-smooth">
//             <div className="flex animate-scroll-rtl">
//               {[...clientsRow1, ...clientsRow1, ...clientsRow1].map((client, index) => (
//                 <div
//                   key={`row1-${index}`}
//                   className="flex-shrink-0 mx-6 group"
//                 >
//                   <div className="bg-white px-12 py-8 min-w-[280px] flex items-center justify-center h-32 transition-all duration-500 hover:bg-earth-beige hover:scale-105 hover:shadow-2xl">
//                     <img
//                       src={client.logo}
//                       alt={client.name}
//                       className="max-w-[200px] max-h-[80px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
//                       onError={(e) => {
//                         const target = e.target as HTMLImageElement;
//                         target.style.display = 'none';
//                         const parent = target.parentElement;
//                         if (parent && !parent.querySelector('.fallback-text')) {
//                           const textDiv = document.createElement('div');
//                           textDiv.className = 'fallback-text text-earth-charcoal font-semibold text-xl text-center';
//                           textDiv.textContent = client.name;
//                           parent.appendChild(textDiv);
//                         }
//                       }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Row 2 - Scroll Left to Right */}
//         <div className="relative mb-12 group/row">
//           <button
//             onClick={() => scroll(row2Ref, 'left')}
//             className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-earth-charcoal hover:text-earth-brown opacity-0 group-hover/row:opacity-100 transition-all duration-300 hover:scale-125"
//             aria-label="Scroll left"
//           >
//             <ChevronLeft size={40} strokeWidth={2.5} />
//           </button>
//           <button
//             onClick={() => scroll(row2Ref, 'right')}
//             className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-earth-charcoal hover:text-earth-brown opacity-0 group-hover/row:opacity-100 transition-all duration-300 hover:scale-125"
//             aria-label="Scroll right"
//           >
//             <ChevronRight size={40} strokeWidth={2.5} />
//           </button>
//           <div ref={row2Ref} className="flex overflow-x-auto scrollbar-hide scroll-smooth">
//             <div className="flex animate-scroll-ltr">
//               {[...clientsRow2, ...clientsRow2, ...clientsRow2].map((client, index) => (
//                 <div
//                   key={`row2-${index}`}
//                   className="flex-shrink-0 mx-6 group"
//                 >
//                   <div className="bg-white px-12 py-8 min-w-[280px] flex items-center justify-center h-32 transition-all duration-500 hover:bg-earth-beige hover:scale-105 hover:shadow-2xl">
//                     <img
//                       src={client.logo}
//                       alt={client.name}
//                       className="max-w-[200px] max-h-[80px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
//                       onError={(e) => {
//                         const target = e.target as HTMLImageElement;
//                         target.style.display = 'none';
//                         const parent = target.parentElement;
//                         if (parent && !parent.querySelector('.fallback-text')) {
//                           const textDiv = document.createElement('div');
//                           textDiv.className = 'fallback-text text-earth-charcoal font-semibold text-xl text-center';
//                           textDiv.textContent = client.name;
//                           parent.appendChild(textDiv);
//                         }
//                       }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Row 3 - Scroll Right to Left */}
//         <div className="relative group/row">
//           <button
//             onClick={() => scroll(row3Ref, 'left')}
//             className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-earth-charcoal hover:text-earth-brown opacity-0 group-hover/row:opacity-100 transition-all duration-300 hover:scale-125"
//             aria-label="Scroll left"
//           >
//             <ChevronLeft size={40} strokeWidth={2.5} />
//           </button>
//           <button
//             onClick={() => scroll(row3Ref, 'right')}
//             className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-earth-charcoal hover:text-earth-brown opacity-0 group-hover/row:opacity-100 transition-all duration-300 hover:scale-125"
//             aria-label="Scroll right"
//           >
//             <ChevronRight size={40} strokeWidth={2.5} />
//           </button>
//           <div ref={row3Ref} className="flex overflow-x-auto scrollbar-hide scroll-smooth">
//             <div className="flex animate-scroll-rtl-slow">
//               {[...clientsRow3, ...clientsRow3, ...clientsRow3].map((client, index) => (
//                 <div
//                   key={`row3-${index}`}
//                   className="flex-shrink-0 mx-6 group"
//                 >
//                   <div className="bg-white px-12 py-8 min-w-[280px] flex items-center justify-center h-32 transition-all duration-500 hover:bg-earth-beige hover:scale-105 hover:shadow-2xl">
//                     <img
//                       src={client.logo}
//                       alt={client.name}
//                       className="max-w-[200px] max-h-[80px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
//                       onError={(e) => {
//                         const target = e.target as HTMLImageElement;
//                         target.style.display = 'none';
//                         const parent = target.parentElement;
//                         if (parent && !parent.querySelector('.fallback-text')) {
//                           const textDiv = document.createElement('div');
//                           textDiv.className = 'fallback-text text-earth-charcoal font-semibold text-xl text-center';
//                           textDiv.textContent = client.name;
//                           parent.appendChild(textDiv);
//                         }
//                       }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>


//       <style>{`
//         /* Hide scrollbar */
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }

//         @keyframes scroll-rtl {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         @keyframes scroll-ltr {
//           0% {
//             transform: translateX(-50%);
//           }
//           100% {
//             transform: translateX(0);
//           }
//         }

//         .animate-scroll-rtl {
//           animation: scroll-rtl 40s linear infinite;
//         }

//         .animate-scroll-ltr {
//           animation: scroll-ltr 70s linear infinite;
//         }

//         .animate-scroll-rtl-slow {
//           animation: scroll-rtl 40s linear infinite;
//         }

//         .animate-scroll-rtl:hover,
//         .animate-scroll-ltr:hover,
//         .animate-scroll-rtl-slow:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </div>
//   );
// }

import FadeIn from '../components/FadeIn';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

interface ClientsProps {
  onNavigate: (page: string) => void;
}

export default function Clients({ onNavigate }: ClientsProps) {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = 400;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const clientsRow1 = [
    { name: 'Red Bull', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Red-Bull-Logo.png' },
    { name: 'Government of India', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg' },
    { name: 'Irrigation Department', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg' },
    { name: 'Maha Kumbh', logo: 'https://i.imgur.com/placeholder.png' },
    { name: 'Myntra', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Myntra-Logo.png' },
    { name: 'A2 Cricket', logo: 'https://i.imgur.com/placeholder.png' },
    { name: 'Talli Tales', logo: 'https://i.imgur.com/placeholder.png' },
    { name: 'Lulu Mall', logo: 'https://www.lulumall.in/images/logo.png' },
    { name: 'Phoenix Pallassio', logo: 'https://www.thephoenixmills.com/images/logo.png' },
    { name: 'Sarovar Portico', logo: 'https://www.sarovarhotels.com/images/logo.png' },
    { name: 'Fortune Park', logo: 'https://www.fortunehotels.in/images/logo.png' },
    { name: 'Repetwahr', logo: 'https://i.imgur.com/placeholder.png' },
    { name: 'Eight Restaurant', logo: 'https://i.imgur.com/placeholder.png' },
  ];

  const clientsRow2 = [
    { name: 'Vara', logo: 'https://i.imgur.com/placeholder.png' },
    { name: 'FoSho', logo: 'https://i.imgur.com/placeholder.png' },
    { name: 'Chhappan Bhog', logo: 'https://i.imgur.com/placeholder.png' },
    { name: 'Talllk', logo: 'https://i.imgur.com/placeholder.png' },
    { name: 'Kokkam Coffee', logo: 'https://i.imgur.com/placeholder.png' },
    { name: 'FICCI', logo: 'https://ficci.in/images/ficci-logo.png' },
    { name: 'Badri Jewellers', logo: 'https://i.imgur.com/placeholder.png' },
    { name: 'Ruminaari', logo: 'https://i.imgur.com/placeholder.png' },
    { name: 'Maison Mahogany', logo: 'https://i.imgur.com/placeholder.png' },
    { name: 'Radio Mirchi', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Radio_Mirchi_Logo.png' },
    { name: 'Clarks Awadh', logo: 'https://i.imgur.com/placeholder.png' },
    { name: 'Old Spice', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Old-Spice-Logo.png' },
    { name: 'Mandala Fest', logo: 'https://i.imgur.com/placeholder.png' },
  ];

  const clientsRow3 = [
    { name: 'KC Suits', logo: 'https://i.imgur.com/placeholder.png' },
    { name: 'Hues', logo: 'https://i.imgur.com/placeholder.png' },
    { name: 'Starbucks', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png' },
    { name: 'OPPO', logo: 'https://logos-world.net/wp-content/uploads/2020/07/OPPO-Logo.png' },
    { name: 'Pickle Enough', logo: 'https://i.imgur.com/placeholder.png' },
    { name: 'Dove', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Dove-Logo.png' },
    { name: 'Garnier', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Garnier-Logo.png' },
    { name: 'ORO', logo: 'https://i.imgur.com/placeholder.png' },
    { name: 'Crystal Studio', logo: 'https://i.imgur.com/placeholder.png' },
    { name: 'Jugal Kishore', logo: 'https://i.imgur.com/placeholder.png' },
    { name: 'IHS School', logo: 'https://i.imgur.com/placeholder.png' },
    { name: 'Easy Buy', logo: 'https://i.imgur.com/placeholder.png' },
    { name: 'Lettering Co', logo: 'https://i.imgur.com/placeholder.png' },
    { name: 'Le Press', logo: 'https://i.imgur.com/placeholder.png' },
  ];

  return (
    <div>
      {/* Hero Section */}
     

      {/* Infinite Scrolling Clients Section */}
      <section className="py-24 bg-earth-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-earth-charcoal mb-6 text-center">
              Brands We've Worked With
            </h2>
            <p className="text-earth-stone text-center text-lg max-w-3xl mx-auto leading-relaxed">
              From global giants to innovative startups, we've had the privilege of partnering with incredible brands to bring their visions to life.
            </p>
          </FadeIn>
        </div>

        {/* Row 1 - Scroll Right to Left */}
        <div className="relative mb-12 group/row">
          <button
            onClick={() => scroll(row1Ref, 'left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-earth-charcoal hover:text-earth-brown opacity-0 group-hover/row:opacity-100 transition-all duration-300 hover:scale-125"
            aria-label="Scroll left"
          >
            <ChevronLeft size={40} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => scroll(row1Ref, 'right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-earth-charcoal hover:text-earth-brown opacity-0 group-hover/row:opacity-100 transition-all duration-300 hover:scale-125"
            aria-label="Scroll right"
          >
            <ChevronRight size={40} strokeWidth={2.5} />
          </button>
          <div ref={row1Ref} className="flex overflow-x-auto scrollbar-hide scroll-smooth">
            <div className="flex animate-scroll-rtl">
              {[...clientsRow1, ...clientsRow1, ...clientsRow1].map((client, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 mx-6 group"
                >
                  <div className="bg-white px-12 py-8 min-w-[280px] flex items-center justify-center h-32 transition-all duration-500 hover:bg-earth-beige hover:scale-105 hover:shadow-2xl">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-[200px] max-h-[80px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.fallback-text')) {
                          const textDiv = document.createElement('div');
                          textDiv.className = 'fallback-text text-earth-charcoal font-semibold text-xl text-center';
                          textDiv.textContent = client.name;
                          parent.appendChild(textDiv);
                        }
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 - Scroll Left to Right */}
        <div className="relative mb-12 group/row">
          <button
            onClick={() => scroll(row2Ref, 'left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-earth-charcoal hover:text-earth-brown opacity-0 group-hover/row:opacity-100 transition-all duration-300 hover:scale-125"
            aria-label="Scroll left"
          >
            <ChevronLeft size={40} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => scroll(row2Ref, 'right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-earth-charcoal hover:text-earth-brown opacity-0 group-hover/row:opacity-100 transition-all duration-300 hover:scale-125"
            aria-label="Scroll right"
          >
            <ChevronRight size={40} strokeWidth={2.5} />
          </button>
          <div ref={row2Ref} className="flex overflow-x-auto scrollbar-hide scroll-smooth">
            <div className="flex animate-scroll-ltr">
              {[...clientsRow2, ...clientsRow2, ...clientsRow2].map((client, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 mx-6 group"
                >
                  <div className="bg-white px-12 py-8 min-w-[280px] flex items-center justify-center h-32 transition-all duration-500 hover:bg-earth-beige hover:scale-105 hover:shadow-2xl">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-[200px] max-h-[80px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.fallback-text')) {
                          const textDiv = document.createElement('div');
                          textDiv.className = 'fallback-text text-earth-charcoal font-semibold text-xl text-center';
                          textDiv.textContent = client.name;
                          parent.appendChild(textDiv);
                        }
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3 - Scroll Right to Left */}
        <div className="relative group/row">
          <button
            onClick={() => scroll(row3Ref, 'left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-earth-charcoal hover:text-earth-brown opacity-0 group-hover/row:opacity-100 transition-all duration-300 hover:scale-125"
            aria-label="Scroll left"
          >
            <ChevronLeft size={40} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => scroll(row3Ref, 'right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-earth-charcoal hover:text-earth-brown opacity-0 group-hover/row:opacity-100 transition-all duration-300 hover:scale-125"
            aria-label="Scroll right"
          >
            <ChevronRight size={40} strokeWidth={2.5} />
          </button>
          <div ref={row3Ref} className="flex overflow-x-auto scrollbar-hide scroll-smooth">
            <div className="flex animate-scroll-rtl-slow">
              {[...clientsRow3, ...clientsRow3, ...clientsRow3].map((client, index) => (
                <div
                  key={`row3-${index}`}
                  className="flex-shrink-0 mx-6 group"
                >
                  <div className="bg-white px-12 py-8 min-w-[280px] flex items-center justify-center h-32 transition-all duration-500 hover:bg-earth-beige hover:scale-105 hover:shadow-2xl">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-[200px] max-h-[80px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.fallback-text')) {
                          const textDiv = document.createElement('div');
                          textDiv.className = 'fallback-text text-earth-charcoal font-semibold text-xl text-center';
                          textDiv.textContent = client.name;
                          parent.appendChild(textDiv);
                        }
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Hide scrollbar */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-rtl {
          animation: scroll-rtl 40s linear infinite;
        }

        .animate-scroll-ltr {
          animation: scroll-ltr 70s linear infinite;
        }

        .animate-scroll-rtl-slow {
          animation: scroll-rtl 40s linear infinite;
        }

        .animate-scroll-rtl:hover,
        .animate-scroll-ltr:hover,
        .animate-scroll-rtl-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}