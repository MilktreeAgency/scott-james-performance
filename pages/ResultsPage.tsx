import React from 'react';
import { Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Section, 
  MonumentalStats,
  SignaturePhilosophyBlock,
  FullBleedHero
} from '../components/shared';

// Testimonial data - all 8 clients
const testimonials = [
  {
    id: 'ali',
    name: 'Ali D.',
    image: '/images/results/ali-d.jpg',
    result: '-16kg',
    duration: 'Ongoing',
    context: 'Online coaching',
    shortQuote: 'The biggest game changer was nutrition. He helped me understand calories, energy balance, and the importance of protein.',
    fullQuote: `I started training with Scott at a point in my life when I needed a reset, and I've never looked back. The biggest game changer was nutrition. He helped me understand calories, energy balance, and the importance of increasing my protein intake, tracking consistently, and being sensible while still enjoying the occasional treat. Cutting back on alcohol also made a huge difference.

When I began, I was 93kg with close to 20% body fat and higher visceral fat levels. Today I'm 77kg (11.97 stone), 16% body fat, lower visceral fat, and higher muscle mass. I feel healthier than I did in my 30s and 40s.

I can now compete with players half my age in tennis and padel, and I noticed a massive difference in my performance when I was still playing football.

Scott, thank you legend!`,
    stats: {
      weightLost: '16kg',
      bodyFat: '16%',
      highlight: 'Competing with players half his age'
    }
  },
  {
    id: 'laurie',
    name: 'Laurie W.',
    image: '/images/results/laurie-w.jpg',
    result: '',
    duration: '12 months',
    context: 'Fat loss coaching',
    shortQuote: 'The structured approach made all the difference. No more guessing, just follow the plan and trust the process.',
    fullQuote: 'The structured approach made all the difference. No more guessing, just follow the plan and trust the process. I learned how to eat properly rather than just following rules. A year later, I\'m down 3 stone and I\'ve kept it off because nothing feels extreme or unsustainable.'
  },
  {
    id: 'helen',
    name: 'Jenna R.',
    image: '/images/results/helen-r.jpg',
    result: '',
    duration: '6 months',
    context: 'Performance coaching',
    shortQuote: 'As a busy mum, Scott has given me structure, a clear plan and stability - while also pushing me out of my comfort zone.',
    fullQuote: 'As a busy mum, Scott has given me structure, a clear plan and stability - while also pushing me out of my comfort zone.'
  },
  {
    id: 'penny',
    name: 'Penny F.',
    image: '/images/results/penny-f.jpg',
    result: '',
    duration: 'Online coaching',
    context: '80/20 method',
    imagePosition: 'top',
    shortQuote: 'I\'ve learned how to follow a balanced, sustainable approach. I genuinely feel like a brand new woman.',
    fullQuote: 'Scott\'s online coaching programme completely changed the way I approach food and training. I\'ve learned how to follow a balanced, sustainable approach using the 80/20 method, which has made everything feel realistic and maintainable. I\'ve lost 7kg and genuinely feel like a brand new woman.'
  },
  {
    id: 'phil',
    name: 'Phil J.',
    image: '/images/results/phil-j.jpg',
    result: 'Life changed',
    duration: 'Years',
    context: 'Long-term client',
    shortQuote: 'He\'s genuinely changed my life. The way I train, the way I feel, and how I manage my busy schedule.',
    fullQuote: 'I\'ve worked with Scott for years and he\'s genuinely changed my life. The way I train, the way I feel, and how I manage my busy schedule have all improved massively. We\'ve built a great friendship beyond training, and I honestly couldn\'t recommend him more.'
  },
  {
    id: 'andrew',
    name: 'Andrew W.',
    image: '/images/results/andrew-w.jpg',
    result: '-14kg',
    duration: '4 months',
    context: 'HYROX training',
    shortQuote: 'In just four months I lost 14kg and finally built a routine that worked around my lifestyle.',
    fullQuote: 'For years I felt inconsistent and lost with my training. My routine had no structure, I travelled a lot, and my nutrition was all over the place. After reaching out to Scott, everything changed. In just four months I lost 14kg and finally built a routine that worked around my lifestyle. He even encouraged me to sign up for my first HYROX session, which was something I never thought I\'d do. Scott hasn\'t just improved my knowledge of food and training, he\'s given me my life back.'
  },
  {
    id: 'toby',
    name: 'Toby A.',
    image: '/images/results/toby-a.jpg',
    result: 'Full rebuild',
    duration: 'Rehabilitation',
    context: 'Injury rehab',
    shortQuote: 'He helped me overcome old niggles, build solid foundations, and push to levels I didn\'t think I\'d reach again.',
    fullQuote: 'I can\'t thank Scott enough for everything he\'s done for me. What started as rehabbing my knees and ankles so I could work pain free turned into a complete rebuild of my strength, fitness, and confidence. He helped me overcome old niggles, build solid foundations, and push to levels I didn\'t think I\'d reach again. More than anything, he\'s strengthened my mindset and kept me accountable throughout. I wouldn\'t be where I am today without his support and belief in me.'
  }
];

// Featured testimonial (Ali D.)
const featuredTestimonial = testimonials[0];

// Grid testimonials (remaining 7)
const gridTestimonials = testimonials.slice(1);

