export interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const facilities: Facility[] = [
  {
    id: 'library',
    title: 'Library',
    description: 'A well-stocked library with over 10,000 books, journals, and digital resources for comprehensive academic research.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&q=80',
  },
  {
    id: 'computer-lab',
    title: 'Computer Lab',
    description: 'State-of-the-art computer labs equipped with the latest hardware and software for practical learning.',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&q=80',
  },
  {
    id: 'classrooms',
    title: 'Smart Classrooms',
    description: 'Modern air-conditioned classrooms with audio-visual aids and interactive teaching facilities.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80',
  },
  {
    id: 'hostel',
    title: 'Hostel',
    description: 'Comfortable hostel accommodation for boys and girls with all modern amenities and 24/7 security.',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80',
  },
  {
    id: 'transport',
    title: 'Transport',
    description: 'Fleet of buses covering major routes ensuring safe and comfortable commute for students.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80',
  },
  {
    id: 'cafeteria',
    title: 'Cafeteria',
    description: 'Hygienic cafeteria serving nutritious meals and snacks at affordable prices throughout the day.',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80',
  },
  {
    id: 'sports',
    title: 'Sports Facilities',
    description: 'Indoor and outdoor sports facilities including basketball, cricket, volleyball, and fitness center.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80',
  },
  {
    id: 'student-support',
    title: 'Student Support Services',
    description: 'Dedicated counseling cell, placement assistance, and career guidance services for students.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
  },
];
