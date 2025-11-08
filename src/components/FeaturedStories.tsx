import BlogCard from './BlogCard';
import { useFeaturedBlogPosts } from '@/lib/hooks';

export default function FeaturedStories() {
  const { data: posts = [] } = useFeaturedBlogPosts(3);
  
  const featuredPost = posts[0];
  const editorPicks = posts.slice(1, 3);

  if (!featuredPost) return null;

  return (
    <section id="featured-stories" className="py-16 pb-20 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Featured Stories
          </h2>
          <p className="text-muted-foreground text-lg">
            Curated inspiration for your home and lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <BlogCard post={featuredPost} featured />
          </div>
          <div className="space-y-6">
            <div className="mb-4">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Editor's Picks
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
              {editorPicks.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
