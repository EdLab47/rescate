import React from 'react';
import { Hero } from './components/Hero';
import { Rules } from './components/Rules';
import { Steps } from './components/Steps';
import { SlideGuide } from './components/SlideGuide';
import { Checklist } from './components/Checklist';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      <Hero />
      <main>
        <Rules />
        <Steps />
        <SlideGuide />
        <Checklist />
      </main>
      <Footer />
    </div>
  );
}

export default App;