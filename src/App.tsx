import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Works from './pages/Works';
import Silent from './pages/Silent';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navigation />

      {/* offset for fixed navbar */}
      <main className="pt-20">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="works">
          <Works />
        </section>

        <section id="silent">
          <Silent />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="bg-earth-charcoal text-earth-beige py-12 text-center">
        © {new Date().getFullYear()} Cosmos Media & Productions
      </footer>
    </div>
  );
}

export default App;
