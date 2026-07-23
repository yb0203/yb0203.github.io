import { MasterNav } from './components/MasterNav';
import { HeroHeader } from './components/HeroHeader';
import { DivisionAccordion } from './components/DivisionAccordion';
import { SolutionCards } from './components/SolutionCards';
import { ObjectionAccordion } from './components/ObjectionAccordion';
import { PodRealignment } from './components/PodRealignment';
import { MasterUseCaseMatrix } from './components/MasterUseCaseMatrix';

export function App() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#121b18] font-sans antialiased selection:bg-[#c59e5f]/20">
      <MasterNav />
      <HeroHeader />

      <main className="max-w-6xl mx-auto px-4 sm:px-8">
        <DivisionAccordion />
        <SolutionCards />
        <ObjectionAccordion />
        <PodRealignment />
        <MasterUseCaseMatrix />
      </main>

      <footer className="bg-[#121b18] text-white/50 py-12 px-6 sm:px-16 border-t border-white/10 text-xs mt-16">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bold text-white mb-1">Legal Owl AI — US Banking Strategy</div>
            <div>Built natively for on-premise VPC containerization, grounded PDF citation ledgers, and OCC 2011-12 compliance.</div>
          </div>
          <div className="text-right text-white/40">
            <div>Confidential · Internal Strategy Reference</div>
            <div>Synced with yb0203/job-prep</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
