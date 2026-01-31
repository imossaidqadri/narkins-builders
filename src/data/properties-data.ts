export interface Property {
  id: string
  project: "HCR" | "NBR"
  projectName: string
  projectUrl: string
  bedrooms: number
  title: string
  size: number // in square feet
  priceRange: {
    min: number // in lakhs
    max: number
  }
  location: string
  image: string
  features: string[]
  status: "ready" | "pre-launch"
  floorPlan: string
}

export const properties: Property[] = [
  // Hill Crest Residency - Ready Apartments
  {
    id: "hcr-2bed-diamond",
    project: "HCR",
    projectName: "Hill Crest Residency",
    projectUrl: "/hill-crest-residency",
    bedrooms: 2,
    title: "2 Bed Diamond",
    size: 1276,
    priceRange: { min: 45, max: 52 },
    location: "Jinnah View",
    image:
      "/media/hcr/floor-plans/hill-crest-residency-2-bedroom-diamond-plan-1009-sqft.webp",
    features: [
      "Ready for possession",
      "Completion certificate issued",
      "Panoramic Jinnah Avenue view",
      "Premium finishes",
    ],
    status: "ready",
    floorPlan:
      "/media/hcr/floor-plans/hill-crest-residency-2-bedroom-diamond-plan-1009-sqft.webp",
  },
  {
    id: "hcr-2bed-gold",
    project: "HCR",
    projectName: "Hill Crest Residency",
    projectUrl: "/hill-crest-residency",
    bedrooms: 2,
    title: "2 Bed Gold",
    size: 1180,
    priceRange: { min: 42, max: 48 },
    location: "Gold Safari View",
    image:
      "/media/hcr/floor-plans/hill-crest-residency-2-bedroom-gold-plan-933-sqft.webp",
    features: [
      "Ready for possession",
      "Completion certificate issued",
      "Safari view",
      "Luxury amenities included",
    ],
    status: "ready",
    floorPlan:
      "/media/hcr/floor-plans/hill-crest-residency-2-bedroom-gold-plan-933-sqft.webp",
  },
  {
    id: "hcr-2bed-sapphire",
    project: "HCR",
    projectName: "Hill Crest Residency",
    projectUrl: "/hill-crest-residency",
    bedrooms: 2,
    title: "2 Bed Sapphire",
    size: 881,
    priceRange: { min: 38, max: 45 },
    location: "Sapphire Safari View",
    image:
      "/media/hcr/floor-plans/hill-crest-residency-2-bedroom-sapphire-plan-697-sqft.webp",
    features: [
      "Ready for possession",
      "Completion certificate issued",
      "Compact luxury living",
      "Under 50 lakh",
    ],
    status: "ready",
    floorPlan:
      "/media/hcr/floor-plans/hill-crest-residency-2-bedroom-sapphire-plan-697-sqft.webp",
  },
  {
    id: "hcr-3bed-platinum",
    project: "HCR",
    projectName: "Hill Crest Residency",
    projectUrl: "/hill-crest-residency",
    bedrooms: 3,
    title: "3 Bed Platinum",
    size: 1884,
    priceRange: { min: 65, max: 75 },
    location: "Jinnah View",
    image:
      "/media/hcr/floor-plans/hill-crest-residency-3-bedroom-platinum-plan-1490-sqft.webp",
    features: [
      "Ready for possession",
      "Completion certificate issued",
      "Spacious family apartment",
      "Luxury finishes",
    ],
    status: "ready",
    floorPlan:
      "/media/hcr/floor-plans/hill-crest-residency-3-bedroom-platinum-plan-1490-sqft.webp",
  },
  {
    id: "hcr-4bed-rhodium",
    project: "HCR",
    projectName: "Hill Crest Residency",
    projectUrl: "/hill-crest-residency",
    bedrooms: 4,
    title: "4 Bed Rhodium",
    size: 2594,
    priceRange: { min: 85, max: 98 },
    location: "Jinnah View",
    image:
      "/media/hcr/floor-plans/hill-crest-residency-4-bedroom-rhodium-plan-1996-sqft.webp",
    features: [
      "Ready for possession",
      "Completion certificate issued",
      "Ultra-luxury apartment",
      "Premium Jinnah Avenue view",
    ],
    status: "ready",
    floorPlan:
      "/media/hcr/floor-plans/hill-crest-residency-4-bedroom-rhodium-plan-1996-sqft.webp",
  },
  {
    id: "hcr-4bed-sapphire-a",
    project: "HCR",
    projectName: "Hill Crest Residency",
    projectUrl: "/hill-crest-residency",
    bedrooms: 4,
    title: "4 Bed Sapphire-A",
    size: 1756,
    priceRange: { min: 70, max: 82 },
    location: "Safari View",
    image:
      "/media/hcr/floor-plans/hill-crest-residency-4-bedroom-sapphire-a-plan-1388-sqft.webp",
    features: [
      "Ready for possession",
      "Completion certificate issued",
      "Safari view apartment",
      "Luxury under 1 crore",
    ],
    status: "ready",
    floorPlan:
      "/media/hcr/floor-plans/hill-crest-residency-4-bedroom-sapphire-a-plan-1388-sqft.webp",
  },

  // Narkin's Boutique Residency - Pre-Launch
  {
    id: "nbr-2bed-gold",
    project: "NBR",
    projectName: "Narkin's Boutique Residency",
    projectUrl: "/narkins-boutique-residency",
    bedrooms: 2,
    title: "2 Bed Gold",
    size: 1547,
    priceRange: { min: 58, max: 68 },
    location: "Heritage Club & Danzoo Safari View",
    image:
      "/media/nbr/floor-plans/narkins-boutique-residency-2-bedroom-gold-1547-sqft-heritage-view.webp",
    features: [
      "Pre-launch pricing",
      "Heritage Commercial location",
      "Premium finishes included",
      "Installments available",
    ],
    status: "pre-launch",
    floorPlan:
      "/media/nbr/floor-plans/narkins-boutique-residency-2-bedroom-gold-1547-sqft-heritage-view.webp",
  },
  {
    id: "nbr-3bed-diamond-corner",
    project: "NBR",
    projectName: "Narkin's Boutique Residency",
    projectUrl: "/narkins-boutique-residency",
    bedrooms: 3,
    title: "3 Bed Diamond Corner",
    size: 2184,
    priceRange: { min: 78, max: 88 },
    location: "Heritage Club & Theme Park View",
    image:
      "/media/nbr/floor-plans/narkins-boutique-residency-3-bedroom-diamond-corner-2184-sqft.webp",
    features: [
      "Pre-launch pricing",
      "Corner apartment advantage",
      "Heritage & Theme Park views",
      "Luxury amenities",
    ],
    status: "pre-launch",
    floorPlan:
      "/media/nbr/floor-plans/narkins-boutique-residency-3-bedroom-diamond-corner-2184-sqft.webp",
  },
  {
    id: "nbr-3bed-diamond-a",
    project: "NBR",
    projectName: "Narkin's Boutique Residency",
    projectUrl: "/narkins-boutique-residency",
    bedrooms: 3,
    title: "3 Bed Diamond-A",
    size: 2121,
    priceRange: { min: 75, max: 85 },
    location: "Jinnah & Theme Park View",
    image:
      "/media/nbr/floor-plans/narkins-boutique-residency-3-bedroom-diamond-a-2121-sqft.webp",
    features: [
      "Pre-launch pricing",
      "Jinnah Avenue view",
      "Theme park access",
      "Modern design",
    ],
    status: "pre-launch",
    floorPlan:
      "/media/nbr/floor-plans/narkins-boutique-residency-3-bedroom-diamond-a-2121-sqft.webp",
  },
  {
    id: "nbr-4bed-platinum-a1-corner",
    project: "NBR",
    projectName: "Narkin's Boutique Residency",
    projectUrl: "/narkins-boutique-residency",
    bedrooms: 4,
    title: "4 Bed Platinum A-1 Corner",
    size: 2670,
    priceRange: { min: 95, max: 110 },
    location: "Jinnah & Danzoo Safari View",
    image:
      "/media/nbr/floor-plans/narkins-boutique-residency-4-bedroom-platinum-a1-corner-2670-sqft.webp",
    features: [
      "Pre-launch pricing",
      "Premium corner location",
      "Dual panoramic views",
      "Luxury under 1 crore",
    ],
    status: "pre-launch",
    floorPlan:
      "/media/nbr/floor-plans/narkins-boutique-residency-4-bedroom-platinum-a1-corner-2670-sqft.webp",
  },
  {
    id: "nbr-4bed-platinum-a1-boulevard",
    project: "NBR",
    projectName: "Narkin's Boutique Residency",
    projectUrl: "/narkins-boutique-residency",
    bedrooms: 4,
    title: "4 Bed Platinum A-1 Boulevard",
    size: 2486,
    priceRange: { min: 88, max: 102 },
    location: "Jinnah & Boulevard View",
    image:
      "/media/nbr/floor-plans/narkins-boutique-residency-4-bedroom-platinum-a1-boulevard-2486-sqft.webp",
    features: [
      "Pre-launch pricing",
      "Boulevard view premium",
      "Spacious family apartment",
      "Premium amenities",
    ],
    status: "pre-launch",
    floorPlan:
      "/media/nbr/floor-plans/narkins-boutique-residency-4-bedroom-platinum-a1-boulevard-2486-sqft.webp",
  },
  {
    id: "nbr-4bed-platinum-a",
    project: "NBR",
    projectName: "Narkin's Boutique Residency",
    projectUrl: "/narkins-boutique-residency",
    bedrooms: 4,
    title: "4 Bed Platinum-A",
    size: 2597,
    priceRange: { min: 92, max: 105 },
    location: "Jinnah & Theme Park View",
    image:
      "/media/nbr/floor-plans/narkins-boutique-residency-4-bedroom-platinum-a-2597-sqft.webp",
    features: [
      "Pre-launch pricing",
      "Theme park view premium",
      "Luxury living redefined",
      "Under 1 crore options",
    ],
    status: "pre-launch",
    floorPlan:
      "/media/nbr/floor-plans/narkins-boutique-residency-4-bedroom-platinum-a-2597-sqft.webp",
  },
]

// Filter functions
export const getPropertiesByBedrooms = (bedrooms: number) =>
  properties.filter((p) => p.bedrooms === bedrooms)

export const getPropertiesByPriceRange = (minPrice: number, maxPrice: number) =>
  properties.filter(
    (p) => p.priceRange.min <= maxPrice && p.priceRange.max >= minPrice
  )

export const getReadyApartments = () =>
  properties.filter((p) => p.status === "ready")

export const getPropertiesBySquareFootage = (
  minSqFt: number,
  maxSqFt: number
) => properties.filter((p) => p.size >= minSqFt && p.size <= maxSqFt)

export const getBestApartments = () =>
  properties.filter(
    (p) =>
      p.status === "ready" &&
      (p.title.includes("Diamond") ||
        p.title.includes("Platinum") ||
        p.title.includes("Rhodium"))
  )
