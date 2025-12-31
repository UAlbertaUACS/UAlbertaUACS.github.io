import { useState } from 'react';

type DocumentType = 'constitution' | 'notes' | 'locker';

export function Documents() {
  const [selectedDoc, setSelectedDoc] = useState<DocumentType | null>(null);

  const documents = [
    {
      id: 'constitution' as DocumentType,
      title: 'UACS Constitution',
      description: 'Official governing document outlining club structure, roles, and procedures',
      icon: '📜',
      color: 'pink'
    },
    {
      id: 'notes' as DocumentType,
      title: 'Meeting Notes',
      description: 'Archives of past general meetings and executive discussions',
      icon: '📝',
      color: 'cyan'
    },
    {
      id: 'locker' as DocumentType,
      title: 'Locker Rental Form',
      description: 'Application form for renting a locker in the CS building',
      icon: '🔐',
      color: 'purple'
    }
  ];

  const colorMap = {
    pink: {
      border: 'border-primary',
      text: 'text-primary',
      bg: 'bg-primary',
      shadow: 'shadow-[0_0_20px_rgba(255,113,206,0.3)]',
      hover: 'hover:border-primary',
      button: 'hover:bg-primary hover:text-black'
    },
    cyan: {
      border: 'border-secondary',
      text: 'text-secondary',
      bg: 'bg-secondary',
      shadow: 'shadow-[0_0_20px_rgba(1,205,254,0.3)]',
      hover: 'hover:border-secondary',
      button: 'hover:bg-secondary hover:text-black'
    },
    purple: {
      border: 'border-accent',
      text: 'text-accent',
      bg: 'bg-accent',
      shadow: 'shadow-[0_0_20px_rgba(185,103,255,0.3)]',
      hover: 'hover:border-accent',
      button: 'hover:bg-accent hover:text-black'
    }
  };

  const renderDocumentContent = (docType: DocumentType) => {
    switch (docType) {
      case 'constitution':
        return (
          <div className="h-[800px] w-full bg-black/50 border-2 border-primary">
            <object
              data={`${import.meta.env.BASE_URL}Constitution.pdf`}
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="flex flex-col items-center justify-center h-full text-white space-y-4 p-8">
                <p>Unable to display PDF directly.</p>
                <a
                  href={`${import.meta.env.BASE_URL}Constitution.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-black font-bold uppercase tracking-wider hover:bg-white transition-colors"
                >
                  Download Constitution
                </a>
              </div>
            </object>
          </div>
        );

      case 'notes':
        return (
          <div className="text-center py-12">
            <h3 className="text-3xl text-secondary mb-8 text-glow">
              MEETING_ARCHIVES
            </h3>
            <p className="text-white mb-12 max-w-2xl mx-auto">
              Access the complete history of UACS general meetings, executive minutes, and decision logs on our secure drive.
            </p>

            <a
              href="https://drive.google.com/drive/folders/1lPhl51tyQb6oTYFBeTSZt_g92uxIy5xG?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-6 bg-transparent border-4 border-secondary text-secondary text-2xl font-bold uppercase tracking-widest hover:bg-secondary hover:text-black hover:shadow-[0_0_30px_#01cdfe] transition-all transform hover:-translate-y-1"
            >
              ACCESS_DATABASE
            </a>
          </div>
        );

      case 'locker':
        return (
          <div className="text-center py-12">
            <h3 className="text-3xl text-accent mb-8 text-glow">
              LOCKER_RENTAL_SYSTEM
            </h3>
            <p className="text-white mb-12 max-w-2xl mx-auto">
              Secure your physical storage unit in the Computer Science building. Availability is limited. First come, first served.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc6dN-7DmVxUXiQgnz27UxAVtAs3IYfj4L9g3mbV5wFCI0MpA/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-6 bg-transparent border-4 border-accent text-accent text-2xl font-bold uppercase tracking-widest hover:bg-accent hover:text-black hover:shadow-[0_0_30px_#b967ff] transition-all transform hover:-translate-y-1"
            >
              INITIATE_REQUEST
            </a>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 mt-8 text-center">
          <div className="inline-block relative">
            <h1 className="text-5xl md:text-7xl font-bold italic tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-primary via-white to-secondary drop-shadow-[4px_4px_0_var(--color-secondary)]"
              style={{ fontFamily: '"Arial Black", sans-serif', transform: 'skew(-10deg)' }}>
              DATA_ARCHIVE
            </h1>
            <div className="h-1 w-full bg-[linear-gradient(90deg,transparent,var(--color-primary),var(--color-accent),var(--color-secondary),transparent)]" />
          </div>
          <p className="mt-8 text-lg font-bold tracking-[0.2em] text-cyan-300 uppercase">
            // ACCESS_DOCUMENT_REPOSITORY //
          </p>
        </div>

        {/* Document Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {documents.map((doc) => {
            const colors = colorMap[doc.color as keyof typeof colorMap];
            const isSelected = selectedDoc === doc.id;

            return (
              <button
                key={doc.id}
                onClick={() => setSelectedDoc(isSelected ? null : doc.id)}
                className={`group relative bg-black/60 backdrop-blur-md border-2 ${colors.border} p-8 transition-all duration-300 text-left ${isSelected ? `shadow-[0_0_30px_rgba(255,255,255,0.2)] scale-105 z-10 bg-black/80` : 'hover:scale-105 hover:bg-black/70'
                  }`}
              >
                <div className="absolute top-0 right-0 p-2 opacity-50 font-mono text-xs text-white/50">
                  FILE_{String(doc.id).toUpperCase().substring(0, 3)}
                </div>

                <div className="space-y-4">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">{doc.icon}</div>
                  <h3 className={`text-2xl font-bold ${colors.text} group-hover:text-white transition-colors`}>
                    {doc.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-white/20 pl-4 group-hover:border-white/50 transition-colors">
                    {doc.description}
                  </p>

                  <div className={`mt-6 inline-flex items-center text-sm font-bold uppercase tracking-wider ${colors.text} group-hover:underline decoration-2 underline-offset-4`}>
                    {isSelected ? '[- CLOSE_FILE -]' : '[+ OPEN_FILE +]'}
                  </div>
                </div>

                {/* Corner glow */}
                <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${colors.bg} to-transparent opacity-0 group-hover:opacity-10 transition-opacity`} />
              </button>
            );
          })}
        </div>

        {/* Document Content */}
        {selectedDoc && (
          <div className="bg-black/80 border-2 border-white/20 p-8 md:p-12 relative backdrop-blur-xl animate-in shadow-2xl">
            {/* Window controls decoration */}
            <div className="absolute top-0 left-0 w-full h-8 bg-white/10 border-b border-white/10 flex items-center px-4 space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-auto font-mono text-xs text-white/50">Viewing: {selectedDoc.toUpperCase()}</div>
            </div>

            <div className="mt-6">
              {renderDocumentContent(selectedDoc)}
            </div>
          </div>
        )}

        {!selectedDoc && (
          <div className="text-center py-24 opacity-50 animate-pulse">
            <p className="text-white font-mono text-lg">
              {'>'} WAITING_FOR_INPUT...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
