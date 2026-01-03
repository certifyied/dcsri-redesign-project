// Import images from web_images folder
import controlPanelImage from '@/assets/web_images/electronics-technicians-team-working-computer-parts-min.jpg';
import realTimeProjectImage from '@/assets/web_images/robotics-lab-students-assembling-electronic-circuits-min.jpg';

export interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const facilities: Facility[] = [
  {
    id: 'industrial-automation-lab',
    title: 'Industrial Automation Training Lab',
    description: 'Hands-on training with industry-grade PLCs, VFDs, and servo drives. Real-time industrial automation systems for comprehensive practical learning and skill development.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  },
  {
    id: 'iot-embedded-lab',
    title: 'control panel live lab',
    description: 'State-of-the-art facility equipped with sensors, microcontrollers, and IoT development boards. Build and deploy real-world IoT solutions with industry-standard equipment.',
    image: controlPanelImage,
  },
  {
    id: 'plc-scada-hmi',
    title: 'PLC, SCADA & HMI Project Training',
    description: 'Comprehensive project-based training on Programmable Logic Controllers, SCADA systems, and Human Machine Interfaces. Work on real-time industrial control panel projects.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    id: 'real-time-project-development',
    title: 'Real-Time Industrial Project Development',
    description: 'Dedicated workspace for developing real-time industrial automation projects. Access to industry-grade equipment, tools, and mentorship for comprehensive project implementation.',
    image: realTimeProjectImage,
  },
  {
    id: 'research-innovation-center',
    title: 'Research & Innovation Center (Automation & IoT)',
    description: 'Cutting-edge research facility for automation and IoT innovation. Collaborate on advanced projects, explore emerging technologies, and contribute to industrial automation research.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
  },
];
