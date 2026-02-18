import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Dumbbell, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  User,
  Heart,
  Target,
  Calendar,
  ChevronDown
} from 'lucide-react';

import {
  HomePage,
  AboutPage,
  FatLossPage,
  PerformancePage,
  OnlineCoachingPage,
  PersonalTrainingPage,
  ResultsPage,
  ResourcesPage,
  ArticlePage,
  StyleGuidePage
} from './pages';

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

// --- Scroll to Top on Route Change ---
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={handleClose}
        style={{ animation: 'fadeIn 0.3s ease-out' }}
      />
      
      <div 
        className="relative bg-gradient-to-b from-onyx-900 to-onyx-950 border border-white/10 rounded-2xl sm:rounded-3xl w-full max-w-lg max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl shadow-brand-500/10"
        style={{ animation: 'slideUp 0.4s ease-out' }}
      >
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
              <span className="text-[10px] sm:text-xs font-bold text-brand-400 uppercase tracking-wider">Quick Application</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-white">Apply for Coaching</h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Step {step} of {totalSteps}</p>
          </div>

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

        <div className="overflow-y-auto max-h-[calc(95vh-200px)] sm:max-h-[calc(90vh-220px)]">
          <div className="p-4 sm:p-8">
            
            {step === 1 && (
              <div className="space-y-4 sm:space-y-5" style={{ animation: 'fadeIn 0.3s ease-out' }}>
                <div className="text-center mb-4 sm:mb-6">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stepColors[0]} flex items-center justify-center`}>
                    {stepIcons[0]}
                  </div>
                  <h4 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">Let's get started</h4>
                  <p className="text-xs sm:text-sm text-gray-400">How can I reach you?</p>
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

            {step === 2 && (
              <div className="space-y-4 sm:space-y-5" style={{ animation: 'fadeIn 0.3s ease-out' }}>
                <div className="text-center mb-4 sm:mb-6">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stepColors[1]} flex items-center justify-center`}>
                    {stepIcons[1]}
                  </div>
                  <h4 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">What is your gender?</h4>
                  <p className="text-xs sm:text-sm text-gray-400">Helps personalise your programme</p>
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
                    { value: 'fat-loss', label: 'Fat Loss', icon: '🔥', desc: 'Lose weight sustainably' },
                    { value: 'muscle-gain', label: 'Build Muscle', icon: '💪', desc: 'Gain strength & size' },
                    { value: 'hyrox', label: 'Hyrox / Performance', icon: '🏆', desc: 'Competition ready' },
                    { value: 'general', label: 'General Fitness', icon: '⚡', desc: 'Overall health boost' },
                    { value: 'rehabilitation', label: 'Rehabilitation', icon: '🌟', desc: 'Recovery from injury' }
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
                    This helps design a safe, effective programme. All information is confidential.
                  </p>
                </div>
              </div>
            )}

            {step === 6 && (
              <div className="space-y-5 sm:space-y-6" style={{ animation: 'fadeIn 0.3s ease-out' }}>
                <div className="text-center mb-4 sm:mb-6">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stepColors[5]} flex items-center justify-center`}>
                    {stepIcons[5]}
                  </div>
                  <h4 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">Final step</h4>
                  <p className="text-xs sm:text-sm text-gray-400">Your availability and commitment</p>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-gray-300 mb-2.5 sm:mb-3 uppercase tracking-wide">
                    How often could you train?
                  </label>
                  <div className="grid grid-cols-1 gap-2 sm:gap-3">
                    {[
                      { value: '2-3 days', label: '2-3 days/week' },
                      { value: '4-5 days', label: '4-5 days/week' },
                      { value: '6+ days', label: '6+ days/week' }
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
                    Ready to invest in coaching?
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'ready', label: "Yes, I'm ready to invest", icon: '✅' },
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

// --- Navbar Component - Refined, kept current structure ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const { setShowBookingModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20 || window.pageYOffset > 20;
      setScrolled(isScrolled);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled || isOpen 
          ? 'bg-onyx-950 backdrop-blur-xl border-b border-white/10 py-4 shadow-lg' 
          : 'py-6'
      }`}
      style={{
        backgroundColor: scrolled || isOpen ? 'rgb(4, 3, 2)' : 'transparent',
        WebkitBackdropFilter: scrolled || isOpen ? 'blur(20px)' : 'none',
        backdropFilter: scrolled || isOpen ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.3)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 z-50 relative">
          <img src="/images/shared/logo.avif" alt="Scott James Performance" className="h-[75px] w-auto" />
        </Link>
        
        <div className="hidden md:flex items-center gap-8 bg-onyx-900/60 p-1.5 pl-6 pr-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {/* Services Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setServicesOpen(!servicesOpen)}
              className="text-[11px] font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest flex items-center gap-1"
            >
              Services <ChevronDown className={`w-3 h-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {servicesOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setServicesOpen(false)}
                />
                <div className="absolute top-full left-0 mt-4 w-64 bg-onyx-900 border border-white/10 rounded-2xl p-2 shadow-xl z-50">
                  <Link to="/fat-loss" className="block px-4 py-3 rounded-xl hover:bg-white/5 transition-colors">
                    <p className="text-white font-medium text-sm">Fat Loss Coaching</p>
                    <p className="text-gray-500 text-xs">Sustainable weight loss</p>
                  </Link>
                  <Link to="/performance" className="block px-4 py-3 rounded-xl hover:bg-white/5 transition-colors">
                    <p className="text-white font-medium text-sm">Performance Coaching</p>
                    <p className="text-gray-500 text-xs">Hyrox & competition prep</p>
                  </Link>
                  <Link to="/online-coaching" className="block px-4 py-3 rounded-xl hover:bg-white/5 transition-colors">
                    <p className="text-white font-medium text-sm">Online Coaching</p>
                    <p className="text-gray-500 text-xs">Remote support worldwide</p>
                  </Link>
                  <Link to="/personal-training" className="block px-4 py-3 rounded-xl hover:bg-white/5 transition-colors">
                    <p className="text-white font-medium text-sm">Personal Training</p>
                    <p className="text-gray-500 text-xs">1:1 in Hampshire & West Sussex</p>
                  </Link>
                </div>
              </>
            )}
          </div>
          
          <Link to="/about" className="text-[11px] font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest">About</Link>
          <Link to="/results" className="text-[11px] font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest">Results</Link>
          <Link to="/resources" className="text-[11px] font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest mr-4">Resources</Link>
          <button 
            onClick={() => setShowBookingModal(true)}
            className="bg-white text-onyx-950 px-5 py-2.5 text-[11px] font-medium rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 uppercase tracking-widest"
          >
            Apply <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white relative p-2 hover:bg-white/10 rounded-lg transition-colors"
          style={{ zIndex: 120 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[110] flex flex-col justify-center items-center gap-6 p-6 md:hidden overflow-y-auto"
          style={{
            backgroundColor: 'rgb(4, 3, 2)',
            minHeight: '100dvh'
          }}
        >
          <Link to="/fat-loss" className="text-xl font-light text-white hover:text-brand-400 transition-colors">Fat Loss</Link>
          <Link to="/performance" className="text-xl font-light text-white hover:text-brand-400 transition-colors">Performance</Link>
          <Link to="/online-coaching" className="text-xl font-light text-white hover:text-brand-400 transition-colors">Online Coaching</Link>
          <Link to="/personal-training" className="text-xl font-light text-white hover:text-brand-400 transition-colors">Personal Training</Link>
          <div className="w-16 h-px bg-white/10 my-2" />
          <Link to="/about" className="text-xl font-light text-white hover:text-brand-400 transition-colors">About</Link>
          <Link to="/results" className="text-xl font-light text-white hover:text-brand-400 transition-colors">Results</Link>
          <Link to="/resources" className="text-xl font-light text-white hover:text-brand-400 transition-colors">Resources</Link>
          <button 
            onClick={() => setShowBookingModal(true)}
            className="bg-white text-onyx-950 px-8 py-4 text-lg font-medium rounded-full w-full max-w-xs text-center mt-4 hover:bg-gray-100 transition-colors"
          >
            Apply for Coaching
          </button>
        </div>
      )}
    </nav>
  );
};

// --- Footer Component - Refined, comprehensive ---
const Footer = () => {
  const { setShowBookingModal } = useModal();
  
  return (
    <footer className="bg-black pt-28 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 border-t border-white/10 pt-16">
           <div className="col-span-2 md:col-span-1">
              <img src="/images/shared/logo.avif" alt="Scott James Performance" className="h-10 w-auto mb-6" />
              <p className="text-gray-500 text-sm leading-relaxed">
                 Sustainable coaching for fat loss and performance. Hampshire, West Sussex and worldwide.
              </p>
           </div>
           
           <div>
              <h4 className="text-white font-medium mb-6">Services</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                 <li><Link to="/fat-loss" className="hover:text-white transition-colors">Fat Loss Coaching</Link></li>
                 <li><Link to="/performance" className="hover:text-white transition-colors">Performance Coaching</Link></li>
                 <li><Link to="/online-coaching" className="hover:text-white transition-colors">Online Coaching</Link></li>
                 <li><Link to="/personal-training" className="hover:text-white transition-colors">Personal Training</Link></li>
              </ul>
           </div>

           <div>
              <h4 className="text-white font-medium mb-6">Company</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                 <li><Link to="/about" className="hover:text-white transition-colors">About Scott</Link></li>
                 <li><Link to="/results" className="hover:text-white transition-colors">Results</Link></li>
                 <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                 <li><button onClick={() => setShowBookingModal(true)} className="hover:text-white transition-colors">Apply</button></li>
              </ul>
           </div>

           <div>
              <h4 className="text-white font-medium mb-6">Legal</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                 <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                 <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
              </ul>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-600 uppercase tracking-widest">
           <p>&copy; 2025 Scott James Performance.</p>
           <p>Hampshire / West Sussex</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---
export default function App() {
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleApply = () => {
    setShowBookingModal(true);
  };

  return (
    <ModalContext.Provider value={{ showBookingModal, setShowBookingModal }}>
      <Router>
        <ScrollToTop />
        <div className="bg-onyx-950 min-h-screen text-white selection:bg-brand-500 selection:text-white">
          <BookingModal />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage onApply={handleApply} />} />
            <Route path="/about" element={<AboutPage onApply={handleApply} />} />
            <Route path="/fat-loss" element={<FatLossPage onApply={handleApply} />} />
            <Route path="/performance" element={<PerformancePage onApply={handleApply} />} />
            <Route path="/online-coaching" element={<OnlineCoachingPage onApply={handleApply} />} />
            <Route path="/personal-training" element={<PersonalTrainingPage onApply={handleApply} />} />
            <Route path="/results" element={<ResultsPage onApply={handleApply} />} />
            <Route path="/resources" element={<ResourcesPage onApply={handleApply} />} />
            <Route path="/resources/:slug" element={<ArticlePage onApply={handleApply} />} />
            <Route path="/style-guide" element={<StyleGuidePage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ModalContext.Provider>
  );
}
