import { GetStaticProps } from "next"
import Head from "next/head"
import Navigation from "@/components/layout/navigation/navigation"
import Footer from "@/components/layout/footer/footer"
import { Lightbox } from "@/components/features/lightbox/lightbox"
import BlogsSection from "@/components/features/blogs-section/blogs-section"
import Testimonials from "@/components/features/testimonials/testimonials"
import { PropertyCard } from "@/components/features/property-card/property-card"
import { getReadyApartments } from "@/data/properties-data"
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

interface ReadyApartmentsProps {
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

export default function ReadyApartmentsBahriaTownKarachi({
  properties,
  posts,
}: ReadyApartmentsProps) {
  const twoBedroomApts = properties.filter((p) => p.bedrooms === 2)
  const threeBedroomApts = properties.filter((p) => p.bedrooms === 3)
  const fourBedroomApts = properties.filter((p) => p.bedrooms === 4)

  return (
    <main>
      <Head>
        <title>
          Ready Apartments Bahria Town Karachi | Immediate Possession | Hill
          Crest Residency
        </title>
        <meta
          name="description"
          content="Ready to move apartments in Bahria Town Karachi. Hill Crest Residency - Completion certificate issued Oct 2025. Immediate possession available. 2/3/4 BHK. Move in 30 days. Gym, Pool & Security. Call 0320-324-3970"
        />
        <meta
          name="keywords"
          content="ready apartments Bahria Town Karachi, apartments ready for possession Bahria Town, immediate possession apartments Karachi, Hill Crest Residency Bahria Town, completed projects Bahria Town, apartments for sale Bahria Town Karachi, apartments on installments Bahria Town, best apartments in Bahria Town Karachi, 2 bedroom apartments Bahria Town, 3 bedroom apartments Bahria Town, 4 bedroom apartments Bahria Town"
        />
        <meta name="author" content="Narkin's Builders" />

        <link
          rel="canonical"
          href="https://www.narkinsbuilders.com/ready-apartments-bahria-town-karachi"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ready Apartments Bahria Town Karachi | Immediate Possession | Hill Crest Residency"
        />
        <meta
          property="og:description"
          content="Ready to move apartments in Bahria Town Karachi. Completion certificate issued. 2/3/4 BHK. Move in 30 days. Call 0320-324-3970"
        />
        <meta
          property="og:url"
          content="https://www.narkinsbuilders.com/ready-apartments-bahria-town-karachi"
        />
        <meta
          property="og:image"
          content="https://www.narkinsbuilders.com/media/common/logos/narkins-builders-logo-30-years-experience.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ready Apartments Bahria Town Karachi | Immediate Possession"
        />
        <meta
          name="twitter:description"
          content="Ready apartments in Bahria Town. Completion certificate issued. 2/3/4 BHK. Move in 30 days. Call 0320-324-3970"
        />
      </Head>
      <Navigation />
      <Lightbox />
      <div className="bg-white pt-[6rem]">
        <section className="relative isolate overflow-hidden py-20 sm:py-24 bg-gradient-to-b from-green-50 to-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl text-center"
            >
              <div className="inline-flex items-center justify-center px-6 py-2 mb-6 bg-green-600 text-white rounded-full text-sm font-semibold">
                Completion Certificate Issued October 2025
              </div>
              <h1 className="text-4xl tracking-tight text-black sm:text-6xl">
                Ready Apartments in Bahria Town Karachi
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                Immediate possession available at Hill Crest Residency. Move into
                your dream apartment within 30 days. Choose from 2, 3, or 4
                bedroom luxury apartments. Completion certificate already issued -
                no waiting, no uncertainty.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="tel:0320-324-3970"
                  className="rounded-md bg-primary px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Call Now: 0320-324-3970
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl tracking-tight text-black sm:text-5xl">
                Hill Crest Residency - Ready to Move Apartments
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                All apartments are completed and ready for immediate possession.
                Completion certificate issued October 2025. Start your move-in
                process today.
              </p>
            </div>

            {twoBedroomApts.length > 0 && (
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  2 Bedroom Ready Apartments
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {twoBedroomApts.map((property, index) => (
                    <PropertyCard
                      key={property.id}
                      property={property}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            )}

            {threeBedroomApts.length > 0 && (
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  3 Bedroom Ready Apartments
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {threeBedroomApts.map((property, index) => (
                    <PropertyCard
                      key={property.id}
                      property={property}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            )}

            {fourBedroomApts.length > 0 && (
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  4 Bedroom Luxury Ready Apartments
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {fourBedroomApts.map((property, index) => (
                    <PropertyCard
                      key={property.id}
                      property={property}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl tracking-tight text-black sm:text-5xl">
                Why Choose Ready Apartments in Bahria Town?
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
                  Immediate Possession
                </h3>
                <p className="text-gray-700">
                  No waiting for 2-3 years. Move in within 30 days. Perfect for
                  urgent relocation, immediate rental income, or families who
                  can't wait.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Completion Certificate Issued
                </h3>
                <p className="text-gray-700">
                  Hill Crest Residency received completion certificate in October
                  2025. All legal documentation complete. Zero construction risk.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  See Before You Buy
                </h3>
                <p className="text-gray-700">
                  Visit the completed apartments, check finishes, test amenities,
                  and inspect quality before making your decision. No surprises.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  All Amenities Operational
                </h3>
                <p className="text-gray-700">
                  Gym, swimming pool, steam bath, prayer area, grand lobby - all
                  amenities are ready and operational. Enjoy from day one.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Easy Installment Plans Available
                </h3>
                <p className="text-gray-700">
                  Flexible payment plans even on ready apartments. Down payment
                  options with easy monthly installments over 2-3 years.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Immediate Rental Income
                </h3>
                <p className="text-gray-700">
                  Start earning rental income immediately. Strong rental demand in
                  Bahria Town for ready apartments with amenities.
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
    const properties = getReadyApartments()
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
