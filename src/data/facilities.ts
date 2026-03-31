// Import images from DCSRI folder
import industrialAutomationImage from '@/assets/DCSRI/Image1.jpeg';
import controlPanelImage from '@/assets/DCSRI/control panel.jpg';
import newControlPanelImage from '@/assets/DCSRI/Image4.jpeg';
import plcScadaHmiImage from '@/assets/DCSRI/Image3.jpeg';
import realTimeProjectImage from '@/assets/DCSRI/Image2.jpeg';

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
    image: industrialAutomationImage,
  },
  {
    id: 'iot-embedded-lab',
    title: 'control panel live lab',
    description: 'State-of-the-art facility equipped with sensors, microcontrollers, and IoT development boards. Build and deploy real-world IoT solutions with industry-standard equipment.',
    image: newControlPanelImage,
  },
  {
    id: 'plc-scada-hmi',
    title: 'PLC, SCADA & HMI Project Training',
    description: 'Comprehensive project-based training on Programmable Logic Controllers, SCADA systems, and Human Machine Interfaces. Work on real-time industrial control panel projects.',
    image: plcScadaHmiImage,
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
