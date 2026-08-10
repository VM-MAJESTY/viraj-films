export interface ServiceItemData {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  imageUrl: string;
  videoUrl?: string;
  category: 'weddings' | 'events' | 'portraits' | 'commercial' | 'physical' | 'videography';
}

export interface ServiceChapterData {
  id: 'weddings' | 'events' | 'portraits' | 'commercial' | 'physical' | 'videography';
  chapterNumber: string;
  label: string;
  heading: string;
  description: string;
  items: ServiceItemData[];
}

export const FEATURED_HOME_SERVICES: ServiceItemData[] = [
  {
    id: 'feat-1',
    number: '01',
    title: 'WEDDING PHOTOGRAPHY',
    shortDesc: 'Capturing authentic emotions, rituals and unforgettable wedding moments.',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
    category: 'weddings'
  },
  {
    id: 'feat-2',
    number: '02',
    title: 'PRE-WEDDING',
    shortDesc: 'Cinematic couple stories created around your connection.',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop',
    category: 'weddings'
  },
  {
    id: 'feat-3',
    number: '03',
    title: 'HALDI & MEHNDI',
    shortDesc: 'Colorful celebrations, candid emotions and beautiful traditions.',
    imageUrl: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1200&auto=format&fit=crop',
    category: 'weddings'
  },
  {
    id: 'feat-4',
    number: '04',
    title: 'SANGEET & RECEPTION',
    shortDesc: 'Capturing performances, dancing, family moments and the energy of the celebration.',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
    category: 'weddings'
  },
  {
    id: 'feat-5',
    number: '05',
    title: 'COUPLES PHOTOGRAPHY',
    shortDesc: 'Natural and cinematic couple portraits that focus on connection and authentic emotion.',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
    category: 'weddings'
  },
  {
    id: 'feat-6',
    number: '06',
    title: 'EVENTS & CELEBRATIONS',
    shortDesc: 'Photography for birthdays, anniversaries, family gatherings and meaningful celebrations.',
    imageUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
    category: 'events'
  }
];

