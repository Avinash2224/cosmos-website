import FadeIn from '../components/FadeIn';

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/homebg.png')" }}
        >
          <div className="absolute inset-0 bg-earth-charcoal/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <h1
              className="text-6xl md:text-9xl text-white font-bold leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                textShadow: '0 12px 30px rgba(0,0,0,0.5)',
              }}
            >
              Where Brands 
              <br />
              Become Stories
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* FONT */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
      `}</style>
    </>
  );
}
