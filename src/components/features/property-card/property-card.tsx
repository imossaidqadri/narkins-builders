import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Property } from "@/data/properties-data"
import { Card, CardContent, CardHeader } from "@/components/common/ui/card"
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid"
import { useLightboxStore } from "@/zustand"

interface PropertyCardProps {
  property: Property
  index?: number
}

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const openLightbox = useLightboxStore((state) => state.openLightbox)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group"
    >
      <Card className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-primary transition-all duration-300 h-full flex flex-col">
        <CardHeader className="relative p-0">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={property.image}
              alt={`${property.title} floor plan - ${property.projectName}`}
              fill
              className="object-cover"
              loading={index < 3 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <button
                onClick={() =>
                  openLightbox({
                    src: property.floorPlan,
                    title: property.title,
                  })
                }
                className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                aria-label={`View ${property.title} floor plan`}
              >
                <MagnifyingGlassCircleIcon className="w-12 h-12 text-white" />
              </button>
            </div>
          </div>
          {property.status === "ready" && (
            <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Ready to Move
            </div>
          )}
          {property.status === "pre-launch" && (
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Pre-Launch Pricing
            </div>
          )}
        </CardHeader>
        <CardContent className="p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {property.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              {property.projectName} - {property.location}
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Size:</span>
                <span className="font-semibold text-gray-900">
                  {property.size.toLocaleString()} sq ft
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Price Range:</span>
                <span className="font-semibold text-gray-900">
                  {property.priceRange.min}-{property.priceRange.max} Lakh
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Bedrooms:</span>
                <span className="font-semibold text-gray-900">
                  {property.bedrooms}
                </span>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4 mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                Key Features
              </h4>
              <ul className="space-y-1">
                {property.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link
            href={property.projectUrl}
            className="block w-full bg-primary text-white text-center py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
          >
            View Project Details
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  )
}
