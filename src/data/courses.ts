
export interface Course {
  id: string;
  title: string;
  shortName: string;
  duration: string;
  eligibility: string;
  description: string;
  image?: string;
  badge?: string;
  prospectusPdf?: string;
}

export const courses: Course[] = [
  {
    id: 'program-1',
    title: 'One-Day Industry Exposure (IV)',
    shortName: 'Program 1',
    duration: '1 Day',
    eligibility: 'Best For: Students and professionals seeking foundational awareness',
    description: 'This 1-day industrial visit is designed to give participants a comprehensive introduction to the world of industrial automation, control systems, and career opportunities in the automation industry. The session combines theoretical insights with practical demonstrations, helping participants understand how modern industries operate using automation technologies. During the visit, participants will gain hands-on exposure to key automation components such as Programmable Logic Controllers (PLCs), Human Machine Interfaces (HMIs), Variable Frequency Drives (VFDs), and Servo drives. Live demonstrations will showcase how these systems work together to control, monitor, and optimize industrial processes. The program also highlights real-world applications, industry use cases, and project discussions to help students and professionals connect classroom knowledge with practical industrial requirements. This visit is ideal for building foundational awareness and understanding career possibilities in automation. Outcome: Enhanced understanding of automation technologies, system integration, and industry-relevant skills.',
    badge: 'Program 1',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
  },
  {
    id: 'program-1-week',
    title: '1-Week Practical Training Program on Industrial Automation',
    shortName: 'Internship',
    duration: '1 Week (30 Hours)',
    eligibility: 'Who It\'s For: Students and early-stage professionals',
    description: 'This 1-week intensive training program is designed to offer hands-on practical exposure rather than purely theoretical learning. Participants work directly with real industrial equipment, observe live automation processes, and gain insights from experienced industry professionals. The program covers PLC basics, control panels, wiring concepts, and industrial safety standards followed in real-world environments. Live demonstrations and guided sessions help learners understand shop-floor automation implementation and system behavior. Ideal for students and early-stage professionals aiming to build a strong foundation in industrial automation and industry practices. Mode: Offline (Theory + Practical). Outcome: Practical exposure to PLC basics, control panel wiring, industrial safety, and live automation demonstrations.',
    badge: 'On-site',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
  },
  {
    id: 'program-2',
    title: '2-Week Advanced Workshop on Industrial Automation & Control',
    shortName: 'Program 2',
    duration: '60 Hours (Intensive – 6 hours/day)',
    eligibility: 'Who It\'s For: Students, graduates, and professionals seeking job-ready skills',
    description: 'This 2-week intensive advanced workshop is designed to provide in-depth knowledge and hands-on experience in industrial automation architecture, wiring logic, and real-time system implementation. The program bridges the gap between theoretical concepts and practical industrial applications through structured training and live demonstrations. Participants gain strong exposure to automation system architecture, PLCs, HMIs, VFDs, Servo drives, control panel design, industrial communication, and real-time execution of control strategies. The workshop follows a practice-oriented approach, allowing learners to work directly with industrial hardware, PLC programs, HMI design, and SCADA integration. Ideal for students, graduates, and professionals seeking job-ready skills and deeper technical confidence in industrial automation. Mode: Offline (Theory + Practical). Outcome: Strong practical exposure to architecture design, wiring logic, and real-time automation implementation.',
    badge: 'Program 2',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    id: 'program-3',
    title: '3-Month Professional Job-Oriented Program on Industrial Automation & Control',
    shortName: 'Program 3',
    duration: '3 Months (2 Weeks Classroom + 10 Weeks Project Work)',
    eligibility: 'Who It\'s For: Students and professionals seeking long-term career growth',
    description: 'This 3-month professional job-oriented program is designed to develop industry-ready automation engineers through a structured blend of classroom training and extensive hands-on project work. The program includes 2 weeks of intensive classroom sessions followed by 10 weeks of practical, project-based industrial training. Participants work on live projects involving control panels, PLCs, HMIs, VFDs, Servo drives, industrial robots, SCADA systems, and advanced communication protocols. Emphasis is placed on system integration, troubleshooting, documentation, and real-world execution practices. Ideal for students and professionals seeking long-term career growth and job-ready automation skills. Mode: Offline (Theory + Practical). Outcome: Job-ready skills in industrial automation, control panels, robotics, and advanced communication systems.',
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
