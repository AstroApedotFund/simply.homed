import heroBanner from '../attached_assets/Hero_banner_living_room_8773f520.png';
import featuredKitchen from '../attached_assets/Featured_kitchen_story_18970394.png';
import editorBedroom from '../attached_assets/Editor_pick_bedroom_5e7985b6.png';
import editorWorkspace from '../attached_assets/Editor_pick_workspace_c62f0045.png';
import sustainableLiving from '../attached_assets/Sustainable_living_blog_eec8d8b1.png';
import organizationPost from '../attached_assets/Organization_blog_post_88be11d8.png';
import smartLiving from '../attached_assets/Smart_living_technology_170b2cb5.png';
import decorStyle from '../attached_assets/Decor_and_style_cfec2976.png';
import newsletterBg from '../attached_assets/Newsletter_background_image_0c5dd776.png';

export const SITE_NAME = "Simply Homed";

export const CATEGORIES = [
  { id: '1', name: 'Décor & Style', slug: 'decor-style', banner: decorStyle, description: 'Elevate your space with timeless design inspiration' },
  { id: '2', name: 'Organization', slug: 'organization', banner: organizationPost, description: 'Transform chaos into calm with smart storage solutions' },
  { id: '3', name: 'Smart Living', slug: 'smart-living', banner: smartLiving, description: 'Embrace technology that simplifies your daily life' },
  { id: '4', name: 'Sustainable Living', slug: 'sustainable-living', banner: sustainableLiving, description: 'Live beautifully while caring for our planet' },
  { id: '5', name: 'Appliances & Reviews', slug: 'appliances-reviews', banner: featuredKitchen, description: 'Expert insights on the tools that make your house a home' }
];

export const HERO_SECTION = {
  image: heroBanner,
  imageAlt: 'Chic minimalist living room in neutral tones featuring a beige sofa with a chunky knit throw, wooden coffee table with candles and books, and warm natural sunlight through sheer curtains — cozy, elegant, and inviting home interior for Simply Homed.',
  heading: 'Elevate Everyday Living! The Simply Homed Way',
  subheading: 'For homes that feel as good as they look.'
};

export const NEWSLETTER_SECTION = {
  backgroundImage: newsletterBg,
  imageAlt: 'Cozy neutral flat lay featuring a beige coffee mug, lit candle, stack of Simply Homed newsletters, and minimalist home décor on a soft knitted blanket — warm, elegant, and inviting lifestyle aesthetic.',
  heading: '✨ Join Our Cozy Circle',
  description: 'Get the latest home styling tips, organization hacks, smart living finds, and Simply Homed exclusives delivered straight to your inbox. ',
  cta: 'Subscribe'
};

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  coverImageAlt: string;
  categoryId: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  readTime: number;
  publishedAt: string;
  reactions: {
    likes: number;
    bookmarks: number;
  };
}

