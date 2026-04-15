export interface TruckBuild {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  comingSoon?: boolean;
}

export const truckBuilds: TruckBuild[] = [
  {
    slug: 'utility-truck',
    title: 'Utility Truck',
    description:
      'Service body trucks designed for the unique needs of contractors, utilities, municipal services, and field crews.',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%230a0d10" width="800" height="600"/%3E%3Crect fill="%231d2226" x="40" y="40" width="720" height="520" rx="24"/%3E%3Ctext fill="%23d97706" font-family="sans-serif" font-size="28" font-weight="700" text-anchor="middle" x="400" y="270"%3ECOMING%3C/text%3E%3Ctext fill="%23d97706" font-family="sans-serif" font-size="28" font-weight="700" text-anchor="middle" x="400" y="310"%3ESOON%3C/text%3E%3Ctext fill="%2366727d" font-family="sans-serif" font-size="14" text-anchor="middle" x="400" y="350"%3EPHOTO COMING SOON%3C/text%3E%3C/svg%3E',
    alt: 'Utility Truck build photo coming soon',
    comingSoon: true,
  },
  {
    slug: 'flatbed-truck',
    title: 'Flatbed Truck',
    description: 'Durable flatbed trucks built to maximize cargo capabilities in rugged environments.',
    image: '/bi-assets/images/flatbed-corner-shot.png',
    alt: 'Custom flatbed truck with rear corner view built for rugged jobsite work',
    comingSoon: false,
  },
  {
    slug: 'crane-equipped-utility-truck',
    title: 'Crane-Equipped Utility Truck',
    description: 'Utility trucks equipped with lifting capability for demanding field operations.',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%230a0d10" width="800" height="600"/%3E%3Crect fill="%231d2226" x="40" y="40" width="720" height="520" rx="24"/%3E%3Ctext fill="%23d97706" font-family="sans-serif" font-size="28" font-weight="700" text-anchor="middle" x="400" y="270"%3ECOMING%3C/text%3E%3Ctext fill="%23d97706" font-family="sans-serif" font-size="28" font-weight="700" text-anchor="middle" x="400" y="310"%3ESOON%3C/text%3E%3Ctext fill="%2366727d" font-family="sans-serif" font-size="14" text-anchor="middle" x="400" y="350"%3EPHOTO COMING SOON%3C/text%3E%3C/svg%3E',
    alt: 'Crane-equipped utility truck build photo coming soon',
    comingSoon: true,
  },
  {
    slug: 'dump-body-truck',
    title: 'Dump Body Truck',
    description: 'Dump bodies designed for infrastructure, construction, and heavy-duty work.',
    image: '/bi-assets/images/dump-rear-view.png',
    alt: 'Heavy-duty dump body truck rear view for construction and infrastructure work',
    comingSoon: false,
  },
  {
    slug: 'service-van',
    title: 'Service Van',
    description:
      'Van builds for contractors and delivery fleets requiring organized mobile workspaces.',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%230a0d10" width="800" height="600"/%3E%3Crect fill="%231d2226" x="40" y="40" width="720" height="520" rx="24"/%3E%3Ctext fill="%23d97706" font-family="sans-serif" font-size="28" font-weight="700" text-anchor="middle" x="400" y="270"%3ECOMING%3C/text%3E%3Ctext fill="%23d97706" font-family="sans-serif" font-size="28" font-weight="700" text-anchor="middle" x="400" y="310"%3ESOON%3C/text%3E%3Ctext fill="%2366727d" font-family="sans-serif" font-size="14" text-anchor="middle" x="400" y="350"%3EPHOTO COMING SOON%3C/text%3E%3C/svg%3E',
    alt: 'Service van build photo coming soon',
    comingSoon: true,
  },
  {
    slug: 'specialty-build',
    title: 'Specialty Build',
    description:
      'Custom truck builds designed to support unique equipment and specialized operations, including solar power set ups.',
    image: '/bi-assets/images/specialty-build.jpg',
    alt: 'Custom specialty trailer build for specialized equipment transport',
    comingSoon: false,
  },
];
