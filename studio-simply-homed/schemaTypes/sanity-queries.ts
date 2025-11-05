// ============================================
// CATEGORY QUERIES
// ============================================

// Get all categories
export const CATEGORIES_QUERY = `
  *[_type == "category"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    description,
    "banner": banner.asset->url,
    "bannerAlt": banner.alt
  }
`;

// Get single category by slug
export const CATEGORY_BY_SLUG_QUERY = `
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    description,
    "banner": banner.asset->url,
    "bannerAlt": banner.alt
  }
`;

// ============================================
// BLOG POST QUERIES
// ============================================

// Get all blog posts with category info
export const BLOG_POSTS_QUERY = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "coverImage": coverImage.asset->url,
    "coverImageAlt": coverImage.alt,
    category->{
      _id,
      name,
      "slug": slug.current
    },
    metaTitle,
    metaDescription,
    readTime,
    publishedAt,
    reactions
  }
`;

// Get paginated blog posts
export const PAGINATED_BLOG_POSTS_QUERY = `
  *[_type == "blogPost"] | order(publishedAt desc) [$start...$end] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "coverImage": coverImage.asset->url,
    "coverImageAlt": coverImage.alt,
    category->{
      _id,
      name,
      "slug": slug.current
    },
    metaTitle,
    metaDescription,
    readTime,
    publishedAt,
    reactions
  }
`;

// Get blog posts by category
export const BLOG_POSTS_BY_CATEGORY_QUERY = `
  *[_type == "blogPost" && category->slug.current == $categorySlug] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "coverImage": coverImage.asset->url,
    "coverImageAlt": coverImage.alt,
    category->{
      _id,
      name,
      "slug": slug.current
    },
    metaTitle,
    metaDescription,
    readTime,
    publishedAt,
    reactions
  }
`;

// Get single blog post by slug with full content
export const BLOG_POST_BY_SLUG_QUERY = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "coverImage": coverImage.asset->url,
    "coverImageAlt": coverImage.alt,
    category->{
      _id,
      name,
      "slug": slug.current,
      description
    },
    content,
    metaTitle,
    metaDescription,
    readTime,
    publishedAt,
    reactions
  }
`;

// Get featured/recent blog posts (limit to specific number)
export const FEATURED_BLOG_POSTS_QUERY = `
  *[_type == "blogPost"] | order(publishedAt desc) [0...$limit] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "coverImage": coverImage.asset->url,
    "coverImageAlt": coverImage.alt,
    category->{
      _id,
      name,
      "slug": slug.current
    },
    readTime,
    publishedAt,
    reactions
  }
`;

// Get related blog posts (same category, exclude current post)
export const RELATED_BLOG_POSTS_QUERY = `
  *[_type == "blogPost" && category._ref == $categoryId && _id != $postId] | order(publishedAt desc) [0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "coverImage": coverImage.asset->url,
    "coverImageAlt": coverImage.alt,
    category->{
      _id,
      name,
      "slug": slug.current
    },
    readTime,
    publishedAt,
    reactions
  }
`;

// Search blog posts by title or excerpt
export const SEARCH_BLOG_POSTS_QUERY = `
  *[_type == "blogPost" && (title match $searchTerm || excerpt match $searchTerm)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "coverImage": coverImage.asset->url,
    "coverImageAlt": coverImage.alt,
    category->{
      _id,
      name,
      "slug": slug.current
    },
    readTime,
    publishedAt,
    reactions
  }
`;

// ============================================
// PRODUCT QUERIES
// ============================================

// Get all products
export const PRODUCTS_QUERY = `
  *[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    "image": image.asset->url,
    "imageAlt": image.alt,
    description,
    affiliateUrl,
    price,
    category,
    featured
  }
`;

// Get featured products
export const FEATURED_PRODUCTS_QUERY = `
  *[_type == "product" && featured == true] | order(_createdAt desc) {
    _id,
    name,
    "image": image.asset->url,
    "imageAlt": image.alt,
    description,
    affiliateUrl,
    price,
    category,
    featured
  }
`;

