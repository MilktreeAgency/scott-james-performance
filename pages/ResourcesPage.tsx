import React from 'react';
import { ArrowRight, Download, Mail, CheckCircle2, Clock, Tag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section, FullBleedHero } from '../components/shared';

// Article data structure
export const articles = [
  {
    slug: 'recovery-adaptation-training-harder-smarter',
    title: 'Recovery and Adaptation: Why Training Harder Isn\'t Always Better',
    excerpt: 'Understanding the science of recovery and adaptation is the key to consistent progress. Learn how to recognize when to push, when to back off, and how to structure training that actually builds on itself instead of burying you.',
    category: 'Performance',
    categorySlug: 'performance',
    readingTime: '11 min read',
    featured: true,
    date: '2026-02-12'
  },
  {
    slug: 'track-macros-without-losing-mind',
    title: 'How to Track Macros Without Losing Your Mind',
    excerpt: 'Practical macro tracking for people who have lives. Learn when tracking helps, when it doesn\'t, and how to build nutrition habits that don\'t require weighing every gram.',
    category: 'Fat Loss',
    categorySlug: 'fat-loss',
    readingTime: '8 min read',
    featured: false,
    date: '2026-01-10',
    image: '/images/unused/1.jpg'
  },
  {
    slug: 'hyrox-training-101-first-race',
    title: 'Hyrox Training 101: How to Prepare for Your First Race',
    excerpt: 'Everything you need to know about preparing for your first Hyrox event. From training structure to race day strategy, this guide covers the essentials for beginner competitors.',
    category: 'Hyrox',
    categorySlug: 'hyrox',
    readingTime: '15 min read',
    featured: true,
    date: '2026-01-08'
  },
  {
    slug: 'hyrox-workout-split-running-functional',
    title: 'The Hyrox Workout Split: Balancing Running and Functional Fitness',
    excerpt: 'How to structure your weekly training to develop both the running endurance and functional strength that Hyrox demands. Programming principles for intermediate competitors.',
    category: 'Hyrox',
    categorySlug: 'hyrox',
    readingTime: '10 min read',
    featured: false,
    date: '2026-01-05'
  },
  {
    slug: 'strength-training-after-40-beginners-guide',
    title: 'Starting Strength Training After 40: A Complete Beginner\'s Guide',
    excerpt: 'It\'s never too late to start. Learn how to begin strength training safely and effectively in your 40s, 50s, and beyond. Age-appropriate training that builds confidence and results.',
    category: 'Beginners',
    categorySlug: 'beginners',
    readingTime: '14 min read',
    featured: true,
    date: '2026-01-02'
  },
  {
    slug: 'how-often-should-you-train-busy-people',
    title: 'How Often Should You Train? A Realistic Guide for Busy People',
    excerpt: 'The honest answer to the most common training question. Learn how to determine the right training frequency for your goals, schedule, and recovery capacity.',
    category: 'Beginners',
    categorySlug: 'beginners',
    readingTime: '7 min read',
    featured: false,
    date: '2025-12-28'
  }
];

// Category filter options
const categories = [
  { slug: 'all', label: 'All Articles' },
  { slug: 'performance', label: 'Performance' },
  { slug: 'fat-loss', label: 'Fat Loss' },
  { slug: 'hyrox', label: 'Hyrox' },
  { slug: 'beginners', label: 'Beginners' }
];

