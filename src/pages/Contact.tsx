// import { useState, FormEvent } from 'react';
// import FadeIn from '../components/FadeIn';
// import { Mail, MapPin, Send } from 'lucide-react';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     setIsSubmitted(true);
//     setTimeout(() => {
//       setFormData({ name: '', email: '', subject: '', message: '' });
//       setIsSubmitted(false);
//     }, 3000);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div className="pt-20">
//       <section className="py-16 px-6 lg:px-12 bg-earth-cream">
//         <div className="max-w-7xl mx-auto">
//           <FadeIn>
//             <h1 className="font-serif text-5xl md:text-6xl text-earth-charcoal mb-6">
//               Let's Connect
//             </h1>
//             <p className="text-earth-stone text-lg max-w-2xl">
//               Every great project begins with a conversation. Share your vision with us.
//             </p>
//           </FadeIn>
//         </div>
//       </section>

//       <section className="py-16 px-6 lg:px-12 bg-earth-cream">
//         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
//           <FadeIn>
//             <div>
//               <h2 className="font-serif text-3xl md:text-4xl text-earth-charcoal mb-8">
//                 Get in Touch
//               </h2>

//               <div className="space-y-8 mb-12">
//                 <div className="flex items-start gap-4">
//                   <div className="flex-shrink-0 w-12 h-12 bg-earth-beige flex items-center justify-center">
//                     <Mail size={24} className="text-earth-brown" />
//                   </div>
//                   <div>
//                     <h3 className="font-serif text-xl text-earth-charcoal mb-2">Email</h3>
//                     <p className="text-earth-stone">hello@cosmosmedia.studio</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="flex-shrink-0 w-12 h-12 bg-earth-beige flex items-center justify-center">
//                     <MapPin size={24} className="text-earth-brown" />
//                   </div>
//                   <div>
//                     <h3 className="font-serif text-xl text-earth-charcoal mb-2">Location</h3>
//                     <p className="text-earth-stone">Working remotely,<br />Creating globally</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-earth-beige p-8">
//                 <h3 className="font-serif text-2xl text-earth-charcoal mb-4">
//                   Project Inquiries
//                 </h3>
//                 <p className="text-earth-stone leading-relaxed mb-4">
//                   We work with brands, organizations, and individuals who value thoughtful, intentional creative work.
//                 </p>
//                 <p className="text-earth-stone leading-relaxed">
//                   Whether you have a fully formed vision or just the seed of an idea, we're here to listen and collaborate.
//                 </p>
//               </div>
//             </div>
//           </FadeIn>

//           <FadeIn delay={200}>
//             <div className="bg-earth-beige p-8 lg:p-12">
//               <h2 className="font-serif text-3xl text-earth-charcoal mb-8">
//                 Send a Message
//               </h2>

//               {isSubmitted ? (
//                 <div className="py-16 text-center">
//                   <div className="inline-flex items-center justify-center w-16 h-16 bg-earth-clay rounded-full mb-6">
//                     <Send size={32} className="text-earth-charcoal" />
//                   </div>
//                   <h3 className="font-serif text-2xl text-earth-charcoal mb-4">
//                     Thank You
//                   </h3>
//                   <p className="text-earth-stone">
//                     We've received your message and will respond soon.
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <label htmlFor="name" className="block text-earth-charcoal mb-2 tracking-wide">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 bg-earth-cream border border-earth-clay focus:border-earth-brown outline-none transition-colors text-earth-charcoal"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="email" className="block text-earth-charcoal mb-2 tracking-wide">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 bg-earth-cream border border-earth-clay focus:border-earth-brown outline-none transition-colors text-earth-charcoal"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="subject" className="block text-earth-charcoal mb-2 tracking-wide">
//                       Subject
//                     </label>
//                     <input
//                       type="text"
//                       id="subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 bg-earth-cream border border-earth-clay focus:border-earth-brown outline-none transition-colors text-earth-charcoal"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-earth-charcoal mb-2 tracking-wide">
//                       Message
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows={6}
//                       className="w-full px-4 py-3 bg-earth-cream border border-earth-clay focus:border-earth-brown outline-none transition-colors text-earth-charcoal resize-none"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-earth-charcoal text-earth-cream py-4 hover:bg-earth-brown transition-colors duration-300 tracking-wider flex items-center justify-center gap-2 group"
//                   >
//                     <span>Send Message</span>
//                     <Send size={18} className="group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 </form>
//               )}
//             </div>
//           </FadeIn>
//         </div>
//       </section>

