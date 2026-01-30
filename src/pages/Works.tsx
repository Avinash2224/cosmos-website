import { useState } from 'react';
import FadeIn from '../components/FadeIn';

export default function Works() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Works' },
    { id: 'film', name: 'Film' },
    { id: 'commercial', name: 'Commercial' },
    { id: '360', name: '360°' },
    { id: 'photography', name: 'Photography' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Heritage Stories',
      category: 'film',
      type: 'Documentary',
      image:
        'https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'A visual journey through timeless traditions',
    },
    {
      id: 2,
      title: 'Urban Pulse',
      category: 'commercial',
      type: 'Brand Film',
      image:
        'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Capturing the rhythm of modern life',
    },
    {
      id: 3,
      title: 'Sacred Spaces',
      category: '360',
      type: 'Virtual Tour',
      image:
        'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Immersive exploration of spiritual architecture',
    },
    {
      id: 4,
      title: 'Artisan Hands',
      category: 'photography',
      type: 'Portrait Series',
      image:
        'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Celebrating craftsmanship and dedication',
    },
    {
      id: 5,
      title: "Nature's Whisper",
      category: 'film',
      type: 'Short Film',
      image:
        'https://images.pexels.com/photos/1089306/pexels-photo-1089306.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'A meditative exploration of wilderness',
    },
    {
      id: 6,
      title: 'Brand Evolution',
      category: 'commercial',
      type: 'Campaign',
      image:
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Storytelling that transforms perception',
    },
    {
      id: 7,
      title: 'Estate Showcase',
      category: '360',
      type: 'Real Estate',
      image:
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Interactive property experiences',
    },
    {
      id: 8,
      title: 'Culinary Art',
      category: 'photography',
      type: 'Commercial',
      image:
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Food photography that awakens the senses',
    },
    {
      id: 9,
      title: 'Silent Witness',
      category: 'film',
      type: 'Documentary',
      image:
        'https://images.pexels.com/photos/1054713/pexels-photo-1054713.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Stories that demand to be heard',
    },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div>
      {/* HEADER */}
      <section className="py-16 px-6 lg:px-12 bg-earth-cream border-b border-earth-beige">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-6xl text-earth-charcoal mb-6">
              Our Works
            </h1>
            <p className="text-earth-stone text-lg max-w-2xl">
              A collection of stories told through lens and light
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FILTER BAR — NOW NORMAL SCROLL */}
      <section className="py-12 px-6 lg:px-12 bg-earth-cream border-b border-earth-beige">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-2 transition-all duration-300 tracking-wider ${
                    filter === category.id
                      ? 'bg-earth-charcoal text-earth-cream'
                      : 'bg-earth-beige text-earth-stone hover:bg-earth-clay hover:text-earth-charcoal'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="py-16 px-6 lg:px-12 bg-earth-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 50}>
                <div className="group cursor-pointer overflow-hidden bg-earth-charcoal aspect-[3/4]">
                  <div className="relative h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-earth-charcoal via-earth-charcoal/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-earth-beige text-sm tracking-widest mb-2 uppercase">
                          {project.type}
                        </p>
                        <h3 className="font-serif text-white text-2xl md:text-3xl mb-3">
                          {project.title}
                        </h3>
                        <p className="text-earth-beige text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {project.description}
                        </p>
                      </div>
                    </div>
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
