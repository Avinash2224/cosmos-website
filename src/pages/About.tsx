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
              Cosmos Media & Productions, founded in 2019, is an independent creative production studio driven by stories, emotion, and cinematic vision. Working at the intersection of filmmaking, visual storytelling, design, narrative strategy, with music production, Cosmos creates meaningful content that feels human, purposeful, and deeply connected to reality


              <br /><br />
         What began as a passion for cinema has grown into a full service production house collaborating with brands, startups, creative leaders, and marketing teams across diverse industries and formats. Over the years, Cosmos has partnered with 50+ national and international brands, transforming ideas into memorable brand films, advertising campaigns, documentaries, digital content, jingles, and immersive visual experiences.
At Cosmos, every project is treated as a unique world of its own. The process always begins with listening & understanding the story, emotion, and purpose behind every idea. Through collaboration, trust, and thoughtful execution, Cosmos crafts films and creative experiences that connect with audiences beyond the screen.

            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-earth-stone text-lg leading-relaxed">
    Independent by choice, Cosmos values creative integrity over trends. This freedom allows the studio to think deeply, create honestly, and remain true to every story it tells. More than just a production house, Cosmos exists as a creative home for stories that deserve meaning, time, and emotion - stories that stay in people’s hearts long after the screen fades to black.
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
                Because at COSMOS, we create stories that stay with people for years.
                <br /><br />
                We believe meaningful work comes from trust, time, understanding, and genuine client connection. Instead of following commercial formulas, we listen deeply, collaborate closely, and shape every story with honesty, purpose, and emotion.
              </p>

              {/* READ MORE CONTENT */}
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  showMoreWhy ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="mt-6 text-earth-charcoal text-xl font-serif italic leading-relaxed">
                  With over a decade of experience and collaborations with 50+ global brands, we bring creative vision with human sensitivity. We understand scale and professionalism, but we value intention above everything else.
                  <br /><br />
                  No shortcuts. No unnecessary layers. Just a passionate team that treats your story with the same care and commitment as its own.
                  <br /><br />
                  If you believe in work that feels real, meaningful, and leaves a lasting emotional impact, Cosmos is a name you can trust.
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
