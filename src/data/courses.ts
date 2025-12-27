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
    id: 'program-2',
    title: '2-Week Advanced Workshop',
    shortName: 'Program 2',
    duration: '60 Hours (Intensive)',
    eligibility: 'Focus: In-depth PLC programming, VFD tuning, and HMI integration',
    description: 'Architecture, wiring logic, and real-time implementation. Price: ₹9,499',
    badge: 'Program 2',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    id: 'program-3',
    title: '3-Month Professional Job-Oriented Program',
    shortName: 'Program 3',
    duration: '3 Months',
    eligibility: 'Most Comprehensive Track',
    description: '2 weeks of intensive classroom training + 10 weeks of hands-on project work. Control panels, industrial robots, and advanced communication protocols. Price: ₹38,499',
    badge: 'Program 3',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
  },
];
