import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import { Heart, Eye, Compass } from 'lucide-react';

export default function About() {
  const [showMoreWhy, setShowMoreWhy] = useState(false);

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
    style={{ backgroundImage: "url('/aboutbg.png')" }}
  >
    <div className="absolute inset-0 bg-earth-charcoal/50" />
  </div>

  <div className="relative z-10 text-center px-6 max-w-4xl">
    <FadeIn>
      <h1
        className="text-6xl md:text-[9.5rem] text-white mb-6 tracking-wide leading-tight"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        About Us
      </h1>
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
              Cosmos is an independent film and media production house driven by stories, not trends.

For over a decade, we’ve been working at the intersection of filmmaking, visual storytelling, design, and narrative strategy, creating films that feel intentional, human, and lived-in. What began as a deep love for cinema has evolved into a full service creative production studio collaborating across brands, cultures, and formats.


              <br /><br />
           Over the years, Cosmos has partnered with 50+ brands globally, working closely with founders, marketing teams, and creative leaders to translate ideas into brand films, commercials, digital campaigns, and immersive visual experiences. From advertising films and product stories to experimental visuals and long form content, our process always begins the same way: listening first.

We don’t believe in one size fits all production. As a bespoke creative studio, every project is treated as its own universe shaped through collaboration, trust, and thoughtful execution. We value process as much as outcome, and emotion as much as message.

            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-earth-stone text-lg leading-relaxed">
             Cosmos is intentionally independent.
That independence allows us the freedom to think deeply, move deliberately, and stay honest to the story being told without compromising creative integrity.

Cosmos exists as a creative home for brands, startups, and ideas seeking more than just visuals.
For stories that need time, intention, and meaning and films that resonate beyond the screen.
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
              </p>

              {/* READ MORE CONTENT */}
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  showMoreWhy ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="mt-6 text-earth-charcoal text-xl font-serif italic leading-relaxed">
                  With over a decade of experience and collaborations across 500+
                  global brands, we bring perspective without losing sensitivity.
                  We understand scale, but we care more about intent.
                  <br /><br />
                  We choose independence so we can stay flexible, personal, and
                  involved at every step of the process. No layers. No shortcuts.
                  Just a team that treats your story as carefully as its own.
                  <br /><br />
                  If you're looking for work that feels human, considered, and
                  lasting—Cosmos is built for that.
                </p>
              </div>

              {/* READ MORE BUTTON */}
              <button
                onClick={() => setShowMoreWhy(!showMoreWhy)}
                className="mt-6 font-serif tracking-wide text-earth-charcoal underline underline-offset-4 hover:opacity-70 transition"
              >
                {showMoreWhy ? 'Read less' : 'Read more'}
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
