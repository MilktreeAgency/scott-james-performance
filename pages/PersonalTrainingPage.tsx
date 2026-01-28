import React from 'react';
import { ArrowRight, MapPin, Dumbbell, Heart, RefreshCw, Eye, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Section, 
  BinaryFilter,
  ProcessJourney,
  SignaturePhilosophyBlock,
  FullBleedHero,
  ImagePlaceholder
} from '../components/shared';

export default function PersonalTrainingPage({ onApply }: { onApply: () => void }) {
  return (
    <>
      {/* Hero - Full Bleed with training imagery */}
      <FullBleedHero
        imageSrc="/personal-training-hero.jpg"
        imageAlt="Personal training session"
        badge="1:1 Personal Training"
        title={<>Personal training in<br /><span className="text-brand-400">Hampshire & West Sussex</span></>}
        subtitle="Hands-on coaching with real-time adaptation, injury-aware programming, and the attention to detail that only comes from working together in person."
        height="tall"
        overlayIntensity="heavy"
      />

      {/* Differentiator - Simplified to 2 key elements */}
      <Section spacing="large">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-brand-400 text-sm tracking-widest uppercase mb-6">The Experience</p>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">
              What makes 1:1 different
            </h2>
            <p className="text-lg text-gray-400">
              In-person training isn't just online coaching with someone watching. It's a fundamentally different experience.
            </p>
          </div>

          {/* Two cards only */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-onyx-900 rounded-4xl p-10 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-500 mb-8">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-light text-white mb-4">Real-time adaptation</h3>
              <p className="text-gray-400 leading-relaxed">
                I can see how you're moving and adjust on the spot. If an exercise isn't working, we change it immediately. If you're struggling, we modify. If you're flying, we push harder.
              </p>
            </div>

            <div className="bg-onyx-900 rounded-4xl p-10 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-500 mb-8">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-light text-white mb-4">Complete attention</h3>
              <p className="text-gray-400 leading-relaxed">
                Your session is your session. Every rep has my full focus. Hands-on cueing and positioning that you simply can't get remotely.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Binary Filter */}
      <BinaryFilter
        forYou={{
          title: "1:1 training works well if...",
          items: [
            "You're local to Hampshire or West Sussex",
            "You want hands-on coaching and form correction",
            "You're coming back from injury or have current limitations",
            "You're new to training and need proper instruction",
            "You want someone fully focused on you during sessions",
            "You prefer the accountability of scheduled appointments"
          ]
        }}
        notForYou={{
          title: "This isn't right if...",
          items: [
            "You're outside the local area (see online coaching)",
            "You only want occasional sessions with no structure",
            "You're looking for the cheapest option",
            "You want someone to just count reps while you do your thing"
          ],
          note: "1:1 training is an investment of time and money. I want to work with people who value that."
        }}
      />

      {/* Injury-Reassurance Block - Simplified */}
      <Section dark spacing="large">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-red-400 text-sm tracking-widest uppercase mb-6">Injury-Aware</p>
              <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-6">
                Training that works around limitations
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                I've worked with clients recovering from strokes, joint replacements, chronic pain conditions, and serious injuries. In-person training is ideal for this because I can see exactly how you're moving and make micro-adjustments in real time.
              </p>
              <p className="text-brand-400">
                If you've been told you "can't" train because of an injury or condition, there's usually a way.
              </p>
            </div>
            
            {/* Reassurance list - without icons */}
            <div className="bg-onyx-950 rounded-4xl p-10 border border-white/10">
              <h3 className="text-lg font-medium text-white mb-8">Clients I've worked with:</h3>
              <ul className="space-y-4 text-gray-400">
                <li>Stroke recovery and rehabilitation</li>
                <li>Post-surgical rehabilitation</li>
                <li>Chronic back and joint pain</li>
                <li>Sports injuries and returns to training</li>
                <li>Special populations including Down syndrome</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Philosophy Quote */}
      <SignaturePhilosophyBlock
        quote="We're not just avoiding pain - we're building strength and resilience around it."
      />

      {/* Process as Partnership */}
      <ProcessJourney
        title="How training works"
        subtitle="A partnership that evolves with your progress."
        steps={[
          {
            number: "1",
            title: "Initial assessment",
            description: "We start with a thorough assessment of where you are now - movement quality, fitness level, injury history, and goals. This informs everything that follows."
          },
          {
            number: "2",
            title: "Personalised programming",
            description: "Your programme is built specifically for you, based on the assessment. It accounts for your goals, schedule, equipment access, and any limitations."
          },
          {
            number: "3",
            title: "Ongoing adaptation",
            description: "The programme evolves based on your progress, feedback, and what we learn session to session. Training should get smarter over time, not just harder."
          }
        ]}
      />

      {/* Investment - Refined */}
      <Section dark spacing="large">
        <div className="max-w-4xl mx-auto">
          <div className="border border-white/10 rounded-4xl p-10 md:p-16 bg-onyx-950/50 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
            
            <p className="text-brand-400 text-sm tracking-widest uppercase mb-6">Investment</p>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">Commitment & pricing</h2>
            <p className="text-gray-400 mb-12 max-w-lg mx-auto">
              Pricing is flexible based on your training frequency and commitment level.
            </p>

            <div className="mb-12">
              <p className="text-sm text-gray-500 mb-2">Sessions from</p>
              <p className="text-6xl font-light text-white tracking-tight">£60<span className="text-xl font-normal text-gray-500">/hour</span></p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { title: "Minimum commitment", desc: "At least 1 session per week recommended." },
                { title: "Ideal frequency", desc: "2-3 sessions per week for most clients." },
                { title: "Block bookings", desc: "Monthly blocks get better rates." }
              ].map((item, index) => (
                <div key={index} className="bg-onyx-900/50 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-white font-medium mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Visual Break - In-Gym Training */}
      <Section dark spacing="large">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-brand-400 text-sm tracking-widest uppercase mb-6">In The Gym</p>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              Hands-on coaching in action
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300" style={{ aspectRatio: '3/4' }}>
              <img 
                src="/personal-training-1.jpg"
                alt="Strength training session"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300" style={{ aspectRatio: '1/1' }}>
              <img 
                src="/personal-training-2.jpg"
                alt="Form correction"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300" style={{ aspectRatio: '1/1' }}>
              <img 
                src="/personal-training-3.jpg"
                alt="Movement assessment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300" style={{ aspectRatio: '1/1' }}>
              <img 
                src="/1.jpg"
                alt="Functional training"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300" style={{ aspectRatio: '1/1' }}>
              <img 
                src="/2.jpg"
                alt="Client progress"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Location - Simplified */}
      <Section spacing="large">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-brand-500/10 flex items-center justify-center mx-auto mb-8">
            <MapPin className="w-8 h-8 text-brand-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">
            Based in Hampshire & West Sussex
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            I train clients across Hampshire and West Sussex.
          </p>
          <p className="text-gray-500">
            Outside this area? <Link to="/online-coaching" className="text-brand-400 hover:underline">Online coaching</Link> might be a better fit.
          </p>
        </div>
      </Section>

    </>
  );
}