export default function ResultsPage({ onApply }: { onApply: () => void }) {
  return (
    <>
      {/* Hero - Full Bleed */}
      <FullBleedHero
        imageSrc="/images/results/hero.jpg"
        imageAlt="Client success stories"
        badge="Client Results"
        title={<>Real people.<br /><span className="text-brand-400">Real progress.</span></>}
        subtitle="Not just before-and-after photos. These are stories of sustainable change - weight loss that stayed off, performance that improved, and habits that stuck."
        height="tall"
        overlayIntensity="heavy"
      />

      {/* Monumental Stats - Only on this page */}
      <MonumentalStats
        stats={[
          { value: "200+", label: "Clients Coached", subtext: "Over 10 years" },
          { value: "10+", label: "Years Coaching", subtext: "Full-time since 2014" },
          { value: "50+", label: "Hyrox Finishers", subtext: "Competition ready" },
          { value: "All", label: "Ability Levels", subtext: "Beginners to athletes" }
        ]}
      />

      {/* Transformation Grid - 7 testimonials */}
      <Section spacing="large">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-brand-400 text-sm tracking-widest uppercase mb-6">Client Stories</p>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">
              In their own words
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Every client has a unique story. Here's what they have to say about their journey.
            </p>
          </div>

          {/* Grid layout - responsive with featured cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridTestimonials.map((testimonial, index) => {
              // First two cards get special treatment on larger screens
              const isHighlighted = index < 2;
              
              return (
                <div 
                  key={testimonial.id}
                  className={`group bg-onyx-800 rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 ${
                    isHighlighted ? 'lg:first:col-span-1' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ objectPosition: (testimonial as any).imagePosition ?? 'center' }}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx-900 via-onyx-900/05 to-transparent" />
                    
                    {/* Result badge */}
                    {testimonial.result && (
                      <div className="absolute top-4 right-4 bg-onyx-950/80 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
                        <span className="text-brand-400 text-sm font-medium">{testimonial.result}</span>
                      </div>
                    )}

                    {/* Content overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-white font-medium text-lg mb-1">{testimonial.name}</h3>
                      <p className="text-gray-400 text-sm">{testimonial.context}</p>
                    </div>
                  </div>

                  {/* Quote section */}
                  <div className="p-5 pt-4">
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                      "{testimonial.shortQuote}"
                    </p>
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
                      <span className="text-xs text-gray-500">{testimonial.duration}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Featured Transformation - Ali D. */}
      <Section dark spacing="large">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-brand-400 text-sm tracking-widest uppercase mb-6">Featured Transformation</p>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">
              A complete lifestyle change
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[535/520] rounded-3xl overflow-hidden border border-white/10">
                <img 
                  src={featuredTestimonial.image} 
                  alt={featuredTestimonial.name}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-6 bg-onyx-800 rounded-2xl p-6 border border-white/10 shadow-2xl hidden md:block">
                <div className="text-center">
                  <p className="text-4xl font-light text-white tracking-tight mb-1">{featuredTestimonial.stats?.weightLost}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Lost</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <div className="relative mb-8">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-brand-500/20" />
                <blockquote className="text-xl md:text-2xl font-light text-white leading-relaxed pl-6">
                  "{featuredTestimonial.fullQuote?.split('\n\n')[0]}"
                </blockquote>
              </div>

              <div className="space-y-4 text-gray-400 leading-relaxed mb-8">
                {featuredTestimonial.fullQuote?.split('\n\n').slice(1).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                <div>
                  <p className="text-brand-400 font-medium text-lg">{featuredTestimonial.name}</p>
                  <p className="text-gray-500 text-sm">{featuredTestimonial.context}</p>
                </div>
                <div className="flex gap-6 ml-auto">
                  <div className="text-center">
                    <p className="text-2xl font-light text-white">93kg</p>
                    <p className="text-xs text-gray-500">Start</p>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div className="text-center">
                    <p className="text-2xl font-light text-brand-400">77kg</p>
                    <p className="text-xs text-gray-500">Now</p>
                  </div>
                </div>
              </div>

              {/* Mobile stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 md:hidden">
                <div className="bg-onyx-800 rounded-xl p-4 text-center border border-white/10">
                  <p className="text-xl font-light text-white">{featuredTestimonial.stats?.weightLost}</p>
                  <p className="text-xs text-gray-500">Lost</p>
                </div>
                <div className="bg-onyx-800 rounded-xl p-4 text-center border border-white/10">
                  <p className="text-xl font-light text-white">{featuredTestimonial.stats?.bodyFat}</p>
                  <p className="text-xs text-gray-500">Body Fat</p>
                </div>
                <div className="bg-onyx-800 rounded-xl p-4 text-center border border-white/10">
                  <p className="text-xl font-light text-white">20%</p>
                  <p className="text-xs text-gray-500">Before</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Long-Term Client Signature Block */}
      <SignaturePhilosophyBlock
        quote="The clients who get the best results are the ones who stay. Most of my clients train with me for 1-3+ years, not weeks."
        attribution="Scott James"
        context="On long-term coaching relationships"
      />

      {/* CTA Section */}
      <Section spacing="large">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-400 text-sm tracking-widest uppercase mb-6">Ready to start?</p>
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-6">
            Your transformation begins here
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Whether you prefer in-person training or the flexibility of online coaching, there's a programme designed to fit your lifestyle and goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/personal-training"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-onyx-950 font-medium rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              Personal Training
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/online-coaching"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Online Coaching
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Section>

    </>
  );
}
