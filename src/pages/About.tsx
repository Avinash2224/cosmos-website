import FadeIn from '../components/FadeIn';
import { Heart, Eye, Compass } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Intentional',
      description: 'Every frame, every moment is crafted with purpose and care',
    },
    {
      icon: Eye,
      title: 'Observant',
      description: 'We see beyond the surface to capture authentic essence',
    },
    {
      icon: Compass,
      title: 'Rooted',
      description: 'Grounded in timeless principles, reaching for innovation',
    },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/aboutbg.png')", // ✅ LOCAL BACKGROUND
          }}
        >
          <div className="absolute inset-0 bg-earth-charcoal/50" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <FadeIn>
            <h1
              className="text-5xl md:text-8xl text-white mb-6 tracking-wide"
              style={{ fontFamily: 'Gotu, sans-serif' }}
            >
              About Us
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-earth-beige text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {/* Where artistry meets intention */}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-24 px-6 lg:px-12 bg-earth-cream">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-earth-charcoal mb-8">
              About Cosmos Media & Productions
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <p className="text-earth-stone text-lg leading-relaxed mb-6">
              Cosmos is an independent production house driven by stories, not trends.
              <br /><br />
              For over a decade, we've been working at the intersection of cinema,
              design, and narrative—crafting visual stories that feel intentional,
              human, and lived-in. What began as a deep love for filmmaking has grown
              into a practice that spans brands, cultures, and formats.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-earth-stone text-lg leading-relaxed mb-6">
              Our approach is rooted in observation and intention. We don't just
              capture moments—we craft experiences that honor the depth and nuance
              of every story. Whether it's a brand film, a 360° immersive journey,
              or a creative solution guided by timeless wisdom, we bring the same
              reverence to every project.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-earth-stone text-lg leading-relaxed">
              At Cosmos, we don't believe in one size fits all production. Every
              project is treated as its own universe—built through conversation,
              trust, and collaboration. We value process as much as outcome, and
              mood as much as message.
              <br /><br />
              We are intentionally independent.
              <br />
              Which gives us the freedom to move slowly when needed, think deeply,
              and stay honest to the story at hand.
              <br /><br />
              Cosmos exists as a creative home for brands and ideas that want more
              than just visuals.
              <br />
              For stories that deserve time, attention, and meaning.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* WHY CHOOSE COSMOS */}
      <section className="py-24 px-6 lg:px-12 bg-earth-cream">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-earth-charcoal mb-8">
              Why Choose Cosmos ?
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="bg-earth-beige p-12 border-l-4 border-earth-clay">
              <p className="text-earth-charcoal text-xl font-serif italic leading-relaxed">
                Because we don't rush stories.
                <br /><br />
                At Cosmos, we believe meaningful work comes from time, trust, and
                attention. We work closely with our clients—listening deeply,
                questioning thoughtfully, and building narratives together rather
                than imposing formulas.
                <br /><br />
                With over a decade of experience and collaborations across 500+
                global brands, we bring perspective without losing sensitivity. We
                understand scale, but we care more about intent.
                <br /><br />
                We choose independence so we can stay flexible, personal, and
                involved at every step of the process. No layers. No shortcuts.
                Just a team that treats your story as carefully as its own.
                <br /><br />
                If you're looking for work that feels human, considered, and
                lasting—Cosmos is built for that.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
