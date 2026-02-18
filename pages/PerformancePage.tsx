import React from 'react';
import { ArrowRight, Trophy, Activity, Zap, Target, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Section, 
  BinaryFilter,
  TierPresentation,
  ProofTestimonial,
  SignaturePhilosophyBlock,
  FullBleedHero,
  ImagePlaceholder,
  ImageTextBlock
} from '../components/shared';

export default function PerformancePage({ onApply }: { onApply: () => void }) {
  return (
    <>
      {/* Hero - Full Bleed with athletic action imagery */}
      <FullBleedHero
        imageSrc="/images/performance/hero.jpg"
        imageAlt="Performance coaching"
        badge="Performance Coaching"
        title={<>Performance coaching<br /><span className="text-brand-400">for serious athletes</span></>}
        subtitle="Structured programming for hybrid endurance athletes, including HYROX, ATHX Games, marathon runners, and sport-specific coaching."
        height="tall"
        overlayIntensity="heavy"
      >
        {/* Inline stats */}
        <p className="text-gray-500 text-sm mt-8">
          <span className="text-white">50+</span> Hyrox finishers coached · <span className="text-white">Zero</span> race-day DNFs · <span className="text-white">10+</span> years experience
        </p>
      </FullBleedHero>

      {/* Binary Filter */}
      <BinaryFilter
        forYou={{
          title: "This is for you if...",
          items: [
            "You're training for HYROX, ATHX Games, marathons, or similar competitive events",
            "You have existing training experience and want structured progression",
            "You're a hybrid endurance athlete looking for performance optimisation",
            "You want periodised programming, not random workouts",
            "You understand that performance requires consistent, long-term work",
            "You're ready to train 4+ times per week"
          ]
        }}
        notForYou={{
          title: "This isn't for you if...",
          items: [
            "You're looking for general fitness (see fat loss coaching)",
            "You don't have a training foundation or movement competency",
            "You want quick results without the training volume",
            "You're not willing to follow structured programming",
            "You can't commit to consistent training over months"
          ],
          note: "Performance coaching requires a higher baseline. If you're newer to training, start with general coaching first."
        }}
      />

      {/* Hybrid Endurance Athletes Section */}
      <Section spacing="large">
        <div className="max-w-6xl mx-auto">
          <ImageTextBlock
            imageSrc="/images/performance/who-its-for.jpg"
            imageAlt="Hybrid endurance athlete training"
            badge="Who We Coach"
            title="Hybrid Endurance Athletes"
            imagePosition="left"
            aspectRatio="4/5"
          >
            <p>
              Whether you're preparing for HYROX, competing in ATHX Games, training for a marathon, or pursuing sport-specific goals - structured programming makes the difference between showing up and performing.
            </p>
            <p>
              Hybrid endurance athletes need a different approach. You're not just building endurance or just building strength - you need both, balanced intelligently around your competition calendar.
            </p>
          </ImageTextBlock>
        </div>
      </Section>

      {/* Structured Programming Section */}
      <Section dark spacing="large">
        <div className="max-w-6xl mx-auto">
          <ImageTextBlock
            imageSrc="/images/performance/training-approach.jpg"
            imageAlt="Structured training programming"
            badge="Our Approach"
            title="Built Around Your Calendar"
            imagePosition="right"
            aspectRatio="4/5"
          >
            <p>
              Every performance programme is periodised around your competition schedule. Base building phases, intensity blocks, peak weeks, and intelligent tapers - all timed to have you performing when it matters.
            </p>
            <p>
              This isn't random workouts that leave you constantly fatigued. It's structured progression that builds capacity while managing recovery.
            </p>
          </ImageTextBlock>
        </div>
      </Section>

      {/* Methodology - Simplified */}
      <Section dark spacing="large">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-brand-400 text-sm tracking-widest uppercase mb-6">The System</p>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">
              How performance coaching works
            </h2>
            <p className="text-lg text-gray-400">
              Structured programming built around your competition calendar, current abilities, and performance goals.
            </p>
          </div>

          {/* Key principles - cleaner layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Periodised training blocks",
                desc: "Base building, intensity phases, peak and taper - all structured around your event calendar."
              },
              {
                title: "Injury-aware programming",
                desc: "We build in prehab work, monitor fatigue, and adjust volume when needed. Smart training, not just hard training."
              },
              {
                title: "Movement quality emphasis",
                desc: "Even at the performance level, we don't skip the fundamentals. Clean movement patterns under fatigue separate good from great."
              },
              {
                title: "Knowing when to pull back",
                desc: "Performance coaching isn't just about training harder. It's knowing when to dial things back for recovery, life stress, or competition taper."
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-brand-500" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Philosophy Quote */}
      <SignaturePhilosophyBlock
        quote="The goal is to keep you training consistently, not push you until you break."
      />

      {/* Tier Presentation */}
      <TierPresentation
        title="Two levels of performance coaching"
        subtitle="Choose based on your goals, experience level, and how much support you need."
        tiers={[
          {
            badge: "Signature",
            badgeClassName: "bg-brand-900/30 text-brand-400 border border-brand-500/20",
            name: "Performance Coaching",
            description: "Structured periodised programming for athletes with competition goals.",
            features: [
              "Periodised training programmes",
              "Weekly check-ins and adjustments",
              "Competition prep support",
              "Nutrition guidance"
            ],
            note: "Suitable for athletes with a training foundation who can follow programming independently.",
            highlighted: false
          },
          {
            badge: "Elite",
            badgeClassName: "bg-brand-900/30 text-brand-400 border border-brand-500/20",
            name: "Elite Performance",
            description: "High-touch coaching for serious competitors. Complete programme customisation.",
            features: [
              "Everything in Signature",
              "Multiple weekly check-ins",
              "Day-to-day communication access",
              "Detailed performance analysis",
              "Race-day strategy and support"
            ],
            note: "Application-only. Pricing discussed after initial conversation.",
            highlighted: true
          }
        ]}
        onApply={onApply}
      />

      {/* Race Day Preparation Section */}
      <Section spacing="large">
        <div className="max-w-6xl mx-auto">
          <ImageTextBlock
            imageSrc="/images/performance/hero.jpg"
            imageAlt="Race day preparation and strategy"
            badge="Peak Performance"
            title="From Training to Race Day"
            imagePosition="right"
            aspectRatio="4/5"
          >
            <p>
              The taper phase is where months of work come together. We carefully reduce volume while maintaining intensity, ensuring you arrive on race day fresh but sharp.
            </p>
            <p>
              Elite tier athletes get race-day strategy support - pacing plans, warm-up protocols, and nutrition timing. Every detail matters when performance counts.
            </p>
          </ImageTextBlock>
        </div>
      </Section>

      {/* Proof Section */}
      <Section spacing="large">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-brand-400 text-sm tracking-widest uppercase mb-6">Results</p>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">Performance results</h2>
          </div>

          {/* Featured Testimonial */}
          <ProofTestimonial
            featured
            quote="I'd done a couple of Hyrox events before working with Scott but my times had plateaued. The structured programming made all the difference - dropped 8 minutes off my time in one training block."
            name="Chris P."
            context="Hyrox competitor, 2 years training"
            metric={{ value: "-8 min", label: "PB improvement" }}
          />

          <div className="text-center mt-12">
            <Link 
              to="/results"
              className="inline-flex items-center gap-2 text-brand-400 font-medium hover:gap-3 transition-all"
            >
              View more results <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>

    </>
  );
}
