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
//     <div>
//       {/* Hero Section */}
     

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
      ref.current.scrollBy({
        left: direction === 'left' ? -400 : 400,
        behavior: 'smooth',
      });
    }
  };

  const clientsRow1 = [
    {
      name: 'Red Bull',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/Red-Bull-Logo.png',
    },
    {
      name: 'Government of India',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg',
    },
    {
      name: 'Irrigation Department',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg',
    },
    {
      name: 'Maha Kumbh',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT89g-A8DnHYMZhnEZ0HWiu0fJhGjagqH6ssA&s',
    },
    {
      name: 'Myntra',
      logo: 'https://cdn.worldvectorlogo.com/logos/myntra-2.svg',
    },
    {
      name: 'A2 Cricket',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/A2_Cricket_logo.png',
    },
    {
      name: 'Talli Tales',
      logo: 'https://www.tallitales.com/Tallilogo.webp',
    },
    {
      name: 'Lulu Mall',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzYuxDU8WwWPCE2gQDB5vABGhHhlwOeSTsOw&s',
    },
    {
      name: 'Phoenix Pallassio',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Qu8riH3EdhGInvVwamJsQTDlRhg6yG0G4A&s',
    },
    {
      name: 'Sarovar Portico',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2GkDDjsnVYnrWJIUyFO2cqDcLdnTXokvZw&s',
    },
    {
      name: 'Fortune Park',
      logo: 'https://www.fortunehotels.in/images/logo.png',
    },
    {
      name: 'Repetwahr',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCn2DIuhjANNVz7B3oqeEvSPx2EkQXL6jGlQ&s',
    },
    {
      name: 'Eight Restaurant',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjCFMPBoHh2l9eKXagrtmsCizV0Tf44KbYLQ&s',
    },
  ];
const clientsRow2 = [
  {
    name: 'Vara',
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQFJ4EpGK1INWQ/company-logo_200_200/company-logo_200_200/0/1630619954413/vara_united_logo?e=2147483647&v=beta&t=Eq_XgVBMJTxGHGiBDVc0k71WrwZJcLUqsDhBtNWDbks',
  },
  {
    name: 'FoSho',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNvi1p9akZAfc3HgxAXc8rCCRjfoIzGo--9Q&s',
  },
  {
    name: 'Chhappan Bhog',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvjaQCKd6QvE8-WjSDPz5Wp6FcYO55ewlHQ&s',
  },
  {
    name: 'Talllk',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8s6EJ1uPzRk9J8x8p6ZKcFqk5b4Jc5w0zw&s',
  },
  {
    name: 'Kokkam Coffee',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9wY1H3A3VbJx4QH7r7XbX4x9q7Zg4A9F0g&s',
  },
  {
    name: 'FICCI',
    logo: 'https://ficci.in/images/ficci-logo.png',
  },
  {
    name: 'Badri Jewellers',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1xv1D5s0b7N1bYx3kGmG9z4kFq0C3kzN9A&s',
  },
  {
    name: 'Ruminaari',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Z0b8xH5k2Tz5Q5n0KcK9qP3ZBz4m9X6Xw&s',
  },
  {
    name: 'Maison Mahogany',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzq6kG0QbG5mQm0N2r9D1bKk5yF7k0Vn3xw&s',
  },
  {
    name: 'Radio Mirchi',
    logo: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Radio_Mirchi_Logo.png',
  },
  {
    name: 'Clarks Awadh',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5FQq8P3zQF7Kx4JZ5F1ZbYk3M9JcN2B7Q&s',
  },
  {
    name: 'Old Spice',
    logo: 'https://logos-world.net/wp-content/uploads/2020/09/Old-Spice-Logo.png',
  },
  {
    name: 'Mandala Fest',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6kQJ2m4x4Pz5Tz0q3F7KpZq0yZk2m1R7nA&s',
  },
];


  const clientsRow3 = [
    { name: 'KC Suits', logo: 'https://i.imgur.com/placeholder.png' },
    { name: 'Hues', logo: 'https://i.imgur.com/placeholder.png' },
    {
      name: 'Starbucks',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
    },
    {
      name: 'OPPO',
      logo: 'https://brandlogos.net/wp-content/uploads/2022/08/oppo-logo_brandlogos.net_x21dk-512x512.png',
    },
    { name: 'Pickle Enough', logo: 'https://i.imgur.com/placeholder.png' },
    {
      name: 'Dove',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Dove-Logo.png',
    },
    {
      name: 'Garnier',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/Garnier-Logo.png',
    },
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
      <section className="py-24 bg-earth-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-earth-charcoal mb-6 text-center">
              Brands We’ve Worked With
            </h2>
            <p className="text-earth-stone text-center text-lg max-w-3xl mx-auto leading-relaxed">
              From global giants to innovative startups, we collaborate with brands that value storytelling.
            </p>
          </FadeIn>
        </div>

        {/* Row 1 */}
        <div className="relative mb-12 group/row">
          <button
            onClick={() => scroll(row1Ref, 'left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover/row:opacity-100 transition hover:scale-125"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={() => scroll(row1Ref, 'right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover/row:opacity-100 transition hover:scale-125"
          >
            <ChevronRight size={40} />
          </button>
          <div ref={row1Ref} className="flex overflow-x-auto scrollbar-hide scroll-smooth">
            <div className="flex animate-scroll-rtl">
              {[...clientsRow1, ...clientsRow1, ...clientsRow1].map((client, i) => (
                <div key={i} className="flex-shrink-0 mx-6">
                  <div className="bg-white px-12 py-8 min-w-[280px] h-32 flex items-center justify-center hover:scale-105 transition">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-[200px] max-h-[80px] object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="relative mb-12 group/row">
          <button
            onClick={() => scroll(row2Ref, 'left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover/row:opacity-100 transition hover:scale-125"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={() => scroll(row2Ref, 'right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover/row:opacity-100 transition hover:scale-125"
          >
            <ChevronRight size={40} />
          </button>
          <div ref={row2Ref} className="flex overflow-x-auto scrollbar-hide scroll-smooth">
            <div className="flex animate-scroll-ltr">
              {[...clientsRow2, ...clientsRow2, ...clientsRow2].map((client, i) => (
                <div key={i} className="flex-shrink-0 mx-6">
                  <div className="bg-white px-12 py-8 min-w-[280px] h-32 flex items-center justify-center hover:scale-105 transition">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-[200px] max-h-[80px] object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="relative group/row">
          <button
            onClick={() => scroll(row3Ref, 'left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover/row:opacity-100 transition hover:scale-125"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={() => scroll(row3Ref, 'right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover/row:opacity-100 transition hover:scale-125"
          >
            <ChevronRight size={40} />
          </button>
          <div ref={row3Ref} className="flex overflow-x-auto scrollbar-hide scroll-smooth">
            <div className="flex animate-scroll-rtl-slow">
              {[...clientsRow3, ...clientsRow3, ...clientsRow3].map((client, i) => (
                <div key={i} className="flex-shrink-0 mx-6">
                  <div className="bg-white px-12 py-8 min-w-[280px] h-32 flex items-center justify-center hover:scale-105 transition">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-[200px] max-h-[80px] object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
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
        @keyframes scroll-rtl { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); }}
        @keyframes scroll-ltr { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); }}
      `}</style>
    </div>
  );
}
