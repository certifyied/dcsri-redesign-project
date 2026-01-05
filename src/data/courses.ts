export interface Course {
  id: string;
  title: string;
  shortName: string;
  duration: string;
  eligibility: string;
  description: string;
  image?: string;
  badge?: string;
}

export const courses: Course[] = [
  {
    id: 'program-1',
    title: 'One-Day Industry Exposure (IV)',
    shortName: 'Program 1',
    duration: '1 Day',
    eligibility: 'Best For: Students seeking real-world industrial insight',
    description: 'Overall exposure to automation, control systems, and career possibilities. See PLCs, HMIs, VFDs, and Servo drives in action. Price: ₹500 per head',
    badge: 'Program 1',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
  },
  {
    id: 'program-1-week',
    title: 'One Week Internship',
    shortName: 'Internship',
    duration: '1 Week',
    eligibility: 'Who It\'s For: Students and freshers who want real-world experience',
    description: 'Designed to give you practical exposure, not just theory. Work with real equipment, observe live processes, and learn directly from industry experts. Learn basics of PLCs, control panels, wiring concepts, industrial safety, and live demonstrations.',
    badge: 'On-site',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
  },
  {
    id: 'program-2',
    title: '2-Week Advanced Workshop',
    shortName: 'Program 2',
    duration: '60 Hours (Intensive)',
    eligibility: 'Focus: In-depth PLC programming, VFD tuning, and HMI integration',
    description: 'Architecture, wiring logic, and real-time implementation.',
    badge: 'Program 2',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    id: 'program-3',
    title: '3-Month Professional Job-Oriented Program',
    shortName: 'Program 3',
    duration: '3 Months',
    eligibility: 'Most Comprehensive Track',
    description: '2 weeks of intensive classroom training + 10 weeks of hands-on project work. Control panels, industrial robots, and advanced communication protocols.',
    badge: 'Program 3',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
  },
  {
    id: 'program-online',
    title: 'Online Training Session (Learn From Anywhere)',
    shortName: 'Online',
    duration: 'Flexible (Live sessions)',
    eligibility: 'Who It\'s For: Students, beginners, and working professionals',
    description: 'Can\'t be on site? No problem. Our online sessions are interactive, easy to follow, and focused on helping you truly understand automation concepts right from your own space. Learn PLC fundamentals, HMI overview, VFD basics, and real-world applications.',
    badge: 'Online',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
  },
];
