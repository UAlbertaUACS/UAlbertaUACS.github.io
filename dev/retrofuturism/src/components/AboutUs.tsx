export function AboutUs() {
  const executives = [
    {
      id: 1,
      name: 'Alex Chen',
      position: 'President',
      bio: 'Fourth-year CS student passionate about AI and machine learning. Led multiple hackathon teams to victory and loves teaching others to code. When not debugging, you can find me rock climbing or experimenting with new coffee brewing methods.',
      image: 'https://images.unsplash.com/photo-1600178572204-6ac8886aae63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY2MTM3NzM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'pink'
    },
    {
      id: 2,
      name: 'Jordan Martinez',
      position: 'Vice President',
      bio: 'Third-year specializing in cybersecurity and ethical hacking. Former intern at a Fortune 500 tech company. Dedicated to making tech more accessible and inclusive. Enjoys gaming and building mechanical keyboards.',
      image: 'https://images.unsplash.com/photo-1758639842445-b58f639119d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2NjEwMTIyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'cyan'
    },
    {
      id: 3,
      name: 'Sam Patel',
      position: 'Events Coordinator',
      bio: 'Third-year developer with a knack for creating memorable experiences. Organized over 20 tech events and workshops. Enthusiastic about web development and UX design. Amateur photographer and bubble tea connoisseur.',
      image: 'https://images.unsplash.com/photo-1594686900103-3c9698dbb31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudCUyMHNtaWxlfGVufDF8fHx8MTc2NjE3ODc1MXww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'purple'
    },
    {
      id: 4,
      name: 'Riley Thompson',
      position: 'Treasurer',
      bio: 'Second-year CS student with a minor in Business. Manages club finances and sponsorship relationships. Passionate about fintech and blockchain technology. Plays guitar in a campus band and loves board games.',
      image: 'https://images.unsplash.com/photo-1684560208024-929ab9295d4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudCUyMGNhc3VhbHxlbnwxfHx8fDE3NjYxNjk2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'green'
    },
    {
      id: 5,
      name: 'Morgan Kim',
      position: 'Communications Lead',
      bio: 'Fourth-year focusing on Human-Computer Interaction. Runs all our social media and creates engaging content. Advocates for better accessibility in tech. Avid reader of sci-fi novels and aspiring game developer.',
      image: 'https://images.unsplash.com/photo-1633092229537-5d491c2b414d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NjE3ODc1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'yellow'
    },
    {
      id: 6,
      name: 'Casey Rodriguez',
      position: 'Technical Director',
      bio: 'Third-year full-stack developer maintaining our website and digital infrastructure. Open source contributor and hackathon regular. Passionate about clean code and developer tools. Enjoys hiking and astrophotography.',
      image: 'https://images.unsplash.com/photo-1659080927204-de39f5fdfb02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudCUyMGhlYWRzaG90fGVufDF8fHx8MTc2NjE3ODc1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'orange'
    }
  ];

  const colorMap = {
    pink: {
      border: 'border-primary',
      text: 'text-primary',
      bg: 'bg-primary'
    },
    cyan: {
      border: 'border-secondary',
      text: 'text-secondary',
      bg: 'bg-secondary'
    },
    purple: {
      border: 'border-accent',
      text: 'text-accent',
      bg: 'bg-accent'
    },
    green: {
      border: 'border-green-400',
      text: 'text-green-400',
      bg: 'bg-green-400'
    },
    yellow: {
      border: 'border-yellow-400',
      text: 'text-yellow-400',
      bg: 'bg-yellow-400'
    },
    orange: {
      border: 'border-orange-400',
      text: 'text-orange-400',
      bg: 'bg-orange-400'
    }
  };

  return (
    <div className="min-h-screen relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 mt-8 text-center relative">
          <div className="inline-block">
            <h1 className="text-5xl md:text-7xl font-bold italic tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-primary via-white to-secondary drop-shadow-[4px_4px_0_var(--color-secondary)]"
              style={{ fontFamily: '"Arial Black", sans-serif', transform: 'skew(-10deg)' }}>
              EXEC_BOARD
            </h1>
            <div className="w-full h-1 bg-[linear-gradient(90deg,transparent,var(--color-primary),var(--color-accent),var(--color-secondary),transparent)] opacity-100"></div>
          </div>
          <p className="mt-8 text-lg font-bold tracking-[0.2em] text-cyan-300 uppercase">
             // MEET_THE_ARCHITECTS //
          </p>
        </div>

        {/* Executive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {executives.map((exec) => {
            const colors = colorMap[exec.color as keyof typeof colorMap];

            return (
              <div
                key={exec.id}
                className={`group relative bg-black/60 backdrop-blur-md border-2 ${colors.border} p-8 hover:-translate-y-2 transition-all duration-300 shadow-[8px_8px_0_rgba(255,113,206,0.2)] hover:shadow-[12px_12px_0_rgba(1,205,254,0.4)]`}
              >
                {/* Decorative corners */}
                <div className={`absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 ${colors.border} -mt-2 -mr-2 transition-all group-hover:-mt-3 group-hover:-mr-3`} />
                <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 ${colors.border} -mb-2 -ml-2 transition-all group-hover:-mb-3 group-hover:-ml-3`} />

                <div className="flex flex-col sm:flex-row gap-8 items-start">
                  {/* Image */}
                  <div className="relative flex-shrink-0 mx-auto sm:mx-0">
                    <div className={`w-32 h-32 md:w-40 md:h-40 overflow-hidden border-2 ${colors.border} rounded-full relative z-10 group-hover:scale-105 transition-transform duration-300`}>
                      <img
                        src={exec.image}
                        alt={exec.name}
                        className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    {/* Ring effect */}
                    <div className={`absolute inset-0 rounded-full border-2 ${colors.border} scale-110 opacity-50 animate-pulse`} />
                  </div>

                  {/* Info */}
                  <div className="flex-1 space-y-4 text-center sm:text-left">
                    <div>
                      <h3 className={`text-3xl font-bold ${colors.text} mb-1 uppercase tracking-wider`}>
                        {exec.name}
                      </h3>
                      <div className={`inline-block px-3 py-1 bg-white/10 ${colors.text} text-xs font-bold tracking-[0.1em] rounded-full`}>
                        {exec.position.toUpperCase()}
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-white/20 pl-4">
                      {exec.bio}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
