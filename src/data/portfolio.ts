import { GalleryItem, VideoItem, ServiceDetail, BTSItem, SocialPost } from '../types';

// High-quality Indian Wedding Imagery from reliable Unsplash CDNs with high-res parameters
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Royal Mandap Exchange',
    category: 'WEDDING',
    categoryLabel: 'Wedding Stories',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600&auto=format&fit=crop',
    thumbnailUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',
    aspectRatio: 'portrait',
    featured: true
  },
  {
    id: 'gal-2',
    title: 'Sunset Heritage Romance',
    category: 'PRE-WEDDING',
    categoryLabel: 'Pre-Wedding Collection',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1600&auto=format&fit=crop',
    thumbnailUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
    aspectRatio: 'landscape',
    featured: true
  },
  {
    id: 'gal-3',
    title: 'Yellow Marigold Laughs',
    category: 'HALDI',
    categoryLabel: 'Haldi Moments',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1600&auto=format&fit=crop',
    thumbnailUrl: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=800&auto=format&fit=crop',
    aspectRatio: 'portrait',
    featured: true
  },
  {
    id: 'gal-4',
    title: 'Bridal Henna Details',
    category: 'MEHNDI',
    categoryLabel: 'Mehndi Stories',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?q=80&w=1600&auto=format&fit=crop',
    thumbnailUrl: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?q=80&w=800&auto=format&fit=crop',
    aspectRatio: 'square'
  },
  {
    id: 'gal-5',
    title: 'Royal Couple Portrait',
    category: 'PORTRAITS',
    categoryLabel: 'Couple Portraits',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    aspectRatio: 'tall',
    featured: true
  },
  {
    id: 'gal-6',
    title: 'The Eternal Pheras',
    category: 'WEDDING',
    categoryLabel: 'Wedding Stories',
    type: 'video',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-indian-bride-dressed-in-traditional-clothes-41525-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    aspectRatio: 'landscape',
    featured: true,
    videoDuration: '02:45'
  },
  {
    id: 'gal-7',
    title: 'Sangeet Celebration Beats',
    category: 'SANGEET',
    categoryLabel: 'Sangeet Night',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-8',
    title: 'Grand Reception Evening',
    category: 'RECEPTION',
    categoryLabel: 'Reception Stories',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1600&auto=format&fit=crop',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-9',
    title: 'Cultural Heritage Gala',
    category: 'EVENTS',
    categoryLabel: 'Celebration Stories',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1600&auto=format&fit=crop',
    thumbnailUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-10',
    title: 'Golden Hour Pre-Wedding Teaser',
    category: 'VIDEOS',
    categoryLabel: 'Cinematic Films',
    type: 'video',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-couple-in-love-walking-together-on-a-beach-at-sunset-41618-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop',
    aspectRatio: 'landscape',
    videoDuration: '01:30'
  },
  {
    id: 'gal-11',
    title: 'Varmala Floral Rain',
    category: 'WEDDING',
    categoryLabel: 'Wedding Stories',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-12',
    title: 'Floral Mandap Ambience',
    category: 'WEDDING',
    categoryLabel: 'Wedding Stories',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1600&auto=format&fit=crop',
    thumbnailUrl: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop',
    aspectRatio: 'square'
  }
];

