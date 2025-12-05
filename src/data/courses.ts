export interface Course {
  id: string;
  title: string;
  shortName: string;
  duration: string;
  eligibility: string;
  description: string;
  image?: string;
}

export const courses: Course[] = [
  {
    id: 'bcom',
    title: 'Bachelor of Commerce (B.Com)',
    shortName: 'B.Com',
    duration: '3 Years',
    eligibility: '10+2 in any stream',
    description: 'A comprehensive program covering accounting, finance, economics, and business management to prepare students for careers in commerce and industry.',
  },
  {
    id: 'bba',
    title: 'Bachelor of Business Administration (BBA)',
    shortName: 'BBA',
    duration: '3 Years',
    eligibility: '10+2 in any stream',
    description: 'Designed to develop managerial skills and business acumen through practical training and theoretical knowledge in management principles.',
  },
  {
    id: 'bca',
    title: 'Bachelor of Computer Applications (BCA)',
    shortName: 'BCA',
    duration: '3 Years',
    eligibility: '10+2 with Mathematics',
    description: 'A program focused on computer applications, programming, software development, and IT skills for the modern digital workplace.',
  },
  {
    id: 'mcom',
    title: 'Master of Commerce (M.Com)',
    shortName: 'M.Com',
    duration: '2 Years',
    eligibility: 'B.Com or equivalent',
    description: 'An advanced program for deeper understanding of commerce, accounting, and financial management with research opportunities.',
  },
];