export interface Product {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
  description: string;
  affiliateUrl: string;
  price: string;
  category: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Creating a Serene Sanctuary: The Art of Minimalist Bedroom Design',
    slug: 'minimalist-bedroom-design',
    excerpt: 'Discover how less can truly be more when it comes to creating a peaceful retreat that promotes rest and rejuvenation.',
    coverImage: editorBedroom,
    coverImageAlt: 'Cozy minimalist bedroom with natural linen bedding and rattan headboard',
    categoryId: '1',
    content: '<h2>The Philosophy Behind Minimalist Design</h2><p>In our fast-paced world, the bedroom should serve as a sanctuary—a place where we can escape the noise and find peace. Minimalist bedroom design isn\'t about deprivation; it\'s about intentionality.</p><h3>Key Elements of a Minimalist Bedroom</h3><p>Start with a neutral color palette. Soft whites, warm beiges, and gentle grays create a calming atmosphere that promotes relaxation. Natural materials like linen, cotton, and wood add warmth without visual clutter.</p><h3>The Power of Negative Space</h3><p>Empty space is not wasted space—it\'s breathing room for your mind. Allow your furniture to have space around it, creating visual flow and a sense of openness.</p>',
    metaTitle: 'Minimalist Bedroom Design Guide | Haven & Hearth',
    metaDescription: 'Learn how to create a serene, minimalist bedroom sanctuary with our expert design tips. Transform your space into a peaceful retreat.',
    readTime: 5,
    publishedAt: '2025-01-15',
    reactions: { likes: 324, bookmarks: 156 }
  },
  {
    id: '2',
    title: 'The Modern Kitchen: Where Function Meets Elegance',
    slug: 'modern-kitchen-design',
    excerpt: 'Transform your kitchen into a space that inspires culinary creativity while maintaining timeless sophistication.',
    coverImage: featuredKitchen,
    coverImageAlt: 'Beautiful modern kitchen with white marble countertops and brass fixtures',
    categoryId: '1',
    content: '<h2>Designing the Heart of Your Home</h2><p>The kitchen has evolved from a purely functional space to the true heart of the home. Modern kitchen design balances aesthetics with practicality, creating spaces that are as beautiful as they are efficient.</p><h3>Material Choices That Matter</h3><p>Marble countertops bring timeless elegance, while brass fixtures add warmth and character. These materials age gracefully, developing a patina that tells your home\'s story.</p>',
    metaTitle: 'Modern Kitchen Design Ideas | Haven & Hearth',
    metaDescription: 'Explore modern kitchen design ideas that blend functionality with elegant aesthetics. Expert tips for creating your dream kitchen.',
    readTime: 6,
    publishedAt: '2025-01-12',
    reactions: { likes: 487, bookmarks: 203 }
  },
  {
    id: '3',
    title: 'Smart Home Technology for Everyday Living',
    slug: 'smart-home-technology-guide',
    excerpt: 'Navigate the world of smart home devices and discover which technologies truly enhance your daily routine.',
    coverImage: smartLiving,
    coverImageAlt: 'Modern smart home automation devices and control panel',
    categoryId: '3',
    content: '<h2>Making Your Home Smarter, Not Complicated</h2><p>Smart home technology should simplify your life, not complicate it. The key is choosing devices that solve real problems and integrate seamlessly into your routine.</p><h3>Start Small, Think Big</h3><p>Begin with lighting control and a smart thermostat. These foundational elements offer immediate benefits in comfort and energy savings while teaching you how smart devices work together.</p>',
    metaTitle: 'Smart Home Technology Guide for Beginners | Haven & Hearth',
    metaDescription: 'Discover the best smart home devices for everyday living. Expert recommendations for creating an intuitive, connected home.',
    readTime: 7,
    publishedAt: '2025-01-10',
    reactions: { likes: 412, bookmarks: 189 }
  },
  {
    id: '4',
    title: 'Sustainable Living: Small Changes, Big Impact',
    slug: 'sustainable-living-guide',
    excerpt: 'Learn how simple, sustainable choices can transform your home and reduce your environmental footprint.',
    coverImage: sustainableLiving,
    coverImageAlt: 'Eco-friendly home with solar panels and green roof garden',
    categoryId: '4',
    content: '<h2>The Journey to Sustainable Living</h2><p>Sustainability isn\'t about perfection—it\'s about progress. Every small change contributes to a larger impact, and the beauty is that sustainable choices often lead to a simpler, more intentional lifestyle.</p><h3>Energy Efficiency First</h3><p>Solar panels, proper insulation, and energy-efficient appliances reduce your carbon footprint while lowering utility bills. It\'s an investment that pays dividends for years to come.</p>',
    metaTitle: 'Sustainable Living Tips for Your Home | Haven & Hearth',
    metaDescription: 'Practical sustainable living tips and eco-friendly home improvements that make a real difference for the planet and your wallet.',
    readTime: 6,
    publishedAt: '2025-01-08',
    reactions: { likes: 556, bookmarks: 278 }
  },
  {
    id: '5',
    title: 'The Art of Organization: Declutter Your Space, Clear Your Mind',
    slug: 'organization-decluttering-guide',
    excerpt: 'Master the principles of organization and create systems that maintain order effortlessly.',
    coverImage: organizationPost,
    coverImageAlt: 'Organized minimalist closet with wooden hangers and storage baskets',
    categoryId: '2',
    content: '<h2>Organization as a Lifestyle</h2><p>True organization isn\'t about strict rules—it\'s about creating systems that work with your natural habits. When organization feels effortless, it becomes sustainable.</p><h3>The One-In, One-Out Rule</h3><p>For every new item that enters your home, let one leave. This simple principle prevents accumulation and maintains the balance you\'ve worked to achieve.</p>',
    metaTitle: 'Home Organization and Decluttering Guide | Haven & Hearth',
    metaDescription: 'Learn proven organization strategies to declutter your home and create lasting order. Expert tips for every room in your house.',
    readTime: 5,
    publishedAt: '2025-01-05',
    reactions: { likes: 623, bookmarks: 312 }
  },
  {
    id: '6',
    title: 'Workspace Wellness: Designing a Productive Home Office',
    slug: 'home-office-design-productivity',
    excerpt: 'Create a home office that boosts productivity while promoting physical and mental well-being.',
    coverImage: editorWorkspace,
    coverImageAlt: 'Stylish home office workspace with wooden desk and natural lighting',
    categoryId: '1',
    content: '<h2>The New Era of Remote Work</h2><p>As remote work becomes permanent for many, investing in a well-designed home office is no longer optional—it\'s essential for long-term success and well-being.</p><h3>Ergonomics Matter</h3><p>Your chair, desk height, and monitor position directly impact your health. Invest in quality ergonomic furniture that supports proper posture throughout long work days.</p>',
    metaTitle: 'Home Office Design for Productivity | Haven & Hearth',
    metaDescription: 'Design a productive and healthy home office with expert tips on ergonomics, layout, and creating an inspiring workspace.',
    readTime: 6,
    publishedAt: '2025-01-03',
    reactions: { likes: 445, bookmarks: 201 }
  },
  {
    id: '7',
    title: 'Elegant Entertaining: Setting the Perfect Table',
    slug: 'table-setting-entertaining-guide',
    excerpt: 'Master the art of table setting and create memorable dining experiences for your guests.',
    coverImage: decorStyle,
    coverImageAlt: 'Elegant dining table setting with ceramic plates and fresh flowers',
    categoryId: '1',
    content: '<h2>The Lost Art of Table Setting</h2><p>In our casual dining culture, the formal table setting might seem old-fashioned. But there\'s something special about a beautifully set table that elevates any meal into an occasion.</p><h3>Layers of Beauty</h3><p>Start with quality linens, add carefully chosen dinnerware, and finish with thoughtful details like fresh flowers and candlelight. Each layer adds to the overall experience.</p>',
    metaTitle: 'Table Setting and Entertaining Guide | Haven & Hearth',
    metaDescription: 'Learn the art of elegant table setting and entertaining. Expert tips for creating memorable dining experiences at home.',
    readTime: 5,
    publishedAt: '2025-01-01',
    reactions: { likes: 378, bookmarks: 167 }
  },
  {
    id: '8',
    title: 'The Ultimate Guide to Choosing Kitchen Appliances',
    slug: 'kitchen-appliances-buying-guide',
    excerpt: 'Navigate the overwhelming world of kitchen appliances with our expert recommendations and honest reviews.',
    coverImage: featuredKitchen,
    coverImageAlt: 'Modern kitchen appliances in contemporary setting',
    categoryId: '5',
    content: '<h2>Investing in Quality</h2><p>Kitchen appliances represent a significant investment, and the right choices can make cooking a joy rather than a chore. Our comprehensive guide helps you make informed decisions.</p><h3>Essential vs. Nice-to-Have</h3><p>Before buying, ask yourself: will this truly enhance my cooking, or is it appealing novelty? Focus on versatile, well-made essentials first.</p>',
    metaTitle: 'Kitchen Appliances Buying Guide | Haven & Hearth',
    metaDescription: 'Expert kitchen appliance reviews and buying guide. Find the best appliances for your cooking style and budget.',
    readTime: 8,
    publishedAt: '2024-12-28',
    reactions: { likes: 512, bookmarks: 245 }
  },
  {
    id: '9',
    title: 'Natural Light: Maximizing Brightness in Every Room',
    slug: 'natural-light-interior-design',
    excerpt: 'Discover techniques to amplify natural light and create bright, welcoming spaces throughout your home.',
    coverImage: heroBanner,
    coverImageAlt: 'Bright living room filled with natural sunlight',
    categoryId: '1',
    content: '<h2>Harnessing the Power of Natural Light</h2><p>Natural light transforms spaces, affecting our mood, energy levels, and perception of space. Learning to maximize it is one of the most impactful design decisions you can make.</p><h3>Strategic Mirror Placement</h3><p>Mirrors opposite windows bounce light deep into rooms, effectively doubling its impact. Large mirrors create the illusion of additional windows.</p>',
    metaTitle: 'Maximizing Natural Light in Your Home | Haven & Hearth',
    metaDescription: 'Learn expert techniques for maximizing natural light in every room. Transform dark spaces into bright, welcoming areas.',
    readTime: 5,
    publishedAt: '2024-12-25',
    reactions: { likes: 467, bookmarks: 198 }
  },
  {
    id: '10',
    title: 'Creating a Capsule Wardrobe for Your Home',
    slug: 'home-capsule-wardrobe-essentials',
    excerpt: 'Apply capsule wardrobe principles to your home decor for a cohesive, timeless aesthetic.',
    coverImage: organizationPost,
    coverImageAlt: 'Organized closet demonstrating capsule wardrobe principles',
    categoryId: '2',
    content: '<h2>Less is More in Home Decor</h2><p>Just as a capsule wardrobe simplifies getting dressed, a curated collection of home essentials creates a cohesive, intentional space that never feels cluttered or chaotic.</p><h3>Building Your Foundation</h3><p>Start with neutral, versatile pieces that work across seasons and trends. These foundational items provide flexibility while maintaining visual harmony.</p>',
    metaTitle: 'Home Decor Capsule Wardrobe Guide | Haven & Hearth',
    metaDescription: 'Create a cohesive home aesthetic with capsule wardrobe principles. Expert guide to timeless, versatile home decor.',
    readTime: 6,
    publishedAt: '2024-12-22',
    reactions: { likes: 534, bookmarks: 267 }
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Linen Duvet Cover Set',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=800&fit=crop',
    imageAlt: 'Soft natural linen duvet cover in neutral beige tone',
    description: 'Breathable, stonewashed linen for year-round comfort',
    affiliateUrl: 'https://amazon.com',
    price: '$189.00',
    category: 'Bedding'
  },
  {
    id: '2',
    name: 'Ceramic Dinnerware Set',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=800&fit=crop',
    imageAlt: 'Handcrafted ceramic dinner plates in warm earth tones',
    description: 'Handcrafted stoneware, microwave and dishwasher safe',
    affiliateUrl: 'https://amazon.com',
    price: '$129.00',
    category: 'Dining'
  },
  {
    id: '3',
    name: 'Rattan Storage Baskets Set',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=800&fit=crop',
    imageAlt: 'Natural woven rattan storage baskets in various sizes',
    description: 'Eco-friendly organization for every room',
    affiliateUrl: 'https://amazon.com',
    price: '$64.00',
    category: 'Organization'
  },
  {
    id: '4',
    name: 'Smart LED Light Bulbs (4-Pack)',
    image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=800&h=800&fit=crop',
    imageAlt: 'Smart LED light bulb with app control capability',
    description: 'Voice-controlled, energy-efficient lighting',
    affiliateUrl: 'https://amazon.com',
    price: '$45.00',
    category: 'Smart Home'
  },
  {
    id: '5',
    name: 'Bamboo Kitchen Utensil Set',
    image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=800&fit=crop',
    imageAlt: 'Sustainable bamboo cooking utensils in holder',
    description: 'Sustainable, durable cooking essentials',
    affiliateUrl: 'https://amazon.com',
    price: '$36.00',
    category: 'Kitchen'
  },
  {
    id: '6',
    name: 'Ergonomic Office Chair',
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&h=800&fit=crop',
    imageAlt: 'Modern ergonomic office chair with lumbar support',
    description: 'Lumbar support for all-day comfort',
    affiliateUrl: 'https://amazon.com',
    price: '$329.00',
    category: 'Office'
  },
  {
    id: '7',
    name: 'Marble & Brass Candle Holders',
    image: 'https://images.unsplash.com/photo-1602874801006-95ad427a0eb8?w=800&h=800&fit=crop',
    imageAlt: 'Elegant marble and brass candle holder set',
    description: 'Timeless elegance for your tablescape',
    affiliateUrl: 'https://amazon.com',
    price: '$78.00',
    category: 'Decor'
  },
  {
    id: '8',
    name: 'Air Purifier with HEPA Filter',
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=800&h=800&fit=crop',
    imageAlt: 'Modern white air purifier for home use',
    description: 'Whisper-quiet, covers up to 500 sq ft',
    affiliateUrl: 'https://amazon.com',
    price: '$199.00',
    category: 'Appliances'
  }
];

