import React from 'react';
import { Camera } from 'lucide-react';

// Re-export premium components
export * from './premium';

// ============================================
// IMAGE PLACEHOLDER COMPONENT
// Styled placeholder for images - easily swappable
// ============================================
interface ImagePlaceholderProps {
  aspectRatio?: string;
  alt: string;
  category?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full';
}

export const ImagePlaceholder = ({ 
  aspectRatio = '16/9', 
  alt, 
  category,
  className = '',
  size = 'md',
  rounded = '3xl'
}: ImagePlaceholderProps) => {
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };
  
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div 
      className={`relative bg-gradient-to-br from-onyx-800 to-onyx-900 border border-white/10 flex flex-col items-center justify-center overflow-hidden group hover:border-white/20 transition-all duration-300 rounded-${rounded} ${className}`}
      style={{ aspectRatio }}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-3 text-center px-4">
        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
          <Camera className={`${iconSizes[size]} text-gray-600`} />
        </div>
        {category && (
          <span className="text-[10px] font-medium text-brand-500/60 uppercase tracking-widest">{category}</span>
        )}
        <p className={`${sizeClasses[size]} text-gray-500 max-w-[200px] leading-relaxed`}>{alt}</p>
      </div>
    </div>
  );
};

// ============================================
// HERO IMAGE PLACEHOLDER
// Full-width hero background placeholder
// ============================================
interface HeroImagePlaceholderProps {
  alt: string;
  overlay?: boolean;
}

