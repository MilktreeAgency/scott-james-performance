import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';

// ============================================
// SIGNATURE PHILOSOPHY BLOCK
// Full-width section with oversized pull quote
// Light & Elegant typography
// ============================================
interface SignaturePhilosophyBlockProps {
  quote: string;
  attribution?: string;
  context?: string;
}

export const SignaturePhilosophyBlock = ({ quote, attribution, context }: SignaturePhilosophyBlockProps) => (
  <section className="py-36 bg-onyx-950 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-950/20 via-transparent to-transparent" />
    <div className="max-w-5xl mx-auto px-6 relative">
      <div className="w-12 h-px bg-brand-500/40 mb-16" />
      <blockquote className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-[1.15] tracking-tight mb-16">
        "{quote}"
      </blockquote>
      {(attribution || context) && (
        <div className="flex items-center gap-4">
          {attribution && (
            <p className="text-brand-400 font-medium text-sm">{attribution}</p>
          )}
          {context && (
            <>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <p className="text-gray-500 text-sm">{context}</p>
            </>
          )}
        </div>
      )}
    </div>
  </section>
);

// ============================================
// QUIET CREDIBILITY SECTION
// Minimal stat display - Light typography
// Now with inline prose option
// ============================================
interface CredentialItem {
  value: string;
  label: string;
}

interface QuietCredibilityProps {
  credentials: CredentialItem[];
  className?: string;
  variant?: 'display' | 'inline';
}

