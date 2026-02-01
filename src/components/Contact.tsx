import { useState } from 'react';
import type { Page } from '../App';

interface ContactProps {
  onNavigate: (page: Page) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('TRANSMISSION SENT! We will decrypt your message shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 mt-8 text-center">
          <div className="inline-block relative">
            <h1 className="text-5xl md:text-7xl font-bold italic tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-primary via-white to-secondary drop-shadow-[4px_4px_0_var(--color-secondary)]"
              style={{ fontFamily: '"Arial Black", sans-serif', transform: 'skew(-10deg)' }}>
              CONTACT_US
            </h1>
            <div className="h-1 w-full bg-[linear-gradient(90deg,transparent,var(--color-primary),var(--color-accent),var(--color-secondary),transparent)]" />
          </div>
          <p className="mt-8 text-lg font-bold tracking-[0.2em] text-cyan-300 uppercase">
            // ESTABLISH_CONNECTION //
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row flex-auto gap-8">
            <div className="space-y-8 w-full lg:w-1/3">
              {/* Channels */}
              <div className="bg-black/60 backdrop-blur-md border-2 border-white/20 p-8 retro-shadow relative">
                <h2 className="text-2xl text-white font-bold mb-6 flex items-center">
                  <span className="text-primary mr-3 text-3xl">📡</span>
                  CHANNELS
                </h2>

                {/* Social Links */}
                <div className="space-y-6">
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 flex items-center justify-center bg-black border-2 border-secondary text-2xl group-hover:scale-110 transition-transform shadow-[0_0_10px_currentColor] text-secondary">
                      📧
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Email Us</h3>
                      <a href="mailto:execs@uacs.ca" className="text-secondary font-mono font-bold tracking-wider hover:underline">execs@uacs.ca</a>
                    </div>
                  </div>

                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 flex items-center justify-center bg-black border-2 border-pink-500 text-2xl group-hover:scale-110 transition-transform shadow-[0_0_10px_currentColor] text-pink-500">
                      📸
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Instagram Feed</h3>
                      <a href="https://instagram.com/ualbertauacs" target="_blank" rel="noopener noreferrer" className="text-pink-500 font-mono font-bold tracking-wider hover:underline">@ualbertauacs</a>
                    </div>
                  </div>

                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 flex items-center justify-center bg-black border-2 border-accent text-2xl group-hover:scale-110 transition-transform shadow-[0_0_10px_currentColor] text-accent">
                      💬
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Discord Server</h3>
                      <a href="https://discord.gg/rkyYnVsa7a" target="_blank" rel="noopener noreferrer" className="text-accent font-mono font-bold tracking-wider hover:underline">Join here!</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Locations Box */}
              <div className="bg-black/60 backdrop-blur-md border-2 border-primary p-8 retro-shadow relative">
                <h2 className="text-2xl text-white font-bold mb-6 flex items-center">
                  <span className="text-primary mr-3 text-3xl">📍</span>
                  HQ_COORDINATES
                </h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl text-white font-bold">UACS Lounge</h3>
                    <p className="text-cyan-300 font-mono">UCOMM 1-130</p>
                    <p className="text-gray-400 text-sm mt-1">OPEN: Accessible at all times, but UCOMM is subject to it's own hours</p>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className="text-xl text-white font-bold">UACS Office</h3>
                    <p className="text-cyan-300 font-mono">CCIS L1-339</p>
                    <p className="text-gray-400 text-sm mt-1">OPEN: By Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 w-full lg:w-2/3">
              {/* Contact Form */}
              <div className="bg-black/60 backdrop-blur-md border-2 border-purple-500 p-8 retro-shadow relative h-full">
                <div className="absolute top-0 right-0 p-2 text-xs font-mono text-purple-500 opacity-50">
                  secure_transmission_v2.0
                </div>

                <h2 className="text-2xl text-white font-bold mb-6 border-b-2 border-purple-500/30 pb-4">
                  SEND_MESSAGE
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-secondary uppercase tracking-wider">
                            // Your_Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border-2 border-white/20 p-3 text-white focus:border-primary focus:outline-none focus:shadow-[0_0_15px_rgba(255,113,206,0.5)] transition-all font-mono"
                      placeholder="ENTER_NAME"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-secondary uppercase tracking-wider">
                            // Your_Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border-2 border-white/20 p-3 text-white focus:border-primary focus:outline-none focus:shadow-[0_0_15px_rgba(255,113,206,0.5)] transition-all font-mono"
                      placeholder="ENTER_EMAIL"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold text-secondary uppercase tracking-wider">
                            // Subject_Line
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border-2 border-white/20 p-3 text-white focus:border-primary focus:outline-none focus:shadow-[0_0_15px_rgba(255,113,206,0.5)] transition-all font-mono"
                      placeholder="ENTER_SUBJECT"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-secondary uppercase tracking-wider">
                            // Message_Body
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-black/50 border-2 border-white/20 p-3 text-white focus:border-primary focus:outline-none focus:shadow-[0_0_15px_rgba(255,113,206,0.5)] transition-all font-mono resize-none"
                      placeholder="TYPE_YOUR_MESSAGE_HERE..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-purple-600 text-white font-bold py-4 uppercase tracking-[0.2em] hover:from-white hover:to-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,113,206,0.4)] border-2 border-transparent hover:border-primary"
                  >
                    INITIALIZE_UPLOAD
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-black/60 backdrop-blur-md border-2 border-accent p-8 retro-shadow relative">
            <h2 className="text-2xl text-white font-bold mb-6 flex items-center">
              <span className="text-accent mr-3 text-3xl">?</span>
              F.A.Q.
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-accent font-bold mb-1 uppercase">How do I join UACS?</h3>
                <p className="text-gray-300 text-sm border-l-2 border-accent/30 pl-3">
                  All UACS events and spaces are open to the public. Just show up and have fun! However, official membership of UACS is limited to only CS Undergrads.
                </p>
              </div>

              <div>
                <h3 className="text-accent font-bold mb-1 uppercase">Is there a membership fee?</h3>
                <p className="text-gray-300 text-sm border-l-2 border-accent/30 pl-3">
                  Being a member is completely free! Some special events or workshops may have a small fee for materials and spaces. (This would be disclosed in the signup)
                </p>
              </div>

              <div>
                <h3 className="text-accent font-bold mb-1 uppercase">Can I rent a locker?</h3>
                <p className="text-gray-300 text-sm border-l-2 border-accent/30 pl-3">
                  Affirmative! Check the <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('documents'); }} className="text-primary hover:underline">Documents</a> page for the rental protocol.
                </p>
              </div>

              <div>
                <h3 className="text-accent font-bold mb-1 uppercase">Do I need to be in CS?</h3>
                <p className="text-gray-300 text-sm border-l-2 border-accent/30 pl-3">
                  Negative for most events, but positive for official membership. We try our best to welcome anyone with an interest in computer sciences!
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
