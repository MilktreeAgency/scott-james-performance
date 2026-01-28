import React from 'react';
import { ArrowRight, Flame, Trophy, Heart, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Section, 
  MonumentalStats,
  ProofTestimonial,
  SignaturePhilosophyBlock,
  TestimonialCarousel,
  FullBleedHero,
  TransformationCard,
  TestimonialWithPhoto
} from '../components/shared';

export default function ResultsPage({ onApply }: { onApply: () => void }) {
  return (
    <>
      {/* Hero - Full Bleed */}
      <FullBleedHero
        imageSrc="/results-hero.jpg"
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

      {/* Transformation Gallery */}
      <Section spacing="large">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-brand-400 text-sm tracking-widest uppercase mb-6">Transformations</p>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">
              Visual proof of progress
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Real transformations from clients who committed to the process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TransformationCard 
              name="Sarah M."
              duration="12 months"
              result="-3 stone"
              context="Fat loss coaching"
              afterSrc="/client-1.jpg"
            />
            <TransformationCard 
              name="James T."
              duration="8 months"
              result="-2 stone"
              context="1:1 personal training"
              afterSrc="/client-2.jpg"
            />
            <TransformationCard 
              name="Helen R."
              duration="6 months"
              result="First triathlon"
              context="Performance coaching"
              afterSrc="/client-3.jpg"
            />
            <TransformationCard 
              name="David K."
              duration="24 months"
              result="Full recovery"
              context="Stroke rehabilitation"
              afterSrc="/client-4.jpg"
            />
            <TransformationCard 
              name="Chris P."
              duration="12 months"
              result="-8 min PB"
              context="Hyrox training"
              afterSrc="/client-5.jpg"
            />
            <TransformationCard 
              name="Michelle P."
              duration="18 months"
              result="Pain-free"
              context="Post-surgery rehab"
              afterSrc="/client-6.jpg"
            />
          </div>
        </div>
      </Section>

      {/* Featured Transformation - Editorial treatment */}
      <Section spacing="large">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Main story */}
            <div className="lg:col-span-3">
              <p className="text-brand-400 text-sm tracking-widest uppercase mb-8">Featured Story</p>
              
              <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8">
                "I'd tried every diet going - keto, intermittent fasting, slimming clubs. Nothing stuck. The difference with Scott was that we built habits gradually, not all at once."
              </blockquote>
              
              <p className="text-gray-400 leading-relaxed mb-8">
                I learned how to eat properly rather than just following rules. A year later, I'm down 3 stone and I've kept it off because nothing feels extreme or unsustainable.
              </p>
              
              <div>
                <p className="text-brand-400 font-medium">Sarah M.</p>
                <p className="text-gray-500 text-sm">Working mum, started at 40</p>
              </div>
            </div>

            {/* Result card */}
            <div className="lg:col-span-2">
              <div className="bg-onyx-900 rounded-4xl p-10 border border-white/10 sticky top-32">
                <div className="text-center mb-8">
                  <p className="text-6xl font-light text-white tracking-tight mb-2">3st</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Lost & maintained</p>
                </div>
                <div className="space-y-4 pt-8 border-t border-white/5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration</span>
                    <span className="text-white">12 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Coaching type</span>
                    <span className="text-white">1:1 Training</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Status</span>
                    <span className="text-brand-400">Weight maintained</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonial Carousel - Scrolling */}
      <Section dark spacing="large">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 px-6">
            <p className="text-brand-400 text-sm tracking-widest uppercase mb-6">More Stories</p>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight">From fat loss to performance to rehabilitation</h2>
          </div>
          
          <TestimonialCarousel 
            testimonials={[
              {
                quote: "As a dad with two young kids and a demanding job in the City, I didn't think I had time. Scott showed me how to make it work with the time I actually have.",
                name: "James T.",
                context: "Finance director, 2 stone lost"
              },
              {
                quote: "I'd done a couple of Hyrox events before working with Scott but my times had plateaued. The structured programming made all the difference - dropped 8 minutes off my time.",
                name: "Chris P.",
                context: "Hyrox competitor"
              },
              {
                quote: "At 45, I thought doing a triathlon was unrealistic. Scott helped me build up sensibly over 6 months, working around a dodgy knee.",
                name: "Helen R.",
                context: "First triathlon at 45"
              },
              {
                quote: "After my stroke, I didn't know if I'd ever train properly again. Two years later, I'm lifting more than I was before the stroke.",
                name: "David K.",
                context: "Stroke recovery"
              },
              {
                quote: "I'd had three back surgeries and was terrified of making things worse. I'm now pain-free and training things I thought I'd never do again.",
                name: "Michelle P.",
                context: "Post-surgery rehabilitation"
              },
              {
                quote: "I've been training with Scott for over 4 years now. What I appreciate is that it never gets stale - the programming evolves, we set new goals, and there's always something to work towards.",
                name: "Michael T.",
                context: "4+ years training"
              }
            ]}
          />
        </div>
      </Section>

      {/* Long-Term Client Signature Block */}
      <SignaturePhilosophyBlock
        quote="The clients who get the best results are the ones who stay. Most of my clients train with me for 1-3+ years, not weeks."
        attribution="Scott James"
        context="On long-term coaching relationships"
      />

      {/* Long-term client highlight */}
      <Section spacing="large">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <p className="text-brand-400 text-sm tracking-widest uppercase mb-6">Long-Term Client</p>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight">Years of consistent progress</h2>
          </div>

          <div className="bg-onyx-900 rounded-4xl p-10 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl" />
            <div className="relative">
              <blockquote className="text-xl md:text-2xl font-light text-white leading-relaxed mb-8">
                "I've been training with Scott for over 4 years now. What I appreciate is that it never gets stale - the programming evolves, we set new goals, and there's always something to work towards. I'm 52 and in the best shape of my life."
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-brand-400 font-medium">Michael T.</p>
                  <p className="text-gray-500 text-sm">Managing director</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-light text-white">4+ years</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Training together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials with Photos */}
      <Section dark spacing="large">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-brand-400 text-sm tracking-widest uppercase mb-6">Client Stories</p>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              In their own words
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialWithPhoto
              quote="The structured approach made all the difference. No more guessing, just follow the plan and trust the process."
              name="Sarah M."
              context="Fat loss client"
              photoSrc="/client-1.jpg"
              photoAlt="Sarah M."
              metric={{ value: "3st", label: "Lost" }}
            />
            <TestimonialWithPhoto
              quote="I'd tried everything before - this is the first time something has actually stuck long-term."
              name="James T."
              context="Finance director"
              photoSrc="/client-2.jpg"
              photoAlt="James T."
              metric={{ value: "2st", label: "Lost" }}
            />
            <TestimonialWithPhoto
              quote="Training around my injury felt impossible until Scott showed me how to do it safely."
              name="Michelle P."
              context="Post-surgery rehabilitation"
              photoSrc="/client-6.jpg"
              photoAlt="Michelle P."
            />
            <TestimonialWithPhoto
              quote="The Hyrox-specific programming took my times to a completely different level."
              name="Chris P."
              context="Hyrox competitor"
              photoSrc="/client-5.jpg"
              photoAlt="Chris P."
              metric={{ value: "-8min", label: "PB" }}
            />
          </div>
        </div>
      </Section>

    </>
  );
}
