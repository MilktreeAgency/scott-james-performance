import React from 'react';
import { ArrowRight, Flame, X, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Section, 
  Badge,
  BinaryFilter,
  ProcessJourney,
  CommitmentContract,
  ProofTestimonial,
  SignaturePhilosophyBlock,
  FullBleedHero,
  ImageTextBlock,
  ImagePlaceholder
} from '../components/shared';

export default function FatLossPage({ onApply }: { onApply: () => void }) {
  return (
    <>
      {/* PHASE 1: QUALIFY & CAPTURE ATTENTION */}
      
      {/* Hero - Full Bleed with action imagery */}
      <FullBleedHero
        imageSrc="/images/fat-loss/fat-loss-hero.jpg"
        imageAlt="Fat loss lifestyle training"
        badge="Fat Loss Coaching"
        title={<>Sustainable fat loss<br /><span className="text-brand-400">for busy adults</span></>}
        subtitle="No crash diets. No extreme programmes. Just structured coaching that helps you lose weight and keep it off - while still living your life."
        height="tall"
        overlayIntensity="heavy"
        imagePosition="top"
      />

      {/* Binary Filter */}
      <BinaryFilter
        forYou={{
          title: "This is for you if...",
          items: [
            "You're a busy professional or parent with limited time",
            "You've tried diets before that didn't stick",
            "You want structure and accountability",
            "You're willing to commit to consistent effort over months",
            "You want to learn why things work, not just follow orders"
          ]
        }}
        notForYou={{
          title: "This isn't for you if...",
          items: [
            "You're looking for a quick fix or rapid transformation",
            "You want results with minimal effort",
            "You're not ready to make nutrition changes",
            "You want a meal plan with no ongoing support"
          ],
          note: "I'm direct about this because I want to work with people who will actually get results."
        }}
      />

      {/* PHASE 2: EDUCATE & BUILD TRUST */}

      {/* Sustainable Approach Section */}
      <Section spacing="large">
        <div className="max-w-6xl mx-auto">
          <ImageTextBlock
            imageSrc="/images/fat-loss/hero.jpg"
            imageAlt="Sustainable fat loss approach"
            badge="Our Approach"
            title="Sustainable Weight Loss"
            imagePosition="left"
            aspectRatio="4/5"
          >
            <p>
              No 1,200 calorie diets. No food bans. No spending hours in the gym. Fat loss coaching is about building habits you can maintain while still living your life.
            </p>
            <p>
              Whether you're balancing work, family, or both - the approach adapts to your reality, not the other way around.
            </p>
          </ImageTextBlock>
        </div>
      </Section>

      {/* Process - 3 steps */}
      <ProcessJourney
        title="How fat loss coaching works"
        subtitle="Coaching that adapts to your life, your preferences, and your progress."
        steps={[
          {
            number: "1",
            title: "Sustainable progress over intensity",
            description: "Gradual changes at a pace you can maintain, so you actually keep the weight off."
          },
          {
            number: "2",
            title: "Real-time adaptation",
            description: "Life happens. Your coaching adapts when work gets busy, stress levels change, or you need to adjust."
          },
          {
            number: "3",
            title: "Nutrition that fits your life",
            description: "No food bans or extreme restrictions. Learn to eat in a way that supports your goals while still enjoying life."
          }
        ]}
      />

      {/* Training Approach Section */}
      <Section dark spacing="large">
        <div className="max-w-6xl mx-auto">
          <ImageTextBlock
            imageSrc="/images/fat-loss/training-approach.jpg"
            imageAlt="Fat loss training approach"
            badge="Training"
            title="Training That Works For You"
            imagePosition="left"
            aspectRatio="4/5"
          >
            <p>
              2-3 structured sessions per week, focused on building strength and movement quality. No endless cardio or grueling workouts that leave you exhausted.
            </p>
            <p>
              Training is programmed around your schedule, experience level, and any injuries or limitations you're working with.
            </p>
          </ImageTextBlock>
        </div>
      </Section>

      {/* Realistic Timeline Section */}
      <Section spacing="large">
        <div className="max-w-6xl mx-auto">
          <ImageTextBlock
            imageSrc="/images/fat-loss/timeline-results.jpg"
            imageAlt="Fat loss results and timeline"
            badge="Timeline"
            title="Realistic Expectations"
            imagePosition="right"
            aspectRatio="4/5"
          >
            <p>
              Most clients see meaningful results over 3-6 months of consistent work. This isn't a 12-week transformation - it's sustainable change that actually lasts.
            </p>
            <p>
              You'll learn how to maintain the weight loss long-term, not just achieve it temporarily.
            </p>
          </ImageTextBlock>
        </div>
      </Section>

      {/* PHASE 3: OVERCOME OBJECTIONS */}

      {/* Philosophy Quote */}
      <SignaturePhilosophyBlock
        quote="We work at a pace you can actually maintain."
      />

      {/* Commitment Contract */}
      <CommitmentContract
        heading="What's required"
        commitments={[
          {
            title: "Training & Consistency",
            description: "2-3 training sessions per week plus daily movement. Sustainable fat loss takes months of consistent work."
          },
          {
            title: "Communication & Honesty",
            description: "Weekly check-ins where you're responsive and honest about what's happening. Coaching only works if I know what's going on."
          }
        ]}
      />

      {/* PHASE 4: PROOF & CONVERT */}

      {/* Proof Section - Single featured testimonial */}
      <Section spacing="large">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-brand-400 text-sm tracking-widest uppercase mb-6">Results</p>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">What clients have achieved</h2>
          </div>

          {/* Featured Testimonial */}
          <ProofTestimonial
            featured
            quote="I'd tried every diet going - keto, intermittent fasting, you name it. The difference with Scott was that we built habits gradually. A year later, I'm down 3 stone and I've kept it off because nothing feels extreme."
            name="Emma L."
            context="Working mum, lost 3 stone over 12 months"
            metric={{ value: "3st", label: "Lost & maintained" }}
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

      {/* Apply Now CTA Section - Final Push */}
      <Section spacing="large">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-brand-950/30 to-onyx-900 rounded-4xl p-12 md:p-16 border border-brand-500/20">
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-6">
              Ready to start?
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              If you're committed to sustainable change and consistent effort, let's talk.
            </p>
            <button
              onClick={onApply}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-onyx-950 font-medium rounded-full hover:bg-gray-100 transition-all duration-300 text-lg"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </Section>

    </>
  );
}
