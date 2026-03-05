
export interface SoilType {
  id: string;
  name: string;
  description: string;
  characteristics: string[];
  imageUrl: string;
  ph: {
    min: number;
    max: number;
  };
}

export const soilTypes: SoilType[] = [
  {
    id: "sandy",
    name: "Sandy Soil",
    description: "Light, warm soil that drains quickly and is easy to work with. Low in nutrients and tends to dry out quickly.",
    characteristics: [
      "Gritty texture",
      "Drains quickly",
      "Warms up quickly in spring",
      "Low in nutrients",
      "Dries out quickly"
    ],
    imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    ph: {
      min: 5.5,
      max: 7.0
    }
  },
  {
    id: "clay",
    name: "Clay Soil",
    description: "Heavy, nutrient-rich soil that retains water well but can become compact and difficult to work with.",
    characteristics: [
      "Sticky when wet",
      "Drains slowly",
      "Warms slowly in spring",
      "Nutrient-rich",
      "Can become compacted"
    ],
    imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    ph: {
      min: 5.5,
      max: 7.5
    }
  },
  {
    id: "loam",
    name: "Loam Soil",
    description: "The ideal garden soil that balances drainage and water retention with good nutrient content.",
    characteristics: [
      "Crumbly texture",
      "Good drainage",
      "Good water retention",
      "Rich in nutrients",
      "Easy to work with"
    ],
    imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    ph: {
      min: 6.0,
      max: 7.0
    }
  },
  {
    id: "silt",
    name: "Silty Soil",
    description: "Smooth, fertile soil that retains water well but can become compacted easily.",
    characteristics: [
      "Smooth texture",
      "Holds water well",
      "Rich in nutrients",
      "Can become waterlogged",
      "Prone to compaction"
    ],
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    ph: {
      min: 6.0,
      max: 7.0
    }
  },
  {
    id: "peaty",
    name: "Peaty Soil",
    description: "Organic-rich soil that retains water well and is naturally acidic.",
    characteristics: [
      "Dark color",
      "High organic content",
      "Good water retention",
      "Naturally acidic",
      "Slow to warm in spring"
    ],
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    ph: {
      min: 3.5,
      max: 5.5
    }
  }
];
