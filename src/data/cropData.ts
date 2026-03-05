
export interface Crop {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  compatibleSoils: string[];
  growingSeason: string[];
  waterNeeds: "low" | "medium" | "high";
  sunlightNeeds: "full" | "partial" | "shade";
  ph: {
    min: number;
    max: number;
  };
}

export const crops: Crop[] = [
  {
    id: "tomato",
    name: "Tomato",
    description: "Versatile fruit used in many dishes. Requires warm temperatures and regular watering.",
    imageUrl: "https://images.unsplash.com/photo-1592841200221-a6c84aac261b",
    compatibleSoils: ["loam", "sandy"],
    growingSeason: ["spring", "summer"],
    waterNeeds: "medium",
    sunlightNeeds: "full",
    ph: {
      min: 6.0,
      max: 7.0
    }
  },
  {
    id: "carrot",
    name: "Carrot",
    description: "Root vegetable that prefers loose, sandy soil with good drainage.",
    imageUrl: "https://images.unsplash.com/photo-1598170845043-49a0254e6335",
    compatibleSoils: ["sandy", "loam"],
    growingSeason: ["spring", "fall"],
    waterNeeds: "medium",
    sunlightNeeds: "full",
    ph: {
      min: 6.0,
      max: 7.0
    }
  },
  {
    id: "lettuce",
    name: "Lettuce",
    description: "Leafy green that grows quickly and prefers cool weather and moist soil.",
    imageUrl: "https://images.unsplash.com/photo-1622205313162-be1d5712a43c",
    compatibleSoils: ["loam", "silt"],
    growingSeason: ["spring", "fall"],
    waterNeeds: "medium",
    sunlightNeeds: "partial",
    ph: {
      min: 6.0,
      max: 7.0
    }
  },
  {
    id: "blueberry",
    name: "Blueberry",
    description: "Fruit bush that requires acidic soil and consistent moisture.",
    imageUrl: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e",
    compatibleSoils: ["peaty", "sandy"],
    growingSeason: ["spring", "summer"],
    waterNeeds: "medium",
    sunlightNeeds: "full",
    ph: {
      min: 4.0,
      max: 5.5
    }
  },
  {
    id: "potato",
    name: "Potato",
    description: "Root vegetable that grows well in loose, well-draining soil.",
    imageUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
    compatibleSoils: ["loam", "sandy"],
    growingSeason: ["spring", "summer"],
    waterNeeds: "medium",
    sunlightNeeds: "full",
    ph: {
      min: 5.5,
      max: 6.5
    }
  },
  {
    id: "corn",
    name: "Corn",
    description: "Tall grass that produces edible kernels. Requires nutrient-rich soil and plenty of sunlight.",
    imageUrl: "https://images.unsplash.com/photo-1601593768799-76ac3dba251e",
    compatibleSoils: ["loam", "silt"],
    growingSeason: ["summer"],
    waterNeeds: "high",
    sunlightNeeds: "full",
    ph: {
      min: 5.8,
      max: 7.0
    }
  }
];

export const findCompatibleCrops = (soilType: string): Crop[] => {
  return crops.filter(crop => crop.compatibleSoils.includes(soilType));
};

export const checkCropSoilCompatibility = (cropId: string, soilId: string): { compatible: boolean; reasons: string[] } => {
  const crop = crops.find(c => c.id === cropId);
  
  if (!crop) {
    return { compatible: false, reasons: ["Crop not found"] };
  }
  
  const compatible = crop.compatibleSoils.includes(soilId);
  const reasons = [];
  
  if (compatible) {
    reasons.push(`${crop.name} grows well in this soil type`);
  } else {
    reasons.push(`${crop.name} doesn't typically grow well in this soil type`);
  }
  
  return { compatible, reasons };
};
