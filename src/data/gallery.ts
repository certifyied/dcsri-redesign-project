// Import all images from web_images folder
import img1 from '@/assets/web_images/central-processor-chip-circuit-board-technology-concept-min.jpg';
import img2 from '@/assets/web_images/checking-current-laptop-circuit-board-min.jpg';
import img3 from '@/assets/web_images/electronics-technicians-team-working-computer-parts-min.jpg';
import img4 from '@/assets/web_images/engaging-hands-robotics-workshop-where-young-students-explore-engineering-concepts-min.jpg';
import img5 from '@/assets/web_images/factory-workers-white-lab-suits-face-masks-sitting-chairs-are-producing-tv-sets-with-soldering-irons-bright-lamps-min.jpg';
import img6 from '@/assets/web_images/father-sons-making-robot-min.jpg';
import img7 from '@/assets/web_images/glowing-neon-ai-chip-technology-background-min.jpg';
import img8 from '@/assets/web_images/group-young-people-doing-experiments-robotics-laboratory-robot-tools-table-min.jpg';
import img9 from '@/assets/web_images/group-young-teens-celebrating-world-youth-day-by-doing-activities-together-min.jpg';
import img10 from '@/assets/web_images/metal-worker-using-machinery-industrial-workshop-generated-by-ai-min.jpg';
import img11 from '@/assets/web_images/modern-laboratory-interior (1)-min.jpg';
import img12 from '@/assets/web_images/modern-laboratory-interior-min.jpg';
import img13 from '@/assets/web_images/portrait-female-working-min.jpg';
import img14 from '@/assets/web_images/portrait-group-engineers-corporate-managers-standing-factory-looking-camera-min-min.jpg';
import img16 from '@/assets/web_images/portrait-male-engineer-working-field-engineers-day-celebration-min.jpg';
import img17 from '@/assets/web_images/production-electronic-components-high-tech-factory-min.jpg';
import img18 from '@/assets/web_images/robotic-arm-placing-chip-circuit-board-min.jpg';
import img19 from '@/assets/web_images/robotics-lab-students-assembling-electronic-circuits-min.jpg';

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