export const HeroImagePlaceholder = ({ alt, overlay = true }: HeroImagePlaceholderProps) => (
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-br from-onyx-800 to-onyx-900" />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]" />
    
    {/* Centered placeholder indicator */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 opacity-30">
        <Camera className="w-16 h-16 text-gray-600" />
        <p className="text-sm text-gray-600 uppercase tracking-widest">{alt}</p>
      </div>
    </div>
    
    {overlay && (
      <>
        <div className="absolute inset-0 bg-gradient-to-b from-onyx-950/50 via-onyx-950/80 to-onyx-950 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-950/20 via-transparent to-transparent z-10" />
      </>
    )}
  </div>
);

// ============================================
// FULL BLEED HERO
// Maximum impact hero with full-width imagery
// ============================================
interface FullBleedHeroProps {
  imageSrc?: string;
  imageAlt: string;
  badge?: string;
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
  height?: 'medium' | 'tall' | 'full';
  overlayIntensity?: 'light' | 'medium' | 'heavy';
  imagePosition?: 'center' | 'top' | 'bottom' | string;
}

export const FullBleedHero = ({ 
  imageSrc, 
  imageAlt, 
  badge, 
  title, 
  subtitle, 
  children,
  height = 'tall',
  overlayIntensity = 'medium',
  imagePosition = 'center'
}: FullBleedHeroProps) => {
  const heightClasses = {
    medium: 'min-h-[60vh]',
    tall: 'min-h-[80vh]',
    full: 'min-h-screen'
  };
  
  const overlayClasses = {
    light: 'from-onyx-950/25 via-onyx-950/45 to-onyx-950',
    medium: 'from-onyx-950/35 via-onyx-950/65 to-onyx-950',
    heavy: 'from-onyx-950/55 via-onyx-950/75 to-onyx-950'
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-end pt-32 pb-24 overflow-hidden bg-onyx-950`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="w-full h-full object-cover"
            style={{ 
              objectPosition: imagePosition === 'top' ? 'center top' : 
                            imagePosition === 'bottom' ? 'center bottom' : 
                            imagePosition === 'center' ? 'center' : 
                            imagePosition 
            }}
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-onyx-800 to-onyx-900" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3 opacity-30">
                <Camera className="w-16 h-16 text-gray-600" />
                <p className="text-sm text-gray-600 uppercase tracking-widest">{imageAlt}</p>
              </div>
            </div>
          </>
        )}
        
        {/* Gradient overlays */}
        <div className={`absolute inset-0 bg-gradient-to-b ${overlayClasses[overlayIntensity]} z-10`} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-950/20 via-transparent to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          {badge && (
            <p className="text-brand-400 text-sm tracking-widest uppercase mb-8">{badge}</p>
          )}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-8">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

// ============================================
// IMAGE TEXT BLOCK
// Split layout for content sections with imagery
// ============================================
interface ImageTextBlockProps {
  imageSrc?: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  badge?: string;
  title: string;
  children: React.ReactNode;
  aspectRatio?: string;
}

export const ImageTextBlock = ({ 
  imageSrc, 
  imageAlt, 
  imagePosition = 'left',
  badge,
  title,
  children,
  aspectRatio = '4/3'
}: ImageTextBlockProps) => (
  <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
    {/* Image */}
    <div className={`${imagePosition === 'right' ? 'lg:order-2' : ''}`}>
      <div className="relative rounded-4xl overflow-hidden border border-white/10" style={{ aspectRatio }}>
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        ) : (
          <ImagePlaceholder alt={imageAlt} aspectRatio={aspectRatio} rounded="none" className="rounded-none h-full" />
        )}
      </div>
    </div>
    
    {/* Content */}
    <div className={`${imagePosition === 'right' ? 'lg:order-1' : ''}`}>
      {badge && (
        <p className="text-brand-400 text-sm tracking-widest uppercase mb-6">{badge}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-6">
        {title}
      </h2>
      <div className="text-gray-400 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  </div>
);

// ============================================
// BACKGROUND IMAGE SECTION
// Full-width section with background imagery
// ============================================
interface BackgroundImageSectionProps {
  imageSrc?: string;
  imageAlt: string;
  children: React.ReactNode;
  overlayIntensity?: 'light' | 'medium' | 'heavy';
  className?: string;
}

export const BackgroundImageSection = ({ 
  imageSrc, 
  imageAlt,
  children,
  overlayIntensity = 'medium',
  className = ''
}: BackgroundImageSectionProps) => {
  const overlayClasses = {
    light: 'bg-onyx-950/45',
    medium: 'bg-onyx-950/65',
    heavy: 'bg-onyx-950/75'
  };

  return (
    <section className={`relative py-28 overflow-hidden ${className}`}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-onyx-800 to-onyx-900" />
        )}
        <div className={`absolute inset-0 ${overlayClasses[overlayIntensity]}`} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

// ============================================
// TRANSFORMATION CARD
// Before/After image with support for real photos
// ============================================
interface TransformationCardProps {
  name: string;
  duration: string;
  result: string;
  context?: string;
  beforeSrc?: string;
  afterSrc?: string;
}

export const TransformationCard = ({ name, duration, result, context, beforeSrc, afterSrc }: TransformationCardProps) => {
  // Use afterSrc if available, otherwise beforeSrc, otherwise show placeholder
  const imageSrc = afterSrc || beforeSrc;
  
  return (
    <div className="bg-onyx-900 rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
      {/* Single Image */}
      <div className="relative aspect-[3/4] bg-gradient-to-br from-onyx-800 to-onyx-900 overflow-hidden">
        {imageSrc ? (
          <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Camera className="w-8 h-8 text-gray-600 mb-2" />
            <span className="text-xs text-gray-600 uppercase tracking-widest">Client Photo</span>
          </div>
        )}
      </div>
      
      {/* Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-white font-medium">{name}</h4>
          <span className="text-brand-400 font-medium">{result}</span>
        </div>
        <p className="text-gray-500 text-sm">{duration}</p>
        {context && <p className="text-gray-600 text-xs mt-2">{context}</p>}
      </div>
    </div>
  );
};

// ============================================
// TESTIMONIAL WITH PHOTO
// Testimonial card with optional client photo
// ============================================
interface TestimonialWithPhotoProps {
  quote: string;
  name: string;
  context: string;
  photoSrc?: string;
  photoAlt?: string;
  metric?: { value: string; label: string };
}

export const TestimonialWithPhoto = ({ quote, name, context, photoSrc, photoAlt, metric }: TestimonialWithPhotoProps) => (
  <div className="bg-onyx-900 rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
    <div className="flex gap-6">
      {/* Photo or placeholder */}
      <div className="flex-shrink-0">
        {photoSrc ? (
          <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10">
            <img 
              src={photoSrc} 
              alt={photoAlt || name}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-onyx-700 to-onyx-800 border border-white/10 flex items-center justify-center">
            <Camera className="w-6 h-6 text-gray-600" />
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <blockquote className="text-white leading-relaxed mb-4">
          "{quote}"
        </blockquote>
        <div className="flex items-center gap-4">
          <div>
            <p className="text-brand-400 font-medium">{name}</p>
            <p className="text-gray-500 text-sm">{context}</p>
          </div>
          {metric && (
            <>
              <span className="w-px h-8 bg-white/10" />
              <div className="text-right">
                <p className="text-xl font-light text-white">{metric.value}</p>
                <p className="text-xs text-gray-500">{metric.label}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
);

// ============================================
// PHOTO GALLERY GRID
// Responsive image gallery with real images or placeholders
// ============================================
interface GalleryImage {
  src?: string;
  alt: string;
  category?: string;
  aspectRatio?: string;
  span?: 'normal' | 'wide' | 'tall';
}

interface PhotoGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

export const PhotoGallery = ({ images, columns = 3 }: PhotoGalleryProps) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-4`}>
      {images.map((image, index) => {
        const spanClasses = {
          normal: '',
          wide: 'md:col-span-2',
          tall: 'md:row-span-2'
        };
        const aspectRatio = image.aspectRatio || (image.span === 'tall' ? '3/4' : '4/3');
        
        return image.src ? (
          <div 
            key={index}
            className={`relative rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 ${spanClasses[image.span || 'normal']}`}
            style={{ aspectRatio }}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <ImagePlaceholder
            key={index}
            alt={image.alt}
            category={image.category}
            aspectRatio={aspectRatio}
            className={spanClasses[image.span || 'normal']}
          />
        );
      })}
    </div>
  );
};

