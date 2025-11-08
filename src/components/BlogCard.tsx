import { Link } from 'wouter';
import { Clock, Heart, Bookmark } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { BlogPostPreview } from '@/lib/types';
import { useState } from 'react';

interface BlogCardProps {
  post: BlogPostPreview;
  featured?: boolean;
}

export default function BlogCard({ post, featured }: BlogCardProps) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likes, setLikes] = useState(post.reactions.likes);
  const [bookmarks, setBookmarks] = useState(post.reactions.bookmarks);

  const aspectRatio = featured ? 'aspect-[4/3]' : 'aspect-video';

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setBookmarked(!bookmarked);
    setBookmarks(bookmarked ? bookmarks - 1 : bookmarks + 1);
  };

  return (
    <Link href={`/blog/${post.slug}`} data-testid={`link-blog-${post.slug}`}>
      <Card className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-200 cursor-pointer h-full flex flex-col">
        <div className={`relative ${aspectRatio} overflow-hidden`}>
          <img
            src={post.coverImage}
            alt={post.coverImageAlt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {post.category && (
            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
              {post.category.name}
            </Badge>
          )}
        </div>
        <CardContent className="p-6 flex-1 flex flex-col">
          <h3 className="font-serif text-2xl font-semibold mb-3 text-foreground line-clamp-2">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} min read</span>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className={`h-8 gap-1 ${liked ? 'text-primary' : ''}`}
                onClick={handleLike}
                data-testid={`button-like-${post.slug}`}
              >
                <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
                <span className="text-xs">{likes}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`h-8 gap-1 ${bookmarked ? 'text-primary' : ''}`}
                onClick={handleBookmark}
                data-testid={`button-bookmark-${post.slug}`}
              >
                <Bookmark className={`h-4 w-4 ${bookmarked ? 'fill-current' : ''}`} />
                <span className="text-xs">{bookmarks}</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
