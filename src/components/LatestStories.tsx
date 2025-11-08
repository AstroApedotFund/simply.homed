import { useState } from 'react';
import { Button } from '@/components/ui/button';
import BlogCard from './BlogCard';
import { useBlogPosts, useCategories } from '@/lib/hooks';

export default function LatestStories() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { data: allPosts = [] } = useBlogPosts();
  const { data: categories = [] } = useCategories();

  const filteredPosts = selectedCategory === 'all'
    ? allPosts
    : allPosts.filter(post => post.category._id === selectedCategory);

  return (
    <section className="py-16 mt-8 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Latest Stories
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory('all')}
            data-testid="button-filter-all"
            className={selectedCategory === 'all' ? 'bg-primary text-primary-foreground' : ''}
          >
            All Stories
          </Button>
          {categories.map((category) => (
            <Button
              key={category._id}
              variant={selectedCategory === category._id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category._id)}
              data-testid={`button-filter-${category.slug}`}
              className={selectedCategory === category._id ? 'bg-primary text-primary-foreground' : ''}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
