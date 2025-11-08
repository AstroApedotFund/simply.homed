import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Sanity client configuration
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID!,
  dataset: import.meta.env.VITE_SANITY_DATASET!,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION!,
  useCdn: true, // Set to false if you need fresh data
})

// Image URL builder
const builder = imageUrlBuilder(client)

/**
 * Helper function to generate optimized image URLs from Sanity
 * @param source - Sanity image source object
 * @returns Image URL builder
 * 
 * @example
 * urlFor(post.coverImage).width(800).height(600).url()
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

/**
 * Fetch data from Sanity using GROQ query
 * @param query - GROQ query string
 * @param params - Query parameters
 * @returns Promise with query results
 */
export async function sanityFetch<T = any>(
  query: string,
  params: Record<string, any> = {}
): Promise<T> {
  return client.fetch<T>(query, params)
}