import React from 'react';
import { ArrowLeft, ArrowRight, Clock, Calendar, Tag, Share2, CheckCircle2 } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Section, FullBleedHero } from '../components/shared';
import { articles } from './ResourcesPage';

// Article content data - SEO-focused placeholder content
export const articleContent: Record<string, {
  intro: string;
  sections: { heading: string; content: string[] }[];
  keyTakeaways: string[];
}> = {
  'complete-guide-sustainable-fat-loss': {
    intro: 'Fat loss doesn\'t have to be complicated. In this comprehensive guide, I\'ll break down the fundamentals of creating a sustainable calorie deficit - the kind that leads to results you can actually maintain. No crash diets, no extreme restrictions, just science-backed strategies that work for busy adults.',
    sections: [
      {
        heading: 'Understanding the Calorie Deficit',
        content: [
          'At its core, fat loss comes down to one thing: consuming fewer calories than you burn. This is called a calorie deficit. But here\'s where most people go wrong - they create too large a deficit, too quickly.',
          'A sustainable deficit is typically 300-500 calories below your maintenance level. This allows for steady fat loss of around 0.5-1lb per week without the extreme hunger, energy crashes, and eventual rebounds that come with aggressive dieting.',
          'Your maintenance calories depend on your age, weight, height, activity level, and metabolism. There are various calculators online, but the most accurate method is tracking what you eat for 2 weeks while maintaining your weight.'
        ]
      },
      {
        heading: 'Why Crash Diets Always Fail',
        content: [
          'We\'ve all seen the "lose 10lbs in 2 weeks" promises. And technically, they\'re possible. But that weight loss comes from water, muscle, and temporary gut content - not just fat. More importantly, it\'s not sustainable.',
          'Crash diets trigger a cascade of hormonal responses: increased hunger hormones, decreased metabolism, and changes in how your body stores fat. This is why most people who lose weight quickly end up heavier than when they started within 12 months.',
          'The solution isn\'t willpower - it\'s approach. Sustainable fat loss takes longer initially but leads to permanent results.'
        ]
      },
      {
        heading: 'Building Nutrition Habits That Last',
        content: [
          'Rather than following a strict meal plan, focus on building habits you can maintain for life. Start with one change at a time and master it before adding another.',
          'Protein is the most important macronutrient for fat loss - it keeps you full, preserves muscle, and has a higher thermic effect (you burn more calories digesting it). Aim for around 1.6-2.2g per kg of bodyweight.',
          'Don\'t eliminate foods you enjoy. Restriction leads to cravings and eventual binge eating. Instead, learn to fit your favourite foods into your overall calorie budget.'
        ]
      },
      {
        heading: 'The Role of Training',
        content: [
          'Exercise supports fat loss but doesn\'t drive it - nutrition does. That said, the right training approach makes a significant difference.',
          'Strength training preserves muscle mass during a deficit, which maintains your metabolism and improves body composition. Aim for 2-4 strength sessions per week.',
          'Cardio burns additional calories but shouldn\'t be excessive. Walking is underrated - 8-10k steps daily can burn 300-500 extra calories without creating recovery demands.'
        ]
      }
    ],
    keyTakeaways: [
      'Create a moderate deficit of 300-500 calories, not an extreme one',
      'Focus on protein intake (1.6-2.2g per kg bodyweight)',
      'Build habits one at a time rather than overhauling everything',
      'Prioritise strength training to preserve muscle',
      'Use walking for additional calorie burn without burnout'
    ]
  },
  'track-macros-without-losing-mind': {
    intro: 'Macro tracking can be a powerful tool for fat loss - but it can also become an obsession that sucks the joy out of eating. In this guide, I\'ll show you a balanced approach to tracking that gets results without the mental burden.',
    sections: [
      {
        heading: 'When Tracking Helps (And When It Doesn\'t)',
        content: [
          'Tracking is most useful when you\'re starting out and have no idea how much you\'re actually eating. Most people significantly underestimate their calorie intake - sometimes by 50% or more.',
          'However, tracking everything forever isn\'t necessary or healthy for most people. The goal is to develop intuition about portion sizes and food composition, then gradually rely less on the app.',
          'If tracking is causing anxiety, obsessive behaviour, or affecting your social life, it\'s time to step back and try a different approach.'
        ]
      },
      {
        heading: 'A Practical Tracking Approach',
        content: [
          'Start by tracking for 2-4 weeks to establish a baseline and learn about your eating patterns. Focus on calories and protein initially - don\'t worry about hitting exact carb and fat targets.',
          'Use a simple app like MyFitnessPal or Chronometer. Weigh foods when possible for accuracy, but don\'t stress about estimating when eating out.',
          'After the initial learning period, try "hand portion" estimates - palm-sized protein servings, fist-sized carb portions, and thumb-sized fat portions.'
        ]
      },
      {
        heading: 'The 80/20 Rule',
        content: [
          'Aim to track or plan 80% of your meals, leaving 20% for flexibility. This means weekday meals are structured, but weekend social events don\'t require weighing scales.',
          'This approach prevents the all-or-nothing mentality that derails so many people. A social dinner without tracking isn\'t "failing" - it\'s living.',
          'Consistency over perfection is the key to long-term success.'
        ]
      }
    ],
    keyTakeaways: [
      'Track for 2-4 weeks to learn, then reassess',
      'Focus on calories and protein first',
      'Use hand portions for everyday estimating',
      'Apply the 80/20 rule - track most meals, not all',
      'If tracking causes anxiety, change your approach'
    ]
  },
  'hyrox-training-101-first-race': {
    intro: 'Hyrox combines 8km of running with 8 functional workout stations - and it\'s growing rapidly. If you\'re thinking about entering your first race, this guide covers everything you need to know about training, race strategy, and what to expect on the day.',
    sections: [
      {
        heading: 'Understanding the Hyrox Format',
        content: [
          'A Hyrox race consists of 8 x 1km runs, each followed by a functional workout station. The stations are: SkiErg (1000m), Sled Push (50m), Sled Pull (50m), Burpee Broad Jumps (80m), Rowing (1000m), Farmers Carry (200m), Sandbag Lunges (100m), and Wall Balls (100 reps).',
          'The race is held indoors on a set course, typically taking 60-90 minutes for recreational competitors. Elite athletes complete it in under an hour.',
          'You can compete solo, as a doubles team (alternating stations), or as a relay team of 4.'
        ]
      },
      {
        heading: 'Building Your Training Base',
        content: [
          'Before focusing on Hyrox-specific training, you need a solid base of running fitness and functional strength. Aim to build up to running 5km comfortably and performing basic strength movements correctly.',
          'For beginners, I recommend at least 8-12 weeks of base building before starting Hyrox-specific programming.',
          'Key movements to develop: deadlifts, squats, lunges, rowing technique, and general conditioning.'
        ]
      },
      {
        heading: 'Structuring Your Training Week',
        content: [
          'A typical Hyrox training week includes 2-3 running sessions, 2-3 strength/functional sessions, and 1-2 Hyrox-specific simulation workouts.',
          'Don\'t neglect recovery - the training volume required for Hyrox is significant. Sleep, nutrition, and rest days are crucial.',
          'Practice transitions between running and stations, as managing your heart rate during these changes is key to race performance.'
        ]
      },
      {
        heading: 'Race Day Strategy',
        content: [
          'Start conservatively. The most common mistake is going too hard on the first 2-3 stations and dying in the second half.',
          'Know your pacing - practice each station in training so you know how it feels at race pace. The row and wall balls are where most people lose time.',
          'Fuel properly before and during - this is a long event. Practice your nutrition strategy in training.'
        ]
      }
    ],
    keyTakeaways: [
      'Build a running and strength base before Hyrox-specific training',
      'Train 4-5 times per week with a mix of running, strength, and simulation',
      'Practice station transitions - heart rate management is crucial',
      'Start conservatively on race day',
      'Know your pacing for each station from training practice'
    ]
  },
  'hyrox-workout-split-running-functional': {
    intro: 'One of the biggest challenges in Hyrox training is balancing running volume with functional fitness work. Get it wrong and you\'ll either fade on the runs or struggle through the stations. Here\'s how to structure your training week effectively.',
    sections: [
      {
        heading: 'The Running/Strength Balance',
        content: [
          'Hyrox requires both aerobic endurance (for 8km of total running) and functional strength (for the 8 workout stations). Neither can be neglected.',
          'A common mistake is treating Hyrox like a running event with some strength work. In reality, the time spent on stations often exceeds running time for most competitors.',
          'I typically recommend a 50/50 split of running and strength work, with some combined sessions.'
        ]
      },
      {
        heading: 'Sample Weekly Structure',
        content: [
          'Day 1: Threshold running (tempo work, intervals)',
          'Day 2: Upper body strength + core',
          'Day 3: Easy run + mobility',
          'Day 4: Lower body strength + power',
          'Day 5: Hyrox simulation workout',
          'Day 6: Long easy run',
          'Day 7: Complete rest or active recovery'
        ]
      },
      {
        heading: 'Key Exercises for Station Performance',
        content: [
          'For the sled stations: hip hinge strength (deadlifts, RDLs), leg drive power, and grip endurance.',
          'For the row and ski erg: build your aerobic engine with longer steady-state pieces, and practice pacing.',
          'For wall balls: squat endurance, core stability, and the ability to maintain form under fatigue.',
          'For carries and lunges: unilateral leg strength, core stability, and grip.'
        ]
      }
    ],
    keyTakeaways: [
      'Balance running and strength work roughly 50/50',
      'Include at least one Hyrox simulation per week',
      'Build station-specific strength through targeted exercises',
      'Don\'t neglect recovery - training volume is high',
      'Periodise intensity - not every session should be maximum effort'
    ]
  },
  'strength-training-after-40-beginners-guide': {
    intro: 'Starting strength training later in life might feel intimidating, but it\'s one of the best things you can do for your health. In your 40s, 50s, and beyond, strength training helps maintain muscle mass, bone density, and functional independence. Here\'s how to start safely and effectively.',
    sections: [
      {
        heading: 'Why Strength Training Matters More With Age',
        content: [
          'After 30, we naturally lose 3-5% of muscle mass per decade. This accelerates after 50. Without intervention, this leads to weakness, increased injury risk, and reduced quality of life.',
          'Strength training directly counters this muscle loss. Research consistently shows that people who strength train in their later decades maintain more muscle, stronger bones, and better functional capacity.',
          'It\'s never too late to start. Studies show significant strength gains even in people starting in their 70s and 80s.'
        ]
      },
      {
        heading: 'Starting Safely',
        content: [
          'Begin with bodyweight or light weights to establish proper movement patterns. Technique matters more than load, especially when starting out.',
          'Focus on compound movements: squats, deadlifts (or hip hinges), pushing, pulling, and carries. These train multiple muscle groups and mirror real-world movements.',
          'If you have existing injuries or conditions, consult a professional before starting. Many limitations can be trained around, but it requires appropriate programming.'
        ]
      },
      {
        heading: 'A Beginner Programme',
        content: [
          'Start with 2 sessions per week on non-consecutive days. This is enough to see results and allows adequate recovery.',
          'Each session should include: a squat pattern, a hinge pattern, a push, a pull, and some core work. Keep sessions to 45-60 minutes.',
          'Progress gradually - add a small amount of weight or an extra rep each week. Consistency beats intensity.'
        ]
      },
      {
        heading: 'Recovery Considerations',
        content: [
          'Recovery takes longer as we age. Don\'t train through excessive soreness or fatigue.',
          'Sleep quality significantly impacts results. Prioritise 7-9 hours of quality sleep.',
          'Nutrition matters - ensure adequate protein intake (1.6-2.2g per kg bodyweight) and stay hydrated.'
        ]
      }
    ],
    keyTakeaways: [
      'Strength training counters age-related muscle loss',
      'Start with 2 sessions per week, focusing on technique',
      'Include compound movements: squat, hinge, push, pull',
      'Progress gradually and prioritise recovery',
      'It\'s never too late to start - results come at any age'
    ]
  },
  'how-often-should-you-train-busy-people': {
    intro: 'The most common question I get from busy professionals and parents is "how often should I train?" The honest answer: it depends. But here\'s how to figure out the right frequency for your goals, schedule, and recovery capacity.',
    sections: [
      {
        heading: 'Minimum Effective Dose',
        content: [
          'For general health and fitness, 2 strength sessions per week is the minimum effective dose. This maintains muscle mass and provides most health benefits.',
          'Adding a third session increases results but with diminishing returns. The jump from 0 to 2 sessions is far more impactful than 2 to 4.',
          'If you\'re very limited on time, 2 high-quality sessions beats 4 rushed, unfocused ones.'
        ]
      },
      {
        heading: 'Goals Determine Frequency',
        content: [
          'For fat loss: 2-3 strength sessions plus daily movement (walking). Nutrition matters more than training frequency.',
          'For muscle building: 3-4 sessions per week, targeting each muscle group twice.',
          'For performance/competition: 4-6 sessions depending on the sport, with careful attention to recovery.'
        ]
      },
      {
        heading: 'The Schedule Reality Check',
        content: [
          'Be honest about your available time. Planning 5 sessions when you realistically have time for 2 sets you up for failure and frustration.',
          'Look at your week: work commitments, family obligations, travel. Block out realistic training windows.',
          'Short sessions count. Even 20-30 minutes of focused training delivers results if done consistently.'
        ]
      },
      {
        heading: 'Recovery Matters',
        content: [
          'Your training capacity depends on stress, sleep, nutrition, and age. High life stress means reduced training capacity.',
          'Listen to your body. Persistent fatigue, poor sleep, or declining performance are signs you\'re doing too much.',
          'Building training frequency gradually is smarter than starting aggressive and burning out.'
        ]
      }
    ],
    keyTakeaways: [
      'Minimum effective dose: 2 strength sessions per week',
      'Goals determine ideal frequency - fat loss needs less than competition prep',
      'Be realistic about your schedule - consistency beats intensity',
      'Factor in recovery capacity - stress and sleep matter',
      'Start conservatively and build up gradually'
    ]
  }
};