export const CINEMATIC_FILMS: VideoItem[] = [
  {
    id: 'film-1',
    title: 'The Royal Palace Wedding Teaser',
    category: 'Wedding Film',
    thumbnailUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-indian-bride-dressed-in-traditional-clothes-41525-large.mp4',
    duration: '03:45',
    description: 'A grand symphony of traditions, emotion, and royal heritage. Captured in crisp 4K cinematic clarity.',
    featured: true
  },
  {
    id: 'film-2',
    title: 'Sunset Coast Pre-Wedding Story',
    category: 'Pre-Wedding Film',
    thumbnailUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-couple-in-love-walking-together-on-a-beach-at-sunset-41618-large.mp4',
    duration: '02:15',
    description: 'Intimate whispers, golden light, and poetic frames along the waves.'
  },
  {
    id: 'film-3',
    title: 'Haldi & Sangeet Celebration Reel',
    category: 'Highlight Film',
    thumbnailUrl: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-people-dancing-at-a-party-with-lights-42503-large.mp4',
    duration: '01:50',
    description: 'High energy, vibrant colors, and infectious laughter captured frame by frame.'
  },
  {
    id: 'film-4',
    title: 'Traditional Varmala & Pheras',
    category: 'Cinematic Reel',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-sparkler-at-night-41529-large.mp4',
    duration: '00:58',
    description: 'Slow motion, intimate details, and sacred chants distilled into a timeless reel.'
  }
];

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: 'serv-1',
    number: '01',
    title: 'WEDDING PHOTOGRAPHY',
    shortDesc: 'Candid storytelling, royal portraits, and authentic emotional moments of your sacred union.',
    fullDesc: 'Our wedding photography preserves the sacred rituals, spontaneous tears, joyful smiles, and intricate details of Indian weddings. We blend candid documentary coverage with regal, magazine-grade couple portraits.',
    features: [
      'Candid & Emotional Moments',
      'Traditional Rituals Coverage',
      'Regal Couple Portraits',
      'Family & Guest Stories',
      'Detail & Decor Framing',
      'High-Resolution Hand-Retouched Albums'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'serv-2',
    number: '02',
    title: 'WEDDING CINEMATOGRAPHY',
    shortDesc: 'Film-grade wedding teasers, feature trailers, and emotional full-event films.',
    fullDesc: 'We treat your wedding as a cinematic movie. Using cinema cameras, aerial drone footage, crisp sound recording, and bespoke color grading, we craft films that make you relive every goosebump.',
    features: [
      '4K Cinema Camera Setup',
      'Bespoke Color Grading',
      'Crystal Clear Audio & Sacred Chants',
      'Aerial & Drone Cinematography',
      '3-Minute Instagram Teaser Film',
      'Full-Length Documentary Feature'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-indian-bride-dressed-in-traditional-clothes-41525-large.mp4'
  },
  {
    id: 'serv-3',
    number: '03',
    title: 'PRE-WEDDING',
    shortDesc: 'Concept-driven pre-wedding photo shoots and romantic visual films.',
    fullDesc: 'Tell your unique love story before the wedding madness begins. From heritage forts to serene coastal beaches or cozy urban spaces, we design pre-wedding concepts that reflect your personalities.',
    features: [
      'Concept & Wardrobe Curation',
      'Destination & Heritage Location Shoots',
      'Romantic Cinematic Trailers',
      'High-End Fashion Lighting',
      'Save-The-Date Visual Edits'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'serv-4',
    number: '04',
    title: 'HALDI & MEHNDI',
    shortDesc: 'Vibrant, color-filled ritual photography for joyful pre-wedding functions.',
    fullDesc: 'Haldi and Mehndi are pure joy and chaos. We specialize in capturing the yellow turmeric splashes, marigold showers, intricate henna artistry, and uninhibited laughter of loved ones.',
    features: [
      'Vibrant Color Calibration',
      'Action & Reaction Shots',
      'Henna Detail Macro Shots',
      'High-Speed Slow Motion Clips',
      'Family Group Dynamics'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'serv-5',
    number: '05',
    title: 'EVENTS & CELEBRATIONS',
    shortDesc: 'Coverage for milestone birthdays, anniversaries, corporate galas & cultural events.',
    fullDesc: 'Every celebration deserves professional visual documentation. We bring our signature cinematic aesthetics to milestone birthdays, anniversaries, private celebrations, and cultural events.',
    features: [
      'Discreet Event Coverage',
      'Keynote & Stage Highlights',
      'Guest Portrait Stations',
      'Same-Day Teaser Delivery'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'serv-6',
    number: '06',
    title: 'REELS & EDITING',
    shortDesc: 'Vertical viral video edits, color grading, and social media storytelling.',
    fullDesc: 'Designed for the modern digital era. We produce 9:16 vertical reels optimized for Instagram and YouTube, edited with trending rhythm, cinematic color grading, and instant shareability.',
    features: [
      'Vertical 9:16 Reel Edits',
      'Color Correction & Master Color Grading',
      'Sound Design & Dialogue Mixing',
      '24-Hour Quick Turnaround Option'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?q=80&w=1200&auto=format&fit=crop'
  }
];

export const BTS_ITEMS: BTSItem[] = [
  {
    id: 'bts-1',
    title: 'Multi-Camera Mandap Rig',
    role: 'Cinematography Team',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop',
    description: 'Positioning prime lenses and wireless audio receivers to capture sacred Pheras without interfering with traditional rituals.'
  },
  {
    id: 'bts-2',
    title: 'Gimbal & Motion Tracking',
    role: 'Lead Camera Operator',
    imageUrl: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=800&auto=format&fit=crop',
    description: 'Executing smooth 60fps tracking shots during energetic Sangeet dance sequences and Baraat processions.'
  },
  {
    id: 'bts-3',
    title: 'Color Grading Suite',
    role: 'Post-Production Studio',
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
    description: 'Calibrating skin tones and vibrant Indian fabric colors using DaVinci Resolve color suites.'
  },
  {
    id: 'bts-4',
    title: 'Lighting Curation',
    role: 'Lighting Specialist',
    imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop',
    description: 'Setting up soft, flattering continuous LED fixtures for evening reception couple portraits.'
  }
];

export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: 'soc-1',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop',
    likes: '4.8k',
    comments: '182',
    tag: '#WeddingStory',
    link: 'https://instagram.com'
  },
  {
    id: 'soc-2',
    type: 'reel',
    imageUrl: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-indian-bride-dressed-in-traditional-clothes-41525-large.mp4',
    likes: '12.4k',
    comments: '430',
    tag: '#HaldiReels',
    link: 'https://instagram.com'
  },
  {
    id: 'soc-3',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop',
    likes: '6.2k',
    comments: '210',
    tag: '#PreWedding',
    link: 'https://instagram.com'
  },
  {
    id: 'soc-4',
    type: 'reel',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-couple-in-love-walking-together-on-a-beach-at-sunset-41618-large.mp4',
    likes: '9.8k',
    comments: '315',
    tag: '#CoupleReels',
    link: 'https://instagram.com'
  },
  {
    id: 'soc-5',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?q=80&w=600&auto=format&fit=crop',
    likes: '3.9k',
    comments: '142',
    tag: '#MehndiArt',
    link: 'https://instagram.com'
  },
  {
    id: 'soc-6',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop',
    likes: '8.1k',
    comments: '298',
    tag: '#CinematicWedding',
    link: 'https://instagram.com'
  }
];

export const STUDIO_INFO = {
  name: 'VIRAJ FILM STUDIO',
  tagline: 'Capturing Indian weddings through timeless photography and cinematic films.',
  phone: '+91 98765 43210',
  whatsapp: '+919876543210',
  email: 'enquiry@virajfilmstudio.com',
  location: 'Studio 104, Heritage Plaza, MG Road, Mumbai, Maharashtra, India',
  instagram: 'https://instagram.com',
  youtube: 'https://youtube.com',
  facebook: 'https://facebook.com'
};
