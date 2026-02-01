import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { AboutUs } from './components/AboutUs';
import { Documents } from './components/Documents';
import { Calendar } from './components/Calendar';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export type Page = 'home' | 'about' | 'documents' | 'calendar' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutUs />;
      case 'documents':
        return <Documents />;
      case 'calendar':
        return <Calendar />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen min-w-screen bg-background text-foreground font-mono selection:bg-primary selection:text-white relative overflow-hidden">
      {/* Global Background Effects */}
      <div className="scanlines"></div>
      <div className="vaporwave-sun"></div>
      <div className="vaporwave-grid-container">
        <div className="vaporwave-grid"></div>
      </div>

      {/* Stars Background */}
      <div className="fixed inset-0 z-[-3]" style={{
        backgroundImage: 'radial-gradient(white 1px, transparent 1px), radial-gradient(white 1px, transparent 1px)',
        backgroundSize: '50px 50px, 100px 100px',
        backgroundPosition: '0 0, 25px 25px',
        opacity: 0.3
      }}></div>

      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="pt-24 relative z-10">
        {renderPage()}
      </main>
    </div>
  );
}
