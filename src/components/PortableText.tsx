import { PortableText as SanityPortableText } from '@portabletext/react';
import type { PortableTextComponents } from '@portabletext/react';
import { urlFor } from '@/lib/sanity';

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-serif text-3xl font-semibold mt-12 mb-4 text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-serif text-2xl font-semibold mt-8 mb-3 text-foreground">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-foreground leading-relaxed mb-6">
        {children}
      </p>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-primary no-underline hover:underline"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-6 space-y-2 text-foreground">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-6 space-y-2 text-foreground">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) {
        return null;
      }
      return (
        <figure className="my-8">
          <img
            src={urlFor(value).width(800).url()}
            alt={value.alt || 'Blog image'}
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
          {value.caption && (
            <figcaption className="mt-2 text-sm text-muted-foreground text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

interface PortableTextProps {
  value: any;
}

export function PortableText({ value }: PortableTextProps) {
  if (!value) {
    return null;
  }

  return (
    <div className="prose prose-lg max-w-none">
      <SanityPortableText value={value} components={components} />
    </div>
  );
}
