
// Art forms data
export interface ArtForm {
  id: string;
  name: string;
  region: string;
  state: string;
  description: string;
  image: string;
  videoUrl?: string;
  category: "Visual" | "Performing" | "Crafts" | "Textiles";
  unesco?: boolean;
  popularity: number; // 1-10 scale
  visitorsPerYear?: number;
  bestTimeToVisit?: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  culturalSignificance: string;
}

export interface TourismTrend {
  month: string;
  domestic: number;
  international: number;
  year: number;
}

export interface Region {
  name: string;
  states: string[];
  artForms: string[];
  description: string;
}

export const regions: Region[] = [
  {
    name: "North India",
    states: ["Jammu & Kashmir", "Himachal Pradesh", "Punjab", "Uttarakhand", "Haryana", "Delhi", "Uttar Pradesh"],
    artForms: ["Phulkari", "Kathak", "Thangka Painting", "Chamba Rumal"],
    description: "Northern India is known for its diverse cultural landscape, from the mountainous regions of Kashmir and Himachal Pradesh to the plains of Punjab and Uttar Pradesh. The region's art forms reflect influences from Persia, Central Asia, and indigenous traditions."
  },
  {
    name: "South India",
    states: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh", "Telangana"],
    artForms: ["Bharatanatyam", "Kathakali", "Tanjore Painting", "Kalamezhuthu"],
    description: "South India preserves some of the country's oldest classical traditions. The region is known for its classical dance forms, intricate temple architecture, bronze casting, and distinctive music traditions that date back over two millennia."
  },
  {
    name: "East India",
    states: ["West Bengal", "Odisha", "Bihar", "Jharkhand", "Assam", "Sikkim", "Meghalaya", "Arunachal Pradesh", "Nagaland", "Manipur", "Mizoram", "Tripura"],
    artForms: ["Pattachitra", "Chhau Dance", "Madhubani Painting", "Santhal Painting"],
    description: "Eastern India encompasses diverse cultural traditions from the Bengali intellectual heritage to tribal art forms. The region is known for its narrative scroll paintings, vibrant folk dances, and textile traditions."
  },
  {
    name: "West India",
    states: ["Gujarat", "Maharashtra", "Goa", "Rajasthan"],
    artForms: ["Warli Painting", "Gond Art", "Kalamkari", "Kathputli"],
    description: "Western India features desert cultures, trading communities, and former princely states that patronized various art forms. The region is known for its puppet traditions, textile arts, and miniature painting styles."
  },
  {
    name: "Central India",
    states: ["Madhya Pradesh", "Chhattisgarh"],
    artForms: ["Gond Art", "Pithora Painting", "Bastar Art", "Dhokra Metal Casting"],
    description: "Central India is home to numerous tribal communities with distinct artistic traditions. The region features rich tribal art traditions that use natural materials and reflect deep connections to nature and spiritual beliefs."
  }
];

