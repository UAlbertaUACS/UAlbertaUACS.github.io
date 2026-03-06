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
 {
  id: 1,
  title: 'UAPC',
  date: '2026-03-07',
  time: '10:00',
  location: 'DICE 8th Floor',
  description: "UAPC is an annual competitive programming event where teams of 1–3 students tackle algorithmic challenges in a fast-paced, problem-solving environment.\n\nWhether you're a seasoned competitor or just curious about competitive programming, this is a great opportunity to challenge yourself, work with friends, connect with the computing science community and compete for prizes.",
  type: 'workshop'
 }
];
