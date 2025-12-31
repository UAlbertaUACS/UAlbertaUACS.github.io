import type { Page } from '../App';

interface NavigationProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const navItems: { id: Page; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'THE_TEAM' },
    { id: 'documents', label: 'DOCUMENTS' },
    { id: 'calendar', label: 'CALENDAR' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b-2 border-primary shadow-[0_0_20px_rgba(255,113,206,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary via-purple-500 to-secondary rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-primary/50">
              <span className="text-white text-xl font-bold">UACS</span>
            </div>
            <div className="hidden sm:block text-left">
              <div className="text-white font-bold tracking-wider text-sm">COMPUTING_SCIENCE</div>
              <div className="text-[10px] text-primary tracking-[0.2em] uppercase">Undergrad_Assoc</div>
            </div>
          </button>

          {/* Navigation Items */}
          <div className="flex space-x-1 overflow-x-auto pb-1 md:pb-0 hide-scrollbar">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-4 py-2 transition-all duration-300 relative group whitespace-nowrap ${currentPage === item.id
                  ? 'text-primary'
                  : 'text-gray-400 hover:text-white'
                  }`}
              >
                <span className={`relative z-10 text-sm tracking-widest font-bold uppercase ${currentPage === item.id ? 'text-glow' : ''}`}>
                  {currentPage === item.id ? '> ' : ''}{item.label}
                </span>

                {/* Active Indicator */}
                {currentPage === item.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-secondary to-primary animate-pulse" />
                )}

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-md" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
