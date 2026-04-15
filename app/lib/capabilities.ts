export interface Capability {
  title: string;
  description: string;
  to?: string;
  image: string;
  alt: string;
}

export const capabilities: Capability[] = [
  {
    title: 'Powder Coating',
    description: 'Commercial and industrial powder coating services.',
    to: '/powder-coating',
    image: '/bi-assets/images/powder-coating-main.jpg',
    alt: 'Technician applying powder coating to fabricated metal equipment',
  },
  {
    title: 'Custom Decals',
    description: 'Custom wraps with our partner, B.I. Print Works.',
    image: '/bi-assets/images/custom-decals-collage.jpg',
    alt: 'Custom decals and wraps produced with B.I. Print Works',
  },
  {
    title: 'Solar Framing',
    description: 'Work vehicles configured for solar set ups.',
    image: '/bi-assets/images/BI-20.jpg',
    alt: 'Work vehicle configured for solar power set ups',
  },
  {
    title: 'Custom Designs',
    description: 'Truck bodies built for your unique operation.',
    image: '/bi-assets/images/specialty-build.jpg',
    alt: 'Custom specialty fabrication build for unique truck body applications',
  },
  {
    title: 'Experience',
    description: 'Our leadership team brings more than 40 years of experience.',
    image: '/bi-assets/images/experience-photo.jpg',
    alt: 'BI Truck & Body facility frontage with completed truck build in Madison, Georgia',
  },
  {
    title: 'Tight Timelines',
    description: 'Reliable builds delivered on schedule.',
    image: '/bi-assets/images/BI-25.jpg',
    alt: 'BI Truck & Body flatbed build ready for delivery on schedule',
  },
];
