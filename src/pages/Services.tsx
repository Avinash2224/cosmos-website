import FadeIn from '../components/FadeIn';
import {
  Film,
  Camera,
  Palette,
  Box,
  Share2,
  TrendingUp,
  Lightbulb,
  Clapperboard,
} from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Film,
      title: 'Video Production',
      description: 'Crafting compelling visual stories from concept to final delivery.',
      offerings: [
        'Brand Films & TVCs',
        'Corporate & Documentary Videos',
        'Product & Launch Videos',
        'Social Media Reels & Ads',
        'Influencer Collaborations',
        'Event Aftermovies',
        'Motion Graphics Integration',
      ],
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Capturing moments with precision, creativity, and artistic vision.',
      offerings: [
        'Fashion, Lifestyle & Model Shoots',
        'Product & E-commerce Photography',
        'Food & Beverage Shoots',
        'Interiors, Architecture & Real Estate',
        'Event & Corporate Coverage',
      ],
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Transforming ideas into stunning visual identities and experiences.',
      offerings: [
        'Branding & Logo Design',
        'Campaign & Ad Creatives',
        'Packaging & Print Collaterals',
        'UI/UX Design',
        'Social Media Visuals',
      ],
    },
    {
      icon: Box,
      title: '3D & VFX',
      description: 'Pushing creative boundaries with cutting-edge 3D visualization and effects.',
      offerings: [
        '3D Product Visualization',
        'Architectural Walkthroughs & CGI',
        'Motion Graphics & Title Animations',
        'Compositing, Tracking & Rotoscoping',
        'Green Screen & Virtual Set Production',
        'Visual Effects for Films & Ads',
      ],
    },
    {
      icon: Clapperboard,
      title: 'Post-Production',
      description: 'Polishing your content to perfection with expert finishing touches.',
      offerings: [
        'Editing & Color Grading',
        'Sound Design & Mixing',
        'Subtitling & Localization',
        'Final Mastering & Delivery',
      ],
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Building and nurturing your brand presence across digital platforms.',
      offerings: [
        'Content Strategy & Creative Planning',
        'Reels, Stories & Influencer Tie-ups',
        'Community Engagement',
        'Social Media Campaigns',
        'Brand Voice & Aesthetic Management',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven strategies to amplify your reach and drive measurable growth.',
      offerings: [
        'SEO & SEM',
        'Meta & Google Ads',
        'Performance Marketing',
        'Email Campaigns',
        'Analytics & Growth Strategy',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Branding & Strategy',
      description: 'Defining your unique story and positioning in the marketplace.',
      offerings: [
        'Brand Identity Creation',
        'Campaign Ideation & Positioning',
        'Market Research & Rebranding',
        'Storytelling & Narrative Design',
      ],
    },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/servicesbg.png)',
          }}
        >
          <div className="absolute inset-0 bg-earth-charcoal/60" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <FadeIn>
            <h1
              className="text-5xl md:text-8xl text-white mb-6 tracking-wide"
              style={{ fontFamily: 'Gotu, sans-serif' }}
            >
              Our Services
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-earth-beige text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Comprehensive creative solutions across every medium and platform
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 px-6 lg:px-12 bg-earth-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 50}>
                <div className="group relative bg-white hover:bg-earth-beige transition-all duration-500 overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-earth-clay opacity-10 transform translate-x-12 -translate-y-12 rotate-45 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500" />

                  <div className="relative p-8 h-full flex flex-col">
                    <div className="flex items-start gap-5 mb-6">
                      <div className="flex-shrink-0 w-14 h-14 bg-earth-charcoal group-hover:bg-earth-clay transition-all duration-500 flex items-center justify-center">
                        <service.icon
                          size={28}
                          className="text-earth-cream group-hover:text-earth-charcoal transition-colors duration-500"
                        />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl md:text-3xl text-earth-charcoal mb-2">
                          {service.title}
                        </h3>
                        <div className="w-12 h-0.5 bg-earth-clay group-hover:w-20 transition-all duration-500" />
                      </div>
                    </div>

                    <p className="text-earth-stone group-hover:text-earth-charcoal transition-colors leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2.5 mt-auto">
                      {service.offerings.map((offering) => (
                        <li
                          key={offering}
                          className="flex items-start gap-3 text-earth-brown group-hover:text-earth-charcoal transition-colors"
                        >
                          <span className="w-1.5 h-1.5 bg-earth-brown group-hover:bg-earth-charcoal mt-2" />
                          <span className="text-sm">{offering}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-earth-charcoal group-hover:w-full transition-all duration-700" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