export const QuietCredibility = ({ credentials, className = "", variant = 'display' }: QuietCredibilityProps) => {
  // Inline variant - weaves stats into prose
  if (variant === 'inline') {
    return (
      <p className={`text-gray-400 text-lg ${className}`}>
        {credentials.map((item, index) => (
          <span key={index}>
            <span className="text-white font-medium">{item.value}</span> {item.label.toLowerCase()}
            {index < credentials.length - 1 && <span className="text-gray-600"> · </span>}
          </span>
        ))}
      </p>
    );
  }
  
  // Display variant - large numbers
  return (
    <div className={`py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-baseline gap-12 md:gap-8">
          {credentials.map((item, index) => (
            <div key={index} className="text-center md:text-left">
              <p className="text-5xl md:text-7xl font-light text-white tracking-tight mb-2">{item.value}</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================
// BINARY FILTER SECTION
// "This is for you / This isn't for you"
// Unified brand styling
// ============================================
interface BinaryFilterProps {
  forYou: {
    title: string;
    items: string[];
  };
  notForYou: {
    title: string;
    items: string[];
    note?: string;
  };
}

export const BinaryFilter = ({ forYou, notForYou }: BinaryFilterProps) => {
  // Unified brand styling
  const styles = {
    gradient: 'from-brand-950/40 to-onyx-900',
    border: 'border-brand-500/20',
    iconBg: 'bg-brand-500/20',
    iconColor: 'text-brand-500',
    checkColor: 'text-brand-500',
    rounded: 'rounded-3xl'
  };

  return (
    <section className="py-28 bg-onyx-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* For You */}
          <div className={`bg-gradient-to-br ${styles.gradient} p-10 lg:p-14 lg:rounded-l-3xl border ${styles.border}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className={`w-10 h-10 ${styles.rounded} ${styles.iconBg} flex items-center justify-center`}>
                <CheckCircle2 className={`w-5 h-5 ${styles.iconColor}`} />
              </div>
              <h3 className="text-lg font-medium text-white">{forYou.title}</h3>
            </div>
            <ul className="space-y-5">
              {forYou.items.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className={`w-5 h-5 ${styles.checkColor} flex-shrink-0 mt-0.5`} />
                  <span className="text-gray-200 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div className="bg-onyx-900/50 p-10 lg:p-14 lg:rounded-r-3xl border border-white/5 lg:border-l-0">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center">
                <X className="w-5 h-5 text-gray-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-400">{notForYou.title}</h3>
            </div>
            <ul className="space-y-5">
              {notForYou.items.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <X className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-500 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            {notForYou.note && (
              <p className="text-gray-600 text-sm mt-8 italic">{notForYou.note}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// PROCESS JOURNEY
// Connected visual steps - refined typography
// ============================================
interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessJourneyProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
}

export const ProcessJourney = ({ title, subtitle, steps }: ProcessJourneyProps) => {
  // Unified brand colors
  const colors = { 
    line: 'from-brand-500/50 via-brand-500/20', 
    node: 'border-brand-500/30', 
    text: 'text-brand-400' 
  };

  return (
    <section className="py-28 bg-onyx-950">
      <div className="max-w-5xl mx-auto px-6">
        {(title || subtitle) && (
          <div className="max-w-2xl mb-20">
            {title && <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">{title}</h2>}
            {subtitle && <p className="text-lg text-gray-400">{subtitle}</p>}
          </div>
        )}

        <div className="relative">
          {/* Connecting line */}
          <div className={`absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b ${colors.line} to-transparent hidden md:block`} />

          <div className="space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-0 md:pl-20 pb-12 last:pb-0">
                {/* Step number node */}
                <div className={`hidden md:flex absolute left-0 top-0 w-12 h-12 rounded-full bg-onyx-900 border ${colors.node} items-center justify-center z-10`}>
                  <span className={`${colors.text} font-medium text-lg`}>{step.number}</span>
                </div>
                
                {/* Content */}
                <div className="bg-onyx-900 rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex md:hidden items-center gap-3 mb-4">
                    <span className={`${colors.text} font-medium text-sm`}>Step {step.number}</span>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// COMMITMENT CONTRACT BLOCK
// Formal statement styling - refined
// ============================================
interface CommitmentItem {
  title: string;
  description: string;
}

interface CommitmentContractProps {
  heading: string;
  subheading?: string;
  commitments: CommitmentItem[];
}

export const CommitmentContract = ({ heading, subheading, commitments }: CommitmentContractProps) => (
  <section className="py-28 bg-onyx-900">
    <div className="max-w-4xl mx-auto px-6">
      <div className="border border-white/10 rounded-4xl p-10 md:p-16 bg-onyx-950/50 relative overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-32 h-32 border-l border-b border-white/5 rounded-bl-3xl" />
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 italic tracking-tight">{heading}</h2>
          {subheading && <p className="text-gray-400">{subheading}</p>}
        </div>

        <div className="space-y-10">
          {commitments.map((item, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full border border-brand-500/20 flex items-center justify-center">
                <span className="text-brand-400 text-sm font-light">{index + 1}</span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Signature line */}
        <div className="mt-16 pt-10 border-t border-white/5 text-center">
          <p className="text-gray-600 text-xs uppercase tracking-widest">This is the standard I hold myself to.</p>
        </div>
      </div>
    </div>
  </section>
);

// ============================================
// EDITORIAL STORY BLOCK
// Magazine-style narrative layout - refined typography
// Stats now inline in prose, not as visual display
// ============================================
interface EditorialStoryProps {
  badge?: string;
  badgeClassName?: string;
  title: string;
  leadParagraph: string;
  pullQuote?: string;
  sidebarImage?: { src: string; alt: string };
  bodyParagraphs: string[];
  inlineStats?: string; // e.g., "Over 10 years coaching, 200+ clients, 50+ Hyrox finishers"
}

export const EditorialStory = ({ 
  badge, 
  badgeClassName = "bg-brand-900/30 text-brand-400 border border-brand-500/20",
  title, 
  leadParagraph, 
  pullQuote, 
  sidebarImage,
  bodyParagraphs,
  inlineStats 
}: EditorialStoryProps) => (
  <section className="py-28 bg-onyx-900">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Main content */}
        <div className="lg:col-span-7">
          {badge && (
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium tracking-widest uppercase mb-8 ${badgeClassName}`}>
              {badge}
            </span>
          )}
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-8">{title}</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            {leadParagraph}
          </p>
          {bodyParagraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-400 leading-relaxed mb-6">{paragraph}</p>
          ))}
          {inlineStats && (
            <p className="text-gray-500 text-sm mt-8 pt-6 border-t border-white/5">{inlineStats}</p>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-5">
          {sidebarImage ? (
            /* Image placeholder */
            <div className="bg-gradient-to-br from-onyx-800 to-onyx-900 border border-white/10 rounded-3xl aspect-[4/5] flex items-center justify-center sticky top-32 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
              <div className="relative z-10 flex flex-col items-center gap-3 text-center px-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500 max-w-[200px] leading-relaxed">{sidebarImage.alt}</p>
              </div>
            </div>
          ) : pullQuote ? (
            /* Pull quote */
            <div className="bg-onyx-950 rounded-3xl p-10 border border-white/10 sticky top-32">
              <div className="w-10 h-px bg-brand-500/50 mb-8" />
              <blockquote className="text-2xl md:text-3xl font-light text-white leading-snug">
                "{pullQuote}"
              </blockquote>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  </section>
);

// ============================================
// TIER PRESENTATION BLOCK
// Two distinct paths - refined typography
// ============================================
interface TierOption {
  badge: string;
  badgeClassName?: string;
  name: string;
  description: string;
  features: string[];
  note?: string;
  highlighted?: boolean;
  price?: string;
  priceNote?: string;
}

interface TierPresentationProps {
  title: string;
  subtitle?: string;
  tiers: [TierOption, TierOption];
  onApply: () => void;
}

export const TierPresentation = ({ title, subtitle, tiers, onApply }: TierPresentationProps) => (
  <section className="py-28 bg-onyx-900">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">{title}</h2>
        {subtitle && <p className="text-lg text-gray-400">{subtitle}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {tiers.map((tier, index) => (
          <div 
            key={index}
            className={`relative rounded-4xl p-10 transition-all duration-300 ${
              tier.highlighted 
                ? 'bg-gradient-to-b from-onyx-900 to-onyx-950 border border-brand-500/30' 
                : 'bg-onyx-950 border border-white/10 hover:border-white/20'
            }`}
          >
            {tier.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-brand-500 text-white text-[10px] font-medium px-4 py-1.5 rounded-full uppercase tracking-widest">
                  Popular
                </span>
              </div>
            )}

            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium tracking-widest uppercase mb-6 ${tier.badgeClassName || 'bg-brand-900/30 text-brand-400 border border-brand-500/20'}`}>
              {tier.badge}
            </span>

            <h3 className="text-2xl font-light text-white mb-2">{tier.name}</h3>
            <p className="text-gray-400 mb-6">{tier.description}</p>

            {tier.price && (
              <div className="mb-8">
                <p className="text-4xl font-light text-white">{tier.price}</p>
                {tier.priceNote && <p className="text-sm text-gray-500 mt-1">{tier.priceNote}</p>}
              </div>
            )}

            <ul className="space-y-4 mb-8">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-1 ${tier.highlighted ? 'text-brand-500' : 'text-gray-600'}`} />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {tier.note && (
              <p className="text-gray-500 text-sm mb-8">{tier.note}</p>
            )}

            <button
              onClick={onApply}
              className={`w-full py-4 rounded-full font-medium transition-all duration-300 ${
                tier.highlighted
                  ? 'bg-white text-onyx-950 hover:bg-gray-100'
                  : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
              }`}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ============================================
// PROOF WITHOUT SHOUTING
// Restrained testimonial design - no photos
// ============================================
interface ProofTestimonialProps {
  quote: string;
  name: string;
  context: string;
  metric?: { value: string; label: string };
  featured?: boolean;
}

export const ProofTestimonial = ({ quote, name, context, metric, featured = false }: ProofTestimonialProps) => (
  <div className={`${featured ? 'py-16' : 'py-10'} ${featured ? '' : 'border-b border-white/5 last:border-0'}`}>
    <div className={featured ? 'max-w-4xl mx-auto text-center' : ''}>
      {featured && <div className="w-12 h-px bg-brand-500/40 mx-auto mb-12" />}
      <blockquote className={`text-white leading-relaxed mb-6 ${featured ? 'text-2xl md:text-3xl font-light' : 'text-lg font-light'}`}>
        "{quote}"
      </blockquote>
      <div className={`flex items-center gap-4 ${featured ? 'justify-center' : ''}`}>
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
);

// ============================================
// SELECTIVE CTA BLOCK
// Single CTA with qualifying statement - restrained
// ============================================
interface SelectiveCTAProps {
  qualifier: string;
  buttonText: string;
  onApply: () => void;
}

export const SelectiveCTA = ({ qualifier, buttonText, onApply }: SelectiveCTAProps) => (
  <section className="py-32 bg-onyx-950">
    <div className="max-w-2xl mx-auto px-6 text-center">
      <p className="text-lg text-gray-400 mb-10">{qualifier}</p>
      <button
        onClick={onApply}
        className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-onyx-950 font-medium rounded-full hover:bg-gray-100 transition-all duration-300 text-lg"
      >
        {buttonText}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </section>
);

// ============================================
// MONUMENTAL STATS
// Large-format stat displays - light typography
// Only use on Results page
// ============================================
interface MonumentalStat {
  value: string;
  label: string;
  subtext?: string;
}

interface MonumentalStatsProps {
  stats: MonumentalStat[];
}

export const MonumentalStats = ({ stats }: MonumentalStatsProps) => (
  <section className="py-24 bg-onyx-950 border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-5xl md:text-7xl font-light text-white tracking-tight mb-2">{stat.value}</p>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
            {stat.subtext && <p className="text-xs text-gray-600">{stat.subtext}</p>}
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ============================================
// CLIENT ARCHETYPE CARD
// Visual cards for client types - strategic icons
// ============================================
interface ClientArchetypeProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  showIcon?: boolean;
}

export const ClientArchetype = ({ icon, title, description, showIcon = false }: ClientArchetypeProps) => (
  <div className="group bg-onyx-900 rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
    {showIcon && icon && (
      <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-500 mb-6">
        {icon}
      </div>
    )}
    <h4 className="text-lg font-medium text-white mb-3">{title}</h4>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

// ============================================
// BENTO FEATURE GRID
// Asymmetric layout - reduced to 3-4 cards max
// ============================================
interface BentoFeature {
  title: string;
  description: string;
  icon?: React.ReactNode;
  iconColor?: string;
  size?: 'normal' | 'large' | 'tall';
  backgroundImage?: string;
  showIcon?: boolean;
}

interface BentoGridProps {
  features: BentoFeature[];
}

export const BentoGrid = ({ features }: BentoGridProps) => (
  <div className="grid md:grid-cols-3 gap-6 auto-rows-[280px]">
    {features.map((feature, index) => {
      const sizeClasses = {
        normal: '',
        large: 'md:col-span-2',
        tall: 'md:row-span-2'
      };
      
      return (
        <div 
          key={index}
          className={`bg-onyx-900 rounded-3xl p-10 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all duration-300 ${sizeClasses[feature.size || 'normal']}`}
        >
          {feature.backgroundImage && (
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url(${feature.backgroundImage})` }}
            />
          )}
          <div className="relative z-10 h-full flex flex-col">
            {feature.showIcon !== false && feature.icon && (
              <div className={`w-12 h-12 rounded-2xl bg-${feature.iconColor || 'brand'}-500/10 flex items-center justify-center text-${feature.iconColor || 'brand'}-500 mb-auto`}>
                {feature.icon}
              </div>
            )}
            <div className={feature.showIcon === false ? 'mt-auto' : ''}>
              <h3 className="text-xl font-medium text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);