export const FOOTER_DATA = {
  about: {
    title: 'About',
    content: 'Simply Homed is your cozy corner on the internet for all things home, style, and smart living. We inspire beautiful, intentional spaces with a dash of fun and everyday elegance.'
  },
  contact: {
    title: 'Contact',
    email: 'hellosimplyhomed@gmail.com',
    socials: [
      { name: 'Instagram', url: 'https://www.instagram.com/simply.homed.co?igsh=bmlzeXF3c2dnZTA5', icon: 'instagram' },
      { name: 'Pinterest', url: 'https://pin.it/5nlkz8I4b', icon: 'pinterest' },
      { name: 'Tiktok', url: 'https://www.tiktok.com/@simply.homed.co?_r=1&_d=edjab83k0i522l&sec_uid=MS4wLjABAAAA0wMipZuCIWzjdmtsSvWp7wTQGsxOMWjUeWQGY1BAt1kd77RfbkxJH6VwJEXSkZoN&share_author_id=7533629708325929989&sharer_language=en&source=h5_m&u_code=elhh68mm03c9gk&timestamp=1762345314&user_id=7533629708325929989&sec_user_id=MS4wLjABAAAA0wMipZuCIWzjdmtsSvWp7wTQGsxOMWjUeWQGY1BAt1kd77RfbkxJH6VwJEXSkZoN&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7548836289719682821&share_link_id=5e16c40d-3a56-4800-97ac-841b12af2b68&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1', icon: 'tiktok' }
    ]
  },
  links: [
    { name: 'Privacy Policy', url: '/privacy-policy' },
    { name: 'Terms of Service', url: '/terms' }
  ]
};
