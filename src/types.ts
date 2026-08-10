export type PageRoute = 'home' | 'services' | 'gallery' | 'about' | 'contact';

export type GalleryCategory = 
  | 'ALL'
  | 'WEDDING'
  | 'PRE-WEDDING'
  | 'HALDI'
  | 'MEHNDI'
  | 'SANGEET'
  | 'RECEPTION'
  | 'EVENTS'
  | 'PORTRAITS'
  | 'VIDEOS';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  type: 'image' | 'video';
  url: string;
  thumbnailUrl: string;
  aspectRatio: 'portrait' | 'landscape' | 'square' | 'tall';
  location?: string;
  featured?: boolean;
  videoDuration?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: 'Wedding Film' | 'Pre-Wedding Film' | 'Highlight Film' | 'Cinematic Reel';
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  description: string;
  featured?: boolean;
}

export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  imageUrl: string;
  videoUrl?: string;
}

export interface BTSItem {
  id: string;
  title: string;
  role: string;
  imageUrl: string;
  videoUrl?: string;
  description: string;
}

export interface SocialPost {
  id: string;
  type: 'image' | 'reel';
  imageUrl: string;
  videoUrl?: string;
  likes: string;
  comments: string;
  tag: string;
  link: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  eventType: string;
  preferredDate: string;
  city: string;
  serviceRequired: string;
  message: string;
}