export default function ArticlePage({ onApply }: { onApply: () => void }) {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the article
  const article = articles.find(a => a.slug === slug);
  const content = slug ? articleContent[slug] : null;
  
  // If article not found, redirect to resources
  if (!article || !content) {
    return <Navigate to="/resources" replace />;
  }

  // Get related articles (same category, excluding current)
  const relatedArticles = articles
    .filter(a => a.categorySlug === article.categorySlug && a.slug !== article.slug)
    .slice(0, 2);

  return (
    <>
      {/* Article Hero */}
      <FullBleedHero
        imageAlt={article.title}
        badge={article.category}
        title={article.title}
        height="medium"
      >
        {/* Breadcrumb and Meta */}
        <div className="mt-8">
          <Link 
            to="/resources" 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {article.readingTime}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>
        </div>
      </FullBleedHero>

      {/* Featured Image */}
      <Section spacing="normal">
        <div className="max-w-4xl mx-auto">
          <img 
            src={(article as any).image || `/images/resources/articles/${article.slug}.jpg`}
            alt={article.title}
            className={`w-full rounded-3xl object-cover ${
              article.categorySlug === 'hyrox' 
                ? 'object-center' 
                : 'object-top'
            }`}
            style={{ aspectRatio: '21/9' }}
          />
        </div>
      </Section>

      {/* Article Content */}
      <Section spacing="normal">
        <div className="max-w-3xl mx-auto">
          {/* Intro */}
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            {content.intro}
          </p>

          {/* Content Sections */}
          {content.sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-light text-white mb-6">{section.heading}</h2>
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-gray-400 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          {/* Key Takeaways */}
          <div className="bg-onyx-900 rounded-3xl p-8 border border-white/10 mb-12">
            <h3 className="text-xl font-medium text-white mb-6">Key Takeaways</h3>
            <ul className="space-y-4">
              {content.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-brand-950/30 to-onyx-900 rounded-3xl p-8 border border-brand-500/20 text-center">
            <h3 className="text-2xl font-light text-white mb-4">
              Want personalised guidance?
            </h3>
            <p className="text-gray-400 mb-6">
              These guides provide general advice. For a programme tailored to your specific goals, consider working with me directly.
            </p>
            <Link 
              to="/apply"
              className="inline-flex items-center gap-2 bg-white text-onyx-950 font-medium px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              Apply for Coaching
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <Section dark spacing="large">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light text-white mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.map((related) => (
                <Link 
                  key={related.slug}
                  to={`/resources/${related.slug}`}
                  className="group block bg-onyx-950 rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
                >
                  <div className="relative aspect-[16/9]">
                    <img 
                      src={(related as any).image || `/images/resources/articles/${related.slug}.jpg`}
                      alt={related.title}
                      className={`w-full h-full object-cover ${
                        related.categorySlug === 'hyrox'
                          ? 'object-center' 
                          : 'object-top'
                      }`}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-light text-white group-hover:text-brand-400 transition-colors mb-2">
                      {related.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>{related.readingTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
