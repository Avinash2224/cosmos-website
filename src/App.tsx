// import { useEffect, useState } from 'react';
// import Loader from './components/Loader';
// import FloatingBubbles from './components/FloatingBubbles';
// import Navigation from './components/Navigation';

// import Home from './pages/Home';
// import Silent from './pages/Silent';
// import About from './pages/About';
// import Services from './pages/Services';
// import Works from './pages/Works';
// import Contact from './pages/Contact';

// function App() {
//   const [showLoader, setShowLoader] = useState(true);
//   const [reveal, setReveal] = useState(false);

//   // Disable scroll restore
//   useEffect(() => {
//     if ('scrollRestoration' in window.history) {
//       window.history.scrollRestoration = 'manual';
//     }
//     window.scrollTo(0, 0);
//   }, []);

//   // Lock scroll during transition
//   useEffect(() => {
//     document.body.style.overflow = showLoader ? 'hidden' : 'auto';
//   }, [showLoader]);

//   return (
//     <>
//       {showLoader && (
//         <Loader
//           onExitStart={() => setReveal(true)}
//           onFinish={() => setShowLoader(false)}
//         />
//       )}

//       {/* APP SLIDES UP FROM BOTTOM */}
//       <div
//         className={`min-h-screen bg-[#f6f1ea] transition-transform duration-[900ms] ease-[cubic-bezier(0.77,0,0.175,1)]
//         ${reveal ? 'translate-y-0' : 'translate-y-full'}`}
//       >
//         <Navigation />
//         <FloatingBubbles />

//         <main>
//           <section id="home"><Home /></section>
//           <section id="silent"><Silent /></section>
//           <section id="about"><About /></section>
//           <section id="services"><Services /></section>
//           <section id="works"><Works /></section>
//           <section id="contact"><Contact /></section>
//         </main>

//         <footer className="bg-earth-charcoal text-earth-beige py-12 text-center">
//           © {new Date().getFullYear()} Cosmos Media & Productions
//         </footer>
//       </div>
//     </>
//   );
// }

// export default App;

import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import FloatingBubbles from './components/FloatingBubbles';
import Navigation from './components/Navigation';

import Home from './pages/Home';
import Silent from './pages/Silent';
import About from './pages/About';
import Services from './pages/Services';
import Works from './pages/Works';
import Contact from './pages/Contact';

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showLoader ? 'hidden' : 'auto';
  }, [showLoader]);

  return (
    <>
      {showLoader && (
        <Loader
          onExitStart={() => setReveal(true)}
          onFinish={() => setShowLoader(false)}
        />
      )}

      {/* ✅ NAVIGATION MUST BE OUTSIDE TRANSFORM */}
      <Navigation />
      <FloatingBubbles />

      {/* APP CONTENT SLIDES UP */}
      <div
        className={`min-h-screen bg-[#f6f1ea] transition-transform duration-[900ms] ease-[cubic-bezier(0.77,0,0.175,1)]
        ${reveal ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <main>
          <section id="home"><Home /></section>
          <section id="silent"><Silent /></section>
          <section id="about"><About /></section>
          <section id="services"><Services /></section>
          <section id="works"><Works /></section>
          <section id="contact"><Contact /></section>
        </main>

        <footer className="bg-earth-charcoal text-earth-beige py-12 text-center">
          © {new Date().getFullYear()} Cosmos Media & Productions
        </footer>
      </div>
    </>
  );
}

export default App;