export const artForms: ArtForm[] = [
  {
    id: "madhubani",
    name: "Madhubani Painting",
    region: "East India",
    state: "Bihar",
    description: "Madhubani painting is a style of folk painting practiced in the Mithila region of Bihar. Characterized by geometric patterns and representations of nature and Hindu deities, these paintings were traditionally created on freshly plastered mud walls of homes.",
    image: "/madhubani.jpg",
    videoUrl: "https://www.youtube.com/watch?v=hzWZUOI6tCo",
    category: "Visual",
    unesco: true,
    popularity: 8,
    visitorsPerYear: 45000,
    bestTimeToVisit: ["October", "November", "February", "March"],
    coordinates: {
      lat: 26.1768,
      lng: 85.8961
    },
    culturalSignificance: "Madhubani paintings are created during important ceremonies and festivals, representing fertility, prosperity, and harmony with nature. Traditionally done by women, these paintings preserve ancient stories and rituals."
  },
  {
    id: "kathakali",
    name: "Kathakali",
    region: "South India",
    state: "Kerala",
    description: "Kathakali is a classical dance form known for its elaborate costumes, colorful makeup, and stylized gestures. Performances typically enact stories from Hindu epics such as the Ramayana and Mahabharata.",
    image: "/kathakali.jpg",
    videoUrl: "https://www.youtube.com/watch?v=jqJRjWnuYQk",
    category: "Performing",
    unesco: true,
    popularity: 9,
    visitorsPerYear: 120000,
    bestTimeToVisit: ["October", "November", "December", "January", "February"],
    coordinates: {
      lat: 10.8505,
      lng: 76.2711
    },
    culturalSignificance: "Kathakali combines elements from ancient temple arts and martial traditions, with performances that historically lasted entire nights. The art form demands years of rigorous training and embodies Kerala's cultural heritage."
  },
  {
    id: "warli",
    name: "Warli Painting",
    region: "West India",
    state: "Maharashtra",
    description: "Warli art is a tribal art form originating from the Warli tribe of Maharashtra. It uses basic geometric shapes like circles, triangles, and squares to form compositions depicting daily life scenes, social events, and human relationships with nature.",
    image: "/warli.jpg",
    category: "Visual",
    popularity: 7,
    visitorsPerYear: 30000,
    bestTimeToVisit: ["January", "February", "November", "December"],
    coordinates: {
      lat: 19.7515,
      lng: 72.9532
    },
    culturalSignificance: "Warli paintings traditionally adorned the walls of tribal homes as expressions of identity and spiritual beliefs, depicting the community's relationship with their environment."
  },
  {
    id: "bharatanatyam",
    name: "Bharatanatyam",
    region: "South India",
    state: "Tamil Nadu",
    description: "Bharatanatyam is one of India's oldest classical dance forms originating in Tamil Nadu. Characterized by precise footwork, expressive facial gestures, and elegant body movements, it combines rhythmic dance sequences with storytelling elements.",
    image: "/bharatanatyam.jpg",
    videoUrl: "https://www.youtube.com/watch?v=qJM4QHmKZkY",
    category: "Performing",
    unesco: true,
    popularity: 9,
    visitorsPerYear: 150000,
    bestTimeToVisit: ["December", "January", "February", "March"],
    coordinates: {
      lat: 13.0827,
      lng: 80.2707
    },
    culturalSignificance: "Originally performed in Hindu temples, Bharatanatyam embodies devotional expression and was preserved through the temple dancer (Devadasi) tradition before becoming a public performance art."
  },
  {
    id: "phulkari",
    name: "Phulkari Embroidery",
    region: "North India",
    state: "Punjab",
    description: "Phulkari, which translates to 'flower work,' is a traditional embroidery technique from Punjab. It features colorful thread work on handspun cotton fabric, with patterns that traditionally covered the entire fabric so densely that the base cloth was barely visible.",
    image: "/phulkari.jpg",
    category: "Textiles",
    popularity: 7,
    visitorsPerYear: 25000,
    bestTimeToVisit: ["October", "November", "March", "April"],
    coordinates: {
      lat: 31.1471,
      lng: 75.3412
    },
    culturalSignificance: "Phulkari shawls were traditionally prepared by mothers and grandmothers for a bride's trousseau, with different patterns having symbolic meanings related to prosperity, fertility, and protection."
  },
  {
    id: "pattachitra",
    name: "Pattachitra",
    region: "East India",
    state: "Odisha",
    description: "Pattachitra is a traditional cloth-based scroll painting from Odisha. These detailed paintings depict Hindu mythological narratives and folktales, characterized by bold lines, vibrant colors, and decorative borders.",
    image: "/pattachitra.jpg",
    category: "Visual",
    popularity: 8,
    visitorsPerYear: 35000,
    bestTimeToVisit: ["October", "November", "January", "February"],
    coordinates: {
      lat: 19.8133,
      lng: 85.8314
    },
    culturalSignificance: "Pattachitra has ancient roots connected to temple traditions, particularly the Jagannath Temple in Puri. The paintings serve as visual narratives of sacred stories and are created using natural colors and elaborate techniques passed through generations."
  },
  {
    id: "kathputli",
    name: "Kathputli Puppetry",
    region: "West India",
    state: "Rajasthan",
    description: "Kathputli is the traditional string puppet theater of Rajasthan. The puppets, made from wood, cloth, and string, depict various characters from folklore and mythology, manipulated by skilled puppeteers to tell stories accompanied by music and narration.",
    image: "/kathputli.jpg",
    videoUrl: "https://www.youtube.com/watch?v=lKWAhO_qWx0",
    category: "Performing",
    popularity: 7,
    visitorsPerYear: 40000,
    bestTimeToVisit: ["October", "November", "February", "March"],
    coordinates: {
      lat: 26.9124,
      lng: 75.7873
    },
    culturalSignificance: "Kathputli performances traditionally traveled from village to village, serving as both entertainment and a means of transmitting cultural values, historical events, and social messages."
  },
  {
    id: "gond",
    name: "Gond Art",
    region: "Central India",
    state: "Madhya Pradesh",
    description: "Gond art is a form of painting from central India, practiced by the Gond tribe. It features intricate patterns, dots, and lines creating vibrant depictions of nature, myths, and tribal life, with each pattern holding symbolic significance.",
    image: "/gond.jpg",
    category: "Visual",
    popularity: 6,
    visitorsPerYear: 20000,
    bestTimeToVisit: ["October", "November", "February", "March"],
    coordinates: {
      lat: 23.2599,
      lng: 77.4126
    },
    culturalSignificance: "Gond art originated in ritual contexts, with paintings created on walls and floors of homes to invoke protective deities. Today's artists have adapted these traditional techniques to create contemporary expressions of their cultural heritage."
  }
];

