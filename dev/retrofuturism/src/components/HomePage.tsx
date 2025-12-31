import type { Page } from '../App';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const upcomingEvents = [
    { id: 1, title: 'Intro to Web Development Workshop', date: '2025-01-15', time: '18:00', location: 'CS Building Room 301' },
    { id: 2, title: 'Career Panel: Software Engineering', date: '2025-01-22', time: '17:30', location: 'Main Auditorium' },
    { id: 3, title: 'Hackathon Kickoff Meeting', date: '2025-01-29', time: '19:00', location: 'CS Lounge' },
    { id: 4, title: 'Alumni Networking Night', date: '2025-02-05', time: '18:30', location: 'Student Center' },
  ];

  return (
    <div className="min-h-screen relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">

        {/* Header / Hero */}
        <div className="text-center mb-12 mt-8 relative">
          <div className="inline-block relative">
            <h1 className="text-5xl md:text-7xl font-bold italic tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-primary via-white to-secondary drop-shadow-[4px_4px_0_var(--color-secondary)]"
              style={{
                fontFamily: '"Arial Black", sans-serif',
                transform: 'skew(-10deg)'
              }}>
              UACS
            </h1>
            <div className="w-full h-1 bg-[linear-gradient(90deg,transparent,var(--color-primary),var(--color-accent),var(--color-secondary),transparent)] opacity-100"></div>
          </div>
          <br />
          <div className="mt-4 inline-block bg-black/40 backdrop-blur-sm p-4 border-2 border-primary retro-shadow transform -skew-x-12">
            <p className="text-xl md:text-2xl text-cyan-300 font-bold tracking-widest text-glow transform skew-x-12">
              UNDERGRADUATE ASSOCIATION OF <br className="hidden md:block" /> COMPUTING SCIENCE
            </p>
          </div>

          <div className="mt-12 flex justify-center space-x-2">
            <span className="text-primary text-2xl animate-pulse">★</span>
            <span className="text-secondary text-2xl animate-pulse delay-100">★</span>
            <span className="text-accent text-2xl animate-pulse delay-200">★</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* About Section */}
          <div className="bg-black/60 border-2 border-secondary p-6 relative backdrop-blur-md retro-shadow group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute -top-3 -left-3 bg-secondary text-black font-bold px-2 text-sm">
              SYSTEM_INFO
            </div>
            <h2 className="text-3xl text-primary mb-6 flex items-center gap-2 border-b-2 border-primary/50 pb-2">
              <span className="text-accent">{'>'}</span> WHAT_IS_UACS
            </h2>

            <div className="space-y-4 text-lg leading-relaxed text-gray-200">
              <p>
                <span className="text-primary font-bold">LOADING...</span> The Undergraduate Association of Computing Science <span className="text-accent">(UACS)</span> is a student group at the University of Alberta dedicated to representing our fellow computing science students. We're comprised of 8 elected executive council members that keep the group running on a day-to-day basis.
              </p>
              <p>
                UACS is one of the oldest student groups on campus, having been <span className="text-accent">founded in 1978</span> when the first-ever UACS President was elected. Since then, we've dedicated our time to representing student interests at select faculty meetings, giving students a glimpse of life after graduation with our Doughnut and Coffee Society events, and putting smiles on our classmates' faces with fundraising events like <span className="text-accent">Buck-A-Burger</span> and <span className="text-accent">LAN parties</span>!
              </p>
              <p>
                We have on office at L1-339 in CCIS if you'd ever like to come visit us in our little office prison. We also have a lounge space with benches, tables, and TVs in <span className="text-accent">UCOMM 1-130</span>! There are also lockers in this room available to rent for the semester if you need somewhere to hunker down during the day. Come stop by and say hello or <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="text-primary hover:underline">contact us</a> to learn more!
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-primary hover:bg-primary/80 text-black font-bold py-2 px-6 border-2 border-white retro-shadow transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                JOIN_NETWORK
              </button>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-black/60 border-2 border-accent p-6 relative backdrop-blur-md retro-shadow group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute -top-3 -right-3 bg-accent text-white font-bold px-2 text-sm transform">
              UPDT_LOG
            </div>
            <h2 className="text-3xl text-secondary mb-6 flex items-center gap-2 border-b-2 border-secondary/50 pb-2">
              <span className="text-primary">{'>'}</span> EVENTS
            </h2>

            <div className="space-y-6">
              {upcomingEvents.map((event, _index) => (
                <div key={event.id} className="relative pl-6 border-l-2 border-white/20 hover:border-primary transition-colors cursor-default group/item">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-white group-hover/item:bg-primary group-hover/item:border-primary transition-colors"></div>

                  <h3 className="text-xl text-white font-bold group-hover/item:text-primary transition-colors">{event.title}</h3>
                  <div className="text-sm text-cyan-300 font-mono mt-1 space-x-4">
                    <span>{event.date}</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="text-sm text-accent mt-1 uppercase tracking-wider">
                    @{event.location}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button
                onClick={() => onNavigate('calendar')}
                className="text-white hover:text-primary underline decoration-2 underline-offset-4 decoration-wavy decoration-accent transition-all"
              >
                VIEW_ALL_LOGS
              </button>
            </div>
          </div>

        </div>

        <div className="mt-24 text-center">
          <p className="text-sm text-white/50 uppercase tracking-[0.5em]">
            Est. 2025 // Sector 7
          </p>
        </div>
      </div>
    </div>
  );
}
