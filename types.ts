export interface Ship {
  id: string;
  name: string;
  type: 'Bulk Carrier' | 'Tanker' | 'Container Ship' | 'Ro-Ro' | 'LNG Carrier' | 'General Cargo';
  status: 'For Sale' | 'Under Offer' | 'Sold';
  yearBuilt: number;
  dwt: number;
  price: number;
  imageUrl: string;
  specs: { [key: string]: string };
  description: string;
}

export interface ServicePageContent {
  heroImageSeed: string;
  introduction: string;
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  process?: {
    step: number;
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    icon: React.ReactNode;
  }[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  icon: React.ReactElement<{ className?: string }>;
  shortDescription: string;
  pageContent: ServicePageContent;
}


export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  category: 'Market Updates' | 'Company News' | 'Regulations' | 'Technology';
  tags: string[];
}
