// import { useEffect, useState } from 'react';
// import Navigation from './components/Navigation';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Works from './pages/Works';
// import Silent from './pages/Silent';
// import Contact from './pages/Contact';
// import Loader from './components/Loader';

// function App() {
//   const [loading, setLoading] = useState(true);

//   // prevent scroll while loading
//   useEffect(() => {
//     if (loading) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//   }, [loading]);

//   if (loading) {
//     return <Loader onFinish={() => setLoading(false)} />;
//   }

//   return (
//     <div className="min-h-screen">
//       <Navigation />

//       <main>
//         <section id="home"><Home /></section>
//         <section id="about"><About /></section>
//         <section id="services"><Services /></section>
//         <section id="works"><Works /></section>
//         <section id="silent"><Silent /></section>
//         <section id="contact"><Contact /></section>
//       </main>

//       <footer className="bg-earth-charcoal text-earth-beige py-12 text-center">
//         © {new Date().getFullYear()} Cosmos Media & Productions
//       </footer>
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Works from './pages/Works';
import Silent from './pages/Silent';
import Contact from './pages/Contact';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  // prevent scroll while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen animate-slideDown bg-[#f6f1ea]">
      <Navigation />

      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="works"><Works /></section>
        <section id="silent"><Silent /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className="bg-earth-charcoal text-earth-beige py-12 text-center">
        © {new Date().getFullYear()} Cosmos Media & Productions
      </footer>

      {/* Global styles for website entrance */}
      <style jsx global>{`
        @keyframes slideDownEnter {
          0% {
            opacity: 0;
            transform: translateY(100vh);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDownEnter 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s both;
        }
      `}</style>
    </div>
  );
}

export default App;
