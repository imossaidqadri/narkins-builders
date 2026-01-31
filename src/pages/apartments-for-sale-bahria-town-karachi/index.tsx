import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import Navigation from "@/components/layout/navigation/navigation"
import Footer from "@/components/layout/footer/footer"
import { Lightbox } from "@/components/features/lightbox/lightbox"
import BlogsSection from "@/components/features/blogs-section/blogs-section"
import Testimonials from "@/components/features/testimonials/testimonials"
import { PropertyCard } from "@/components/features/property-card/property-card"
import { properties } from "@/data/properties-data"
import type { Property } from "@/data/properties-data"
import type { BlogPost } from "@/lib/blog"
import { getAllPostsServer } from "@/lib/blog-server"
import { motion } from "framer-motion"

interface PostWithCategory extends BlogPost {
  id: number
  link: string
  datetime: string
  description: string
  category: string
  author: {
    name: string
    role: string
    imageUrl: string
  }
}

interface ApartmentsForSaleProps {
  properties: Property[]
  posts: PostWithCategory[]
}

const testimonials = [
  {
    name: "Saad Arshad",
    stars: [true, true, true, true, "half"] as const,
    testimonial:
      "Highly committed to delivering in timelines, I wholeheartedly recommend considering investment in projects by Narkin's Builders.",
    avatar:
      "/media/common/testimonials/saad-arshad-testimonial-narkins-builders.webp",
  },
  {
    name: "Arsalan",
    stars: [true, true, true, true, true] as const,
    testimonial:
      "Smooth booking experience, very transparent throughout the process.",
    avatar:
      "/media/common/testimonials/arsalan-testimonial-narkins-builders.webp",
  },
  {
    name: "Umair Iqrar",
    stars: [true, true, true, true, "half"] as const,
    testimonial:
      "I decided to invest during the initial launch phase, and after just two years, I've seen substantial returns. It's been a fantastic investment opportunity!",
    avatar:
      "/media/common/testimonials/umair-iqrar-testimonial-narkins-builders.webp",
  },
]