export const SERVICE_CHAPTERS: ServiceChapterData[] = [
  {
    id: 'weddings',
    chapterNumber: '01',
    label: '01 — WEDDING STORIES',
    heading: 'WEDDINGS & COUPLES',
    description: 'Stories of love, celebration and tradition captured through photography and film.',
    items: [
      {
        id: 'serv-1',
        number: '01',
        title: 'Wedding & Engagement',
        shortDesc: 'From intimate engagement portraits to grand wedding celebrations, we capture every emotion, ritual and unforgettable moment.',
        imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
        category: 'weddings'
      },
      {
        id: 'serv-2',
        number: '02',
        title: 'Pre-Wedding Photography',
        shortDesc: 'Cinematic couple sessions created around your story, personality and connection.',
        imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop',
        category: 'weddings'
      },
      {
        id: 'serv-3',
        number: '03',
        title: 'Bridal Photography',
        shortDesc: 'Elegant bridal portraits capturing the details, emotions, styling and beauty of the bride.',
        imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
        category: 'weddings'
      },
      {
        id: 'serv-4',
        number: '04',
        title: 'Couples Photography',
        shortDesc: 'Natural and cinematic couple portraits that focus on connection, emotion and authentic moments.',
        imageUrl: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop',
        category: 'weddings'
      },
      {
        id: 'serv-5',
        number: '05',
        title: 'Haldi & Mehndi',
        shortDesc: 'Colorful, joyful and candid coverage of the rituals and celebrations leading up to the wedding.',
        imageUrl: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1200&auto=format&fit=crop',
        category: 'weddings'
      },
      {
        id: 'serv-6',
        number: '06',
        title: 'Sangeet & Reception',
        shortDesc: 'Capturing performances, celebrations, family moments and the energy of the evening.',
        imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
        category: 'weddings'
      }
    ]
  },
  {
    id: 'events',
    chapterNumber: '02',
    label: '02 — MOMENTS TO CELEBRATE',
    heading: 'EVENTS & CELEBRATIONS',
    description: 'From birthdays to family gatherings, we capture the people and moments that make every celebration special.',
    items: [
      {
        id: 'serv-7',
        number: '07',
        title: 'Events & Parties',
        shortDesc: 'Capturing the energy, emotions and unforgettable moments of birthdays, celebrations, parties and special occasions.',
        imageUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
        category: 'events'
      },
      {
        id: 'serv-8',
        number: '08',
        title: 'Birthday Photography',
        shortDesc: 'Capturing laughter, decorations, emotions and the moments that make every birthday memorable.',
        imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop',
        category: 'events'
      },
      {
        id: 'serv-9',
        number: '09',
        title: 'Family Celebrations',
        shortDesc: 'Photography for birthdays, anniversaries, family gatherings and meaningful celebrations.',
        imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
        category: 'events'
      },
      {
        id: 'serv-10',
        number: '10',
        title: 'Family & Group',
        shortDesc: 'Natural family and group portraits created to bring people, relationships and memories together in one frame.',
        imageUrl: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop',
        category: 'events'
      },
      {
        id: 'serv-11',
        number: '11',
        title: "Children's Photography",
        shortDesc: 'Fun, natural and expressive portraits that capture the personality and innocence of childhood.',
        imageUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1200&auto=format&fit=crop',
        category: 'events'
      },
      {
        id: 'serv-12',
        number: '12',
        title: 'Baby Photography',
        shortDesc: 'Gentle and creative baby photography focused on tiny details, expressions and precious early memories.',
        imageUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1200&auto=format&fit=crop',
        category: 'events'
      }
    ]
  },
  {
    id: 'portraits',
    chapterNumber: '03',
    label: '03 — PEOPLE IN FRAME',
    heading: 'PORTRAITS & PEOPLE',
    description: 'Portraits that preserve personality, expression and individuality.',
    items: [
      {
        id: 'serv-13',
        number: '13',
        title: 'Portrait Photography',
        shortDesc: 'Creative portraits designed to capture personality, expression and individual character.',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
        category: 'portraits'
      },
      {
        id: 'serv-14',
        number: '14',
        title: 'Headshots & Portraits',
        shortDesc: 'Professional headshots and personal portraits for portfolios, businesses, social profiles and professional identity.',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
        category: 'portraits'
      },
      {
        id: 'serv-15',
        number: '15',
        title: 'Maternity & Newborn',
        shortDesc: 'Beautifully crafted maternity and newborn portraits that preserve the earliest and most meaningful family moments.',
        imageUrl: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1200&auto=format&fit=crop',
        category: 'portraits'
      },
      {
        id: 'serv-16',
        number: '16',
        title: 'School Portraits',
        shortDesc: 'Professional individual and group school portraits created with consistent lighting and clean composition.',
        imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
        category: 'portraits'
      },
      {
        id: 'serv-17',
        number: '17',
        title: 'Passport Photography',
        shortDesc: 'Professional passport and identification photographs with accurate framing, lighting and clean presentation.',
        imageUrl: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1200&auto=format&fit=crop',
        category: 'portraits'
      }
    ]
  },
  {
    id: 'commercial',
    chapterNumber: '04',
    label: '04 — COMMERCIAL',
    heading: 'PROFESSIONAL VISUALS',
    description: 'Clean, professional imagery for businesses, products and professional identity.',
    items: [
      {
        id: 'serv-18',
        number: '18',
        title: 'Corporate Photography',
        shortDesc: 'Professional photography for businesses, corporate events, teams, workplaces and brand communication.',
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
        category: 'commercial'
      },
      {
        id: 'serv-19',
        number: '19',
        title: 'Product Photography',
        shortDesc: 'Clean and detailed product photography designed for brands, businesses, catalogues and digital platforms.',
        imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
        category: 'commercial'
      },
      {
        id: 'serv-20',
        number: '20',
        title: 'Photography Studio',
        shortDesc: 'Professional photography for portraits, celebrations, events and special moments, created with a refined and creative visual approach.',
        imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop',
        category: 'commercial'
      }
    ]
  },
  {
    id: 'physical',
    chapterNumber: '05',
    label: '05 — PRESERVE YOUR MEMORIES',
    heading: 'FROM DIGITAL TO PHYSICAL',
    description: 'Turn your favorite photographs into physical memories that can be displayed, shared and preserved.',
    items: [
      {
        id: 'serv-21',
        number: '21',
        title: 'Photo Printing',
        shortDesc: 'High-quality photo printing that brings your digital memories into physical form.',
        imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop',
        category: 'physical'
      },
      {
        id: 'serv-22',
        number: '22',
        title: 'Photo Framing',
        shortDesc: 'Beautiful framing solutions designed to turn your favorite photographs into timeless displays.',
        imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop',
        category: 'physical'
      },
      {
        id: 'serv-23',
        number: '23',
        title: 'Photo Albums',
        shortDesc: 'Beautifully designed albums that bring your favorite photographs together into a story you can hold onto. Your memories, beautifully preserved.',
        imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
        category: 'physical'
      },
      {
        id: 'serv-24',
        number: '24',
        title: 'Photo Restoration',
        shortDesc: 'Carefully restoring old, damaged and faded photographs while preserving their original character and memories.',
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
        category: 'physical'
      }
    ]
  }
];

export interface VideoServiceData {
  number: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export const VIDEOGRAPHY_SERVICES_LIST: VideoServiceData[] = [
  {
    number: '01',
    title: 'Wedding Cinematography',
    description: 'Complete cinematic coverage of your wedding celebrations.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-indian-bride-dressed-in-traditional-clothes-41525-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: '02',
    title: 'Pre-Wedding Films',
    description: 'Creative films built around your story and connection.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-couple-in-love-walking-together-on-a-beach-at-sunset-41618-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: '03',
    title: 'Event Videography',
    description: 'Dynamic coverage of celebrations, performances and events.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-people-dancing-at-a-party-with-lights-42503-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: '04',
    title: 'Cinematic Highlights',
    description: 'Short cinematic films crafted from your most memorable moments.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-sparkler-at-night-41529-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: '05',
    title: 'Wedding Reels',
    description: 'Short-form wedding content created for modern social platforms.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-indian-bride-dressed-in-traditional-clothes-41525-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: '06',
    title: 'Video Editing',
    description: 'Professional editing, pacing and visual storytelling.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-couple-in-love-walking-together-on-a-beach-at-sunset-41618-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: '07',
    title: 'Color Grading',
    description: 'Professional cinematic color finishing for a refined visual look.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-people-dancing-at-a-party-with-lights-42503-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop'
  }
];
