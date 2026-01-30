import { ArrowRight, Instagram, Phone, Mail, Heart, Eye, Compass } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const visionPoints = [
    {
      icon: Heart,
      title: 'Intentional',
      description: 'Every frame, every moment is crafted with purpose and care.',
    },
    {
      icon: Eye,
      title: 'Observant',
      description: 'We look beyond the surface to capture what truly matters.',
    },
    {
      icon: Compass,
      title: 'Rooted',
      description: 'Grounded in timeless values while embracing new perspectives.',
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/homebg.png')",
          }}
        >
          <div className="absolute inset-0 bg-earth-charcoal/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <h1
              className="text-6xl md:text-9xl text-white mb-6 font-bold leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                textShadow: '0 12px 30px rgba(0, 0, 0, 0.5)',
              }}
            >
              Crafting Your<br />Inner World
            </h1>
          </FadeIn>
        </div>

        {/* FLOATING BUBBLES */}
        <div className="fixed bottom-8 right-8 z-20 flex flex-col gap-4">
          <a
            href="https://www.instagram.com/cosmosmedia.co?igsh=dm96NzNpeDg3aGJi"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-bubble"
            aria-label="Instagram"
          >
            <Instagram size={22} />
          </a>

          <a
            href="tel:+916393468280"
            className="floating-bubble delay-100"
            aria-label="Call us"
          >
            <Phone size={22} />
          </a>

          <a
            href="mailto:cosmosmedia.co@gmail.com"
            className="floating-bubble delay-200"
            aria-label="Email us"
          >
            <Mail size={22} />
          </a>
        </div>
      </section>

      {/* OUR VISION SECTION */}
      <section className="py-24 px-6 lg:px-12 bg-earth-cream">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-earth-charcoal mb-8">
              Our Vision
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <p className="text-earth-stone text-lg max-w-3xl mx-auto leading-relaxed mb-16">
              To create visual stories that feel honest, human, and timeless.
              We believe true impact comes not from trends, but from intention,
              observation, and care.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12">
            {visionPoints.map((item, index) => (
              <FadeIn key={item.title} delay={200 + index * 100}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-earth-beige mb-6">
                    <item.icon size={28} className="text-earth-charcoal" />
                  </div>
                  <h3 className="font-serif text-2xl text-earth-charcoal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-earth-stone leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* INLINE STYLES */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

        .floating-bubble {
          width: 56px;
          height: 56px;
          border-radius: 9999px;
          background: rgba(245, 245, 247, 0.9);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1f1f1f;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: float 6s ease-in-out infinite;
        }

        .floating-bubble:hover {
          transform: scale(1.1);
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
      `}</style>
    </>
  );
}
