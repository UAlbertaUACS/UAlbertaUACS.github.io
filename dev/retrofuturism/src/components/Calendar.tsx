import { useState } from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: 'workshop' | 'social' | 'meeting' | 'career';
}

export function Calendar() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentMonth] = useState(new Date(2025, 0, 1)); // January 2025

  const events: Event[] = [
    {
      id: 1,
      title: 'Intro to Web Development Workshop',
      date: '2025-01-15',
      time: '18:00',
      location: 'CS Building Room 301',
      description: 'Learn the fundamentals of HTML, CSS, and JavaScript in this hands-on workshop. Perfect for beginners!',
      type: 'workshop'
    },
    {
      id: 2,
      title: 'Career Panel: Software Engineering',
      date: '2025-01-22',
      time: '17:30',
      location: 'Main Auditorium',
      description: 'Industry professionals share insights about software engineering careers, internships, and job hunting tips.',
      type: 'career'
    },
    {
      id: 3,
      title: 'Hackathon Kickoff Meeting',
      date: '2025-01-29',
      time: '19:00',
      location: 'CS Lounge',
      description: 'Planning session for our upcoming 24-hour hackathon. Team formation and brainstorming!',
      type: 'meeting'
    },
    {
      id: 4,
      title: 'Alumni Networking Night',
      date: '2025-02-05',
      time: '18:30',
      location: 'Student Center',
      description: 'Network with UACS alumni working at top tech companies. Bring your resume!',
      type: 'social'
    },
    {
      id: 5,
      title: 'Python Data Science Workshop',
      date: '2025-01-08',
      time: '18:00',
      location: 'CS Building Room 205',
      description: 'Introduction to data analysis with pandas and visualization with matplotlib.',
      type: 'workshop'
    },
    {
      id: 6,
      title: 'Game Night Social',
      date: '2025-01-17',
      time: '19:00',
      location: 'CS Lounge',
      description: 'Unwind with board games, video games, and pizza. All skill levels welcome!',
      type: 'social'
    },
    {
      id: 7,
      title: 'General Meeting',
      date: '2025-01-10',
      time: '18:00',
      location: 'CS Building Room 301',
      description: 'Bi-weekly general meeting to discuss upcoming events and club business.',
      type: 'meeting'
    },
    {
      id: 8,
      title: 'Resume Review Workshop',
      date: '2025-01-24',
      time: '17:00',
      location: 'CS Building Room 205',
      description: 'Get personalized feedback on your tech resume from industry professionals.',
      type: 'career'
    }
  ];

  const typeColors = {
    workshop: { bg: 'bg-primary', text: 'text-primary', border: 'border-primary' },
    social: { bg: 'bg-secondary', text: 'text-secondary', border: 'border-secondary' },
    meeting: { bg: 'bg-accent', text: 'text-accent', border: 'border-accent' },
    career: { bg: 'bg-yellow-400', text: 'text-yellow-400', border: 'border-yellow-400' }
  };

  // Generate calendar days
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const days = getDaysInMonth(currentMonth);
  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const getEventsForDate = (day: number) => {
    const dateStr = `2025-01-${String(day).padStart(2, '0')}`;
    return events.filter(event => event.date === dateStr);
  };

  const upcomingEvents = events
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5);

  const selectedDateEvents = selectedDate ? events.filter(e => e.date === selectedDate) : [];

  return (
    <div className="min-h-screen relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 mt-8 text-center">
          <div className="inline-block relative">
            <h1 className="text-5xl md:text-7xl font-bold italic tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-primary via-white to-secondary drop-shadow-[4px_4px_0_var(--color-secondary)]"
              style={{ fontFamily: '"Arial Black", sans-serif', transform: 'skew(-10deg)' }}>
              SCHEDULE
            </h1>
            <div className="h-1 w-full bg-[linear-gradient(90deg,transparent,var(--color-primary),var(--color-accent),var(--color-secondary),transparent)]" />
          </div>
          <p className="mt-8 text-lg font-bold tracking-[0.2em] text-cyan-300 uppercase">
            // Time_Coordinates: JAN.2025 //
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Upcoming Events List */}
          <div className="lg:col-span-1">
            <div className="bg-black/60 backdrop-blur-md border-2 border-primary p-6 sticky top-28 retro-shadow">
              <h2 className="text-2xl text-white font-bold mb-6 flex items-center border-b-2 border-primary/50 pb-4">
                <span className="text-accent mr-3 animate-pulse">►</span>
                IMMINENT_EVENTS
              </h2>

              <div className="space-y-4">
                {upcomingEvents.map((event) => {
                  const colors = typeColors[event.type];
                  return (
                    <div
                      key={event.id}
                      className={`relative pl-4 border-l-4 ${colors.border} hover:bg-white/5 p-3 transition-colors cursor-pointer group`}
                    >
                      <div className={`text-[10px] uppercase font-bold tracking-wider ${colors.text} mb-1 flex items-center gap-2`}>
                        {event.type}
                        <div className={`h-[1px] flex-grow ${colors.bg} opacity-50`}></div>
                      </div>
                      <h4 className="text-white font-bold mb-1 group-hover:text-primary transition-colors leading-tight">
                        {event.title}
                      </h4>
                      <div className="text-xs text-gray-400 font-mono">
                        {event.date} @ {event.time}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="mt-8 pt-6 border-t-2 border-white/10">
                <h3 className="text-xs text-gray-500 uppercase tracking-widest mb-3">Filter Keys</h3>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(typeColors).map(([type, colors]) => (
                    <div key={type} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${colors.bg} shadow-[0_0_8px_currentColor]`} />
                      <span className="text-xs text-gray-300 uppercase">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="lg:col-span-2">
            <div className="bg-black/60 backdrop-blur-md border-2 border-secondary p-8 retro-shadow relative">
              {/* Decorative Header Bar */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-purple-500 to-secondary" />

              {/* Week Day Headers */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {weekDays.map((day) => (
                  <div
                    key={day}
                    className="text-center py-2 text-sm font-bold text-secondary tracking-widest"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-2">
                {days.map((day, index) => {
                  if (day === null) {
                    return <div key={`empty-${index}`} className="aspect-square bg-white/5 opacity-50" />;
                  }

                  const dateStr = `2025-01-${String(day).padStart(2, '0')}`;
                  const dayEvents = getEventsForDate(day);
                  const isSelected = selectedDate === dateStr;

                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDate(isSelected ? null : dateStr)}
                      className={`aspect-square relative transition-all duration-300 group overflow-hidden border-2 ${isSelected
                        ? 'border-white bg-secondary/20 shadow-[0_0_15px_rgba(1,205,254,0.4)] z-10 scale-110'
                        : 'border-white/10 hover:border-primary hover:bg-white/5'
                        }`}
                    >
                      <div className={`absolute top-2 left-2 text-lg font-bold ${isSelected ? 'text-white' : 'text-gray-500 group-hover:text-primary'
                        }`}>
                        {day}
                      </div>

                      <div className="absolute bottom-2 right-2 flex gap-1 flex-wrap justify-end max-w-[80%]">
                        {dayEvents.map((event) => {
                          const colors = typeColors[event.type];
                          return (
                            <div
                              key={event.id}
                              className={`w-2 h-2 ${colors.bg} rounded-sm shadow-[0_0_5px_currentColor]`}
                            />
                          );
                        })}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Date Details */}
              {selectedDate && selectedDateEvents.length > 0 && (
                <div className="mt-8 pt-8 border-t-2 border-secondary/30 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-xl text-white font-bold mb-6 flex items-center">
                    <span className="text-secondary mr-2">O</span>
                    LOGS_FOR_DATE: <span className="text-secondary ml-2 font-mono">{selectedDate}</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedDateEvents.map((event) => {
                      const colors = typeColors[event.type];
                      return (
                        <div
                          key={event.id}
                          className={`bg-black/40 border-l-4 ${colors.border} p-4 hover:bg-white/5 transition-colors`}
                        >
                          <div className={`text-[10px] font-bold uppercase ${colors.text} mb-2`}>
                            {event.type}
                          </div>
                          <h4 className="text-lg font-bold text-white mb-2">
                            {event.title}
                          </h4>
                          <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                            {event.description}
                          </p>

                          <div className="flex justify-between items-center text-xs font-mono text-gray-500">
                            <span className="flex items-center gap-1">🕒 {event.time}</span>
                            <span className="flex items-center gap-1">📍 {event.location}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
