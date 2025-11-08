import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleClick = () => {
    window.open(product.affiliateUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-200 cursor-pointer h-full flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute top-4 right-4 bg-card text-card-foreground border border-card-border">
          {product.category}
        </Badge>
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <h3 className="font-serif text-xl font-semibold mb-2 text-foreground line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          {/** <span className="font-semibold text-lg text-foreground">
            {product.price}
          </span> */}
          <Button
            size="sm"
            onClick={handleClick}
            data-testid={`button-view-product-${product._id}`}
            className="gap-2"
          >
            View on Amazon
            <ExternalLink className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
