// Import all images from c folder
import img1 from '@/assets/c/c1.jpeg';
import img2 from '@/assets/c/c2.jpeg';
import img3 from '@/assets/c/c3.jpeg';
import img4 from '@/assets/c/c4.jpeg';
import img5 from '@/assets/c/c5.jpeg';
import img6 from '@/assets/c/c6.jpeg';
import img7 from '@/assets/c/c7.jpeg';
import img8 from '@/assets/c/c8.jpeg';
import img9 from '@/assets/c/c9.jpeg';
import img10 from '@/assets/c/c10.jpeg';
import img11 from '@/assets/c/c11.jpeg';
import img12 from '@/assets/c/c12.jpeg';
import img13 from '@/assets/c/c13.jpeg';
import img14 from '@/assets/c/c14.jpeg';
import img16 from '@/assets/c/c15.jpeg';
import img17 from '@/assets/c/c16.jpeg';
import img18 from '@/assets/c/c17.jpeg';
import img19 from '@/assets/c/c18.jpeg';

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: img1,
    alt: 'Central Processor Chip Circuit Board Technology',
    category: 'Campus',
  },
  {
    src: img2,
    alt: 'Checking Current Laptop Circuit Board',
    category: 'Academics',
  },
  {
    src: img3,
    alt: 'Electronics Technicians Team Working on Computer Parts',
    category: 'Facilities',
  },
  {
    src: img4,
    alt: 'Engaging Hands-On Robotics Workshop for Young Students',
    category: 'Activities',
  },
  {
    src: img5,
    alt: 'Factory Workers in Lab Suits Producing Electronic Components',
    category: 'Facilities',
  },
  {
    src: img6,
    alt: 'Father and Sons Making Robot Together',
    category: 'Activities',
  },
  {
    src: img7,
    alt: 'Glowing Neon AI Chip Technology Background',
    category: 'Campus',
  },
  {
    src: img8,
    alt: 'Group of Young People Doing Experiments in Robotics Laboratory',
    category: 'Academics',
  },
  {
    src: img9,
    alt: 'Group of Young Teens Celebrating World Youth Day',
    category: 'Events',
  },
  {
    src: img10,
    alt: 'Metal Worker Using Machinery in Industrial Workshop',
    category: 'Facilities',
  },
  {
    src: img11,
    alt: 'Modern Laboratory Interior',
    category: 'Campus',
  },
  {
    src: img12,
    alt: 'Modern Laboratory Interior with Advanced Equipment',
    category: 'Campus',
  },
  {
    src: img13,
    alt: 'Portrait of Female Engineer Working',
    category: 'Academics',
  },
  {
    src: img14,
    alt: 'Portrait of Group of Engineers and Corporate Managers at Factory',
    category: 'Events',
  },
  {
    src: img16,
    alt: 'Portrait of Male Engineer Working in Field',
    category: 'Academics',
  },
  {
    src: img17,
    alt: 'Production of Electronic Components in High-Tech Factory',
    category: 'Facilities',
  },
  {
    src: img18,
    alt: 'Robotic Arm Placing Chip on Circuit Board',
    category: 'Campus',
  },
  {
    src: img19,
    alt: 'Robotics Lab Students Assembling Electronic Circuits',
    category: 'Academics',
  },
];