//       <section className="py-24 px-6 lg:px-12 bg-earth-charcoal">
//         <FadeIn>
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="font-serif text-4xl md:text-5xl text-earth-cream mb-8">
//               Ready to Create Something Extraordinary?
//             </h2>
//             <p className="text-earth-beige text-lg leading-relaxed">
//               We look forward to hearing from you and exploring the possibilities together.
//             </p>
//           </div>
//         </FadeIn>
//       </section>
//     </div>
//   );
// }


import { useState, FormEvent } from 'react';
import FadeIn from '../components/FadeIn';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <section className="py-16 px-6 lg:px-12 bg-earth-cream">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-6xl text-earth-charcoal mb-6">
              Let's Connect
            </h1>
            <p className="text-earth-stone text-lg max-w-2xl">
              Every great project begins with a conversation. Share your vision with us.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12 bg-earth-cream">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <FadeIn>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-earth-charcoal mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-earth-beige flex items-center justify-center">
                    <Mail size={24} className="text-earth-brown" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-earth-charcoal mb-2">Email</h3>
                    <p className="text-earth-stone">hello@cosmosmedia.studio</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-earth-beige flex items-center justify-center">
                    <MapPin size={24} className="text-earth-brown" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-earth-charcoal mb-2">Location</h3>
                    <p className="text-earth-stone">Working remotely,<br />Creating globally</p>
                  </div>
                </div>
              </div>

              <div className="bg-earth-beige p-8">
                <h3 className="font-serif text-2xl text-earth-charcoal mb-4">
                  Project Inquiries
                </h3>
                <p className="text-earth-stone leading-relaxed mb-4">
                  We work with brands, organizations, and individuals who value thoughtful, intentional creative work.
                </p>
                <p className="text-earth-stone leading-relaxed">
                  Whether you have a fully formed vision or just the seed of an idea, we're here to listen and collaborate.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-earth-beige p-8 lg:p-12">
              <h2 className="font-serif text-3xl text-earth-charcoal mb-8">
                Send a Message
              </h2>

              {isSubmitted ? (
                <div className="py-16 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-earth-clay rounded-full mb-6">
                    <Send size={32} className="text-earth-charcoal" />
                  </div>
                  <h3 className="font-serif text-2xl text-earth-charcoal mb-4">
                    Thank You
                  </h3>
                  <p className="text-earth-stone">
                    We've received your message and will respond soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-earth-charcoal mb-2 tracking-wide">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-earth-cream border border-earth-clay focus:border-earth-brown outline-none transition-colors text-earth-charcoal"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-earth-charcoal mb-2 tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-earth-cream border border-earth-clay focus:border-earth-brown outline-none transition-colors text-earth-charcoal"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-earth-charcoal mb-2 tracking-wide">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-earth-cream border border-earth-clay focus:border-earth-brown outline-none transition-colors text-earth-charcoal"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-earth-charcoal mb-2 tracking-wide">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-earth-cream border border-earth-clay focus:border-earth-brown outline-none transition-colors text-earth-charcoal resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-earth-charcoal text-earth-cream py-4 hover:bg-earth-brown transition-colors duration-300 tracking-wider flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-earth-charcoal">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-earth-cream mb-8">
              Ready to Create Something Extraordinary?
            </h2>
            <p className="text-earth-beige text-lg leading-relaxed">
              We look forward to hearing from you and exploring the possibilities together.
            </p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}