import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCategories, useSiteSettings } from '@/lib/hooks';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  // Fetch data from Sanity
  const { data: categories, isLoading: categoriesLoading } = useCategories();
  const { data: siteSettings, isLoading: settingsLoading } = useSiteSettings();

  const isActive = (path: string) => location === path;
  const isLoading = categoriesLoading || settingsLoading;

  // Get site name, fallback to default
  const siteName = siteSettings?.siteName || 'Haven & Hearth';

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <h1 className="font-serif text-2xl font-semibold text-foreground hover-elevate active-elevate-2 rounded-md px-2 -ml-2">
              {siteName}
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            ) : (
              <>
                {categories?.map((category) => (
                  <Link
                    key={category._id}
                    href={`/category/${category.slug}`}
                    data-testid={`link-category-${category.slug}`}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className={isActive(`/category/${category.slug}`) ? 'bg-primary text-primary-foreground' : ''}
                    >
                      {category.name}
                    </Button>
                  </Link>
                ))}
                <Link href="/shop" data-testid="link-shop">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={isActive('/shop') ? 'bg-primary text-primary-foreground' : ''}
                  >
                    Shop
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 space-y-2">
            {isLoading ? (
              <div className="flex justify-center py-4">
                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
              </div>
            ) : (
              <>
                {categories?.map((category) => (
                  <Link
                    key={category._id}
                    href={`/category/${category.slug}`}
                    data-testid={`link-mobile-category-${category.slug}`}
                  >
                    <Button
                      variant="ghost"
                      className={`w-full justify-start ${isActive(`/category/${category.slug}`) ? 'bg-primary text-primary-foreground' : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Button>
                  </Link>
                ))}
                <Link href="/shop" data-testid="link-mobile-shop">
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${isActive('/shop') ? 'bg-primary text-primary-foreground' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Shop
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}