export const mockTourismTrends: TourismTrend[] = [
  // 2023 data
  { month: "January", domestic: 1200000, international: 350000, year: 2023 },
  { month: "February", domestic: 1150000, international: 320000, year: 2023 },
  { month: "March", domestic: 1000000, international: 280000, year: 2023 },
  { month: "April", domestic: 850000, international: 230000, year: 2023 },
  { month: "May", domestic: 750000, international: 200000, year: 2023 },
  { month: "June", domestic: 650000, international: 180000, year: 2023 },
  { month: "July", domestic: 700000, international: 190000, year: 2023 },
  { month: "August", domestic: 800000, international: 210000, year: 2023 },
  { month: "September", domestic: 950000, international: 260000, year: 2023 },
  { month: "October", domestic: 1100000, international: 300000, year: 2023 },
  { month: "November", domestic: 1250000, international: 330000, year: 2023 },
  { month: "December", domestic: 1350000, international: 370000, year: 2023 },

  // 2022 data
  { month: "January", domestic: 1000000, international: 300000, year: 2022 },
  { month: "February", domestic: 950000, international: 280000, year: 2022 },
  { month: "March", domestic: 850000, international: 250000, year: 2022 },
  { month: "April", domestic: 700000, international: 200000, year: 2022 },
  { month: "May", domestic: 600000, international: 170000, year: 2022 },
  { month: "June", domestic: 550000, international: 150000, year: 2022 },
  { month: "July", domestic: 580000, international: 160000, year: 2022 },
  { month: "August", domestic: 650000, international: 180000, year: 2022 },
  { month: "September", domestic: 800000, international: 220000, year: 2022 },
  { month: "October", domestic: 950000, international: 270000, year: 2022 },
  { month: "November", domestic: 1050000, international: 290000, year: 2022 },
  { month: "December", domestic: 1150000, international: 320000, year: 2022 },

  // 2021 data
  { month: "January", domestic: 400000, international: 50000, year: 2021 },
  { month: "February", domestic: 450000, international: 60000, year: 2021 },
  { month: "March", domestic: 350000, international: 40000, year: 2021 },
  { month: "April", domestic: 200000, international: 10000, year: 2021 },
  { month: "May", domestic: 150000, international: 5000, year: 2021 },
  { month: "June", domestic: 180000, international: 8000, year: 2021 },
  { month: "July", domestic: 230000, international: 15000, year: 2021 },
  { month: "August", domestic: 300000, international: 30000, year: 2021 },
  { month: "September", domestic: 450000, international: 70000, year: 2021 },
  { month: "October", domestic: 600000, international: 120000, year: 2021 },
  { month: "November", domestic: 750000, international: 180000, year: 2021 },
  { month: "December", domestic: 850000, international: 240000, year: 2021 },
];

export const responsibleTourismTips = [
  {
    title: "Support Local Artisans",
    description: "Purchase directly from artists and craftspeople whenever possible. This ensures they receive fair compensation for their work and helps sustain traditional art forms.",
    icon: "palette"
  },
  {
    title: "Respect Cultural Sensitivities",
    description: "Learn about local customs and traditions before visiting cultural sites. Dress appropriately for temples and sacred spaces, and ask permission before photographing artists or performances.",
    icon: "book"
  },
  {
    title: "Choose Ethical Experiences",
    description: "Opt for tours and experiences that benefit local communities and preserve cultural heritage. Look for programs that reinvest in education and preservation efforts.",
    icon: "ticket"
  },
  {
    title: "Travel During Shoulder Seasons",
    description: "Consider visiting during less crowded times to reduce overtourism impact. This provides a better experience and distributes tourism benefits throughout the year.",
    icon: "calendar"
  },
  {
    title: "Reduce Environmental Impact",
    description: "Minimize waste by carrying reusable items and disposing of trash properly. Many art forms use natural materials, and protecting local environments helps preserve these traditions.",
    icon: "leaf"
  }
];

export const getArtFormById = (id: string): ArtForm | undefined => {
  return artForms.find(art => art.id === id);
};

export const getArtFormsByRegion = (region: string): ArtForm[] => {
  return artForms.filter(art => art.region === region);
};

export const getArtFormsByCategory = (category: ArtForm['category']): ArtForm[] => {
  return artForms.filter(art => art.category === category);
};

export const getRegionByName = (name: string): Region | undefined => {
  return regions.find(region => region.name === name);
};
