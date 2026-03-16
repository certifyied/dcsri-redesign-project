
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
    description: `This 1-day industrial visit is designed to give participants a comprehensive introduction to the world of industrial automation, control systems, and career opportunities in the automation industry. The session combines theoretical insights with practical demonstrations, helping participants understand how modern industries operate using advanced automation technologies. Conducted in association with a leading Control panel manufacturer in Kerala and an experienced Panel Manufacturer in Kochi, the program offers direct exposure to real-time industrial environments and manufacturing practices.

During the visit, participants will gain hands-on exposure to key automation components such as Programmable Logic Controllers (PLCs), Human Machine Interfaces (HMIs), Variable Frequency Drives (VFDs), and Servo drives. Live demonstrations will showcase how these systems work together to control, monitor, and optimize industrial processes. Participants will also explore how industrial control panels are designed, assembled, and tested to meet safety and performance standards.

The program highlights real-world applications, industry use cases, and project discussions to help students and professionals connect classroom knowledge with practical industrial requirements. This visit is ideal for building foundational awareness and understanding career possibilities in automation, panel design, and system integration.`,
    badge: 'Program 1',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
  },
  {
    id: 'program-1-week',
    title: '1-Week Practical Training Program on Industrial Automation',
    shortName: 'Internship',
    duration: '1 Week (30 Hours)',
    eligibility: 'Who It\'s For: Students and early-stage professionals',
    description: `This 1-week intensive training program is designed to provide hands-on practical exposure rather than purely theoretical learning. Conducted in collaboration with a leading Control panel manufacturer in Kerala and an experienced Panel Manufacturer in Kochi, Kerala, the program ensures participants gain real-time industrial insights and practical experience in a professional environment.

Participants work directly with real industrial equipment, observe live automation processes, and learn from experienced industry professionals. The training covers PLC basics, control panels, wiring concepts, and industrial safety standards followed in real-world industrial setups. Special focus is given to understanding how control panels are designed, assembled, and integrated within automation systems.

Through live demonstrations and guided practical sessions, learners gain a clear understanding of shop-floor automation implementation, system behavior, and troubleshooting fundamentals. This program is ideal for students and early-stage professionals who aim to build a strong technical foundation in industrial automation and industry best practices.

Mode: Offline (Theory + Practical)
Outcome: Practical exposure to PLC fundamentals, control panel wiring, industrial safety standards, live automation demonstrations, and real-time insights from a Control panel manufacturer in Kerala and Panel Manufacturer in Kochi environment.`,
    badge: 'On-site',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
  },
  {
    id: 'program-2',
    title: '2-Week Advanced Workshop on Industrial Automation & Control',
    shortName: 'Program 2',
    duration: '60 Hours (Intensive – 6 hours/day)',
    eligibility: 'Who It\'s For: Students, graduates, and professionals seeking job-ready skills',
    description: 'This 2-week intensive advanced workshop is designed to provide in-depth knowledge and hands-on experience in industrial automation architecture, wiring logic, and real-time system implementation. Conducted in association with a leading Robotics automation company in Kerala and an experienced Factory automation system integrator in Kerala, the program ensures participants gain direct exposure to industry-grade technologies and real project environments. The workshop bridges the gap between theoretical concepts and practical industrial applications through structured training sessions and live demonstrations. Participants gain strong exposure to automation system architecture, PLCs, HMIs, VFDs, Servo drives, control panel design, industrial communication protocols, and real-time execution of control strategies used in modern manufacturing industries. Following a practice-oriented approach, learners work directly with industrial hardware, develop PLC programs, design HMI interfaces, and understand SCADA integration for monitoring and control. Special emphasis is placed on robotics integration, system coordination, and factory automation workflows to reflect real-world implementation practices followed by a Robotics automation company in Kerala and a Factory automation system integrator in Kerala.',
    badge: 'Program 2',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    id: 'program-3',
    title: '3-Month Professional Job-Oriented Program on Industrial Automation & Control',
    shortName: 'Program 3',
    duration: '3 Months (2 Weeks Classroom + 10 Weeks Project Work)',
    eligibility: 'Who It\'s For: Students and professionals seeking long-term career growth',
    description: 'This 3-month professional job-oriented program is designed to develop industry-ready automation engineers through a structured blend of classroom training and extensive hands-on project work. Recognized for delivering high-quality PLC and SCADA training in Kochi Kerala, the program ensures participants gain both strong theoretical foundations and practical industrial expertise. The course includes 2 weeks of intensive classroom sessions followed by 10 weeks of practical, project-based industrial training. Participants work on live projects involving control panels, PLCs, HMIs, VFDs, Servo drives, industrial robots, SCADA systems, and advanced industrial communication protocols. Through this comprehensive PLC and SCADA training in Kochi Kerala, learners gain real-time exposure to automation architecture, programming logic, and system execution. Special emphasis is placed on system integration, troubleshooting techniques, technical documentation, safety standards, and real-world implementation practices followed in industrial environments. Participants develop confidence in designing, programming, testing, and commissioning automation systems. This program is ideal for students, graduates, and professionals seeking long-term career growth and job-ready automation skills in a competitive industry. Mode: Offline (Theory + Practical). Outcome: Job-ready skills in industrial automation, control panel design, robotics integration, advanced communication systems, and industry-focused PLC and SCADA training in Kochi Kerala.',
    badge: 'Program 3',
    image: 'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2025/05/university_students_working_on_their_group_projects_during_the_training_session/26699933-2-eng-GB/University_students_working_on_their_group_projects_during_the_training_session_pillars.jpg',
  },
  {
    id: 'program-online',
    title: 'Online Training Session (Learn From Anywhere)',
    shortName: 'Online',
    duration: 'Flexible (Live sessions)',
    eligibility: 'Who It\'s For: Students, beginners, and working professionals',
    description: 'Online Training Session (Learn From Anywhere). Can\'t be on site? No problem. Our online sessions are interactive, easy to follow, and focused on helping you truly understand automation concepts right from your own space. Learn PLC fundamentals, HMI overview, VFD basics, and real-world applications. Best Automation Training in Kochi, Kerala.',
    badge: 'Online',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
  },
];
