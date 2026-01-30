import { ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/honebg.png')",
        }}
      >
        <div className="absolute inset-0 bg-earth-charcoal/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <FadeIn>
          <h1
            className="text-6xl md:text-9xl text-white mb-6"
            style={{
              fontFamily: 'Gotu, sans-serif',
              textShadow: '0 12px 30px rgba(0, 0, 0, 0.5)', // 👈 50% opacity blur
            }}
          >
            Crafting Your<br />Inner World
          </h1>
        </FadeIn>

        <FadeIn delay={300}>
          <button
            onClick={() => scrollTo('works')}
            className="inline-flex items-center gap-2 bg-earth-cream text-earth-charcoal px-8 py-4"
          >
            View Our Work <ArrowRight size={18} />
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
