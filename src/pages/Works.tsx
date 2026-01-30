import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import { Play } from 'lucide-react';

export default function Works() {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: 'all', name: 'All Works' },
    { id: 'series', name: 'Series' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'short-film', name: 'Short Films' },
    { id: 'music-video', name: 'Music Videos' },
    { id: 'other', name: 'Other Works' },
  ];

  const projects = [
    // Series
    {
      id: 1,
      title: 'Pathshala by Vicky Ratnani',
      category: 'series',
      type: 'YouTube Series',
      videoUrl: 'https://youtu.be/F5H_T36NAfA?si=nWbNL8NRZ3OqKqYt',
      embedUrl: 'https://www.youtube.com/embed/F5H_T36NAfA',
      thumbnail: 'https://img.youtube.com/vi/F5H_T36NAfA/maxresdefault.jpg',
      description: 'Culinary journey with Chef Vicky Ratnani',
      platform: 'youtube'
    },
{
  id: 31,
  title: 'SoHarshi X Kurkure',
  category: 'commercial',
  type: 'Instagram Reel',
  videoUrl: 'https://www.instagram.com/reel/DS6qWxcgDS0/',
  thumbnail: '/thumb2.jpg',
  description: 'Visual brand storytelling',
  platform: 'instagram',
},

{
  id: 32,
  title: 'Verve-A2',
  category: 'commercial',
  type: 'Instagram Reel',
  videoUrl: 'https://www.instagram.com/reel/DO0v5-sE081/',
  thumbnail: '/thumb3.jpg',
  description: 'Creative campaign film',
  platform: 'instagram',
},

    // Lulu Hypermarket Ads

    {
      id: 3,
      title: 'Lulu Diwali Ad 1',
      category: 'commercial',
      type: 'Advertisement',
      videoUrl: 'https://www.instagram.com/reel/DAs_VQGsKXu/',
  thumbnail: '/thumb4.jpg',
      description: 'Diwali celebration campaign',
      platform: 'instagram'
    },
    {
      id: 4,
      title: "Lulu's Funtura - Eid Ad",
      category: 'commercial',
      type: 'Advertisement',
      videoUrl: 'https://www.instagram.com/reel/DHdi-UzSvcN/',
  thumbnail: '/thumb6.jpg',
      description: 'Eid celebration campaign',
      platform: 'instagram'
    },
    {
      id: 2,
      title: 'Lulu Diwali Ad 2',
      category: 'commercial',
      type: 'Advertisement',
      videoUrl: 'https://www.instagram.com/reel/DBOmqSQyn35/',
  thumbnail: '/thumb5.jpg',
      description: 'Diwali celebration campaign',
      platform: 'instagram'
    },
    // Ad Films
    {
      id: 5,
      title: 'RedBull Summer 21',
      category: 'commercial',
      type: 'Ad Film',
      videoUrl: 'https://www.instagram.com/p/CS_tLnMJLAu/',
  thumbnail: '/thumb7.jpg',
      description: 'Brand storytelling',
      platform: 'instagram'
    },
    // {
    //   id: 6,
    //   title: 'Commercial Ad 2',
    //   category: 'commercial',
    //   type: 'Ad Film',
    //   videoUrl: 'https://youtu.be/UqQzfaQmKtI',
    //   embedUrl: 'https://www.youtube.com/embed/UqQzfaQmKtI',
    //   thumbnail: 'https://img.youtube.com/vi/UqQzfaQmKtI/maxresdefault.jpg',
    //   description: 'Creative commercial',
    //   platform: 'youtube'
    // },
    // {
    //   id: 7,
    //   title: 'Commercial Ad 3',
    //   category: 'commercial',
    //   type: 'Ad Film',
    //   videoUrl: 'https://youtu.be/tidSUq7iXZs',
    //   embedUrl: 'https://www.youtube.com/embed/tidSUq7iXZs',
    //   thumbnail: 'https://img.youtube.com/vi/tidSUq7iXZs/maxresdefault.jpg',
    //   description: 'Brand campaign',
    //   platform: 'youtube'
    // },
    // {
    //   id: 8,
    //   title: 'Commercial Ad 4',
    //   category: 'commercial',
    //   type: 'Ad Film',
    //   videoUrl: 'https://www.instagram.com/reel/C5WDZ6sJrgU/',
    //   thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
    //   description: 'Product showcase',
    //   platform: 'instagram'
    // },
    // {
    //   id: 9,
    //   title: 'Commercial Ad 5',
    //   category: 'commercial',
    //   type: 'Ad Film',
    //   videoUrl: 'https://www.instagram.com/reel/C5agNZepdYq/',
    //   thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    //   description: 'Creative storytelling',
    //   platform: 'instagram'
    // },
    // {
    //   id: 10,
    //   title: 'Commercial Ad 6',
    //   category: 'commercial',
    //   type: 'Ad Film',
    //   videoUrl: 'https://www.instagram.com/reel/C7TVrvYSAtx/',
    //   thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80',
    //   description: 'Brand narrative',
    //   platform: 'instagram'
    // },
    {
      id: 11,
      title: 'FICCI-Magic They Weave',
      category: 'commercial',
      type: 'Ad Film',
      videoUrl: 'https://www.youtube.com/watch?v=ZORiUnkpf-Y',
      embedUrl: 'https://www.youtube.com/embed/ZORiUnkpf-Y',
  thumbnail: '/thumb8.jpg',
      description: 'Commercial production',
      platform: 'youtube'
    },
        {
      id: 29,
      title: 'RedBull-Dance0ff 22',
      category: 'other',
      type: 'Production',
      videoUrl: 'https://www.instagram.com/p/CSw_PDIh85j/',
  thumbnail: '/thumb10.jpg',
      description: 'Visual content',
      platform: 'instagram'
    },
    {
      id: 12,
      title: 'Myntra-My City',
      category: 'commercial',
      type: 'Ad Film',
      videoUrl: 'https://www.instagram.com/reel/DJV6l5TSYWD/',
  thumbnail: '/thumb9.jpg',
      description: 'Latest campaign',
      platform: 'instagram'
    },

    // Short Films
    {
      id: 13,
      title: 'Happy Hours - Short Film ',
      category: 'short-film',
      type: 'Short Film',
      videoUrl: 'https://youtu.be/mUxjGHdVjk4',
      embedUrl: 'https://www.youtube.com/embed/mUxjGHdVjk4',
      thumbnail: 'https://img.youtube.com/vi/mUxjGHdVjk4/maxresdefault.jpg',
      description: 'Narrative storytelling',
      platform: 'youtube'
    },
    {
      id: 14,
      title: 'Bezubaan - Short Film ',
      category: 'short-film',
      type: 'Short Film',
      videoUrl: 'https://youtu.be/F8_CFFWOInA',
      embedUrl: 'https://www.youtube.com/embed/F8_CFFWOInA',
      thumbnail: 'https://img.youtube.com/vi/F8_CFFWOInA/maxresdefault.jpg',
      description: 'Cinematic experience',
      platform: 'youtube'
    },
    // {
    //   id: 15,
    //   title: 'Short Film 3',
    //   category: 'short-film',
    //   type: 'Short Film',
    //   videoUrl: 'https://youtu.be/6jxtHZ7rTaY',
    //   embedUrl: 'https://www.youtube.com/embed/6jxtHZ7rTaY',
    //   thumbnail: 'https://img.youtube.com/vi/6jxtHZ7rTaY/maxresdefault.jpg',
    //   description: 'Story-driven content',
    //   platform: 'youtube'
    // },
    {
      id: 16,
      title: 'Atrocity - Short Film ',
      category: 'short-film',
      type: 'Short Film',
      videoUrl: 'https://youtu.be/SVbKps1t5U0',
      embedUrl: 'https://www.youtube.com/embed/SVbKps1t5U0',
      thumbnail: 'https://img.youtube.com/vi/SVbKps1t5U0/maxresdefault.jpg',
      description: 'Creative narrative',
      platform: 'youtube'
    },
    {
      id: 17,
      title: 'Duvidhaa - Short Film ',
      category: 'short-film',
      type: 'Short Film',
      videoUrl: 'https://youtu.be/EY8Po0cnlSU',
      embedUrl: 'https://www.youtube.com/embed/EY8Po0cnlSU',
      thumbnail: 'https://img.youtube.com/vi/EY8Po0cnlSU/maxresdefault.jpg',
      description: 'Visual storytelling',
      platform: 'youtube'
    },
    {
      id: 18,
      title: 'Stabdh - Short Film ',
      category: 'short-film',
      type: 'Short Film',
      videoUrl: 'https://youtu.be/fVXLu1bAYpc',
      embedUrl: 'https://www.youtube.com/embed/fVXLu1bAYpc',
      thumbnail: 'https://img.youtube.com/vi/fVXLu1bAYpc/maxresdefault.jpg',
      description: 'Artistic expression',
      platform: 'youtube'
    },

    // Music Videos
    {
      id: 19,
      title: 'Kabira X Bulla Ki Jaana (cover) | Naacheez',
      category: 'music-video',
      type: 'Music Video',
      videoUrl: 'https://youtu.be/zW_nQGXT6Xs',
      embedUrl: 'https://www.youtube.com/embed/zW_nQGXT6Xs',
      thumbnail: 'https://img.youtube.com/vi/zW_nQGXT6Xs/maxresdefault.jpg',
      description: 'Musical storytelling',
      platform: 'youtube'
    },
    {
      id: 20,
      title: 'Kesariya Medley By Naacheez',
      category: 'music-video',
      type: 'Music Video',
      videoUrl: 'https://youtu.be/SCXWsRwYOsk',
      embedUrl: 'https://www.youtube.com/embed/SCXWsRwYOsk',
      thumbnail: 'https://img.youtube.com/vi/SCXWsRwYOsk/maxresdefault.jpg',
      description: 'Visual music experience',
      platform: 'youtube'
    },
    // {
    //   id: 21,
    //   title: 'Music Video 3',
    //   category: 'music-video',
    //   type: 'Music Video',
    //   videoUrl: 'https://www.youtube.com/watch?v=ZR1eYpG1mj8',
    //   embedUrl: 'https://www.youtube.com/embed/ZR1eYpG1mj8',
    //   thumbnail: 'https://img.youtube.com/vi/ZR1eYpG1mj8/maxresdefault.jpg',
    //   description: 'Artistic music production',
    //   platform: 'youtube'
    // },
    {
      id: 22,
      title: 'HAUSLA ANTHEM | A SONG DEDICATED TO CORONA WARRIORS',
      category: 'music-video',
      type: 'Music Video',
      videoUrl: 'https://www.youtube.com/watch?v=wjKRJg0Guow',
      embedUrl: 'https://www.youtube.com/embed/wjKRJg0Guow',
      thumbnail: 'https://img.youtube.com/vi/wjKRJg0Guow/maxresdefault.jpg',
      description: 'Creative visuals',
      platform: 'youtube'
    },
    {
      id: 23,
      title: 'SAFAR - Utkarsh & Prateek ',
      category: 'music-video',
      type: 'Music Video',
      videoUrl: 'https://www.youtube.com/watch?v=mT5vKkp1GkI',
      embedUrl: 'https://www.youtube.com/embed/mT5vKkp1GkI',
      thumbnail: 'https://img.youtube.com/vi/mT5vKkp1GkI/maxresdefault.jpg',
      description: 'Musical narrative',
      platform: 'youtube'
    },
    {
      id: 24,
      title: 'Song Association With SHRIYA JAIN OFFICIAL',
      category: 'music-video',
      type: 'Music Video',
      videoUrl: 'https://www.youtube.com/watch?v=e2l359PfWQQ',
      embedUrl: 'https://www.youtube.com/embed/e2l359PfWQQ',
      thumbnail: 'https://img.youtube.com/vi/e2l359PfWQQ/maxresdefault.jpg',
      description: 'Cinematic music video',
      platform: 'youtube'
    },
    {
      id: 25,
      title: 'Raena - Sahil Mishra ft. Utkarsh',
      category: 'music-video',
      type: 'Music Video',
      videoUrl: 'https://youtu.be/KFqE3r_U4yA',
      embedUrl: 'https://www.youtube.com/embed/KFqE3r_U4yA',
      thumbnail: 'https://img.youtube.com/vi/KFqE3r_U4yA/maxresdefault.jpg',
      description: 'Visual music art',
      platform: 'youtube'
    },
    {
      id: 26,
      title: 'Kaudiyo Mein - Sahil Mishra (Official Music Video)',
      category: 'music-video',
      type: 'Music Video',
      videoUrl: 'https://youtu.be/LNmTS6_-obk',
      embedUrl: 'https://www.youtube.com/embed/LNmTS6_-obk',
      thumbnail: 'https://img.youtube.com/vi/LNmTS6_-obk/maxresdefault.jpg',
      description: 'Creative production',
      platform: 'youtube'
    },
    {
      id: 27,
      title: 'AAJ | Music Video | Utkarsh K Srivastava',
      category: 'music-video',
      type: 'Music Video',
      videoUrl: 'https://youtu.be/U_PKbm4uTI8',
      embedUrl: 'https://www.youtube.com/embed/U_PKbm4uTI8',
      thumbnail: 'https://img.youtube.com/vi/U_PKbm4uTI8/maxresdefault.jpg',
      description: 'Musical journey',
      platform: 'youtube'
    },

    // Other Works
    // {
    //   id: 28,
    //   title: 'Featured Work 1',
    //   category: 'other',
    //   type: 'Production',
    //   videoUrl: 'https://www.instagram.com/p/CS_tLnMJLAu/',
    //   thumbnail: 'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=800&q=80',
    //   description: 'Creative production',
    //   platform: 'instagram'
    // },



  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  // Show only 6 cards initially, then all when "View More" is clicked
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);
  const hasMore = filteredProjects.length > 6;

  const handleVideoClick = (project: typeof projects[0]) => {
    // Open all videos (Instagram and YouTube) directly in new tab
    window.open(project.videoUrl, '_blank');
  };

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

      {/* FILTER BAR */}
      <section className="py-12 px-6 lg:px-12 bg-earth-cream border-b border-earth-beige">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setFilter(category.id);
                    setShowAll(false); // Reset to show only 6 when filter changes
                  }}
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
            {displayedProjects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 50}>
                <div 
                  className="group cursor-pointer overflow-hidden bg-earth-charcoal aspect-[3/4] relative"
                  onClick={() => handleVideoClick(project)}
                >
                  {/* Thumbnail Image */}
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback if thumbnail fails to load
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80';
                    }}
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="w-8 h-8 text-earth-charcoal ml-1" fill="currentColor" />
                    </div>
                  </div>
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-charcoal via-earth-charcoal/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Project Info */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
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
                  
                  {/* Platform Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs tracking-wider uppercase">
                      {project.platform}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* VIEW MORE BUTTON */}
          {!showAll && hasMore && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="px-8 py-3 bg-earth-charcoal text-earth-cream hover:bg-earth-stone transition-all duration-300 tracking-wider text-lg"
              >
                View More ({filteredProjects.length - 6} more works)
              </button>
            </div>
          )}

          {/* VIEW LESS BUTTON */}
          {showAll && hasMore && (
            <div className="mt-12 text-center">
              <button
                onClick={() => {
                  setShowAll(false);
                  // Scroll to the works section
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-earth-beige text-earth-charcoal hover:bg-earth-clay transition-all duration-300 tracking-wider text-lg"
              >
                View Less
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}