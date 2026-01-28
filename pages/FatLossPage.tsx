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
      {/* Hero - Full Bleed with action imagery */}
      <FullBleedHero
        imageSrc="/fat-loss-training-hero.jpg"
        imageAlt="Fat loss lifestyle training"
        badge="Fat Loss Coaching"
        title={<>Sustainable fat loss<br /><span className="text-brand-400">for busy adults</span></>}
        subtitle="No crash diets. No extreme programmes. Just structured coaching that helps you lose weight and keep it off - while still living your life."
        height="tall"
        overlayIntensity="heavy"
      />

      {/* Binary Filter */}
      <BinaryFilter
        forYou={{
          title: "This is for you if...",
          items: [
            "You're a busy professional or parent with limited time",
            "You've tried diets before that didn't stick long-term",
            "You want to lose weight without giving up your social life",
            "You're looking for structure and accountability",
            "You're willing to commit to consistent effort over months",
            "You want to understand why things work, not just be told what to do"
          ]
        }}
        notForYou={{
          title: "This isn't for you if...",
          items: [
            "You're looking for a quick fix or rapid transformation",
            "You want results with minimal effort or commitment",
            "You're only willing to train once a week with no other activity",
            "You want someone to just give you a meal plan and disappear",
            "You're not ready to make changes to your nutrition habits"
          ],
          note: "I'm direct about this because I want to work with people who will actually get results."
        }}
      />

      {/* Philosophy Quote */}
      <SignaturePhilosophyBlock
        quote="I'm not going to give you a 1,200 calorie diet and make you do HIIT every day. We work at a pace you can maintain."
      />

      {/* Process - 3 steps */}
      <ProcessJourney
        title="How fat loss coaching works"
        subtitle="This isn't a templated programme. It's coaching that adapts to your life, your preferences, and your progress."
        steps={[
          {
            number: "1",
            title: "Sustainable progress over intensity",
            description: "We work at a pace you can maintain, making gradual changes that add up over time. This means you actually keep the weight off."
          },
          {
            number: "2",
            title: "Real-time adaptation",
            description: "Life happens. Work gets busy, kids get sick, stress levels fluctuate. Your coaching adapts accordingly. If you're having a tough week, we adjust."
          },
          {
            number: "3",
            title: "Nutrition that fits your life",
            description: "No food is banned. No ridiculous restrictions. I'll teach you how to eat in a way that supports your goals while still enjoying meals out."
          }
        ]}
      />

      {/* Commitment Contract */}
      <CommitmentContract
        heading="What commitment looks like"
        subheading="I'm upfront about what's required. This helps both of us understand if we're a good fit."
        commitments={[
          {
            title: "Training Frequency",
            description: "Minimum 2-3 structured training sessions per week, plus some form of daily movement. Less than this and results will be slow."
          },
          {
            title: "Communication",
            description: "Regular check-ins - at least weekly. You need to be responsive and honest about what's happening. Coaching only works if I know what's going on."
          },
          {
            title: "Timeline",
            description: "Think months, not weeks. Sustainable fat loss takes time. Most clients see meaningful, lasting results over 3-6 months of consistent work."
          }
        ]}
      />

      {/* Visual Break - Lifestyle Imagery with ImageTextBlock */}
      <Section dark spacing="large">
        <div className="max-w-6xl mx-auto">
          <ImageTextBlock
            imageSrc="/fat-loss-1.jpg"
            imageAlt="Training that fits your life"
            badge="The Reality"
            title="Training that fits your actual life"
            imagePosition="right"
            aspectRatio="4/3"
          >
            <p>
              You don't need to spend hours in the gym or eat chicken and broccoli every meal. Fat loss coaching is about finding what works for your schedule, your preferences, and your reality.
            </p>
            <p>
              Whether you're a busy parent juggling school runs, a professional with a demanding job, or someone who's tried everything before - the approach adapts to you.
            </p>
          </ImageTextBlock>
        </div>
      </Section>

      {/* Apply Now CTA Section */}
      <Section spacing="large">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-brand-950/30 to-onyx-900 rounded-4xl p-12 md:p-16 border border-brand-500/20">
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-6">
              Ready to start your fat loss journey?
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              If you're committed to sustainable change and ready to put in consistent effort, let's talk about how coaching can help you achieve your goals.
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
            name="Sarah M."
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

    </>
  );
}