// Get products by category
export const PRODUCTS_BY_CATEGORY_QUERY = `
  *[_type == "product" && category == $category] | order(_createdAt desc) {
    _id,
    name,
    "image": image.asset->url,
    "imageAlt": image.alt,
    description,
    affiliateUrl,
    price,
    category,
    featured
  }
`;

// Get limited number of products
export const LIMITED_PRODUCTS_QUERY = `
  *[_type == "product"] | order(_createdAt desc) [0...$limit] {
    _id,
    name,
    "image": image.asset->url,
    "imageAlt": image.alt,
    description,
    affiliateUrl,
    price,
    category,
    featured
  }
`;

// ============================================
// SITE SETTINGS QUERIES
// ============================================

// Get site settings
export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    _id,
    siteName,
    heroSection {
      "image": image.asset->url,
      "imageAlt": image.alt,
      heading,
      subheading
    },
    newsletterSection {
      "backgroundImage": backgroundImage.asset->url,
      "imageAlt": backgroundImage.alt,
      heading,
      description,
      cta
    },
    footer {
      about {
        title,
        content
      },
      contact {
        title,
        email,
        socials[] {
          name,
          url,
          icon
        }
      },
      links[] {
        name,
        url
      }
    }
  }
`;

// Get only hero section
export const HERO_SECTION_QUERY = `
  *[_type == "siteSettings"][0] {
    heroSection {
      "image": image.asset->url,
      "imageAlt": image.alt,
      heading,
      subheading
    }
  }.heroSection
`;

// Get only newsletter section
export const NEWSLETTER_SECTION_QUERY = `
  *[_type == "siteSettings"][0] {
    newsletterSection {
      "backgroundImage": backgroundImage.asset->url,
      "imageAlt": backgroundImage.alt,
      heading,
      description,
      cta
    }
  }.newsletterSection
`;

// Get only footer data
export const FOOTER_DATA_QUERY = `
  *[_type == "siteSettings"][0] {
    footer {
      about {
        title,
        content
      },
      contact {
        title,
        email,
        socials[] {
          name,
          url,
          icon
        }
      },
      links[] {
        name,
        url
      }
    }
  }.footer
`;

// ============================================
// COMBINED/HOMEPAGE QUERIES
// ============================================

// Get homepage data (combines multiple queries)
export const HOMEPAGE_QUERY = `
{
  "siteSettings": *[_type == "siteSettings"][0] {
    siteName,
    heroSection {
      "image": image.asset->url,
      "imageAlt": image.alt,
      heading,
      subheading
    },
    newsletterSection {
      "backgroundImage": backgroundImage.asset->url,
      "imageAlt": backgroundImage.alt,
      heading,
      description,
      cta
    }
  },
  "featuredPosts": *[_type == "blogPost"] | order(publishedAt desc) [0...6] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "coverImage": coverImage.asset->url,
    "coverImageAlt": coverImage.alt,
    category->{
      _id,
      name,
      "slug": slug.current
    },
    readTime,
    publishedAt,
    reactions
  },
  "categories": *[_type == "category"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    description,
    "banner": banner.asset->url,
    "bannerAlt": banner.alt
  },
  "featuredProducts": *[_type == "product" && featured == true] | order(_createdAt desc) [0...8] {
    _id,
    name,
    "image": image.asset->url,
    "imageAlt": image.alt,
    description,
    affiliateUrl,
    price,
    category
  }
}
`;

// ============================================
// UTILITY QUERIES
// ============================================

// Get total count of blog posts
export const BLOG_POST_COUNT_QUERY = `
  count(*[_type == "blogPost"])
`;

// Get total count of blog posts by category
export const BLOG_POST_COUNT_BY_CATEGORY_QUERY = `
  count(*[_type == "blogPost" && category->slug.current == $categorySlug])
`;

// Get all blog post slugs (for static generation)
export const BLOG_POST_SLUGS_QUERY = `
  *[_type == "blogPost"] {
    "slug": slug.current
  }
`;

// Get all category slugs (for static generation)
export const CATEGORY_SLUGS_QUERY = `
  *[_type == "category"] {
    "slug": slug.current
  }
`;