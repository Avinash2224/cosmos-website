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
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZTyhZOh6v2eOPityupLbrgiYWd2vxJjZvhp6ehLH6VK4s5mFsx6ABZKYjhZIAMLuZLuI&usqp=CAU',
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
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJnm5FfvNEIJ2FlXQXK0oZAkVP8dke0jOJAhHaPSs3vRL7_5M5N7geowPIT9dgsGELTg&usqp=CAU',
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
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHijyikN0y9ziZvmMzqlhbyU3HK45uQUDsiidQmMKCatAEvgkhIngylaDxDPmbL0vcmIE&usqp=CAU',
  },
  // {
  //   name: 'Kokkam Coffee',
  //   logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9wY1H3A3VbJx4QH7r7XbX4x9q7Zg4A9F0g&s',
  // },
  {
    name: 'FICCI',
    logo: 'https://upload.wikimedia.org/wikipedia/en/f/f4/FICCI_logo.svg',
  },
  {
    name: 'Fresh factory',
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQHY4Y3Zu7c9Yg/company-logo_200_200/company-logo_200_200/0/1636743468188?e=2147483647&v=beta&t=rzPi6u-51-Gbj57AOv83wkMfjeKFPY2Wn_llvzYWcBk',
  },
  {
    name: 'Ruminaari',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnA5f-sxI7WFyXS8AppsU3fWm0xM8XCUO7da8RAilpwJNKYTeB_xzrs-GQUBcR_LASDNI&usqp=CAU',
  },
  {
    name: 'Maison Mahogany',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNNK1h2-iBDzHaqn6afiA-Qe03LGbH7oDQ7DIMlg9NL2pUIB3spk470Fz10Ij0R-bDguY&usqp=CAU',
  },
  {
    name: 'Radio Mirchi',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Radiomirchi.jpg',
  },
  {
    name: 'Clarks Awadh',
    logo: 'https://www.nsdcjobx.com/Employer/EmployerProfileImg/d5887119-8ef9-4440-982d-975a611f2885.png',
  },
  {
    name: 'Old Spice',
    logo: 'https://upload.wikimedia.org/wikipedia/en/9/94/Current_Old_Spice_Logo_2016.svg',
  },
  {
    name: 'Mandala Fest',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7VyBSAkfCkKVgZhq8wqTB_OVZqveJoudQHg6Uhi8rMKA_4Diw3WbD5o-sWOpLVYnspQA&usqp=CAU',
  },
];


  const clientsRow3 = [
    { name: 'KC Suits', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcsC0jDs_jcLZrsB9TAH518LXuAWsc9yOoPz_f4xXRfW4iaTUUigaietLT-_tcmGtnfsY&usqp=CAU' },
    { name: 'Hues', logo: 'https://chikankarihues.com/cdn/shop/files/Untitled_design_2_b2693963-ef3e-44c7-9de8-2ec70e62273e.png?v=1715406738' },
    {
      name: 'Starbucks',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
    },
    {
      name: 'OPPO',
      logo: 'https://brandlogos.net/wp-content/uploads/2022/08/oppo-logo_brandlogos.net_x21dk-512x512.png',
    },
    // { name: 'Pickle Enough', logo: 'https://i.imgur.com/placeholder.png' },
    {
      name: 'Dove',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Dove-Logo.png',
    },
    {
      name: 'Garnier',
      logo: 'https://images.seeklogo.com/logo-png/34/1/garnier-logo-png_seeklogo-349688.png',
    },
    { name: 'ORO', logo: 'https://orogroup.in/wp-content/uploads/2024/04/LOGO2.png' },
    { name: 'Crystal Studio', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqkdU9k9o1InoXVT8CHUVtcquqmZlHNnj5pibqFFBAXwLdhuCNbgkNj-7QgTkcnJfQr2Q&usqp=CAU' },
    { name: 'Jugal Kishore', logo: 'https://content.jdmagicbox.com/comp/lucknow/c2/0522px522.x522.201207122624.x1c2/catalogue/jugal-kishore-jewellers-and-bankers-lucknow-w09qg3uedu.jpg' },
    // { name: 'IHS School', logo: 'https://i.imgur.com/placeholder.png' },
    { name: ' rostary coffee', logo: 'https://roasterycoffee.co.in/wp-content/uploads/2025/12/cropped-LOGO-2.png' },
    { name: 'Lettering Co', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zZ2dLwLrfNljqy6pEXs5V8gXvqBCmNmbNGnG67Y8Xjbid7VyRDfxbo9yUOA-KeEuTqg&usqp=CAU' },
    { name: 'Le Press', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLo5mu_sXpd0bIWNpi0nDoIIRB0vMcaiS8XO1eyEdvvdLbdyQlNRahawX1Kl-Ocal5QGE&usqp=CAU' },
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
