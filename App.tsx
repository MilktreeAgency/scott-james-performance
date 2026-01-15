import React, { useState, useEffect, createContext, useContext } from 'react';
import { 
  Dumbbell, 
  Activity, 
  Trophy, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  TrendingUp, 
  Clock, 
  Zap,
  ChevronRight,
  Star,
  Flame,
  LineChart,
  User,
  Heart,
  Target,
  Calendar
} from 'lucide-react';

// --- Modal Context ---
interface ModalContextType {
  showBookingModal: boolean;
  setShowBookingModal: (show: boolean) => void;
}

const ModalContext = createContext<ModalContextType>({
  showBookingModal: false,
  setShowBookingModal: () => {}
});

const useModal = () => useContext(ModalContext);

// --- Utility Components ---

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge = ({ children, className = "" }: BadgeProps) => (
  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${className}`}>
    {children}
  </span>
);

interface SectionHeadingProps {
  children: React.ReactNode;
  align?: string;
}

const SectionHeading = ({ children, align = "center" }: SectionHeadingProps) => (
  <h2 className={`text-3xl md:text-5xl font-extrabold text-white tracking-tighter mb-6 ${align === "center" ? "text-center" : "text-left"}`}>
    {children}
  </h2>
);

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard = ({ children, className = "" }: GlassCardProps) => (
  <div className={`bg-onyx-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-brand-500/30 transition-colors duration-500 ${className}`}>
    {children}
  </div>
);

// --- Booking Modal Component ---
const BookingModal = () => {
  const { showBookingModal, setShowBookingModal } = useModal();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    fitnessLevel: '',
    primaryGoal: '',
    healthIssues: '',
    availability: '',
    investmentReady: ''
  });

  if (!showBookingModal) return null;

  const totalSteps = 6;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleClose = () => {
    setShowBookingModal(false);
    setStep(1);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you! Scott will review your application and be in touch within 24 hours.');
    handleClose();
    setFormData({
      name: '', email: '', phone: '', gender: '', fitnessLevel: '',
      primaryGoal: '', healthIssues: '', availability: '', investmentReady: ''
    });
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch(step) {
      case 1: return formData.name && formData.email && formData.phone;
      case 2: return formData.gender;
      case 3: return formData.fitnessLevel;
      case 4: return formData.primaryGoal;
      case 5: return formData.healthIssues;
      case 6: return formData.availability && formData.investmentReady;
      default: return false;
    }
  };

  const stepIcons = [
    <User key="1" className="w-6 h-6 sm:w-8 sm:h-8" />,
    <Activity key="2" className="w-6 h-6 sm:w-8 sm:h-8" />,
    <Dumbbell key="3" className="w-6 h-6 sm:w-8 sm:h-8" />,
    <Target key="4" className="w-6 h-6 sm:w-8 sm:h-8" />,
    <Heart key="5" className="w-6 h-6 sm:w-8 sm:h-8" />,
    <Calendar key="6" className="w-6 h-6 sm:w-8 sm:h-8" />
  ];

  const stepColors = [
    'from-brand-500/20 to-brand-600/10 text-brand-500',
    'from-purple-500/20 to-purple-600/10 text-purple-400',
    'from-blue-500/20 to-blue-600/10 text-blue-400',
    'from-orange-500/20 to-orange-600/10 text-orange-400',
    'from-red-500/20 to-red-600/10 text-red-400',
    'from-brand-500/20 to-brand-600/10 text-brand-500'
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={handleClose}
        style={{ animation: 'fadeIn 0.3s ease-out' }}
      />
      
      {/* Modal Container */}
      <div 
        className="relative bg-gradient-to-b from-onyx-900 to-onyx-950 border border-white/10 rounded-2xl sm:rounded-3xl w-full max-w-lg max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl shadow-brand-500/10"
        style={{ animation: 'slideUp 0.4s ease-out' }}
      >
        
        {/* Header with Close Button */}
        <div className="relative bg-onyx-900/80 backdrop-blur-sm border-b border-white/10 p-4 sm:p-6">
          <button 
            onClick={handleClose}
            className="absolute top-3 right-3 sm:top-5 sm:right-5 text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="pr-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-500" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-brand-400 uppercase tracking-wider">Strategy Call</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-white">Apply for Coaching</h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Step {step} of {totalSteps}</p>
          </div>

          {/* Progress Dots */}
          <div className="flex gap-1.5 sm:gap-2 mt-4">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full flex-1 transition-all duration-500 ${
                  i + 1 <= step ? 'bg-brand-500' : 'bg-white/10'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto max-h-[calc(95vh-200px)] sm:max-h-[calc(90vh-220px)]">
          <div className="p-4 sm:p-8">
            
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-4 sm:space-y-5" style={{ animation: 'fadeIn 0.3s ease-out' }}>
                <div className="text-center mb-4 sm:mb-6">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stepColors[0]} flex items-center justify-center`}>
                    {stepIcons[0]}
                  </div>
                  <h4 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">Welcome! Let's get started</h4>
                  <p className="text-xs sm:text-sm text-gray-400">Tell us how to reach you</p>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold text-gray-300 mb-1.5 sm:mb-2 uppercase tracking-wide">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      className="w-full bg-onyx-950/50 border border-white/10 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3.5 text-sm sm:text-base text-white placeholder-gray-500 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold text-gray-300 mb-1.5 sm:mb-2 uppercase tracking-wide">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="w-full bg-onyx-950/50 border border-white/10 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3.5 text-sm sm:text-base text-white placeholder-gray-500 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold text-gray-300 mb-1.5 sm:mb-2 uppercase tracking-wide">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      className="w-full bg-onyx-950/50 border border-white/10 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3.5 text-sm sm:text-base text-white placeholder-gray-500 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                      placeholder="+44 7XXX XXX XXX"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Gender */}
            {step === 2 && (
              <div className="space-y-4 sm:space-y-5" style={{ animation: 'fadeIn 0.3s ease-out' }}>
                <div className="text-center mb-4 sm:mb-6">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stepColors[1]} flex items-center justify-center`}>
                    {stepIcons[1]}
                  </div>
                  <h4 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">What is your gender?</h4>
                  <p className="text-xs sm:text-sm text-gray-400">Helps us personalize your program</p>
                </div>
                
                <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
                  {[
                    { value: 'Male', icon: '👨' },
                    { value: 'Female', icon: '👩' },
                    { value: 'Prefer not to say', icon: '👤' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateFormData('gender', option.value)}
                      className={`group p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 ${
                        formData.gender === option.value
                          ? 'border-brand-500 bg-brand-500/10 shadow-lg shadow-brand-500/20'
                          : 'border-white/10 bg-onyx-950/50 hover:border-white/20 hover:bg-onyx-950'
                      }`}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <span className="text-2xl sm:text-3xl">{option.icon}</span>
                        <span className="text-sm sm:text-base text-white font-bold flex-1 text-left">{option.value}</span>
                        {formData.gender === option.value && (
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Fitness Level */}
            {step === 3 && (
              <div className="space-y-4 sm:space-y-5" style={{ animation: 'fadeIn 0.3s ease-out' }}>
                <div className="text-center mb-4 sm:mb-6">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stepColors[2]} flex items-center justify-center`}>
                    {stepIcons[2]}
                  </div>
                  <h4 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">Current fitness level?</h4>
                  <p className="text-xs sm:text-sm text-gray-400">Be honest - we meet you where you are</p>
                </div>
                
                <div className="space-y-2.5 sm:space-y-3">
                  {[
                    { value: 'beginner', label: 'Beginner', icon: '🌱', desc: 'Just starting or returning after a break' },
                    { value: 'intermediate', label: 'Intermediate', icon: '💪', desc: 'Training 2-3x per week consistently' },
                    { value: 'advanced', label: 'Advanced', icon: '⚡', desc: 'Training 4+ times per week' },
                    { value: 'athlete', label: 'Competitive', icon: '🏆', desc: 'Training for events or competitions' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateFormData('fitnessLevel', option.value)}
                      className={`w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 text-left transition-all duration-300 ${
                        formData.fitnessLevel === option.value
                          ? 'border-brand-500 bg-brand-500/10 shadow-lg shadow-brand-500/20'
                          : 'border-white/10 bg-onyx-950/50 hover:border-white/20 hover:bg-onyx-950'
                      }`}
                    >
                      <div className="flex items-start gap-2.5 sm:gap-3">
                        <span className="text-xl sm:text-2xl mt-0.5">{option.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-sm sm:text-base text-white mb-0.5">{option.label}</div>
                          <div className="text-[10px] sm:text-xs text-gray-400 leading-tight">{option.desc}</div>
                        </div>
                        {formData.fitnessLevel === option.value && (
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Primary Goal */}
            {step === 4 && (
              <div className="space-y-4 sm:space-y-5" style={{ animation: 'fadeIn 0.3s ease-out' }}>
                <div className="text-center mb-4 sm:mb-6">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stepColors[3]} flex items-center justify-center`}>
                    {stepIcons[3]}
                  </div>
                  <h4 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">What's your main goal?</h4>
                  <p className="text-xs sm:text-sm text-gray-400">Choose what matters most right now</p>
                </div>
                
                <div className="space-y-2.5 sm:space-y-3">
                  {[
                    { value: 'fat-loss', label: 'Fat Loss', icon: '🔥', desc: 'Drop 1-2 dress sizes' },
                    { value: 'muscle-gain', label: 'Build Muscle', icon: '💪', desc: 'Gain strength & size' },
                    { value: 'hyrox', label: 'Hyrox Prep', icon: '🏆', desc: 'Competition ready' },
                    { value: 'performance', label: 'Performance', icon: '⚡', desc: 'Overall health boost' },
                    { value: 'lifestyle', label: 'Lifestyle', icon: '🌟', desc: 'Sustainable change' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateFormData('primaryGoal', option.value)}
                      className={`w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 text-left transition-all duration-300 ${
                        formData.primaryGoal === option.value
                          ? 'border-brand-500 bg-brand-500/10 shadow-lg shadow-brand-500/20'
                          : 'border-white/10 bg-onyx-950/50 hover:border-white/20 hover:bg-onyx-950'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <span className="text-xl sm:text-2xl">{option.icon}</span>
                        <div className="flex-1">
                          <div className="font-bold text-sm sm:text-base text-white">{option.label}</div>
                          <div className="text-[10px] sm:text-xs text-gray-400">{option.desc}</div>
                        </div>
                        {formData.primaryGoal === option.value && (
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Health Issues */}
            {step === 5 && (
              <div className="space-y-4 sm:space-y-5" style={{ animation: 'fadeIn 0.3s ease-out' }}>
                <div className="text-center mb-4 sm:mb-6">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stepColors[4]} flex items-center justify-center`}>
                    {stepIcons[4]}
                  </div>
                  <h4 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">Any health concerns?</h4>
                  <p className="text-xs sm:text-sm text-gray-400">Injuries, conditions, or limitations</p>
                </div>
                
                <div>
                  <textarea
                    value={formData.healthIssues}
                    onChange={(e) => updateFormData('healthIssues', e.target.value)}
                    rows={5}
                    className="w-full bg-onyx-950/50 border border-white/10 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all resize-none"
                    placeholder="e.g., Previous knee injury, lower back issues, or type 'None' if injury-free"
                  />
                </div>
                
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 sm:p-4 flex gap-2.5 sm:gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-xs">ℹ️</span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-blue-300 leading-relaxed">
                    This helps us design a safe, effective program tailored to your needs. All information is confidential.
                  </p>
                </div>
              </div>
            )}

            {/* Step 6: Commitment */}
            {step === 6 && (
              <div className="space-y-5 sm:space-y-6" style={{ animation: 'fadeIn 0.3s ease-out' }}>
                <div className="text-center mb-4 sm:mb-6">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stepColors[5]} flex items-center justify-center`}>
                    {stepIcons[5]}
                  </div>
                  <h4 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">Final step!</h4>
                  <p className="text-xs sm:text-sm text-gray-400">Your commitment level</p>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-gray-300 mb-2.5 sm:mb-3 uppercase tracking-wide">
                    Training Availability
                  </label>
                  <div className="grid grid-cols-1 gap-2 sm:gap-3">
                    {[
                      { value: '2-3 days', icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />, label: '2-3 days/week' },
                      { value: '4-5 days', icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />, label: '4-5 days/week' },
                      { value: '6+ days', icon: <Flame className="w-4 h-4 sm:w-5 sm:h-5" />, label: '6+ days/week' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => updateFormData('availability', option.value)}
                        className={`p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 ${
                          formData.availability === option.value
                            ? 'border-brand-500 bg-brand-500/10 shadow-lg shadow-brand-500/20'
                            : 'border-white/10 bg-onyx-950/50 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <div className={`${formData.availability === option.value ? 'text-brand-500' : 'text-gray-400'}`}>
                            {option.icon}
                          </div>
                          <span className="text-sm sm:text-base text-white font-bold flex-1 text-left">{option.label}</span>
                          {formData.availability === option.value && (
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-gray-300 mb-2.5 sm:mb-3 uppercase tracking-wide">
                    Investment Readiness
                  </label>
                  <div className="bg-brand-500/5 border border-brand-500/20 rounded-xl p-2.5 sm:p-3 mb-3 sm:mb-4">
                    <p className="text-[10px] sm:text-xs text-gray-300 leading-relaxed">
                      12-week transformation programs from <span className="text-brand-400 font-bold">£997</span>
                    </p>
                  </div>
                  <div className="space-y-2">
                    {[
                      { value: 'ready', label: "I'm ready to invest", icon: '✅' },
                      { value: 'exploring', label: 'Want to learn more first', icon: '💭' },
                      { value: 'budgeting', label: 'Need to budget for it', icon: '💰' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => updateFormData('investmentReady', option.value)}
                        className={`w-full p-3 sm:p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                          formData.investmentReady === option.value
                            ? 'border-brand-500 bg-brand-500/10 shadow-lg shadow-brand-500/20'
                            : 'border-white/10 bg-onyx-950/50 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <span className="text-lg sm:text-xl">{option.icon}</span>
                          <span className="text-xs sm:text-sm text-white font-medium flex-1">{option.label}</span>
                          {formData.investmentReady === option.value && (
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Sticky Footer with Actions */}
        <div className="sticky bottom-0 bg-gradient-to-t from-onyx-950 to-onyx-950/95 backdrop-blur-sm border-t border-white/10 p-3 sm:p-6">
          <div className="flex gap-2.5 sm:gap-3">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-white/10 text-sm sm:text-base text-white hover:bg-white/5 transition-all font-medium"
              >
                Back
              </button>
            )}
            
            {step < totalSteps ? (
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className={`flex-1 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 ${
                  canProceed()
                    ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-500/20'
                    : 'bg-white/5 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed()}
                className={`flex-1 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 ${
                  canProceed()
                    ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-500/20'
                    : 'bg-white/5 text-gray-500 cursor-not-allowed'
                }`}
              >
                Submit <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

// --- Main Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setShowBookingModal } = useModal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookCall = () => {
    setIsOpen(false);
    setShowBookingModal(true);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-onyx-950/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 z-50">
          <img src="/SJ LOGO.avif" alt="Scott James Performance" className="h-14 w-auto" />
        </div>
        
        <div className="hidden md:flex items-center gap-8 bg-onyx-900/50 p-1.5 pl-6 pr-1.5 rounded-full border border-white/5 backdrop-blur-md">
          <a href="#method" className="text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-wider">Method</a>
          <a href="#stories" className="text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-wider">Stories</a>
          <a href="#pricing" className="text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-wider mr-4">Pricing</a>
          <button 
            onClick={handleBookCall}
            className="bg-white text-onyx-950 px-5 py-2 text-xs font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2"
          >
            Book Call <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white z-50 relative">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-onyx-950 z-40 flex flex-col justify-center items-center gap-8 p-6 md:hidden">
          <a href="#method" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white">The Method</a>
          <a href="#stories" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white">Stories</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white">Pricing</a>
          <button 
            onClick={handleBookCall}
            className="bg-brand-600 text-white px-8 py-4 text-lg font-bold rounded-full w-full max-w-xs"
          >
            Start Transformation
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { setShowBookingModal } = useModal();
  
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-onyx-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-gradient-to-b from-onyx-950/20 via-onyx-950/80 to-onyx-950 z-10" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-900/20 via-transparent to-transparent z-10" />
         <img 
          src="/IMG_8670_PNG.avif" 
          alt="Scott James Training"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-950/50 border border-brand-500/20 text-brand-400">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest uppercase">Capacity: 3 Spots Left</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.95]">
            Unlock your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-200 to-white">
              true potential.
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-xl leading-relaxed font-medium">
            Science-based protocols for high-performers. Drop 1–2 dress sizes in 12 weeks with data-driven coaching, not guesswork.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => setShowBookingModal(true)}
              className="group px-8 py-4 bg-white text-onyx-950 font-bold rounded-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
            >
              Start Your Shift <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>

        {/* Right Visual - "Superpower" Card Style */}
        <div className="relative hidden lg:block">
          {/* Main Card */}
          <div className="relative bg-onyx-900/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 overflow-hidden transform rotate-2 hover:rotate-0 transition-all duration-700 shadow-2xl shadow-black/50">
             {/* Decorative header inside card */}
             <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-6">
                <div className="flex gap-3 items-center">
                   <div className="w-10 h-10 rounded-full bg-gray-800 border border-white/10 overflow-hidden">
                      <img src="/1abdc8_d253d90d518e4b418b65fb2567ee9267~mv2.avif" alt="Scott James" className="w-full h-full object-cover" />
                   </div>
                   <div>
                      <p className="text-sm font-bold text-white">Scott James</p>
                      <p className="text-xs text-brand-400">Head Coach</p>
                   </div>
                </div>
                <div className="bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
                   <span className="text-xs font-bold text-brand-400">ONLINE</span>
                </div>
             </div>

             {/* Content simulation */}
             <div className="space-y-4">
                <div className="bg-onyx-950/50 rounded-2xl p-4 flex items-center gap-4 border border-white/5">
                   <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                      <Flame className="w-5 h-5" />
                   </div>
                   <div>
                      <p className="text-xs text-gray-400 uppercase font-bold">Metabolic Rate</p>
                      <p className="text-lg font-bold text-white">2,450 <span className="text-xs font-normal text-gray-500">kcal/day</span></p>
                   </div>
                   <div className="ml-auto">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                   </div>
                </div>

                <div className="bg-onyx-950/50 rounded-2xl p-4 flex items-center gap-4 border border-white/5">
                   <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                      <Activity className="w-5 h-5" />
                   </div>
                   <div>
                      <p className="text-xs text-gray-400 uppercase font-bold">Sleep Quality</p>
                      <p className="text-lg font-bold text-white">92% <span className="text-xs font-normal text-gray-500">Recovery</span></p>
                   </div>
                </div>

                <div className="h-32 bg-onyx-950/50 rounded-2xl p-4 border border-white/5 relative overflow-hidden">
                   <p className="text-xs text-gray-400 uppercase font-bold mb-2">Fat Loss Trend</p>
                   {/* Fake Graph */}
                   <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end justify-between px-4 pb-4 gap-1">
                      {[40, 35, 32, 28, 25, 20, 18, 15].map((h, i) => (
                         <div key={i} className="w-full bg-brand-600/20 rounded-t-sm" style={{ height: `${h}%` }}>
                            <div className="w-full bg-brand-500 rounded-t-sm" style={{ height: '30%' }}></div>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>

          {/* Floating Pill 1 */}
          <div className="absolute -top-6 -right-6 bg-white text-onyx-950 px-6 py-3 rounded-2xl font-bold shadow-xl flex items-center gap-2 animate-bounce duration-[3000ms]">
             <CheckCircle2 className="w-5 h-5 text-brand-600" />
             <span>12kg Lost</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const BentoMethod = () => {
  return (
    <section id="method" className="py-24 bg-onyx-950 px-6">
       <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
             <SectionHeading>
                Not just a workout plan.<br />
                <span className="text-brand-500">A human operating system.</span>
             </SectionHeading>
             <p className="text-gray-400 text-lg">We rebuild your health stack from the ground up using a four-pillar approach designed for busy professionals.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 auto-rows-[300px]">
             {/* Card 1: Large Span */}
             <div className="md:col-span-2 bg-onyx-900 rounded-3xl p-8 border border-white/5 relative overflow-hidden group hover:border-brand-500/30 transition-all">
                <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Activity className="w-64 h-64" />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                   <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500 mb-6">
                      <LineChart />
                   </div>
                   <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Data-Driven Audits</h3>
                      <p className="text-gray-400 max-w-md">We start with a deep dive. Sleep, stress, nutrition, and movement. We establish a baseline using biometric data, not just "how you feel."</p>
                   </div>
                </div>
             </div>

             {/* Card 2: Tall Vertical */}
             <div className="md:row-span-2 bg-gradient-to-b from-onyx-900 to-onyx-950 rounded-3xl p-8 border border-white/5 relative overflow-hidden group hover:border-brand-500/30 transition-all">
                 <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: 'url(/1abdc8_81efc59bdc634a94bce43ff69cc79e7f~mv2.avif)' }}></div>
                 <div className="relative z-10 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-auto">
                       <Dumbbell />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Hyper-Personalized Programming</h3>
                    <p className="text-gray-400">Whether you're training for Hyrox or just want to fit into your wedding suit, the plan adapts to your schedule. 3 days a week? 6 days? We make it work.</p>
                 </div>
             </div>

             {/* Card 3 */}
             <div className="bg-onyx-900 rounded-3xl p-8 border border-white/5 hover:bg-white/5 transition-colors group">
                 <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
                   <Zap />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">Metabolic Restoration</h3>
                 <p className="text-sm text-gray-400">Eat more to lose more. We repair your metabolism so you don't rebound.</p>
             </div>

             {/* Card 4 */}
             <div className="bg-onyx-900 rounded-3xl p-8 border border-white/5 hover:bg-white/5 transition-colors group">
                 <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6">
                   <Clock />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">24/7 Accountability</h3>
                 <p className="text-sm text-gray-400">Direct WhatsApp access. If you're out for dinner, text us the menu. We'll tell you what to order.</p>
             </div>
          </div>
       </div>
    </section>
  );
};

const FeatureHighlight = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const trainingImages = [
    '/1abdc8_b45028f10a9a456b9cc93c73bb83920d~mv2.avif',
    '/1abdc8_81efc59bdc634a94bce43ff69cc79e7f~mv2.avif',
    '/IMG_8670_PNG.avif'
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trainingImages.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, [trainingImages.length]);

  return (
    <section className="py-24 bg-onyx-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Feature 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="lg:w-1/2">
            <Badge className="bg-brand-900/30 text-brand-400 border border-brand-500/20 mb-6">The Protocol</Badge>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Precision nutrition, <br />simplified.</h3>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              No fad diets. No cutting out carbs. We calculate your exact macronutrient needs based on your daily activity and training load.
            </p>
            <ul className="space-y-4">
              {[
                "Macro-nutrient cycling for performance",
                "Gut health optimization",
                "Sustainable eating for social lives"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 relative">
             {/* Mockup UI */}
             <div className="relative z-10 bg-onyx-900 rounded-3xl border border-white/10 p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-onyx-950 rounded-2xl overflow-hidden aspect-square relative">
                   {/* Fake App Interface */}
                   <div className="absolute top-0 left-0 w-full p-6">
                      <div className="flex justify-between text-gray-400 text-xs font-bold uppercase mb-4">
                        <span>Today's Targets</span>
                        <span>Wed, 24 Oct</span>
                      </div>
                      <div className="space-y-3">
                         <div className="bg-gray-900 rounded-xl p-4 flex items-center justify-between border border-white/5">
                            <div className="flex items-center gap-3">
                               <div className="w-2 h-8 rounded-full bg-blue-500"></div>
                               <div>
                                  <p className="text-white font-bold">Protein</p>
                                  <p className="text-xs text-gray-400">180g / 200g</p>
                               </div>
                            </div>
                            <span className="text-blue-500 font-bold">90%</span>
                         </div>
                         <div className="bg-gray-900 rounded-xl p-4 flex items-center justify-between border border-white/5">
                            <div className="flex items-center gap-3">
                               <div className="w-2 h-8 rounded-full bg-orange-500"></div>
                               <div>
                                  <p className="text-white font-bold">Carbs</p>
                                  <p className="text-xs text-gray-400">220g / 250g</p>
                               </div>
                            </div>
                            <span className="text-orange-500 font-bold">88%</span>
                         </div>
                         <div className="bg-gray-900 rounded-xl p-4 flex items-center justify-between border border-white/5">
                            <div className="flex items-center gap-3">
                               <div className="w-2 h-8 rounded-full bg-yellow-500"></div>
                               <div>
                                  <p className="text-white font-bold">Fats</p>
                                  <p className="text-xs text-gray-400">45g / 60g</p>
                               </div>
                            </div>
                            <span className="text-yellow-500 font-bold">75%</span>
                         </div>
                      </div>
                      
                      <div className="mt-8 bg-brand-600 rounded-xl p-6 text-center">
                         <p className="text-brand-100 text-xs uppercase font-bold mb-1">Daily Caloric Deficit</p>
                         <p className="text-3xl font-bold text-white">-450 <span className="text-sm opacity-70">kcal</span></p>
                      </div>
                   </div>
                </div>
             </div>
             {/* Decorative element */}
             <div className="absolute -inset-4 bg-brand-500/20 blur-3xl rounded-full z-0"></div>
          </div>
        </div>

        {/* Feature 2 (Reversed) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <Badge className="bg-blue-900/30 text-blue-400 border border-blue-500/20 mb-6">The Training</Badge>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Train like an athlete. <br />Look like a pro.</h3>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              We focus on progressive overload and perfect form. Whether it's Hyrox prep or aesthetic bodybuilding, every rep is tracked and optimized.
            </p>
            <button className="text-white font-bold border-b border-brand-500 pb-1 hover:text-brand-500 transition-colors inline-flex items-center gap-2">
              Explore Training Plans <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="relative z-10 bg-onyx-900 rounded-3xl border border-white/10 p-2 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                 <div className="bg-onyx-950 rounded-2xl overflow-hidden aspect-video relative">
                    {/* Slideshow Container */}
                    <div className="relative w-full h-full">
                      {trainingImages.map((image, index) => (
                        <img 
                          key={index}
                          src={image} 
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                            index === currentSlide ? 'opacity-80' : 'opacity-0'
                          }`}
                          alt={`Training ${index + 1}`} 
                        />
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 to-transparent"></div>
                    
                    {/* Slide Indicators */}
                    <div className="absolute top-4 right-4 flex gap-2 z-20">
                      {trainingImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentSlide ? 'bg-brand-500 w-6' : 'bg-white/50'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 z-10">
                       <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-bold">Deadlift 1RM</span>
                          <span className="text-brand-400 font-mono">+15kg</span>
                       </div>
                       <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-brand-500 w-[85%]"></div>
                       </div>
                    </div>
                 </div>
             </div>
             <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full z-0"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <section id="stories" className="py-24 bg-onyx-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Join 200+ high performers.</h2>
            <div className="flex gap-2 mb-8">
               {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-brand-500 fill-brand-500" />)}
            </div>
            <p className="text-xl text-white font-medium italic mb-8">
              "I wasted years on random classes. Scott's programming added structure to my chaos. I'm 40, and I'm in the best shape of my life."
            </p>
            <div className="flex items-center gap-4">
               <img src="/1abdc8_d253d90d518e4b418b65fb2567ee9267~mv2.avif" alt="Client Testimonial" className="w-12 h-12 rounded-full border border-white/20 object-cover" />
               <div>
                  <p className="text-white font-bold">Michael T.</p>
                  <p className="text-gray-500 text-sm">Managing Director</p>
               </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-onyx-950 p-6 rounded-2xl border border-white/5">
                <h3 className="text-3xl font-bold text-white mb-1">100%</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Completion Rate</p>
             </div>
             <div className="bg-onyx-950 p-6 rounded-2xl border border-white/5">
                <h3 className="text-3xl font-bold text-white mb-1">12kg</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Avg Weight Loss</p>
             </div>
             <div className="bg-onyx-950 p-6 rounded-2xl border border-white/5">
                <h3 className="text-3xl font-bold text-white mb-1">50+</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Hyrox Finishers</p>
             </div>
             <div className="bg-onyx-950 p-6 rounded-2xl border border-white/5">
                <h3 className="text-3xl font-bold text-white mb-1">24/7</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Support Access</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { setShowBookingModal } = useModal();
  
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Massive CTA */}
        <div className="mb-24 text-center">
           <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8">
              READY TO <br /><span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-400 to-brand-700">EVOLVE?</span>
           </h2>
           <button 
             onClick={() => setShowBookingModal(true)}
             className="bg-white text-black px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform"
           >
              Book Your Free Strategy Call
           </button>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 border-t border-white/10 pt-16">
           <div className="col-span-2 md:col-span-1">
              <img src="/SJ LOGO.avif" alt="Scott James Performance" className="h-10 w-auto mb-6" />
              <p className="text-gray-500 text-sm">
                 Science-based performance coaching for busy professionals and athletes in Hampshire, West Sussex and worldwide.
              </p>
           </div>
           
           <div>
              <h4 className="text-white font-bold mb-6">Programs</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                 <li className="hover:text-white cursor-pointer transition-colors">Fat Loss Protocol</li>
                 <li className="hover:text-white cursor-pointer transition-colors">Hyrox Prep</li>
                 <li className="hover:text-white cursor-pointer transition-colors">Muscle Gain</li>
                 <li className="hover:text-white cursor-pointer transition-colors">1-1 Coaching</li>
              </ul>
           </div>

           <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                 <li className="hover:text-white cursor-pointer transition-colors">About Scott</li>
                 <li className="hover:text-white cursor-pointer transition-colors">Success Stories</li>
                 <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
                 <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
              </ul>
           </div>

           <div>
              <h4 className="text-white font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                 <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                 <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
              </ul>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-600 uppercase tracking-widest">
           <p>&copy; 2024 Scott James Performance.</p>
           <p>Hampshire / West Sussex</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <ModalContext.Provider value={{ showBookingModal, setShowBookingModal }}>
      <div className="bg-onyx-950 min-h-screen text-white selection:bg-brand-500 selection:text-white">
        <BookingModal />
        <Navbar />
        <Hero />
        <BentoMethod />
        <FeatureHighlight />
        <SocialProof />
        <Footer />
      </div>
    </ModalContext.Provider>
  );
}