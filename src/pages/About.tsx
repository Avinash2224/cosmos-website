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
    <div className="pt-20">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1054713/pexels-photo-1054713.jpeg?auto=compress&cs=tinysrgb&w=1920)',
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

For over a decade, we’ve been working at the intersection of cinema, design, and narrative crafting visual stories that feel intentional, human, and lived-in. What began as a deep love for filmmaking has grown into a practice that spans brands, cultures, and formats.

            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-earth-stone text-lg leading-relaxed mb-6">
              Our approach is rooted in observation and intention. We don't just capture moments we craft experiences that honor the depth and nuance of every story. Whether it's a brand film, a 360° immersive journey, or a creative solution guided by timeless wisdom, we bring the same reverence to every project.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-earth-stone text-lg leading-relaxed">
    At Cosmos, we don’t believe in one size fits all production. Every project is treated as its own universe built through conversation, trust, and collaboration. We value process as much as outcome, and mood as much as message.

We are intentionally independent.
Which gives us the freedom to move slowly when needed, think deeply, and stay honest to the story at hand.

Cosmos exists as a creative home for brands and ideas that want more than just visuals.
For stories that deserve time, attention, and meaning.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* <section className="py-24 px-6 lg:px-12 bg-earth-beige">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-earth-charcoal mb-16 text-center">
              What Guides Us
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 100}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-earth-clay rounded-full mb-6">
                    <value.icon size={36} className="text-earth-charcoal" />
                  </div>
                  <h3 className="font-serif text-2xl text-earth-charcoal mb-4">
                    {value.title}
                  </h3>
                  <p className="text-earth-stone leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-24 px-6 lg:px-12 bg-earth-cream">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-earth-charcoal mb-8">
  Why Choose Cosmos ?
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="bg-earth-beige p-12 border-l-4 border-earth-clay">
              <p className="text-earth-charcoal text-xl font-serif italic leading-relaxed mb-6">
               Because we don’t rush stories.

At Cosmos, we believe meaningful work comes from time, trust, and attention. We work closely with our clients listening deeply, questioning thoughtfully, and building narratives together rather than imposing formulas.

With over a decade of experience and collaborations across 500+ global brands, we bring perspective without losing sensitivity. We understand scale, but we care more about intent. Every project is approached as its own universe, shaped with the same honesty whether it’s a brand film, a commercial, or an experimental piece.

We choose independence so we can stay flexible, personal, and involved at every step of the process. No layers. No shortcuts. Just a team that treats your story as carefully as its own.

If you’re looking for work that feels human, considered, and lasting Cosmos is built for that.
              </p>
              {/* <p className="text-earth-stone">
                Our founder's journey through filmmaking, photography, and creative wisdom has shaped a studio that values depth over noise, intention over trend, and timeless craft over fleeting moments.
              </p> */}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* <section className="py-24 px-6 lg:px-12 bg-earth-charcoal">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-earth-cream mb-6">
                Our Process
              </h2>
              <p className="text-earth-beige leading-relaxed mb-6">
                We begin every project with deep listening. Understanding your vision, your values, and your audience allows us to craft stories that are authentic and resonant.
              </p>
              <p className="text-earth-beige leading-relaxed">
                From pre-production to post, we infuse every stage with care, creativity, and technical excellence. The result is work that doesn't just look beautiful—it feels true.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Behind the scenes"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section> */}
    </div>
  );
}