// Badge Component - refined, subtle
interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, className = "" }: BadgeProps) => (
  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium tracking-widest uppercase ${className}`}>
    {children}
  </span>
);

// Section Heading Component - Light & Elegant style
interface SectionHeadingProps {
  children: React.ReactNode;
  align?: string;
  light?: boolean;
}

export const SectionHeading = ({ children, align = "center", light = true }: SectionHeadingProps) => (
  <h2 className={`text-3xl md:text-5xl ${light ? 'font-light' : 'font-medium'} text-white tracking-tight mb-6 ${align === "center" ? "text-center" : "text-left"}`}>
    {children}
  </h2>
);

// Glass Card Component - now bolder containers
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'glass' | 'solid' | 'bold';
}

export const GlassCard = ({ children, className = "", variant = 'bold' }: GlassCardProps) => {
  const variants = {
    glass: 'bg-onyx-900/50 backdrop-blur-xl border border-white/5',
    solid: 'bg-onyx-900 border border-white/5',
    bold: 'bg-onyx-900 border border-white/10'
  };
  
  return (
    <div className={`${variants[variant]} rounded-3xl p-10 hover:border-white/20 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

// Page Container Component - slightly narrower for better reading
interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export const PageContainer = ({ children, className = "", narrow = false }: PageContainerProps) => (
  <div className={`${narrow ? 'max-w-5xl' : 'max-w-7xl'} mx-auto px-6 ${className}`}>
    {children}
  </div>
);

// Page Hero Component - Light headline weight, dramatic spacing
interface PageHeroProps {
  badge?: string;
  badgeClassName?: string;
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
  accent?: 'brand' | 'muted';
}

export const PageHero = ({ 
  badge, 
  badgeClassName = "bg-brand-900/30 text-brand-400 border border-brand-500/20", 
  title, 
  subtitle, 
  children,
  accent = 'brand'
}: PageHeroProps) => {
  const gradientClasses = {
    brand: 'gradient-brand',
    muted: 'gradient-muted'
  };

  return (
    <section className={`pt-40 pb-24 bg-onyx-950 relative overflow-hidden`}>
      <div className={`absolute inset-0 ${gradientClasses[accent]}`} />
      <PageContainer className="relative">
        <div className="max-w-4xl">
          {badge && (
            <Badge className={`${badgeClassName} mb-8`}>{badge}</Badge>
          )}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-8">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </PageContainer>
    </section>
  );
};

// Section Component - Consistent dramatic spacing
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  spacing?: 'normal' | 'large' | 'dramatic';
}

