import React from 'react';
import { 
  Dumbbell, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Zap,
  ChevronRight,
  Flame,
  LineChart,
  Trophy
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge, SectionHeading, GlassCard, TestimonialCarousel, ImageTextBlock, Section } from '../components/shared';

// Hero Section - Light & Elegant, dramatic whitespace
const Hero = ({ onApply }: { onApply: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-onyx-950">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-gradient-to-b from-onyx-950/30 via-onyx-950/90 to-onyx-950 z-10" />
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-950/20 via-transparent to-transparent z-10" />
         <img 
          src="/homepage-hero.jpg" 
          alt="Scott James Training"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        {/* Single column, headline focused */}
        <div className="max-w-4xl">
          {/* Subtle location indicator */}
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-8">
            Hampshire & West Sussex
          </p>
          
          {/* Light weight headline - Responsive sizing */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[1] mb-10">
            Coaching that <br />
            <span className="text-brand-400">
              lasts.
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-xl leading-relaxed mb-12">
            Sustainable fat loss. Serious performance training. Long-term coaching for people ready to commit to real, lasting change.
          </p>

          {/* Single primary CTA */}
          <button 
            onClick={onApply}
            className="group px-10 py-5 bg-white text-onyx-950 font-medium rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 text-lg"
          >
            Apply for Coaching 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Who I Help Section - Bolder containers, service-specific accents
const WhoIHelp = () => {
  return (
    <section className="py-32 bg-onyx-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-6">
            Four services.<br />
            <span className="text-brand-400">One approach.</span>
          </h2>
          <p className="text-gray-400 text-lg">Whether you're focused on sustainable fat loss or serious performance training, delivered through in-person or online coaching - the foundation is the same: commitment, consistency, and coaching that adapts to you.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Fat Loss Card */}
          <Link to="/fat-loss" className="group">
            <div className="h-full bg-onyx-900 border border-white/10 rounded-4xl p-10 hover:border-brand-500/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-500 mb-8">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-light text-white mb-4">Fat Loss Coaching</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  For busy adults, parents, and professionals who want to lose weight sustainably. No crash diets. No quick fixes. Just structured coaching that fits your life.
                </p>
                <span className="inline-flex items-center gap-2 text-brand-400 font-medium group-hover:gap-3 transition-all">
                  Learn more <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>

          {/* Performance Card */}
          <Link to="/performance" className="group">
            <div className="h-full bg-onyx-900 border border-white/10 rounded-4xl p-10 hover:border-brand-500/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-500 mb-8">
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-light text-white mb-4">Performance Coaching</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  For athletes, Hyrox competitors, and experienced trainers ready to take their performance to the next level. Structured periodisation, injury-aware programming.
                </p>
                <span className="inline-flex items-center gap-2 text-brand-400 font-medium group-hover:gap-3 transition-all">
                  Learn more <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>

          {/* Personal Training Card */}
          <Link to="/personal-training" className="group">
            <div className="h-full bg-onyx-900 border border-white/10 rounded-4xl p-10 hover:border-brand-500/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-500">
                    <Dumbbell className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-white">1:1 Personal Training</h3>
                    <p className="text-sm text-gray-500">Hampshire & West Sussex</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  In-person sessions with hands-on coaching, real-time form correction, and injury-aware programming.
                </p>
                <span className="inline-flex items-center gap-2 text-brand-400 font-medium group-hover:gap-3 transition-all">
                  Learn more <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>

          {/* Online Coaching Card */}
          <Link to="/online-coaching" className="group">
            <div className="h-full bg-onyx-900 border border-white/10 rounded-4xl p-10 hover:border-brand-500/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-500">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-white">Online Coaching</h3>
                    <p className="text-sm text-gray-500">Anywhere in the world</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Remote coaching with personalised programming, nutrition guidance, and regular check-ins.
                </p>
                <span className="inline-flex items-center gap-2 text-brand-400 font-medium group-hover:gap-3 transition-all">
                  Learn more <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Coaching Philosophy Image Section
const CoachingPhilosophy = () => {
  return (
    <Section spacing="large">
      <div className="max-w-6xl mx-auto">
        <ImageTextBlock
          imageSrc="/homepage-coaching-approach.jpg"
          imageAlt="Coaching approach and philosophy"
          badge="The Difference"
          title="Coaching Built Around You"
          imagePosition="right"
          aspectRatio="4/5"
        >
          <p>
            Every client is different. Your schedule, goals, experience level, and constraints are unique - so your coaching should be too.
          </p>
          <p>
            This isn't about following a template. It's about building a programme that actually works for your life, not someone else's.
          </p>
        </ImageTextBlock>
      </div>
    </Section>
  );
};

// Method Section - Reduced to 3 cards, strategic icons
const BentoMethod = () => {
  return (
    <section id="method" className="py-32 bg-onyx-950 px-6">
       <div className="max-w-7xl mx-auto">
          <div className="mb-20 md:text-center max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-6">
                Detail-focused coaching.<br />
                <span className="text-brand-400">Adaptable to you.</span>
             </h2>
             <p className="text-gray-400 text-lg">Every session, every programme, every check-in is tailored. Not templated workouts - real coaching that responds to how you're progressing.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 auto-rows-[320px]">
             {/* Card 1: Large Hero Card */}
             <div className="md:col-span-2 bg-onyx-900 rounded-4xl p-10 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all duration-300">
                <div className="relative z-10 h-full flex flex-col justify-between">
                   <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-500">
                      <LineChart className="w-6 h-6" />
                   </div>
                   <div>
                      <h3 className="text-2xl font-light text-white mb-3">Real-Time Adaptation</h3>
                      <p className="text-gray-400 max-w-lg">Sessions adapt as we go. If something isn't working, we change it. If you're having a hard week, we adjust. Coaching that meets you where you are.</p>
                   </div>
                </div>
             </div>

             {/* Card 2: Tall with photo */}
             <div className="md:row-span-2 bg-onyx-900 rounded-4xl p-10 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all duration-300">
                 <div className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: 'url(/1abdc8_81efc59bdc634a94bce43ff69cc79e7f~mv2.avif)' }}></div>
                 <div className="relative z-10 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-500 mb-auto">
                       <Dumbbell className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-light text-white mb-3">Movement Quality First</h3>
                    <p className="text-gray-400">Before we add weight or volume, we make sure you're moving well. This protects you from injury and builds a foundation for long-term progress.</p>
                 </div>
             </div>

             {/* Card 3 */}
             <div className="bg-onyx-900 rounded-4xl p-10 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
                 <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-500">
                   <Clock className="w-6 h-6" />
                 </div>
                 <div>
                   <h3 className="text-xl font-light text-white mb-3">Long-Term Commitment</h3>
                   <p className="text-sm text-gray-400">This isn't a 6-week fix. I work with clients who are ready to commit to sustainable change over months and years.</p>
                 </div>
             </div>

             {/* Card 4: Nutrition Integration */}
             <div className="bg-onyx-900 rounded-4xl p-10 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
                 <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-500">
                   <Flame className="w-6 h-6" />
                 </div>
                 <div>
                   <h3 className="text-xl font-light text-white mb-3">Nutrition Integration</h3>
                   <p className="text-sm text-gray-400">No meal plans or restrictive diets. Sustainable nutrition guidance that fits your lifestyle and supports your training goals.</p>
                 </div>
             </div>
          </div>
       </div>
    </section>
  );
};

// About Preview Section - Larger photo, inline stats, cleaner
const AboutPreview = () => {
  return (
    <section className="py-32 bg-onyx-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-4xl overflow-hidden border border-white/10">
              <img 
                src="/about-homepage.jpg" 
                alt="Scott James" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div>
            <p className="text-brand-400 text-sm tracking-widest uppercase mb-6">About Scott</p>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-6">
              I've been where you are.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              I lost over 10 stone myself. I've dealt with injuries that forced me to rethink how I train. I've competed in Hyrox and worked with athletes at the top of their game.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I don't believe in quick fixes or motivation speeches. I believe in showing up, doing the work, and building habits that last.
            </p>
            {/* Inline stats */}
            <p className="text-gray-500 text-sm mb-8">
              <span className="text-white">10+ years</span> coaching · <span className="text-white">200+</span> clients · <span className="text-white">10 stone</span> personal weight loss
            </p>
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 text-brand-400 font-medium hover:gap-3 transition-all"
            >
              Read my full story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Training In Practice Image Section
const TrainingInPractice = () => {
  return (
    <Section dark spacing="large">
      <div className="max-w-6xl mx-auto">
        <ImageTextBlock
          imageSrc="/homepage-training.jpg"
          imageAlt="Training and coaching in practice"
          badge="In Practice"
          title="How It Actually Works"
          imagePosition="left"
          aspectRatio="4/5"
        >
          <p>
            Sessions are structured but flexible. We focus on what matters - progressive overload, movement quality, and managing fatigue intelligently.
          </p>
          <p>
            Whether it's in-person or online, you get real coaching with adjustments based on how you're responding, not just a workout plan.
          </p>
        </ImageTextBlock>
      </div>
    </Section>
  );
};

// Social Proof Section - Horizontal scrolling carousel with 6 testimonials
const SocialProof = () => {
  const testimonials = [
    {
      quote: "I'd tried every programme going. What made the difference with Scott was the consistency and the fact he actually adapts things when life gets in the way. Two years in and I'm still making progress.",
      name: "Michael T.",
      context: "Client since 2023"
    },
    {
      quote: "As a dad with two young kids and a demanding job, I didn't think I had time. Scott showed me how to make it work with the time I actually have.",
      name: "James T.",
      context: "Finance director, father of two"
    },
    {
      quote: "I'd done a couple of Hyrox events before working with Scott but my times had plateaued. The structured programming made all the difference.",
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
    }
  ];

  return (
    <section id="stories" className="py-32 bg-onyx-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <p className="text-brand-400 text-sm tracking-widest uppercase mb-6">Client Results</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-4">
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">Real people. Real progress.</h2>
            <Link 
              to="/results"
              className="inline-flex items-center gap-2 text-brand-400 font-medium hover:gap-3 transition-all"
            >
              View all results <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        {/* Horizontal scrolling testimonials */}
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
};

// Long-Term Commitment Image Section
const LongTermCommitment = () => {
  return (
    <Section spacing="large">
      <div className="max-w-6xl mx-auto">
        <ImageTextBlock
          imageSrc="/homepage-commitment.jpg"
          imageAlt="Long-term coaching commitment and results"
          badge="Long-Term"
          title="Results Take Time"
          imagePosition="right"
          aspectRatio="4/5"
        >
          <p>
            Real change doesn't happen in 6 weeks. The clients who get the best results are the ones who commit to months and years of consistent work.
          </p>
          <p>
            If you're looking for a quick fix, this isn't it. If you're ready to build something sustainable, let's talk.
          </p>
        </ImageTextBlock>
      </div>
    </Section>
  );
};


// Final CTA Section - Maximum restraint, single button
const FinalCTA = ({ onApply }: { onApply: () => void }) => {
  return (
    <section className="py-40 bg-onyx-950">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-8">
          Coaching That Works for You.
        </h2>
        <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto">
          If you're serious about making a change and ready to commit to the process, apply for coaching.
        </p>
        <button 
          onClick={onApply}
          className="group px-10 py-5 bg-white text-onyx-950 font-medium rounded-full hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-3 text-lg"
        >
          Apply for Coaching 
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

// Main HomePage Component
export default function HomePage({ onApply }: { onApply: () => void }) {
  return (
    <>
      <Hero onApply={onApply} />
      <AboutPreview />
      <WhoIHelp />
      <CoachingPhilosophy />
      <BentoMethod />
      <TrainingInPractice />
      <SocialProof />
      <LongTermCommitment />
      <FinalCTA onApply={onApply} />
    </>
  );
}