// Article Card Component
const ArticleCard = ({ article }: { article: typeof articles[0] }) => {
  // Custom positioning for different articles
  let imagePosition = 'object-top'; // default
  
  if (article.categorySlug === 'hyrox') {
    imagePosition = 'object-center';
  }

  const imageSrc = (article as any).image || `/images/resources/articles/${article.slug}.jpg`;
  
  return (
    <Link 
      to={`/resources/${article.slug}`}
      className="group block bg-onyx-900 rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
    >
      {/* Featured Image */}
      <div className="relative aspect-[16/9]">
        <img 
          src={imageSrc}
          alt={article.title}
          className={`w-full h-full object-cover ${imagePosition}`}
        />
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-onyx-950/80 backdrop-blur-sm rounded-full text-[10px] font-medium text-brand-400 uppercase tracking-widest border border-white/10">
            {article.category}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="font-light text-white mb-3 group-hover:text-brand-400 transition-colors text-xl">
          {article.title}
        </h3>
        <p className="text-gray-400 leading-relaxed mb-4 text-sm">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {article.readingTime}
          </span>
          <span>{new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
        </div>
      </div>
    </Link>
  );
};

export default function ResourcesPage({ onApply }: { onApply: () => void }) {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setSubmitted(true);
  };

  // Filter articles by category
  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.categorySlug === activeCategory);

  // Get featured article for hero
  const featuredArticle = articles.find(a => a.featured);

  return (
    <>
      {/* Hero - Full Bleed */}
      <FullBleedHero
        imageSrc="/images/resources/hero-bg.jpg"
        imageAlt="Resources and guides"
        badge="Resources & Guides"
        title={<>Practical content<br /><span className="text-brand-400">that actually helps</span></>}
        subtitle="In-depth guides on fat loss, Hyrox training, and building sustainable fitness habits. No fluff, no sales pitches - just useful information based on what actually works."
        height="medium"
        overlayIntensity="heavy"
        imagePosition="center 40%"
      />

      {/* Category Filter */}
      <Section spacing="normal">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setActiveCategory(category.slug)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.slug
                    ? 'bg-brand-500 text-white'
                    : 'bg-onyx-900 text-gray-400 border border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard 
                key={article.slug} 
                article={article}
              />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No articles in this category yet.</p>
            </div>
          )}
        </div>
      </Section>

      {/* Lead Magnet Section */}
      <Section dark spacing="large">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-400 text-sm tracking-widest uppercase mb-6">Free Download</p>
              <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-6">
                The Sustainable Fat Loss Guide
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                A practical guide to understanding calories, building nutrition habits, and training for sustainable fat loss. Everything you need to know to get started - in one comprehensive PDF.
              </p>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  Calorie deficit fundamentals explained simply
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  Practical nutrition habits that stick
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  Training principles for fat loss
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  Common mistakes and how to avoid them
                </li>
              </ul>
            </div>

            {/* Download form */}
            <div className="bg-onyx-950 rounded-3xl p-8 border border-white/10">
              <img 
                src="/images/resources/fat-loss-guide-cover.jpg"
                alt="Fat Loss Guide cover"
                className="w-full aspect-[16/9] object-cover rounded-2xl mb-8"
                style={{ objectPosition: 'center 40%' }}
              />

              {submitted ? (
                <div className="text-center py-4">
                  <CheckCircle2 className="w-12 h-12 text-brand-500 mx-auto mb-4" />
                  <p className="text-white font-medium text-lg">Check your inbox</p>
                  <p className="text-gray-400 text-sm">The guide is on its way.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full bg-onyx-900 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all mb-4"
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-onyx-950 font-medium py-4 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Get the Free Guide
                  </button>
                  <p className="text-gray-600 text-xs mt-4 text-center">
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Newsletter Section */}
      <Section spacing="large">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-brand-500/10 flex items-center justify-center mx-auto mb-8">
            <Mail className="w-8 h-8 text-brand-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">
            Get notified when new articles drop
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Occasional emails with practical training and nutrition content. No spam, no sales pitches.
          </p>
          
          {submitted ? (
            <div className="bg-brand-500/10 border border-brand-500/20 rounded-3xl p-8 inline-block">
              <CheckCircle2 className="w-10 h-10 text-brand-500 mx-auto mb-4" />
              <p className="text-white font-medium text-lg">You're on the list</p>
              <p className="text-gray-400">I'll be in touch when there's something worth sharing.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 bg-onyx-900 border border-white/10 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
              />
              <button
                type="submit"
                className="bg-white text-onyx-950 font-medium px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </Section>

      {/* Subtle CTA */}
      <section className="py-24 bg-onyx-950 border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-gray-400 mb-6">
            Want personalised coaching, not just general advice?
          </p>
          <Link 
            to="/apply"
            className="inline-flex items-center gap-2 text-brand-400 font-medium hover:gap-3 transition-all text-lg"
          >
            Apply for coaching <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