export const Section = ({ children, className = "", dark = false, spacing = 'large' }: SectionProps) => {
  const spacingClasses = {
    normal: 'py-20',
    large: 'py-28',
    dramatic: 'py-36'
  };
  
  return (
    <section className={`${spacingClasses[spacing]} ${dark ? 'bg-onyx-900' : 'bg-onyx-950'} ${className}`}>
      <PageContainer>
        {children}
      </PageContainer>
    </section>
  );
};

// Feature Card Component - Bolder, strategic icons
interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  iconBgColor?: string;
  showIcon?: boolean;
}

export const FeatureCard = ({ icon, title, description, iconBgColor = "bg-brand-500/10 text-brand-500", showIcon = true }: FeatureCardProps) => (
  <div className="bg-onyx-900 rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
    {showIcon && icon && (
      <div className={`w-12 h-12 rounded-2xl ${iconBgColor} flex items-center justify-center mb-6`}>
        {icon}
      </div>
    )}
    <h3 className="text-lg font-medium text-white mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

// List Item with Check Component
interface CheckListItemProps {
  children: React.ReactNode;
  positive?: boolean;
}

export const CheckListItem = ({ children, positive = true }: CheckListItemProps) => (
  <li className="flex items-start gap-3">
    <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${positive ? 'bg-brand-500/20 text-brand-500' : 'bg-red-500/20 text-red-400'}`}>
      {positive ? (
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
    </span>
    <span className="text-gray-300">{children}</span>
  </li>
);

// CTA Button Component - Pill style, subtle hover
interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  primary?: boolean;
  className?: string;
  size?: 'default' | 'large';
}

export const CTAButton = ({ children, href, onClick, primary = true, className = "", size = 'default' }: CTAButtonProps) => {
  const sizeClasses = size === 'large' ? 'px-10 py-5 text-lg' : 'px-8 py-4';
  const baseClasses = `inline-flex items-center justify-center gap-2 ${sizeClasses} font-medium rounded-full transition-all duration-300`;
  const primaryClasses = "bg-white text-onyx-950 hover:bg-gray-100";
  const secondaryClasses = "bg-white/5 border border-white/10 text-white hover:bg-white/10";
  
  const classes = `${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

// Horizontal Scrolling Testimonial Carousel - With auto-scroll and navigation
interface Testimonial {
  quote: string;
  name: string;
  context: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = React.useState(true);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / testimonials.length;
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    scrollToIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    scrollToIndex(prevIndex);
  };

  // Auto-scroll effect
  React.useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoScrolling]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setIsAutoScrolling(false);
  const handleMouseLeave = () => setIsAutoScrolling(true);

  return (
    <div className="relative pt-16 md:pt-0" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Navigation Controls - Top Right - Mobile responsive */}
      <div className="absolute -top-2 md:-top-16 right-0 flex items-center gap-2 md:gap-3 z-20">
        <button
          onClick={handlePrev}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-onyx-900 border border-white/10 flex items-center justify-center text-white hover:bg-onyx-800 hover:border-white/20 transition-all"
          aria-label="Previous testimonial"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-onyx-900 border border-white/10 flex items-center justify-center text-white hover:bg-onyx-800 hover:border-white/20 transition-all"
          aria-label="Next testimonial"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Testimonial Cards */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6 snap-x snap-mandatory"
      >
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-[80vw] sm:w-[400px] md:w-[500px] bg-onyx-900 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 snap-start"
          >
            <blockquote className="text-white text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              "{testimonial.quote}"
            </blockquote>
            <div>
              <p className="text-brand-400 font-medium text-sm md:text-base">{testimonial.name}</p>
              <p className="text-gray-500 text-xs md:text-sm">{testimonial.context}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Dot indicators - Mobile responsive */}
      <div className="flex justify-center gap-1.5 md:gap-2 mt-4 md:mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-brand-400 w-6 md:w-8' : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
