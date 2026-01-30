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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Open WhatsApp chat
    window.open(
      `https://wa.me/916393468280?text=${encodedMessage}`,
      '_blank'
    );
  };

  return (
    <div>
      {/* HEADER */}
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

      {/* CONTENT */}
      <section className="py-16 px-6 lg:px-12 bg-earth-cream">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <FadeIn>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-earth-charcoal mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-earth-beige flex items-center justify-center">
                    <Mail size={24} className="text-earth-brown" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-earth-charcoal mb-2">
                      WhatsApp
                    </h3>
                    <p className="text-earth-stone">+91 63934 68280</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-earth-beige flex items-center justify-center">
                    <MapPin size={24} className="text-earth-brown" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-earth-charcoal mb-2">
                      Location
                    </h3>
                    <p className="text-earth-stone">
                      Working remotely,<br />Creating globally
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-earth-beige p-8">
                <h3 className="font-serif text-2xl text-earth-charcoal mb-4">
                  Project Inquiries
                </h3>
                <p className="text-earth-stone leading-relaxed mb-4">
                  We work with brands, organizations, and individuals who value
                  thoughtful, intentional creative work.
                </p>
                <p className="text-earth-stone leading-relaxed">
                  Whether you have a fully formed vision or just the seed of an
                  idea, we're here to listen and collaborate.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* FORM */}
          <FadeIn delay={200}>
            <div className="bg-earth-beige p-8 lg:p-12">
              <h2 className="font-serif text-3xl text-earth-charcoal mb-8">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-earth-charcoal mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-earth-cream border border-earth-clay focus:border-earth-brown outline-none"
                  />
                </div>

                <div>
                  <label className="block text-earth-charcoal mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-earth-cream border border-earth-clay focus:border-earth-brown outline-none"
                  />
                </div>

                <div>
                  <label className="block text-earth-charcoal mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-earth-cream border border-earth-clay focus:border-earth-brown outline-none"
                  />
                </div>

                <div>
                  <label className="block text-earth-charcoal mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-earth-cream border border-earth-clay focus:border-earth-brown outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-earth-charcoal text-earth-cream py-4 hover:bg-earth-brown transition-colors duration-300 tracking-wider flex items-center justify-center gap-2 group"
                >
                  <span>Send on WhatsApp</span>
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 bg-earth-charcoal">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-earth-cream mb-8">
              Ready to Create Something Extraordinary?
            </h2>
            <p className="text-earth-beige text-lg">
              We look forward to hearing from you and exploring the possibilities together.
            </p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
