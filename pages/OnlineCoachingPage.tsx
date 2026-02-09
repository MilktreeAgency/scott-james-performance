import React from 'react';
import { ArrowRight, Globe, ChevronDown, CheckCircle2, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Section, 
  TierPresentation,
  SignaturePhilosophyBlock,
  BinaryFilter,
  FullBleedHero,
  ImageTextBlock,
  ImagePlaceholder
} from '../components/shared';

export default function OnlineCoachingPage({ onApply }: { onApply: () => void }) {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "How is this different from a generic online programme?",
      answer: "Generic programmes give everyone the same plan. This is proper coaching - your programme is built specifically for you, adjusted based on your progress, and I'm there to answer questions and make changes when life happens."
    },
    {
      question: "How do check-ins work?",
      answer: "Weekly check-ins via a structured form where you report on training, nutrition, how you're feeling, and any challenges. I review everything, provide feedback, and make programme adjustments."
    },
    {
      question: "Do I need a gym membership?",
      answer: "Depends on your goals. I can programme for home training with minimal equipment, gym-based training, or a mix. We discuss your setup during onboarding."
    }
  ];

  return (
    <>
      {/* Hero - Full Bleed */}
      <FullBleedHero
        imageSrc="/online-training-hero.jpg"
        imageAlt="Online coaching and remote training"
        badge="Online Coaching"
        title={<>Expert coaching,<br /><span className="text-brand-400">wherever you are</span></>}
        subtitle="Full coaching support without the geographical limits. Personalised programming, nutrition guidance, and accountability - delivered remotely."
        height="tall"
        overlayIntensity="heavy"
      />

      {/* Philosophy Quote */}
      <SignaturePhilosophyBlock
        quote="Online coaching isn't a lesser option - it's a different format that works better for many people."
      />

      {/* Binary Filter */}
      <BinaryFilter
        forYou={{
          title: "Online coaching works well if...",
          items: [
            "You're outside Hampshire/West Sussex",
            "Your schedule makes regular in-person sessions difficult",
            "You're self-motivated and can train independently",
            "You value flexibility but still want expert guidance",
            "You want to learn how to train, not just be told what to do"
          ]
        }}
        notForYou={{
          title: "Consider in-person if...",
          items: [
            "You need hands-on form correction and cueing",
            "You're completely new to training",
            "You struggle with accountability when training alone",
            "You have complex injuries that need careful monitoring"
          ],
          note: "If this sounds more like you and you're local, check out 1:1 personal training."
        }}
      />

      {/* Tier Presentation */}
      <TierPresentation
        title="Choose your level of support"
        subtitle="Two tiers designed for different needs. Both include full coaching - the difference is frequency and access."
        tiers={[
          {
            badge: "Core",
            badgeClassName: "bg-brand-900/30 text-brand-400 border border-brand-500/20",
            name: "Online Coaching",
            description: "Complete coaching support with weekly structure.",
            price: "£129",
            priceNote: "per month",
            features: [
              "Personalised training programme",
              "Calorie and macro targets",
              "Weekly check-in and programme review",
              "Message support (24-48hr response)",
              "Progress tracking and adjustments"
            ],
            note: "Best for self-motivated individuals who can follow programming independently.",
            highlighted: false
          },
          {
            badge: "Premium",
            badgeClassName: "bg-brand-900/30 text-brand-400 border border-brand-500/20",
            name: "Premium Coaching",
            description: "High-touch support with daily access.",
            price: "£197",
            priceNote: "per month",
            features: [
              "Everything in Core, plus:",
              "Fortnightly video calls",
              "Day-to-day messaging access",
              "More detailed programme personalisation",
              "Priority support and faster adjustments"
            ],
            note: "Best for those who want more hands-on support and quick answers.",
            highlighted: true
          }
        ]}
        onApply={onApply}
      />

      {/* Visual Break - Remote Coaching with ImageTextBlock */}
      <Section spacing="large">
        <div className="max-w-6xl mx-auto">
          <ImageTextBlock
            imageSrc="/online-coaching-1.jpg"
            imageAlt="Coaching app and technology"
            badge="How It Works"
            title="Your coaching, always accessible"
            imagePosition="left"
            aspectRatio="4/5"
          >
            <p>
              Everything delivered through a coaching app - your workouts, progress tracking, and direct messaging. Check in from anywhere, log your training, and get feedback that helps you improve.
            </p>
            <p>
              Whether you're at home, at the gym, or travelling for work - your programme and support are always with you.
            </p>
          </ImageTextBlock>
        </div>
      </Section>

      {/* FAQ - Simplified to 3 questions */}
      <Section dark spacing="large">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-400 text-sm tracking-widest uppercase mb-6">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              Common questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`rounded-3xl border transition-all duration-300 ${
                  openFaq === index 
                    ? 'bg-onyx-950 border-brand-500/20' 
                    : 'bg-onyx-950/50 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                    openFaq === index ? 'bg-brand-500/20' : 'bg-white/5'
                  }`}>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

    </>
  );
}
