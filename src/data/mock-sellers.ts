export interface Seller {
  id: string;
  name: string;
  avatar: string;
  location: string;
  country: string;
  flag: string;
  bio: string;
  specialty: string;
  rating: number;
  totalSales: number;
  totalProducts: number;
  joinedYear: number;
  responseTime: string;
  languages: string[];
  isVerified: boolean;
}

export const sellers: Seller[] = [
  {
    id: "1",
    name: "Yuki Tanaka",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    location: "Tokyo",
    country: "Japan",
    flag: "🇯🇵",
    bio: "Crafting soft friends since 2021. Each piece is made in my sunny Tokyo studio with meticulous attention to detail.",
    specialty: "Bears & Forest Animals",
    rating: 4.9,
    totalSales: 234,
    totalProducts: 18,
    joinedYear: 2021,
    responseTime: "Within 2 hours",
    languages: ["Japanese", "English"],
    isVerified: true,
  },
  {
    id: "2",
    name: "Sophie Chen",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    location: "San Francisco",
    country: "USA",
    flag: "🇺🇸",
    bio: "Former animation artist turned amigurumi maker. I bring characters to life with my signature colorful style.",
    specialty: "Fantasy & Characters",
    rating: 5.0,
    totalSales: 567,
    totalProducts: 32,
    joinedYear: 2022,
    responseTime: "Within 1 hour",
    languages: ["English", "Mandarin"],
    isVerified: true,
  },
  {
    id: "3",
    name: "Maria Garcia",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200",
    location: "Barcelona",
    country: "Spain",
    flag: "🇪🇸",
    bio: "Mediterranean vibes in every stitch. My designs blend Spanish warmth with whimsical fantasy elements.",
    specialty: "Miniature Sets",
    rating: 4.8,
    totalSales: 123,
    totalProducts: 15,
    joinedYear: 2023,
    responseTime: "Within 4 hours",
    languages: ["Spanish", "English", "Catalan"],
    isVerified: false,
  },
  {
    id: "4",
    name: "Emma Wilson",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
    location: "London",
    country: "UK",
    flag: "🇬🇧",
    bio: "British craftiness meets kawaii aesthetics. I specialize in food-themed amigurumi that look good enough to eat!",
    specialty: "Food & Everyday Items",
    rating: 4.9,
    totalSales: 456,
    totalProducts: 28,
    joinedYear: 2021,
    responseTime: "Within 3 hours",
    languages: ["English"],
    isVerified: true,
  },
  {
    id: "5",
    name: "Luna Park",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    location: "Seoul",
    country: "South Korea",
    flag: "🇰🇷",
    bio: "Creating dreamy, celestial-inspired dolls that capture the magic of Korean craftsmanship and fantasy storytelling.",
    specialty: "Celestial & Fantasy",
    rating: 4.7,
    totalSales: 89,
    totalProducts: 12,
    joinedYear: 2024,
    responseTime: "Within 6 hours",
    languages: ["Korean", "English"],
    isVerified: false,
  },
  {
    id: "6",
    name: "Oliver Nordic",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    location: "Stockholm",
    country: "Sweden",
    flag: "🇸🇪",
    bio: "Scandinavian simplicity meets cozy craftsmanship. My designs embody the Nordic spirit of hygge and natural beauty.",
    specialty: "Animals & Nature",
    rating: 5.0,
    totalSales: 312,
    totalProducts: 22,
    joinedYear: 2022,
    responseTime: "Within 2 hours",
    languages: ["Swedish", "English", "Norwegian"],
    isVerified: true,
  },
];