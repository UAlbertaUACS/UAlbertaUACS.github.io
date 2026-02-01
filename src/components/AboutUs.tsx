export function AboutUs() {
  const executives = [
    {
      id: 1,
      name: 'Armaan Singh',
      position: 'President',
      bio: '',
      image: '/img/armaan.jpg',
      color: 'pink'
    },
    {
      id: 2,
      name: 'Layne Pitman',
      position: 'VP Administration',
      bio: "Hello UACS! I'm Layne Pitman, and I wanna say thank you to everyone who voted for me, I appreciate every single vote that helped me get here. I'm super excited to get working with everyone to bring UACS back to an accessible and functional student group! I swear I'm gonna change the website, but it'll take some time, so if you have any ideas for things you'd like to see in the meantime, absolutely let me and the rest of the execs know!",
      image: '/img/layne.jpg',
      color: 'cyan'
    },
    {
      id: 3,
      name: 'Tommy Nguyen',
      position: 'VP Internal',
      bio: "Tommy Nguyen, VP Internal UACS. Turns \"we’ll figure it out later\" into actual events. Computer Science (AI). Still figuring it out.",
      image: '/img/tommy.JPG',
      color: 'purple'
    },
    {
      id: 4,
      name: 'Pragati Puri',
      position: 'VP Finance',
      bio: "Pragati is a second year Computing Science student at University of Alberta. In her field, she enjoys tackling challenging coding problems, developing innovative solutions, and building meaningful connections with the people who share her interests. In her free time, you can find her reading novels or writing diary entries. Something interesting about Pragati is that she’s always up for a coffee chat to exchange thoughts with fellow tech enthusiasts.",
      image: '/img/pragati.jpeg',
      color: 'green'
    },
    {
      id: 5,
      name: 'Ratidzo Mushangwe',
      position: 'VP Social',
      bio: '',
      image: '/img/ratidzo.jpg',
      color: 'yellow'
    },
    {
      id: 6,
      name: 'Tanisha Dhull',
      position: 'Senior Representative',
      bio: '',
      image: '/img/tanisha.jpg',
      color: 'orange'
    },
    {
      id: 7,
      name: 'Jotsaroop Singh',
      position: 'Junior Representative',
      bio: "Hi, I’m Jotsaroop Singh, a second-year Computer Science Honours student. As the Junior Representative for UACS, I’m excited to connect with first- and second year students, help you feel at home in the club, and support you as you get involved. I’m looking forward to what we’ll achieve together!",
      image: '/img/jotsaroop.jpg',
      color: 'pink'
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