export default function ApartmentsForSaleBahriaTownKarachi({
  properties,
  posts,
}: ApartmentsForSaleProps) {
  const readyApartments = properties.filter((p) => p.status === "ready")
  const preLaunchApartments = properties.filter((p) => p.status === "pre-launch")

  return (
    <main>
      <Head>
        <title>
          Apartments for Sale Bahria Town Karachi | 2/3/4 BHK Ready & Pre-Launch
        </title>
        <meta
          name="description"
          content="Find apartments for sale in Bahria Town Karachi. Ready to move & pre-launch options from 38 Lakh to 1.1 Crore. Hill Crest Residency (Ready) & Narkin's Boutique Residency (Pre-Launch). 2/3/4 BHK luxury apartments with easy installments. Call 0320-324-3970"
        />
        <meta
          name="keywords"
          content="apartments for sale Bahria Town Karachi, ready apartments Bahria Town Karachi, apartments on installments Bahria Town, best apartments in Bahria Town Karachi, 2 bedroom apartments Bahria Town, 3 bedroom apartments Bahria Town, 4 bedroom apartments Bahria Town, apartments under 50 lakh Bahria Town, luxury apartments Bahria Town, family apartments Bahria Town Karachi, Hill Crest Residency Bahria Town, Narkin's Boutique Residency apartments"
        />
        <meta name="author" content="Narkin's Builders" />

        <link
          rel="canonical"
          href="https://www.narkinsbuilders.com/apartments-for-sale-bahria-town-karachi"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Apartments for Sale Bahria Town Karachi | 2/3/4 BHK Ready & Pre-Launch"
        />
        <meta
          property="og:description"
          content="Apartments for sale in Bahria Town Karachi from 38L-1.1Cr. Ready to move & pre-launch. 2/3/4 BHK with easy installments. Call 0320-324-3970"
        />
        <meta
          property="og:url"
          content="https://www.narkinsbuilders.com/apartments-for-sale-bahria-town-karachi"
        />
        <meta
          property="og:image"
          content="https://www.narkinsbuilders.com/media/common/logos/narkins-builders-logo-30-years-experience.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Apartments for Sale Bahria Town Karachi | 2/3/4 BHK"
        />
        <meta
          name="twitter:description"
          content="Apartments for sale in Bahria Town from 38L-1.1Cr. Ready & pre-launch. Easy installments. Call 0320-324-3970"
        />
      </Head>
      <Navigation />
      <Lightbox />
      <div className="bg-white pt-[6rem]">
        <section className="relative isolate overflow-hidden py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl text-center"
            >
              <h1 className="text-4xl tracking-tight text-black sm:text-6xl">
                Apartments for Sale in Bahria Town Karachi
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                Discover premium apartments for sale in Bahria Town Karachi by
                Narkin's Builders. Choose from ready-to-move Hill Crest Residency
                or pre-launch Narkin's Boutique Residency. 2, 3, and 4 bedroom
                luxury apartments with world-class amenities and flexible payment
                plans.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl tracking-tight text-black sm:text-5xl">
                Browse Apartments by Bedrooms
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Find the perfect apartment size for your family. All apartments
                include premium amenities and easy installment options.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link
                href="/2-bedroom-apartments-bahria-town"
                className="group block"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-transparent group-hover:border-primary"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    2 Bedroom Apartments
                  </h3>
                  <p className="text-gray-700 mb-4">
                    881-1,547 sq ft | 38-68 Lakh
                  </p>
                  <p className="text-gray-600 mb-6">
                    Perfect for couples or small families. Affordable luxury
                    starting from 38 lakh.
                  </p>
                  <span className="text-primary font-semibold group-hover:underline">
                    View All 2 Bedroom Apartments →
                  </span>
                </motion.div>
              </Link>

              <Link
                href="/3-bedroom-apartments-bahria-town"
                className="group block"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-transparent group-hover:border-primary"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    3 Bedroom Apartments
                  </h3>
                  <p className="text-gray-700 mb-4">
                    1,884-2,184 sq ft | 65-88 Lakh
                  </p>
                  <p className="text-gray-600 mb-6">
                    Spacious family apartments with dedicated dining and lounge
                    areas.
                  </p>
                  <span className="text-primary font-semibold group-hover:underline">
                    View All 3 Bedroom Apartments →
                  </span>
                </motion.div>
              </Link>

              <Link
                href="/4-bedroom-apartments-bahria-town"
                className="group block"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-transparent group-hover:border-primary"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    4 Bedroom Luxury Apartments
                  </h3>
                  <p className="text-gray-700 mb-4">
                    1,756-2,670 sq ft | 70 Lakh-1.1 Crore
                  </p>
                  <p className="text-gray-600 mb-6">
                    Ultra-luxury apartments with panoramic views and premium
                    finishes.
                  </p>
                  <span className="text-primary font-semibold group-hover:underline">
                    View All 4 Bedroom Apartments →
                  </span>
                </motion.div>
              </Link>
            </div>
          </div>
        </section>

        {readyApartments.length > 0 && (
          <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl tracking-tight text-black sm:text-5xl">
                  Ready to Move Apartments
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                  Hill Crest Residency - Completion certificate issued October
                  2025. Immediate possession available. Move in within 30 days.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {readyApartments.slice(0, 6).map((property, index) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    index={index}
                  />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/ready-apartments-bahria-town-karachi"
                  className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
                >
                  View All Ready Apartments
                </Link>
              </div>
            </div>
          </section>
        )}

        {preLaunchApartments.length > 0 && (
          <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl tracking-tight text-black sm:text-5xl">
                  Pre-Launch Apartments
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                  Narkin's Boutique Residency - Heritage Commercial location. Lock
                  today's price for tomorrow's delivery. Exclusive pre-launch
                  pricing.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {preLaunchApartments.slice(0, 6).map((property, index) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    index={index}
                  />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/narkins-boutique-residency"
                  className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
                >
                  View All Pre-Launch Apartments
                </Link>
              </div>
            </div>
          </section>
        )}

        <section className="bg-white py-20 border-t">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl tracking-tight text-black sm:text-5xl">
                Browse by Budget
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Find apartments that match your budget in Bahria Town Karachi
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link
                href="/apartments-under-50-lakh-bahria-town"
                className="group block"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 p-8 rounded-lg hover:bg-gray-100 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Under 50 Lakh
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Affordable luxury apartments starting from 38 lakh
                  </p>
                  <span className="text-primary font-semibold group-hover:underline">
                    View Apartments →
                  </span>
                </motion.div>
              </Link>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  50-80 Lakh
                </h3>
                <p className="text-gray-600 mb-4">
                  Premium 2 & 3 bedroom family apartments
                </p>
                <span className="text-gray-400">Coming Soon</span>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Above 80 Lakh
                </h3>
                <p className="text-gray-600 mb-4">
                  Luxury 3 & 4 bedroom apartments with panoramic views
                </p>
                <span className="text-gray-400">Coming Soon</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border-t px-5 lg:px-8 py-20">
          <Testimonials testimonials={testimonials} />
        </section>

        <BlogsSection posts={posts} />
      </div>
      <Footer map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.887654842134!2d67.31088117394069!3d25.003933139504262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb34b0d0e2f0313%3A0x82f9da3499b223b1!2sHill%20Crest%20Residency!5e0!3m2!1sen!2s!4v1751481865917!5m2!1sen!2s" />
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const mdxPosts = getAllPostsServer().slice(0, 3)

    const posts = mdxPosts.map((post, index) => {
      const postDate = new Date(post.date)
      const year = postDate.getFullYear()
      const month = String(postDate.getMonth() + 1).padStart(2, "0")

      return {
        id: index + 1,
        slug: post.slug,
        title: post.title,
        link: `/blog/${year}/${month}/${post.slug}`,
        date: post.date,
        datetime: post.date,
        description: post.excerpt,
        excerpt: post.excerpt,
        category: "Real Estate",
        image: post.image,
        author: {
          name: "Narkin's Builders",
          role: "Real Estate Expert",
          imageUrl:
            "/media/common/logos/narkins-builders-logo-30-years-experience.webp",
        },
      }
    })

    return {
      props: { properties, posts },
      revalidate: 60,
    }
  } catch (error) {
    console.error("Error fetching data:", error)
    return { props: { properties: [], posts: [] } }
  }
}
