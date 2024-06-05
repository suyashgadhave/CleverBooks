import React from 'react';
import HeroSection from './components/HeroSection';
import KeyProblemsSection from './components/KeyProblemsSection';
import KeyMetricsSection from './components/KeyMetricsSection';
import ReviewsSection from './components/ReviewsSection';
import ProblemTargetSection from './components/ProblemTargetSection';
import CTASection from './components/CTASection';
import FooterSection from './components/FooterSection';
import FoundersSection from './components/FoundersSection';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="h-full">
      <Navbar/>
      <HeroSection />
      <KeyProblemsSection />
      <KeyMetricsSection />
      <ReviewsSection />
      <FoundersSection/>
      <ProblemTargetSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default App;
