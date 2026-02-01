export interface Event {
  id: number;
  title: string;
  date: string; // Format: YYYY-MM-DD
  time: string; // Format: HH:MM
  location: string;
  description: string;
  type: 'workshop' | 'social' | 'meeting' | 'career';
}

export const events: Event[] = [
  // TEMPLATE - Copy and uncomment to add a new event
  /*
  {
    id: 1, // Unique ID
    title: 'Event Title',
    date: '2025-01-01',
    time: '18:00',
    location: 'Location',
    description: 'Event description goes here.',
    type: 'meeting' // Options: 'workshop', 'social', 'meeting', 'career'
  },
  */
];
