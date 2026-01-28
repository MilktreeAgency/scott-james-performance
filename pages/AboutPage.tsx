import React from 'react';
import { Dumbbell, Heart, Target, Clock } from 'lucide-react';
import { 
  Section, 
  SignaturePhilosophyBlock,
  QuietCredibility,
  EditorialStory,
  FullBleedHero,
  PhotoGallery,
  ImagePlaceholder
} from '../components/shared';

export default function AboutPage({ onApply }: { onApply: () => void }) {
  return (
    <>
      {/* Hero - Full Bleed */}
      <FullBleedHero
        imageSrc="/1abdc8_d253d90d518e4b418b65fb2567ee9267~mv2.avif"
        imageAlt="Scott James coaching"
        badge="About Scott"
        title={<>The coach behind<br /><span className="text-brand-400">Scott James Performance</span></>}
        subtitle="Personal trainer, online coach, and someone who genuinely understands what it takes to change."
        height="tall"
        overlayIntensity="heavy"
      />

      {/* Opening - Split Narrative with Photo */}
      <Section spacing="large">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Photo Column */}
          <div className="lg:col-span-2 relative">
            <div className="aspect-[4/5] rounded-4xl overflow-hidden border border-white/10 sticky top-32">
              <img 
                src="/1abdc8_d253d90d518e4b418b65fb2567ee9267~mv2.avif" 
                alt="Scott James" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Content Column */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-tight">
              I coach people who are ready to do the work.
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                I'm Scott James - a personal trainer and coach based in Hampshire and West Sussex, working with clients both in-person and online.
              </p>
              <p>
                I specialise in two things: sustainable fat loss for busy adults, and performance coaching for athletes and competitors.
              </p>
            </div>

            {/* Inline stats */}
            <p className="text-gray-500 text-sm mt-12 pt-8 border-t border-white/5">
              <span className="text-white">10+ years</span> coaching · <span className="text-white">200+</span> clients · <span className="text-white">50+</span> Hyrox finishers coached
            </p>
          </div>
        </div>
      </Section>

      {/* Signature Story Block - The 10-Stone Journey */}
      <EditorialStory
        badge="My Story"
        badgeClassName="bg-brand-900/30 text-brand-400 border border-brand-500/20"
        title="I lost over 10 stone. Here's what that taught me."
        leadParagraph="I wasn't always a personal trainer. Before I got into fitness, I was significantly overweight - over 10 stone heavier than I am now. I know what it's like to feel uncomfortable in your own body."
        pullQuote="The approach matters more than the intensity."
        bodyParagraphs={[
          "When I finally made the change, it wasn't through some miracle programme or a 6-week transformation. It was through learning how to eat properly, how to train consistently, and how to build habits that actually stick.",
          "That experience shaped everything about how I coach now. I don't believe in crash diets or unsustainable training schedules. I focus on building something that lasts.",
          "When clients come to me feeling frustrated or like they've failed before, I get it. I've been there."
        ]}
        inlineStats="Over 10 stone lost personally · 10+ years coaching · 200+ clients trained"
      />

      {/* Philosophy Quote */}
      <SignaturePhilosophyBlock
        quote="Real change takes time. The clients who get the best results are the ones who trust the process."
        attribution="Scott James"
        context="On why I prefer long-term coaching relationships"
      />

      {/* Philosophy - 2 larger blocks, no icons */}
      <Section spacing="large">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-brand-400 text-sm tracking-widest uppercase mb-6">Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              What I believe about coaching.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-10 rounded-4xl bg-onyx-900 border border-white/10 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-light text-white mb-4">Sustainable progress beats intensity</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Good coaching makes you better over time. I focus on progress you can maintain, not workouts that destroy you.
              </p>
              <h3 className="text-xl font-light text-white mb-4">Movement quality before load</h3>
              <p className="text-gray-400 leading-relaxed">
                Before we add weight, we make sure you're moving well. This prevents injuries and builds a foundation for long-term gains.
              </p>
            </div>
            <div className="p-10 rounded-4xl bg-onyx-900 border border-white/10 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-light text-white mb-4">Long-term commitment matters</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                I work with clients who are ready to commit to months and years of consistent work, not quick fixes.
              </p>
              <h3 className="text-xl font-light text-white mb-4">Knowing when to push and pull back</h3>
              <p className="text-gray-400 leading-relaxed">
                Sometimes you need to be pushed. Sometimes you need rest. Good coaching is knowing the difference.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Client Types - 4 cards, no icons */}
      <Section dark spacing="large">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-brand-400 text-sm tracking-widest uppercase mb-6">Who I Work With</p>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">
              A wide range of people.
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              I don't specialise in just one type of person. This range matters because it means I've seen a lot.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Beginners & Returners",
                description: "People who've never trained before or are returning after years away. No judgement, just structured progression."
              },
              {
                title: "Busy Professionals",
                description: "Directors, business owners, parents - people with limited time who need efficiency and flexibility."
              },
              {
                title: "Athletes & Competitors",
                description: "Hyrox athletes, triathletes, and people training for specific performance goals."
              },
              {
                title: "Rehabilitation Clients",
                description: "Including stroke recovery and significant injury rehabilitation. Training that rebuilds function and confidence."
              }
            ].map((item, index) => (
              <div key={index} className="bg-onyx-950 rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <h4 className="text-lg font-medium text-white mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Quiet Credibility Stats */}
      <QuietCredibility
        credentials={[
          { value: "10st+", label: "Personal weight loss" },
          { value: "10+", label: "Years coaching" },
          { value: "200+", label: "Clients trained" },
          { value: "50+", label: "Hyrox finishers" }
        ]}
        className="bg-onyx-900 border-y border-white/5"
      />

      {/* Photo Gallery Section */}
      <Section spacing="large">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-brand-400 text-sm tracking-widest uppercase mb-6">Gallery</p>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              In the gym and beyond
            </h2>
          </div>

          <PhotoGallery 
            columns={3}
            images={[
              { src: "/6.jpg", alt: "Scott training a client", category: "Training" },
              { src: "/9.jpg", alt: "Competition prep session", category: "Performance" },
              { src: "/10.jpg", alt: "Scott at a Hyrox event", category: "Competition" },
              { src: "/12.jpg", alt: "1:1 coaching session", category: "Personal Training" },
              { src: "/13.jpg", alt: "Group training outdoors", category: "Training" },
              { src: "/14.jpg", alt: "Scott's personal journey", category: "Lifestyle" }
            ]}
          />
        </div>
      </Section>

    </>
  );
}
