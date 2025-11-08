import { useRoute } from 'wouter';
import Navigation from '@/components/Navigation';
import CategoryBanner from '@/components/CategoryBanner';
import BlogCard from '@/components/BlogCard';
import Footer from '@/components/Footer';
import { useCategoryBySlug, useBlogPostsByCategory } from '@/lib/hooks';
import NotFound from './not-found';

export default function CategoryPage() {
  const [, params] = useRoute('/category/:slug');
  const { data: category, isLoading: categoryLoading } = useCategoryBySlug(params?.slug || '');
  const { data: categoryPosts = [], isLoading: postsLoading } = useBlogPostsByCategory(params?.slug || '');
  
  if (categoryLoading || postsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!category) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <CategoryBanner
          image={category.banner || ''}
          imageAlt={category.bannerAlt || `${category.name} category banner`}
          title={category.name}
          description={category.description}
        />
        
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {categoryPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryPosts.map((post) => (
                  <BlogCard key={post._id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No posts found in this category yet.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
