import { GetStaticProps } from "next"
import Head from "next/head"
import Navigation from "@/components/layout/navigation/navigation"
import Footer from "@/components/layout/footer/footer"
import { Lightbox } from "@/components/features/lightbox/lightbox"
import BlogsSection from "@/components/features/blogs-section/blogs-section"
import Testimonials from "@/components/features/testimonials/testimonials"
import { PropertyCard } from "@/components/features/property-card/property-card"
import { getPropertiesByPriceRange } from "@/data/properties-data"
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

interface ApartmentsUnder50LakhProps {
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

export default function ApartmentsUnder50LakhBahriaTown({
  properties,
  posts,
}: ApartmentsUnder50LakhProps) {
  const readyApartments = properties.filter((p) => p.status === "ready")
  const preLaunchApartments = properties.filter((p) => p.status === "pre-launch")

  return (
    <main>
      <Head>
        <title>
          Apartments Under 50 Lakh Bahria Town Karachi | Affordable Luxury
        </title>
        <meta
          name="description"
          content="Find apartments under 50 lakh in Bahria Town Karachi. Ready to move & pre-launch options from 38-50 Lakh. Hill Crest Residency (Ready) with completion certificate. Easy monthly installments. Premium amenities included. Call 0320-324-3970"
        />
        <meta
          name="keywords"
          content="apartments under 50 lakh Bahria Town, affordable apartments Bahria Town, cheap apartments in Bahria Town, apartments for sale Bahria Town Karachi, ready apartments Bahria Town Karachi, apartments on installments Bahria Town, best apartments in Bahria Town Karachi, affordable luxury apartments Bahria Town, family apartments Bahria Town Karachi, Hill Crest Residency Bahria Town"
        />
        <meta name="author" content="Narkin's Builders" />

        <link
          rel="canonical"
          href="https://www.narkinsbuilders.com/apartments-under-50-lakh-bahria-town"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Apartments Under 50 Lakh Bahria Town Karachi | Affordable Luxury"
        />
        <meta
          property="og:description"
          content="Find apartments under 50 lakh in Bahria Town Karachi from 38-50L. Ready to move & pre-launch options. Easy installments available. Call 0320-324-3970"
        />
        <meta
          property="og:url"
          content="https://www.narkinsbuilders.com/apartments-under-50-lakh-bahria-town"
        />
        <meta
          property="og:image"
          content="https://www.narkinsbuilders.com/media/common/logos/narkins-builders-logo-30-years-experience.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Apartments Under 50 Lakh Bahria Town Karachi | Affordable Luxury"
        />
        <meta
          name="twitter:description"
          content="Apartments under 50 lakh in Bahria Town from 38-50L. Ready to move & pre-launch. Easy installments. Call 0320-324-3970"
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
                Apartments Under 50 Lakh in Bahria Town Karachi
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                Discover affordable luxury apartments under 50 lakh in Bahria
                Town Karachi. Ready-to-move options starting from 38 lakh with
                premium amenities, secure gated community, and easy monthly
                installment plans.
              </p>
            </motion.div>
          </div>
        </section>

        {readyApartments.length > 0 && (
          <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl tracking-tight text-black sm:text-5xl">
                  Ready Apartments Under 50 Lakh
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                  Immediate possession available. Completion certificate issued
                  October 2025. Move in within 30 days. No hidden costs.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {readyApartments.map((property, index) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {preLaunchApartments.length > 0 && (
          <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl tracking-tight text-black sm:text-5xl">
                  Pre-Launch Options Under 50 Lakh (Down Payment)
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                  Lock today's price for tomorrow's delivery. Down payment under
                  50 lakh with flexible installment plans.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {preLaunchApartments.map((property, index) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-gray-100 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl tracking-tight text-black sm:text-5xl">
                Why Choose Apartments Under 50 Lakh in Bahria Town?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Affordable Entry to Bahria Town
                </h3>
                <p className="text-gray-700">
                  Start your Bahria Town journey from just 38 lakh. Luxury gated
                  community living within reach for middle-class families.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Premium Amenities Included
                </h3>
                <p className="text-gray-700">
                  Gym, swimming pool, steam bath, prayer area, and 24/7 security
                  included. No compromise on luxury despite affordable pricing.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Easy Monthly Installments
                </h3>
                <p className="text-gray-700">
                  Own your apartment with down payment as low as 10% and easy
                  monthly installments spread over 3-5 years.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Ready to Move Options
                </h3>
                <p className="text-gray-700">
                  Hill Crest Residency offers ready apartments under 50 lakh with
                  completion certificate. Move in within 30 days.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Trusted Developer
                </h3>
                <p className="text-gray-700">
                  Narkin's Builders has 30+ years of experience. Completed
                  projects with on-time delivery guarantee your investment is
                  safe.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Strong Appreciation Potential
                </h3>
                <p className="text-gray-700">
                  Bahria Town property values historically appreciate well.
                  Apartments under 50 lakh offer excellent capital gains
                  potential.
                </p>
              </motion.div>
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
    const properties = getPropertiesByPriceRange(0, 50)
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
